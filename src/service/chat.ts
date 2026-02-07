/**
 * 通用 AI 聊天服务
 * 保留多 AI 服务支持、流式响应 (SSE)、会话能力
 * 移除了表单组件相关逻辑
 */

import axios from 'axios';
import { generateSessionId } from '../utils/index.js';
import { AgentMessage, AgentType } from './agent/index.js';
import { ToolRegistry } from './tools.js';
import { AgentManager } from './agent-manager.js';
import { MessageProcessor } from './message-processor.js';
import { PromptBuilder } from './prompt-builder.js';
import type { ChatRequest, OpenAIMessage, OpenAIChatStreamChunk } from '../types/index.js';

export default class Chat {
  private toolRegistry: ToolRegistry;
  private agentManager: AgentManager;
  private messageProcessor: MessageProcessor;
  private promptBuilder: PromptBuilder;

  constructor() {
    this.toolRegistry = new ToolRegistry();
    this.agentManager = new AgentManager();
    this.promptBuilder = new PromptBuilder();
    this.messageProcessor = new MessageProcessor(
      this.toolRegistry,
      this.agentManager,
    );
  }

  /**
   * 初始化服务
   */
  async initialize(): Promise<void> {}

  /**
   * 生成 OpenAI 兼容的响应 ID
   */
  private generateOpenAIId(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 15);
    return `chatcmpl-${timestamp}-${random}`;
  }

  /**
   * 将 OpenAI 消息格式转换为 Agent 格式
   */
  private convertToAgentMessages(messages: OpenAIMessage[]): AgentMessage[] {
    return messages.map((msg) => ({
      role: msg.role,
      content: msg.content,
      tool_call_id: msg.tool_call_id,
      tool_calls: msg.tool_calls,
    }));
  }

  /**
   * 生成 OpenAI 兼容的流式响应块
   */
  generateStreamChunk(
    content: string,
    isFirst: boolean = false,
    isLast: boolean = false,
    model: string = 'deepseek-chat',
    usage: any = null,
  ): string {
    const chunk: OpenAIChatStreamChunk = {
      id: this.generateOpenAIId(),
      object: 'chat.completion.chunk',
      created: Math.floor(Date.now() / 1000),
      usage: usage || null,
      choices: [
        {
          index: 0,
          delta: isFirst ? { role: 'assistant', content } : { content },
          finish_reason: isLast ? 'stop' : null,
        },
      ],
    };

    return `data: ${JSON.stringify(chunk)}\n\n`;
  }

  /**
   * 关闭服务
   */
  async shutdown(): Promise<void> {}

  /**
   * OpenAI 格式的流式聊天接口
   */
  async *chatStream(
    request: ChatRequest,
    apiKey: string,
    signal: AbortSignal,
  ): AsyncGenerator<string | { content: string; usage?: any }, void, unknown> {
    try {
      // 从请求中获取 Agent 类型，默认为 deepseek
      const agentType = (request.agent || 'deepseek') as AgentType;
      console.log(`🤖 使用 Agent: ${agentType}`);

      // 生成会话 ID
      const currentSessionId = generateSessionId();
      console.log('📋 会话 ID:', currentSessionId);

      // 动态获取 MCP 工具
      const tools = await this.messageProcessor.getMCPTools(request.ui);

      // 构建消息数组
      const messages = this.convertToAgentMessages(request.messages);

      // 处理图片 OCR（如果有）
      if (request.images && request.images.length > 0) {
        console.log(`📸 检测到 ${request.images.length} 张图片，开始 OCR 识别...`);
        const ocrText = await this.messageProcessor.processUserMessageImages({
          role: 'user',
          content: messages.filter(m => m.role === 'user').pop()?.content || '',
          images: request.images,
        });
        
        // 更新最后一条用户消息的内容
        const lastUserMsg = messages.filter(m => m.role === 'user').pop();
        if (lastUserMsg) {
          lastUserMsg.content = ocrText;
        }
        console.log('✅ OCR 识别完成');
      }

      // 如果没有系统消息，添加系统提示词
      const hasSystemMessage = messages.some((msg) => msg.role === 'system');
      if (!hasSystemMessage) {
        const enhancedSystemPrompt = this.promptBuilder.buildSystemPrompt(
          currentSessionId,
          request.context,
        );
        messages.unshift({
          role: 'system',
          content: enhancedSystemPrompt,
        });
        console.log(`✅ 使用系统提示词`);
      }

      console.log('🔑 使用 API 密钥:', apiKey ? `${apiKey.substring(0, 10)}...` : '未提供');

      // 调用流式聊天
      yield* this.messageProcessor.processChatStream(
        messages,
        apiKey,
        request.model,
        tools,
        agentType,
        request.context || {},
        1,
        currentSessionId,
        signal,
        request.ui,
      );

      console.log('📋 会话结束 ID:', currentSessionId);
    } catch (error: any) {
      console.error('❌ API 服务错误:', error.name);

      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const statusText = error.response?.statusText;
        const responseData = error.response?.data;
        const requestUrl = error.config?.url;
        const requestMethod = error.config?.method?.toUpperCase();

        let errorMessage = '';
        if (status === 401) {
          errorMessage = `\n❌ API 认证失败 (401): 请检查 API 密钥是否正确\n`;
        } else if (status === 429) {
          errorMessage = `\n❌ API 请求频率限制 (429): 请稍后再试\n`;
        } else if (status === 400) {
          const detailMessage = responseData?.error?.message || responseData?.message || '请求参数错误';
          errorMessage = `\n❌ API 请求错误 (400): ${detailMessage}\n`;
        } else if (status === 500) {
          errorMessage = `\n❌ 服务器内部错误 (500): 服务器出现问题\n`;
        } else {
          const detailMessage = responseData?.error?.message || responseData?.message || error.message;
          errorMessage = `\n❌ API 错误 (${status}): ${detailMessage}\n`;
        }

        yield errorMessage;
      } else {
        const errorMessage = error instanceof Error ? error.message : String(error);
        yield `\n❌ 系统错误: ${errorMessage}\n`;
      }
    }
  }
}
