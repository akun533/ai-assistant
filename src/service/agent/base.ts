import axios, { AxiosInstance } from 'axios';

export interface AgentMessage {
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
    usage?: any;
}

export interface AgentTool {
    type: 'function';
    function: {
        name: string;
        description: string;
        parameters: {
            type: string;
            properties: Record<string, any>;
            required?: string[];
            additionalProperties?: boolean;
        };
    };
}

export interface AgentRequest {
    model?: string;
    messages?: AgentMessage[];
    stream?: boolean;
    tool_stream?: boolean;
    parallel_tool_calls?: boolean;
    stream_options?: Object;
    temperature?: number;
    max_tokens?: number;
    tools?: AgentTool[];
    tool_choice?: 'auto' | 'none' | 'required' | { type: 'function'; function: { name: string } };
    // dify 参数
    response_mode?: 'streaming' | 'blocking';
    conversation_id?: string;
    user?: string;
    inputs?: object;
    query?: string;
    files?: Array<{  }>;
    auto_generate_name?: boolean;
}

export interface AgentConfig {
    baseUrl: string;
    apiKey: string;
    model?: string;
}

export abstract class BaseAgent {
  protected client: AxiosInstance;
  protected config: AgentConfig;

  constructor(config: AgentConfig) {
    this.config = config;
    // 从环境变量获取超时时间，默认 180000ms (3分钟)
    const timeout = parseInt(process.env.AGENT_TIMEOUT || '180000', 10);
    this.client = axios.create({
      baseURL: config.baseUrl,
      timeout,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': this.getAuthHeader(config.apiKey),
      },
    });
  }

  protected abstract getAuthHeader(apiKey: string): string;

  protected abstract getEndpoint(): string;

  async chat(request: AgentRequest, signal?: AbortSignal): Promise<ReadableStream> {
    try {
      console.log(`🔄 发送请求到 ${this.config.baseUrl}${this.getEndpoint()}`);
      request.messages && console.log(`📝 消息数量: ${request.messages?.length}`);

      const response = await this.client.post(this.getEndpoint(), request, {
        responseType: 'stream',
        signal,
      });

      return response.data;
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
  }

  updateApiKey(apiKey: string): void {
    this.config.apiKey = apiKey;
    this.client.defaults.headers['Authorization'] = this.getAuthHeader(apiKey);
  }

  getModel(): string {
    return this.config.model || 'default-model';
  }
}

