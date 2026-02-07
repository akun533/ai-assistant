import { AgentType, BaseAgent, createAgent } from '../agent/index.js';

/**
 * Agent管理器
 * 负责Agent的创建、缓存和管理
 */
export class AgentManager {
  private agentCache: Map<string, BaseAgent> = new Map();

  /**
   * 获取或创建 Agent
   */
  getAgent(agentType: AgentType, apiKey: string, model: string): BaseAgent {
    const cacheKey = `${agentType}-${model}`;

    if (!this.agentCache.has(cacheKey)) {
      const agent = createAgent(agentType, apiKey, model);
      this.agentCache.set(cacheKey, agent);
      console.log(`✅ 创建 ${agentType} Agent: ${model}`);
    } else {
      const agent = this.agentCache.get(cacheKey)!;
      agent.updateApiKey(apiKey);
    }

    return this.agentCache.get(cacheKey)!;
  }

  /**
   * 清理所有Agent缓存
   */
  clearCache(): void {
    this.agentCache.clear();
  }

  /**
   * 获取缓存的Agent数量
   */
  getCacheSize(): number {
    return this.agentCache.size;
  }
}
