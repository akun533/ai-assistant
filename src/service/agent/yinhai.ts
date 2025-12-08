import { AgentConfig, BaseAgent } from './base.js';

export class YinhaiAgent extends BaseAgent {
  constructor(apiKey: string, model: string = 'yinhai-chat') {
    const config: AgentConfig = {
      baseUrl: 'https://api.deepseek.com',
      apiKey,
      model,
    };
    super(config);
  }

  protected getAuthHeader(apiKey: string): string {
    return `Bearer ${apiKey}`;
  }

  protected getEndpoint(): string {
    return '/v1/chat/completions';
  }
}
