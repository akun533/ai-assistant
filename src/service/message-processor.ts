/**
 * 消息处理器
 * 负责消息流的处理、工具调用、递归处理等核心逻辑
 * 移除了表单组件相关逻辑
 */

import { AgentManager } from './agent-manager.js';
import { AgentMessage, AgentTool, AgentType } from './agent/index.js';
import { ToolRegistry } from './tools.js';
import type { ToolArgs } from '../types/index.js';
import { recognizeImage } from './ocr.js';

/**
 * 工具调用结果
 */
interface ToolCallResult {
  role: 'user';
  content: string;
  tool_call_id?: string;
}

/**
 * 解析流式响应
 */
async function* parseStream(response: ReadableStream): AsyncGenerator<string, void> {
  const reader = response.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    buffer += decoder.decode(value, { stream: true });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';

    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const data = line.slice(6);
        if (data === '[DONE]') {
          return;
        }
        try {
          const json = JSON.parse(data);
          const content = json.choices?.[0]?.delta?.content;
          if (content) {
            yield content;
          }
        } catch (e) {
          // 忽略解析错误
        }
      }
    }
  }
}

/**
 * 将 base64 图片数据转为 Buffer
 */
function base64ToBuffer(base64: string): Buffer {
  // 移除 data:image/xxx;base64, 前缀
  const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
  return Buffer.from(base64Data, 'base64');
}

/**
 * 处理图片 OCR 识别
 * @param images 图片 base64 数据数组
 * @returns 识别结果文本
 */
async function processImageOcr(images: string[]): Promise<string> {
  if (!images || images.length === 0) {
    return '';
  }

  console.log(`📸 开始处理 ${images.length} 张图片的 OCR 识别...`);

  const ocrResults: string[] = [];

  for (let i = 0; i < images.length; i++) {
    const imageBase64 = images[i];
    
    try {
      const imageBuffer = base64ToBuffer(imageBase64);
      console.log(`🔍 识别第 ${i + 1}/${images.length} 张图片...`);
      
      const result = await recognizeImage(imageBuffer);
      
      if (result.success && result.text) {
        ocrResults.push(`【图片 ${i + 1}】\n${result.text}`);
        console.log(`✅ 图片 ${i + 1} 识别完成: ${result.text.length} 个字符`);
      } else {
        ocrResults.push(`【图片 ${i + 1}】识别失败或无文字内容`);
        console.log(`⚠️ 图片 ${i + 1} 识别失败或无文字`);
      }
    } catch (error) {
      console.error(`❌ 图片 ${i + 1} OCR 处理错误:`, error);
      ocrResults.push(`【图片 ${i + 1}】OCR 处理出错`);
    }
  }

  return ocrResults.join('\n\n');
}

export class MessageProcessor {
  private toolRegistry: ToolRegistry;
  private agentManager: AgentManager;

  constructor(
    toolRegistry: ToolRegistry,
    agentManager: AgentManager,
  ) {
    this.toolRegistry = toolRegistry;
    this.agentManager = agentManager;
  }

  /**
   * 处理用户消息中的图片（如果有）
   * @param message 用户消息
   * @returns 处理后的消息内容
   */
  async processUserMessageImages(message: AgentMessage): Promise<string> {
    // 从消息中获取图片数据（前端通过 images 字段传递）
    const content = typeof message.content === 'string' ? message.content : '';
    const images = (message as any).images || [];

    if (images.length === 0) {
      return content;
    }

    // 进行 OCR 识别
    const ocrText = await processImageOcr(images);

    if (!ocrText) {
      return content;
    }

    // 将 OCR 结果添加到消息内容中
    if (content.trim()) {
      return `${content}\n\n图片内容识别结果：\n${ocrText}`;
    } else {
      return `请识别图片内容并回答：\n${ocrText}`;
    }
  }

  /**
   * 动态获取 MCP 工具定义
   */
  async getMCPTools(uiFramework?: string): Promise<AgentTool[]> {
    try {
      const mcpTools = this.toolRegistry.getAllToolDefinitions(uiFramework);
      if (mcpTools.length === 0) {
        return [];
      }

      const tools: AgentTool[] = [];

      for (const mcpTool of mcpTools) {
        if (!mcpTool.private) {
          tools.push({
            type: 'function',
            function: {
              name: mcpTool.name,
              description: mcpTool.description || `调用 MCP 工具: ${mcpTool.name}`,
              parameters: {
                type: 'object',
                properties: mcpTool.inputSchema?.properties || {},
                required: mcpTool.inputSchema?.required || [],
                additionalProperties: false,
              },
            },
          });
        }
      }

      console.log(`✅ 成功获取 ${tools.length} 个 MCP 工具定义`);
      return tools;
    } catch (error) {
      console.error('获取 MCP 工具失败:', error);
      return [];
    }
  }

