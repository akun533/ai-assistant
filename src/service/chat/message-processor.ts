/**
 * 消息处理器
 * 负责消息流的处理、工具调用（包含 MCP 工具和 Skill 工具）、递归处理等核心逻辑
 */

import { AgentManager } from '../agents/agent-manager.js';
import { AgentMessage, AgentTool, AgentType } from '../agent/index.js';
import { ToolRegistry } from '../mcp/tools.js';
import type { ToolArgs } from '../../types/index.js';
import { recognizeImage } from '../ocr/ocr.js';
import { SkillManager } from '../../skills/skill-manager.js';

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
async function* parseStream(
  response: ReadableStream,
): AsyncGenerator<{ type: 'content' | 'tool_calls'; data: any }, void> {
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

          // 提取文本内容
          const content = json.choices?.[0]?.delta?.content;
          if (content) {
            yield { type: 'content', data: content };
          }

          // 提取工具调用
          const deltaToolCalls = json.choices?.[0]?.delta?.tool_calls;
          if (deltaToolCalls) {
            yield { type: 'tool_calls', data: deltaToolCalls };
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
  const base64Data = base64.replace(/^data:image\/\w+;base64,/, '');
  return Buffer.from(base64Data, 'base64');
}

/**
 * 格式化 OCR 结果，恢复图片布局格式
 */
function formatOcrResult(regions: Array<{text: string, confidence: number, box?: any}>): string {
  if (!regions || regions.length === 0) return '';

  const getCenterY = (box: any) => {
    if (!box) return 0;
    if (Array.isArray(box) && box.length >= 4) {
      return (box[1] + box[5]) / 2;
    }
    return 0;
  };

  const lines = regions.map((item) => ({
    ...item,
    centerY: getCenterY(item.box),
  }));

  lines.sort((a, b) => a.centerY - b.centerY);

  const rowThreshold = 20;
  const rows: Array<typeof lines> = [];
  let currentRow: typeof lines = [];

  for (const item of lines) {
    if (currentRow.length === 0) {
      currentRow.push(item);
    } else {
      const lastItem = currentRow[currentRow.length - 1];
      const yDiff = Math.abs(item.centerY - lastItem.centerY);
      if (yDiff <= rowThreshold) {
        currentRow.push(item);
      } else {
        if (currentRow.length > 0) {
          currentRow.sort((a, b) => {
            const aX = Array.isArray(a.box) ? a.box[0] : 0;
            const bX = Array.isArray(b.box) ? b.box[0] : 0;
            return aX - bX;
          });
          rows.push(currentRow);
        }
        currentRow = [item];
      }
    }
  }

  if (currentRow.length > 0) {
    currentRow.sort((a, b) => {
      const aX = Array.isArray(a.box) ? a.box[0] : 0;
      const bX = Array.isArray(b.box) ? b.box[0] : 0;
      return aX - bX;
    });
    rows.push(currentRow);
  }

  const formattedLines: string[] = [];
  for (let i = 0; i < rows.length; i++) {
    const lineText = rows[i].map(item => item.text).join(' ');
    formattedLines.push(lineText);

    if (i < rows.length - 1) {
      const currentY = rows[i][0].centerY;
      const nextY = rows[i + 1][0].centerY;
      const lineHeight = nextY - currentY;
      const avgHeight = rows.reduce((sum, row) => {
        if (row.length < 2) return sum;
        const width = Array.isArray(row[0].box) ? row[0].box[2] - row[0].box[0] : 0;
        return sum + width / row.length;
      }, 0) / rows.length;

      if (lineHeight > avgHeight * 3) {
        formattedLines.push('');
      }
    }
  }

  return formattedLines.join('\n');
}

/**
 * 处理图片 OCR 识别
 */
async function processImageOcr(images: string[]): Promise<string> {
  if (!images || images.length === 0) {
    return '';
  }

  console.log(`📸 开始处理 ${images.length} 张图片的 OCR 识别...`);

  const ocrResults: string[] = [];

  for (let i = 0; i < images.length; i++) {
    try {
      const imageBuffer = base64ToBuffer(images[i]);
      console.log(`🔍 识别第 ${i + 1}/${images.length} 张图片...`);
      
      const result = await recognizeImage(imageBuffer);
      
      if (result.success && result.regions && result.regions.length > 0) {
        const formattedText = formatOcrResult(result.regions);
        if (formattedText.trim()) {
          ocrResults.push(`【图片 ${i + 1}】\n${formattedText}`);
          console.log(`✅ 图片 ${i + 1} 识别完成`);
        } else {
          ocrResults.push(`【图片 ${i + 1}】识别失败或无文字内容`);
        }
      } else {
        ocrResults.push(`【图片 ${i + 1}】识别失败或无文字内容`);
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
   */
  async processUserMessageImages(message: AgentMessage): Promise<string> {
    const content = typeof message.content === 'string' ? message.content : '';
    const images = (message as any).images || [];

    if (images.length === 0) {
      return content;
    }

    const ocrText = await processImageOcr(images);

    if (!ocrText) {
      return content;
    }

    if (content.trim()) {
      return `${content}\n\n图片内容识别结果：\n${ocrText}`;
    } else {
      return `请识别图片内容并回答：\n${ocrText}`;
    }
  }

  /**
   * 动态获取 MCP 工具定义
   */
  async getMCPTools(): Promise<AgentTool[]> {
    try {
      const mcpTools = this.toolRegistry.getAllToolDefinitions();
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
   * 获取所有工具定义（包含 MCP 工具和 Skill 工具）
   */
  async getAllTools(): Promise<AgentTool[]> {
    const [mcpTools, skillTools] = await Promise.all([
      this.getMCPTools(),
      this.getSkillTools(),
    ]);

    // Skill 工具名称加前缀以区分
    const prefixedSkillTools: AgentTool[] = skillTools.map(tool => ({
      type: 'function',
      function: {
        name: `skill_${tool.function.name}`,
        description: `[Skill] ${tool.function.description}`,
        parameters: {
          type: 'object',
          properties: {
            args: {
              type: 'string',
              description: tool.function.parameters.properties.args?.description || '传递给脚本的参数',
            },
          },
          required: ['args'],
          additionalProperties: false,
        },
      },
    }));

    return [...mcpTools, ...prefixedSkillTools];
  }

  /**
   * 获取 Skill 工具定义
   */
  private async getSkillTools(): Promise<AgentTool[]> {
    try {
      const skillManager = new SkillManager();
      return await skillManager.getSkillTools();
    } catch (error) {
      console.error('获取 Skill 工具失败:', error);
      return [];
    }
  }

  /**
   * 获取工具标题
   */
  private getToolTitle(name: string): string | undefined {
    const tools = this.toolRegistry.getAllToolDefinitions();
    for (const tool of tools) {
      if (tool.name === name) {
        return tool.title;
      }
    }
  }

  /**
   * 检查是否是 Skill 工具调用
   */
  private isSkillTool(toolName: string): boolean {
    return toolName.startsWith('skill_');
  }

  /**
   * 执行 Skill 工具调用
   */
  private async handleSkillToolCall(
    skillName: string,
    args: string,
  ): Promise<ToolCallResult> {
    try {
      const { SkillManager } = await import('../../skills/skill-manager.js');
      const skillManager = new SkillManager();
      
      console.log(`⚡ 执行 Skill: ${skillName} ${args}`);
      
      const result = await skillManager.executeSkill(skillName, args);
      
      if (result.success) {
        return {
          role: 'user',
          content: result.output.trim(),
          tool_call_id: `skill_${skillName}_${Date.now()}`,
        };
      } else {
        return {
          role: 'user',
          content: `Skill 执行失败: ${result.error}`,
          tool_call_id: `skill_${skillName}_${Date.now()}`,
        };
      }
    } catch (error) {
      console.error(`❌ Skill 调用异常:`, error);
      return {
        role: 'user',
        content: `Skill 执行错误: ${error instanceof Error ? error.message : String(error)}`,
        tool_call_id: `skill_${skillName}_${Date.now()}`,
      };
    }
  }

  /**
   * 处理工具调用（支持 MCP 工具和 Skill 工具）
   */
  private async handleToolCall(
    toolName: string,
    arguments_: any,
    context: Record<string, any>,
  ): Promise<ToolCallResult> {
    // 检查是否是 Skill 工具
    if (this.isSkillTool(toolName)) {
      const skillName = toolName.replace('skill_', '');
      const args = arguments_?.args || '';
      return this.handleSkillToolCall(skillName, args);
    }

    // MCP 工具调用
    try {
      const handler = this.toolRegistry.getToolHandler(toolName);
      if (!handler) {
        throw new Error(`未知的工具: ${toolName}`);
      }

      const result = await handler(arguments_ as ToolArgs, {
        context,
      });

      const toolTitle = this.getToolTitle(toolName);

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
   * 处理流式聊天（统一处理 MCP 工具和 Skill 工具）
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
  ): AsyncGenerator<string, void, unknown> {
    let currentMessages = [...messages];
    let currentRetryCount = retryCount;
    let round = 1;
    const maxRounds = 20;
    const maxRetries = 3;

    // 处理图片 OCR
    const lastMessage = currentMessages[currentMessages.length - 1];
    if (lastMessage && lastMessage.role === 'user') {
      const processedContent = await this.processUserMessageImages(lastMessage);
      if (processedContent !== lastMessage.content) {
        lastMessage.content = processedContent;
        console.log('✅ 图片 OCR 处理完成');
      }
    }

    while (round <= maxRounds) {
      if (signal.aborted) {
        console.log('⛔ 用户取消请求');
        return;
      }

      console.log(`🔄 第 ${round} 轮对话，消息数: ${currentMessages.length}`);

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
        const toolCalls: any[] = [];

        // 解析流式响应
        for await (const chunk of parseStream(response)) {
          if (chunk.type === 'content') {
            fullContent += chunk.data;
            yield chunk.data;
          } else if (chunk.type === 'tool_calls') {
            // 收集工具调用片段
            const deltaToolCalls = chunk.data;
            for (const deltaToolCall of deltaToolCalls) {
              const index = deltaToolCall.index;
              
              if (!toolCalls[index]) {
                toolCalls[index] = {
                  id: deltaToolCall.id,
                  type: deltaToolCall.type,
                  function: { name: '', arguments: '' },
                };
              }

              if (deltaToolCall.function?.name) {
                toolCalls[index].function.name += deltaToolCall.function.name;
              }

              if (deltaToolCall.function?.arguments) {
                toolCalls[index].function.arguments += deltaToolCall.function.arguments;
              }
            }
          }
        }

        console.log(`📝 响应长度: ${fullContent.length}, 工具调用: ${toolCalls.length}`);

        // 检查是否有工具调用
        const validToolCalls = toolCalls.filter(tc => tc.function.name);
        
        if (validToolCalls.length > 0) {
          console.log(`📦 检测到 ${validToolCalls.length} 个工具调用`);

          // 添加 assistant 消息（包含工具调用）
          currentMessages.push({
            role: 'assistant',
            content: fullContent,
            tool_calls: validToolCalls,
          });

          // 执行工具调用（统一处理 MCP 和 Skill）
          for (const toolCall of validToolCalls) {
            const functionName = toolCall.function.name;
            const functionArgs = toolCall.function.arguments 
              ? JSON.parse(toolCall.function.arguments) 
              : {};

            console.log(`🔧 调用工具: ${functionName}`);

            const toolResult = await this.handleToolCall(
              functionName,
              functionArgs,
              context,
            );

            currentMessages.push(toolResult);
          }

          round++;
          continue;
        }

        // 正常结束
        currentMessages.push({
          role: 'assistant',
          content: fullContent,
        });
        console.log(`✅ 对话正常结束`);
        return;
      } catch (error: any) {
        console.error(`❌ 第 ${round} 轮对话出错:`, error.message);

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
          console.log('⚠️ 达到最大轮次限制');
          return;
        }

        throw error;
      }
    }

    if (round > maxRounds) {
      console.log('⚠️ 对话达到最大轮次限制');
    }
  }
}
