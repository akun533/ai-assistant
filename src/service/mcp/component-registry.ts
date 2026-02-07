/**
 * 通用 MCP 工具注册表
 * 移除了表单组件相关逻辑，专注于工具注册和管理
 */
export interface ToolDefinition {
  name: string;
  title?: string;
  description: string;
  private?: boolean;
  inputSchema: {
    type: string;
    properties: Record<string, any>;
    required?: string[];
  };
}

export interface ToolHandler {
  (args: Record<string, any>, context: Record<string, any>): Promise<any>;
}

export interface ToolRegistrationInfo {
  definition: ToolDefinition;
  handler: ToolHandler;
}

export class ToolRegistryCore {
  private tools: Map<string, ToolRegistrationInfo> = new Map();
  private frameworkTools: Map<string, Map<string, ToolRegistrationInfo>> = new Map();

  /**
   * 注册工具
   */
  registerTool(name: string, registration: ToolRegistrationInfo) {
    this.tools.set(name, registration);
  }

  /**
   * 批量注册工具
   */
  registerTools(registrations: ToolRegistrationInfo[]) {
    registrations.forEach((reg) => {
      this.registerTool(reg.definition.name, reg);
    });
  }

  /**
   * 为特定框架注册自定义工具
   */
  registerFrameworkTools(uiFramework: string, registrations: ToolRegistrationInfo[]) {
    if (!this.frameworkTools.has(uiFramework)) {
      this.frameworkTools.set(uiFramework, new Map());
    }
    const frameworkToolsMap = this.frameworkTools.get(uiFramework)!;
    registrations.forEach((reg) => {
      frameworkToolsMap.set(reg.definition.name, reg);
    });
  }

  /**
   * 获取工具处理器
   */
  getToolHandler(name: string, uiFramework?: string): ToolHandler | undefined {
    // 如果指定了框架，优先查找该框架的自定义工具
    if (uiFramework) {
      const frameworkToolsMap = this.frameworkTools.get(uiFramework);
      if (frameworkToolsMap?.has(name)) {
        return frameworkToolsMap.get(name)?.handler;
      }
    }
    // 否则使用公共工具
    return this.tools.get(name)?.handler;
  }

  /**
   * 获取所有工具定义
   */
  getAllToolDefinitions(uiFramework?: string): ToolDefinition[] {
    const toolsMap = new Map<string, ToolDefinition>();

    // 先添加公共工具
    Array.from(this.tools.values()).forEach((reg) => {
      toolsMap.set(reg.definition.name, reg.definition);
    });

    // 如果指定了框架，用该框架的自定义工具覆盖同名公共工具
    if (uiFramework) {
      const frameworkToolsMap = this.frameworkTools.get(uiFramework);
      if (frameworkToolsMap) {
        Array.from(frameworkToolsMap.values()).forEach((reg) => {
          toolsMap.set(reg.definition.name, reg.definition);
        });
      }
    }

    return Array.from(toolsMap.values());
  }

  /**
   * 获取所有已注册的工具
   */
  getAllTools(uiFramework?: string): ToolRegistrationInfo[] {
    const toolsMap = new Map<string, ToolRegistrationInfo>();

    // 先添加公共工具
    Array.from(this.tools.values()).forEach((reg) => {
      toolsMap.set(reg.definition.name, reg);
    });

    // 如果指定了框架，用该框架的自定义工具覆盖同名公共工具
    if (uiFramework) {
      const frameworkToolsMap = this.frameworkTools.get(uiFramework);
      if (frameworkToolsMap) {
        Array.from(frameworkToolsMap.values()).forEach((reg) => {
          toolsMap.set(reg.definition.name, reg);
        });
      }
    }

    return Array.from(toolsMap.values());
  }

  /**
   * 检查工具是否存在
   */
  hasTool(name: string, uiFramework?: string): boolean {
    if (uiFramework) {
      const frameworkToolsMap = this.frameworkTools.get(uiFramework);
      if (frameworkToolsMap?.has(name)) {
        return true;
      }
    }
    return this.tools.has(name);
  }
}

// 导出单例供其他模块使用
export const toolRegistry = new ToolRegistryCore();
