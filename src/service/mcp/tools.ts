/**
 * MCP 工具注册服务
 * 提供通用工具注册和管理功能
 */

import type { ToolDefinition, ToolHandler, ToolRegistration } from '../../types';
import { ToolRegistryCore } from './component-registry.js';

export class ToolRegistry {
  private registry: ToolRegistryCore;

  constructor() {
    this.registry = new ToolRegistryCore();
  }

  /**
   * 注册工具
   */
  registerTool(registration: ToolRegistration) {
    this.registry.registerTool(registration.definition.name, registration);
  }

  /**
   * 批量注册工具
   */
  registerTools(registrations: ToolRegistration[]) {
    this.registry.registerTools(registrations);
  }

  /**
   * 为特定 UI 框架注册自定义工具
   */
  registerFrameworkTools(uiFramework: string, registrations: ToolRegistration[]) {
    this.registry.registerFrameworkTools(uiFramework, registrations);
  }

  /**
   * 获取工具处理器
   */
  getToolHandler(name: string, uiFramework?: string): ToolHandler | undefined {
    return this.registry.getToolHandler(name, uiFramework);
  }

  /**
   * 获取所有工具定义
   */
  getAllToolDefinitions(uiFramework?: string): ToolDefinition[] {
    return this.registry.getAllToolDefinitions(uiFramework);
  }

  /**
   * 获取所有工具
   */
  getAllTools(uiFramework?: string): ToolRegistration[] {
    return this.registry.getAllTools(uiFramework);
  }

  /**
   * 检查工具是否存在
   */
  hasTool(name: string, uiFramework?: string): boolean {
    return this.registry.hasTool(name, uiFramework);
  }
}

export default ToolRegistry;
