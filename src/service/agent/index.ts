export type { AgentConfig, AgentMessage, AgentRequest, AgentTool, BaseAgent } from './base.js';
export { DeepSeekAgent } from './deepseek.js';
export { OtherAgent } from './other.js';
export { QwenAgent } from './qwen.js';
export { ZhipuAgent } from './zhipu.js';
export { DifyAgent } from './dify.js';

import { BaseAgent } from './base.js';
import { DifyAgent } from './dify.js';
import { DeepSeekAgent } from './deepseek.js';
import { ZhipuAgent } from './zhipu.js';
import { QwenAgent } from './qwen.js';
import { OtherAgent } from './other.js';

export type AgentType = 'dify' | 'deepseek' | 'zhipu' | 'qwen' | 'other';

export function createAgent(type: AgentType, apiKey: string, model?: string): BaseAgent {
  switch (type) {
    case 'dify':
      return new DifyAgent(apiKey, model);
    case 'deepseek':
      return new DeepSeekAgent(apiKey, model);
    case 'zhipu':
      return new ZhipuAgent(apiKey, model);
    case 'qwen':
      return new QwenAgent(apiKey, model);
    case 'other':
      return new OtherAgent(apiKey, model);
    default:
      throw new Error(`未知的 Agent 类型: ${type}`);
  }
}

