import { AgentConfig, BaseAgent, AgentRequest } from './base.js';

export class DifyAgent extends BaseAgent {
  constructor(apiKey: string, model: string = 'dify-chat') {
    const config: AgentConfig = {
      baseUrl: 'http://172.20.23.155/v1',
      apiKey,
      model,
    };
    super(config);
  }

  protected getAuthHeader(apiKey: string): string {
    return `Bearer ${apiKey}`;
  }

  protected getEndpoint(): string {
    return '/chat-messages';
  }
}
