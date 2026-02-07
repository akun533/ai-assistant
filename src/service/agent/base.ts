/**
 * Agent 请求配置
 */
export interface AgentConfig {
    baseUrl: string;
    apiKey: string;
    model?: string;
}

/**
 * Agent 消息格式
 */
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
  images?: string[];
}

/**
 * Agent 工具定义
 */
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

/**
 * Agent 请求参数
 */
export interface AgentRequest {
    model?: string;
    messages?: AgentMessage[];
    stream?: boolean;
    temperature?: number;
    max_tokens?: number;
    tools?: AgentTool[];
    tool_choice?: 'auto' | 'none' | 'required' | { type: 'function'; function: { name: string } };
}

/**
 * 基础 Agent 类
 * 使用 fetch API 处理流式响应，兼容浏览器和 Node.js 环境
 */
export abstract class BaseAgent {
    protected config: AgentConfig;
    protected headers: Record<string, string>;

    constructor(config: AgentConfig) {
        this.config = config;
        this.headers = {
            'Content-Type': 'application/json',
            'Authorization': this.getAuthHeader(config.apiKey),
        };
    }

    protected abstract getAuthHeader(apiKey: string): string;
    protected abstract getEndpoint(): string;

    async chat(request: AgentRequest, signal?: AbortSignal): Promise<ReadableStream | null> {
        const url = `${this.config.baseUrl}${this.getEndpoint()}`;
        
        console.log(`🔄 发送请求到 ${url}`);
        request.messages && console.log(`📝 消息数量: ${request.messages?.length}`);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: this.headers,
                body: JSON.stringify(request),
                signal,
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`❌ API 请求失败: ${response.status} ${response.statusText}`);
                console.error(`❌ 错误详情: ${errorText}`);
                throw new Error(`API 请求失败: ${response.status} ${response.statusText}`);
            }

            // 检查是否是流式响应
            if (!response.body) {
                console.warn('⚠️ 响应体为空');
                return null;
            }

            return response.body;
        } catch (error) {
            if (error instanceof Error && error.name === 'AbortError') {
                throw error;
            }
            console.error('❌ 网络请求异常:', error);
            throw error;
        }
    }

    updateApiKey(apiKey: string): void {
        this.config.apiKey = apiKey;
        this.headers['Authorization'] = this.getAuthHeader(apiKey);
    }

    getModel(): string {
        return this.config.model || 'default-model';
    }
}
