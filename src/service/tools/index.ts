import formTools from './form/index';
import type { ToolRegistration, ToolDefinition, ToolContext, ToolHandler } from './types';
export * from './types';

export class ToolRegistry {
  private tools = new Map<string, ToolRegistration>();

  constructor() {
    this.registerDefaultTools();
  }

  /**
   * 注册默认工具
   */
  private registerDefaultTools() {
    // 注册所有工具
    this.registerTools([
      ...formTools,
    ]);
  }

  /**
   * 注册工具
   */
  registerTool(registration: ToolRegistration) {
    this.tools.set(registration.definition.name, registration);
  }

  registerTools(registrations: ToolRegistration[]) {
    registrations.forEach((registration) => {
      this.registerTool(registration);
    });
  }

  /**
   * 获取工具处理器（已包装context）
   */
  getToolHandler(name: string): ToolHandler | undefined {
    return this.tools.get(name)?.handler;
  }

  /**
   * 获取所有工具定义
   */
  getAllToolDefinitions(): ToolDefinition[] {
    return Array.from(this.tools.values()).map(reg => reg.definition);
  }
}
