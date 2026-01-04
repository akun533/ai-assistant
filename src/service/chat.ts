import axios from 'axios';
import { ComponentRegistry } from '../core/component-registry.js';
import { FormRuleGenerator } from '../core/form-rule-generator.js';
import { generateSessionId } from '../utils';
import { AgentMessage, AgentType } from './agent';
import { ToolRegistry } from './tools.js';
import { AgentManager } from './agent-manager.js';
import { MessageProcessor } from './message-processor.js';
import { PromptBuilder } from './prompt-builder.js';


// OpenAI 兼容的消息格式
export interface OpenAIMessage {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string;
  tool_call_id?: string;
  tool_calls?: Array<{
    id: string;
    type: 'function';
    function: {
      name: string;
      arguments: string;
    };
  }>;
}

// OpenAI 兼容的请求格式（唯一支持的格式）
export interface ChatRequest {
  model: string;
  ui: string;
  messages: OpenAIMessage[];
  agent?: AgentType;
  form?: {
    rule?: string;
    option?: string;
  };
  context: Record<string, any>;
  agentMessageType: string;
  conversation_id: string
}

// OpenAI 兼容的流式响应格式
export interface OpenAIChatStreamChunk {
  id: string;
  object: 'formCreateAgent';
  created: number;
  model?: string;
  usage?: null | Object;
  choices: Array<{
    index: number;
    delta: {
      role?: 'assistant';
      content?: string;
    };
    finish_reason: 'stop' | 'length' | 'function_call' | 'content_filter' | null;
  }>;
}

export default class Chat {
  private toolRegistry: ToolRegistry;
  private formGenerator: FormRuleGenerator;
  private componentRegistry: ComponentRegistry;
  private agentManager: AgentManager;
  private messageProcessor: MessageProcessor;
  private promptBuilder: PromptBuilder;

  constructor() {
    this.componentRegistry = new ComponentRegistry();
    this.toolRegistry = new ToolRegistry(this.componentRegistry);
    this.formGenerator = new FormRuleGenerator();
    this.agentManager = new AgentManager();
    this.promptBuilder = new PromptBuilder(this.componentRegistry);
    this.messageProcessor = new MessageProcessor(
      this.toolRegistry,
      this.formGenerator,
      this.componentRegistry,
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
    return messages.map(msg => ({
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
      object: 'formCreateAgent',
      created: Math.floor(Date.now() / 1000),
      // model,
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
  ): AsyncGenerator<
    | string
    | {
        content: string;
        usage?: any;
      },
    void,
    unknown
  > {
    try {
      // 从请求中获取 Agent 类型，默认为 deepseek
      const agentType = request.agent || 'deepseek';
      console.log(`🤖 使用 Agent: ${agentType}`);

      // 获取 API 密钥类型 , 默认为 openai, 如果是 dify 则使用 dify
      const agentMessageType = request.agentMessageType || 'openai';

      // 生成会话 ID
      const currentSessionId = generateSessionId();
      console.log('📋 会话 ID:', currentSessionId);

      // 动态获取 MCP 工具
      const tools = await this.messageProcessor.getMCPTools();

      // 构建消息数组
      const messages = this.convertToAgentMessages(request.messages);

      // 如果没有系统消息，添加系统提示词
      const hasSystemMessage = messages.some(msg => msg.role === 'system');
      if (!hasSystemMessage) {
        const version = this.promptBuilder.getUiVersion(request.ui);

        const enhancedSystemPrompt = this.promptBuilder.buildEnhancedSystemPrompt(
          currentSessionId,
          version,
          request.context.form?.rule,
        );
        messages.unshift({
          role: 'system',
          content: enhancedSystemPrompt,
        });
        console.log(`✅ 使用系统提示词文件: ${messages[0].content.substring(0, 30)}...`);
      }

      console.log('🔑 使用 API 密钥:', apiKey ? `${apiKey.substring(0, 10)}...` : '未提供');

      // 根据 agentMessageType 字段进行分流处理
      if (agentMessageType === 'dify') {
        // 使用专门处理 Dify 流式会话的方法
        yield* this.messageProcessor.processDifyChatStream(
          messages,
          apiKey,
          request,
          tools,
          agentType,
          1,
          currentSessionId,
          signal,
        );
      } else {
        // 调用原有的递归处理方法
        yield* this.messageProcessor.processChatStream(
          messages,
          apiKey,
          request.model,
          tools,
          agentType,
          1,
          request.context,
          currentSessionId,
          signal,
        );
      }

      console.log('📋 会话结束 ID:', currentSessionId);
    } catch (error: any) {
      console.error('❌ Api 服务错误:', error.name);

      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const statusText = error.response?.statusText;
        const responseData = error.response?.data;
        const requestUrl = error.config?.url;
        const requestMethod = error.config?.method?.toUpperCase();

        // 详细的错误信息
        console.error('📋 详细错误信息:');
        console.error(`  状态码: ${status} ${statusText || ''}`);
        console.error(`  请求方法: ${requestMethod} ${requestUrl}`);

        // 根据状态码提供具体的错误信息
        let errorMessage = '';
        if (status === 401) {
          errorMessage = `\n❌ API 认证失败 (401): 请检查 API 密钥是否正确\n💡 提示: API 密钥应该以 'sk-' 开头\n`;
        } else if (status === 429) {
          errorMessage = `\n❌ API 请求频率限制 (429): 请稍后再试\n💡 提示: 可能需要等待一段时间后重试\n`;
        } else if (status === 400) {
          const detailMessage = responseData?.error?.message || responseData?.message || '请求参数错误';
          errorMessage = `\n❌ API 请求错误 (400): ${detailMessage}\n💡 提示: 请检查请求参数是否正确\n`;
        } else if (status === 403) {
          errorMessage = `\n❌ API 访问被拒绝 (403): 可能是权限不足或账户问题\n💡 提示: 请检查账户状态和权限设置\n`;
        } else if (status === 404) {
          errorMessage = `\n❌ API 接口不存在 (404): 请检查 API 端点是否正确\n💡 提示: 当前端点: ${requestUrl}\n`;
        } else if (status === 500) {
          errorMessage = `\n❌ 服务器内部错误 (500): 服务器出现问题\n💡 提示: 请稍后重试或联系技术支持\n`;
        } else if (status === 502 || status === 503 || status === 504) {
          errorMessage = `\n❌ 服务不可用 (${status}): 服务暂时不可用\n💡 提示: 请稍后重试\n`;
        } else {
          const detailMessage = responseData?.error?.message || responseData?.message || error.message;
          errorMessage = `\n❌ API 错误 (${status}): ${detailMessage}\n💡 提示: 请检查网络连接和 API 配置\n`;
        }

        yield errorMessage;
      } else {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error('📋 非 Axios 错误:', errorMessage);
        yield `\n❌ 系统错误: ${errorMessage}\n💡 提示: 请检查服务配置和网络连接\n`;
      }
    }
  }
}
