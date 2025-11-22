import { AgentConfig, BaseAgent } from './base.js';

export class QwenAgent extends BaseAgent {
  constructor(apiKey: string, model: string = 'qwen-plus') {
    const config: AgentConfig = {
      baseUrl: 'https://dashscope.aliyuncs.com',
      apiKey,
      model,
    };
    super(config);
  }

  protected getAuthHeader(apiKey: string): string {
    return `Bearer ${apiKey}`;
  }

  protected getEndpoint(): string {
    return '/compatible-mode/v1/chat/completions';
  }
}
