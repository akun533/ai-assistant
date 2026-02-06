import { AgentConfig, BaseAgent } from './base.js';

export class ZhipuAgent extends BaseAgent {
  constructor(apiKey: string, model: string = 'glm-4.5') {
    const config: AgentConfig = {
      baseUrl: 'https://open.bigmodel.cn',
      apiKey,
      model,
    };
    super(config);
  }

  protected getAuthHeader(apiKey: string): string {
    return `Bearer ${apiKey}`;
  }

  protected getEndpoint(): string {
    return '/api/paas/v4/chat/completions';
  }
}

