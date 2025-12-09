import type { ComponentRegistry } from '../../../core/component-registry.js';
import type { FormRuleGenerator } from '../../../core/form-rule-generator.js';

// 工具注册接口
export interface ToolRegistration {
  definition: ToolDefinition;
  handler: ToolHandler;
}

// 工具定义接口
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
  required?: string[];
}

// 工具上下文接口
export interface ToolContext {
  formGenerator: FormRuleGenerator;
  componentRegistry: ComponentRegistry;
  context: Record<string, any>; // 请求上下文
}

// 工具处理器类型
export type ToolHandler = (args: ToolArgs, context: ToolContext, ...params:any[]) => Promise<any>;

// 工具参数接口 - 扩展原有接口
export interface ToolArgs {
  sessionId?: string;
  userInput?: string;
  operationType?: 'create' | 'modify'| 'code' | 'other';
  context?: string;
  analysisDepth?: 'quick' | 'standard' | 'deep';
  uiFramework?: 'element-plus' | 'element-ui' | 'ant-design-vue' | 'vant' | 'ta404-ui';
  vueVersion?: 'vue2' | 'vue3' | 'auto';
  componentType?: 'all' | 'field' | 'assist' | 'container';
  templateType?: 'basic' | 'layout' | 'validate' | 'complete';
  componentNames?: string[];
  rule?: any[];
  option?: Record<string, any>;
  field?: any;
  fieldPath?: string;
  summarize?: string;
  jsonPatch?: Array<{
    op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';
    path: string;
    value?: any;
    from?: string;
  }>;
  isComplete?: boolean;
  featureType?: string[];
  data?: Record<string, any>;
}

// 验证详情接口
export interface ValidateDetails {
  isValid: boolean;
  answer: boolean;
  errors: string[];
  warnings: string[];
  suggestions: string[];
  framework: string;
  availableComponents: string[];
  improvedRule?: any;
  changes?: string[];
}
