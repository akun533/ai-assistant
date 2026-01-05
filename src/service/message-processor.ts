import axios from 'axios';
import { ComponentRegistry } from '../core/component-registry.js';
import { FormRuleGenerator } from '../core/form-rule-generator.js';
import { AgentManager } from './agent-manager.js';
import { AgentMessage, AgentRequest, AgentTool, AgentType } from './agent/index.js';
import { ToolRegistry } from './tools.js';
import type { ToolArgs } from '../types/index.js';
import { ChatRequest } from './chat.js';

/**
 * 消息处理器
 * 负责消息流的处理、工具调用、递归处理等核心逻辑
 */
export class MessageProcessor {
  private toolRegistry: ToolRegistry;
  private formGenerator: FormRuleGenerator;
  private componentRegistry: ComponentRegistry;
  private agentManager: AgentManager;

  constructor(
    toolRegistry: ToolRegistry,
    formGenerator: FormRuleGenerator,
    componentRegistry: ComponentRegistry,
    agentManager: AgentManager,
  ) {
    this.toolRegistry = toolRegistry;
    this.formGenerator = formGenerator;
    this.componentRegistry = componentRegistry;
    this.agentManager = agentManager;
  }

  /**
   * 动态获取 MCP 工具定义
   */
  async getMCPTools(): Promise<AgentTool[]> {
    try {
      // 直接从 ToolRegistry 获取完整的工具定义
      const mcpTools = this.toolRegistry.getAllToolDefinitions();
      if (mcpTools.length === 0) {
        return [];
      }

      // 将 MCP 工具转换为 DeepSeek 工具格式
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
  private getToolTitle(name: string): string | undefined {
    const tools = this.toolRegistry.getAllToolDefinitions();
    for (const tool of tools) {
      if (tool.name === name) {
        return tool.title;
      }
    }
  }

  /**
   * 处理工具调用
   */
  private async handleToolCall(toolName: string, arguments_: any, context: Record<string, any>): Promise<any> {
    try {
      const handler = this.toolRegistry.getToolHandler(toolName);
      if (!handler) {
        throw new Error(`未知的工具: ${toolName}`);
      }

      const result = await handler(arguments_ as ToolArgs, {
        formGenerator: this.formGenerator,
        componentRegistry: this.componentRegistry,
        context,
      });

      return {
        data: result.content,
      };
    } catch (error) {
      console.error(`工具调用失败 ${toolName}:`, error);
      throw error;
    }
  }

  /**
   * 递归处理聊天流，支持工具调用和连接状态检查
   */
  async *processChatStream(
    messages: AgentMessage[],
    apiKey: string,
    model: string,
    tools: AgentTool[],
    agentType: AgentType,
    maxDepth: number = 1,
    context: Record<string, any>,
    sessionId?: string,
    signal?: AbortSignal,
  ): AsyncGenerator<string | { content: string; usage?: any }, void, unknown> {
    // 获取或创建 agent
    const agent = this.agentManager.getAgent(agentType, apiKey, model);

    // 构建 Agent 请求
    const agentRequest: AgentRequest = {
      model,
      messages,
      stream: true,
      stream_options: {
        include_usage: true,
      },
      temperature: 0.2,
      tool_stream: true,
      parallel_tool_calls: true,
      max_tokens: 4000,
      tools: tools,
      tool_choice: 'auto',
    };

    console.log(`🔄 发送请求 (深度: ${maxDepth})，消息数量:`, messages.length);

    let response;
    try {
      response = await agent.chat(agentRequest, signal);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const statusText = error.response?.statusText;
        const requestUrl = error.config?.url;
        const requestMethod = error.config?.method?.toUpperCase();

        console.error('❌ API 请求失败:');
        console.error(`  状态码: ${status} ${statusText || ''}`);
        console.error(`  请求: ${requestMethod} ${requestUrl}`);
      } else {
        console.error('❌ 网络请求异常:', error);
      }
      throw error;
    }

    // 处理流式响应
    let buffer = '';
    const conversationMessages: AgentMessage[] = [...messages];
    const currentMessage: AgentMessage = { role: 'assistant', content: '' };
    const toolCalls: any[] = [];

    for await (const chunk of response) {
      buffer += chunk.toString();
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data === '[DONE]') {
            // 处理工具调用
            if (toolCalls.length > 0) {
              yield `\n`;
              // 首先将 assistant 的响应（包含工具调用）添加到对话历史中
              if (currentMessage.content || toolCalls.length > 0) {
                conversationMessages.push({
                  role: 'assistant',
                  content: currentMessage.content,
                  tool_calls: toolCalls,
                });
              }

              // 为每个工具调用生成执行中的提示
              // 执行工具调用
              for (const toolCall of toolCalls) {
                console.log(`## 调用: ${toolCall.function.name}`, toolCall.function.arguments);
                try {
                  const toolResult = await this.handleToolCall(
                    toolCall.function.name,
                    { ...JSON.parse(toolCall.function.arguments), sessionId },
                    context,
                  );
                  const title = this.getToolTitle(toolCall.function.name);
                  if (title) {
                    yield`[FC_TOOL]{"title":"${title}","id":"${toolCall.id}","status":"end"}`;
                  }
                  console.log(`${toolResult.data[0].text?.slice(0,100)}...`);
                  conversationMessages.push({
                    role: 'tool',
                    content: toolResult.data[0].text || '执行完毕',
                    tool_call_id: toolCall.id,
                  });
                  if (toolResult.data[0]?.answer) {
                    const chats = Array.isArray(toolResult.data[0]?.answer) ? toolResult.data[0]?.answer : [toolResult.data[0]?.answer];
                    for (const chat of chats) {
                      yield`\n${chat}\n`;
                    }
                  }
                  if (toolResult.data[0]?.end) {
                    return;
                  }
                } catch (error) {}
              }

              // 递归调用，继续传递工具和连接检查函数，但增加深度限制
              if (maxDepth < 6) {
                // 防止无限递归
                yield* this.processChatStream(
                  conversationMessages,
                  apiKey,
                  model,
                  tools,
                  agentType,
                  maxDepth + 1,
                  context,
                  sessionId,
                  signal,
                );
              } else {
                console.log(`达到最大递归深度 (${maxDepth})，停止递归`);
                yield '\n达到最大处理深度，请重新开始对话\n';
              }
            } else {
              // 没有工具调用时，将 assistant 的响应添加到对话历史中
              if (currentMessage.content) {
                conversationMessages.push({
                  role: 'assistant',
                  content: currentMessage.content,
                });
              }
            }
            return;
          }

          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices?.[0]?.delta?.content;
            const deltaToolCalls = parsed.choices?.[0]?.delta?.tool_calls;

            if (content) {
              currentMessage.content += content;
              // 如果有 usage，一起返回
              if (parsed.usage) {
                yield { content, usage: parsed.usage };
              } else {
                yield content;
              }
            } else if (parsed.usage) {
              // 只有 usage 没有 content 时也要返回
              yield { content: '', usage: parsed.usage };
            }

            // 收集工具调用
            if (deltaToolCalls) {
              for (const deltaToolCall of deltaToolCalls) {
                if (deltaToolCall.index !== undefined) {
                  if (!toolCalls[deltaToolCall.index]) {
                    toolCalls[deltaToolCall.index] = {
                      id: deltaToolCall.id,
                      type: deltaToolCall.type,
                      function: { name: '', arguments: '' },
                    };
                  }

                  if (deltaToolCall.function?.name) {
                    toolCalls[deltaToolCall.index].function.name += deltaToolCall.function.name;
                    const title = this.getToolTitle(deltaToolCall.function.name);
                    if (title) {
                      yield `[FC_TOOL]{"title":"${title}","id":"${deltaToolCall.id}","status":"loading"}`;
                    }
                  }

                  if (deltaToolCall.function?.arguments) {
                    toolCalls[deltaToolCall.index].function.arguments += deltaToolCall.function.arguments;
                  }
                }
              }
            }
          } catch (error) {
            // 忽略解析错误
          }
        }
      }
    }
  }

  /**
   * Dify 聊天接口, 递归处理聊天流，支持工具调用和连接状态检查
   */
  async *processDifyChatStream(
    messages: AgentMessage[],
    apiKey: string,
    request: ChatRequest,
    tools: AgentTool[],
    agentType: AgentType,
    maxDepth: number = 1,
    sessionId?: string,
    signal?: AbortSignal,
  ): AsyncGenerator<string | { content: string; usage?: any }, void, unknown> {
    // 常量定义
    const MAX_RECURSION_DEPTH = 6;
    const FUNCTION_CALL_MARKERS = '◆';

    // 获取或创建 agent
    const agent = this.agentManager.getAgent(agentType, apiKey, request.model);
    const lastMessage = messages[messages.length - 1];
    // 构建 Agent 请求
    const agentRequest: AgentRequest = {
      query: lastMessage?.content,
      response_mode: 'streaming',
      conversation_id: request.conversation_id, // 使用实例属性
      user: 'user',
      inputs: {},
      files: [],
      auto_generate_name: true,
    };

    if (!agentRequest.conversation_id) {
      // 获取系统提示词
      const systemPrompt = messages.find((message) => message.role === 'system');

      agentRequest.query = `${systemPrompt?.content} \n --- \n 用户请求：${lastMessage.content?.slice(0,100)}......`;
    } else {
      agentRequest.query = lastMessage.content;
    }
    console.log(`🔄 发送用户请求 (深度: ${maxDepth})，消息内容:`, lastMessage.content);

    // 辅助函数：安全地解析函数调用JSON
    const parseFunctionCalls = (funcJson: string): any[] => {
      try {
        // 移除标记符并解析JSON
        let cleanJson = funcJson.replaceAll(FUNCTION_CALL_MARKERS, '');
        if (cleanJson.startsWith('```json')) {
          cleanJson = cleanJson.slice(7, -3);
        }
        if (cleanJson.startsWith('```')) {
          cleanJson = cleanJson.slice(3, -3);
        }
        if (!cleanJson.trim()) return [];
        console.log('解析的函数调用JSON:', cleanJson);
        return JSON.parse(cleanJson.trim());
      } catch (error) {
        console.warn('Failed to parse function calls:', error);
        return [];
      }
    };

    // 辅助函数：发送工具状态更新
    const sendToolStatus = (toolName: string, sessionId: string, status: string) => {
      const title = this.getToolTitle(toolName);
      if (title) {
        return `[FC_TOOL]{"title":"${title}","id":"${sessionId}","status":"${status}"}`;
      }
      return null;
    };

    let response;
    try {
      response = await agent.chat(agentRequest, signal);
    } catch (error) {
      console.error('❌ 用户请求失败:', error);
      throw error;
    }

    // 处理流式响应
    let buffer = '';
    const conversationMessages: AgentMessage[] = [...messages];
    const currentMessage: AgentMessage = { role: 'assistant', content: '' };
    let toolCalls: any[] = [];
    let funcJsonStart: boolean = false;
    let funcJson = '';
    let pushConversationId: boolean = false;

    for await (const chunk of response) {
      buffer += chunk.toString();
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);

          try {
            const parsed = JSON.parse(data);

            request.conversation_id = parsed.conversation_id;


            if (parsed.event === 'message_end') {
              funcJsonStart = false;

              try {
                // 收集工具调用
                if (funcJson) {
                  const tempToolCalls = parseFunctionCalls(funcJson);
                  for (const tempToolCall of tempToolCalls) {
                    const statusMessage = sendToolStatus(tempToolCall.name, tempToolCall.arguments?.sessionId, 'end');
                    if (statusMessage) {
                      yield statusMessage;
                    }
                    toolCalls.push(tempToolCall);
                  }
                  funcJson = '';
                }
              } catch (e) {
                console.warn('Error processing function calls:', e);
              }

              // 处理工具调用
              if (toolCalls.length > 0) {
                yield `\n`;
                // 首先将 assistant 的响应（包含工具调用）添加到对话历史中
                if (currentMessage.content || toolCalls.length > 0) {
                  conversationMessages.push({
                    role: 'assistant',
                    content: currentMessage.content,
                    tool_calls: toolCalls,
                  });
                }

                // 为每个工具调用生成执行中的提示
                // 执行工具调用
                for (const toolCall of toolCalls) {
                  console.log(`## 调用: ${toolCall.name}`, toolCall.arguments);
                  try {
                    const toolResult = await this.handleToolCall(
                      toolCall.name,
                      { ...(toolCall.arguments || {}), sessionId },
                      request.context,
                    );

                    const statusMessage = sendToolStatus(toolCall.name, toolCall.arguments?.sessionId, 'end');
                    if (statusMessage) {
                      yield statusMessage;
                    }

                    conversationMessages.push({
                      role: 'tool',
                      content: toolResult.data[0]?.text || '执行完毕',
                      tool_call_id: toolCall.arguments?.sessionId,
                    });

                    if (toolResult.data[0]?.answer) {
                      const chats = Array.isArray(toolResult.data[0]?.answer) ? toolResult.data[0]?.answer : [toolResult.data[0]?.answer];
                      for (const chat of chats) {
                        yield`\n${chat}\n`;
                      }
                    }

                    if (toolResult.data[0]?.end) {
                      return;
                    }
                  } catch (error) {
                    console.error(`工具调用失败: ${toolCall.name}`, error);
                  }
                }

                toolCalls = [];
                // 递归调用，继续传递工具和连接检查函数，但增加深度限制
                if (maxDepth < MAX_RECURSION_DEPTH) {
                  // 防止无限递归
                  yield* this.processDifyChatStream(
                    conversationMessages,
                    apiKey,
                    request,
                    tools,
                    agentType,
                    maxDepth + 1,
                    sessionId,
                    signal,
                  );
                } else {
                  console.log(`达到最大递归深度 (${maxDepth})，停止递归`);
                  yield '\n达到最大处理深度，请重新开始对话\n';
                }
              } else {
                // 没有工具调用时，将 assistant 的响应添加到对话历史中
                if (currentMessage.content) {
                  conversationMessages.push({
                    role: 'assistant',
                    content: currentMessage.content,
                  });
                }
              }
              return;
            }

            const content = parsed.answer;

            if (content && [FUNCTION_CALL_MARKERS, `${FUNCTION_CALL_MARKERS}${FUNCTION_CALL_MARKERS}`].includes(content.trim()) || funcJsonStart) {
              funcJsonStart = true;
              funcJson += content || '';
            } else if (content) {
              currentMessage.content += content;
              // 如果有 usage，一起返回
              if (parsed.usage) {
                yield { content, usage: parsed.usage };
              } else {
                yield content;
              }
            } else if (parsed.usage) {
              // 只有 usage 没有 content 时也要返回
              yield { content: '', usage: parsed.usage };
            }
          } catch (error) {
            // 记录解析错误以便调试
            console.warn('解析响应数据时出错:', error, '原始数据:', data);
          }
        }
      }


      if (!agentRequest.conversation_id && !pushConversationId) {
        pushConversationId = true;
        yield`[conversation_id=${request.conversation_id}]`;
      }
    }
  }
}
