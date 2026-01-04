import type { ToolRegistration, ToolDefinition, ToolContext, ToolHandler } from '../types';
import { ComponentRegistry } from '../core/component-registry.js';
export * from '../types';

export class ToolRegistry {
  private componentRegistry: ComponentRegistry;

  constructor(componentRegistry: ComponentRegistry) {
    this.componentRegistry = componentRegistry;
  }

  /**
     * 注册工具
     */
  registerTool(registration: ToolRegistration) {
    this.componentRegistry.registerTool(registration);
  }

  registerTools(registrations: ToolRegistration[]) {
    this.componentRegistry.registerTools(registrations);
  }

  /**
     * 获取工具处理器（已包装context）
     */
  getToolHandler(name: string): ToolHandler | undefined {
    return this.componentRegistry.getToolHandler(name);
  }

  /**
     * 获取所有工具定义
     */
  getAllToolDefinitions(): ToolDefinition[] {
    return this.componentRegistry.getAllToolDefinitions();
  }
}