  /**
   * 获取工具标题
   */
  private getToolTitle(name: string, uiFramework?: string): string | undefined {
    const tools = this.toolRegistry.getAllToolDefinitions(uiFramework);
    for (const tool of tools) {
      if (tool.name === name) {
        return tool.title;
      }
    }
  }

  /**
   * 处理工具调用
   */
  private async handleToolCall(
    toolName: string,
    arguments_: any,
    context: Record<string, any>,
    uiFramework?: string,
  ): Promise<ToolCallResult> {
    try {
      const handler = this.toolRegistry.getToolHandler(toolName, uiFramework);
      if (!handler) {
        throw new Error(`未知的工具: ${toolName}`);
      }

      const result = await handler(arguments_ as ToolArgs, {
        context,
      });

      const toolTitle = this.getToolTitle(toolName, uiFramework);

      return {
        role: 'user',
        content: `工具 "${toolTitle || toolName}" 执行结果:\n\n${JSON.stringify(result, null, 2)}`,
        tool_call_id: `call_${toolName}_${Date.now()}`,
      };
    } catch (error: any) {
      console.error(`❌ 工具调用失败: ${toolName}`, error);
      return {
        role: 'user',
        content: `工具 "${toolName}" 执行失败: ${error.message}`,
        tool_call_id: `call_${toolName}_${Date.now()}`,
      };
    }
  }

  /**
   * 处理流式聊天
   */
  async *processChatStream(
    messages: AgentMessage[],
    apiKey: string,
    model: string,
    tools: AgentTool[],
    agentType: AgentType,
    context: Record<string, any>,
    retryCount: number,
    sessionId: string,
    signal: AbortSignal,
    uiFramework?: string,
  ): AsyncGenerator<string, void, unknown> {
    let currentMessages = [...messages];
    let currentRetryCount = retryCount;
    let round = 1;
    const maxRounds = 20;
    const maxRetries = 3;

    // 检查最后一条用户消息是否包含图片，进行 OCR 处理
    const lastMessage = currentMessages[currentMessages.length - 1];
    if (lastMessage && lastMessage.role === 'user') {
      const processedContent = await this.processUserMessageImages(lastMessage);
      if (processedContent !== lastMessage.content) {
        lastMessage.content = processedContent;
        console.log('✅ 图片 OCR 处理完成，已添加到用户消息');
      }
    }

    while (round <= maxRounds) {
      if (signal.aborted) {
        console.log('⛔ 用户取消请求');
        return;
      }

      console.log(`🔄 第 ${round} 轮对话`);

      try {
        const agent = this.agentManager.getAgent(agentType, apiKey, model);
        const response = await agent.chat(
          {
            model: model,
            messages: currentMessages,
            tools: tools,
            stream: true,
          },
          signal,
        );

        if (!response) {
          console.log('⚠️ 空响应，结束对话');
          break;
        }

        let fullContent = '';
        let hasFunctionCall = false;
        let functionCallData: any = null;

        // 解析流式响应
        for await (const chunk of parseStream(response)) {
          fullContent += chunk;
          yield chunk;
        }

        // 检查是否包含函数调用
        try {
          const agent = this.agentManager.getAgent(agentType, apiKey, model);
          // 这里需要从响应中提取函数调用信息
          // 由于是流式响应，我们需要在解析时检测
        } catch (e) {
          // 忽略
        }

        // 如果有函数调用
        if (functionCallData) {
          console.log(`📦 第 ${round} 轮函数调用`);

          for (const toolCall of functionCallData) {
            const functionName = toolCall.function?.name || '';
            const functionArgs = toolCall.function?.arguments
              ? JSON.parse(toolCall.function.arguments)
              : {};

            console.log(`🔧 调用工具: ${functionName}`);

            const toolResult = await this.handleToolCall(
              functionName,
              functionArgs,
              context,
              uiFramework,
            );

            currentMessages.push({
              role: 'assistant',
              content: fullContent,
              tool_calls: [toolCall],
            });

            currentMessages.push(toolResult);
          }

          round++;
          continue;
        }

        // 正常结束
        console.log(`✅ 对话正常结束`);
        return;
      } catch (error: any) {
        console.error(`❌ 第 ${round} 轮对话出错:`, error.message);

        // 检查是否应该重试
        if (
          currentRetryCount < maxRetries &&
          (error.message?.includes('API request failed') ||
            error.message?.includes('connection error') ||
            error.message?.includes('timeout') ||
            error.name === 'AbortError')
        ) {
          currentRetryCount++;
          console.log(`🔄 第 ${currentRetryCount}/${maxRetries} 次重试...`);

          await new Promise((resolve) => setTimeout(resolve, 1000 * currentRetryCount));

          continue;
        }

        if (round >= maxRounds) {
          console.log('⚠️ 达到最大轮次限制，强制结束');
          return;
        }

        if (currentRetryCount >= maxRetries) {
          throw error;
        }

        throw error;
      }
    }

    if (round > maxRounds) {
      console.log('⚠️ 对话达到最大轮次限制');
      return;
    }
  }
}
