/**
 * 通用类型定义
 * 移除了表单组件相关的类型，保留核心类型
 */

// 工具参数接口
export interface ToolArgs {
  sessionId?: string;
  userInput?: string;
  operationType?: 'create' | 'modify' | 'code' | 'other';
  context?: string;
  analysisDepth?: 'quick' | 'standard' | 'deep';
  uiFramework?: string;
  componentType?: 'all' | 'field' | 'assist' | 'container';
  componentNames?: string[];
  isComplete?: boolean;
  [key: string]: any;
}

// 工具定义
export interface ToolDefinition {
  name: string;
  title?: string;
  description: string;
  private?: boolean;
  inputSchema: {
    type: string;
    properties: Record<string, any>;
    required?: string[];
  };
}

// 工具注册
export interface ToolRegistration {
  definition: ToolDefinition;
  handler: ToolHandler;
}

// 工具处理器类型
export type ToolHandler = (args: ToolArgs, context: Record<string, any>) => Promise<any>;

// 工具上下文
export interface ToolContext {
  context: Record<string, any>;
}

// 聊天请求
export interface ChatRequest {
  model: string;
  ui?: string;
  messages: OpenAIMessage[];
  agent?: string;
  context?: Record<string, any>;
  conversation_id?: string;
  images?: string[]; // 图片 base64 数据
}

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

// OpenAI 兼容的流式响应格式
export interface OpenAIChatStreamChunk {
  id: string;
  object: string;
  created: number;
  model?: string;
  usage?: null | Record<string, any>;
  choices: Array<{
    index: number;
    delta: {
      role?: 'assistant';
      content?: string;
    };
    finish_reason: 'stop' | 'length' | 'function_call' | 'content_filter' | null;
  }>;
}

// Agent 类型
export type AgentType = 'deepseek' | 'zhipu' | 'qwen' | 'other';
