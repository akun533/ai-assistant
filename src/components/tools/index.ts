/**
 * 组件工具统一导出
 * 将工具函数从 service/tools 解耦到 components 目录
 */

// 组件详情格式化工具
export {
  formatComponentDetail,
  formatComponentsDetail,
  filterComponentsByNames,
} from './component-detail-formatter.js';

// 表单验证工具
export {
  type ValidateDetails,
  createDetailedValidate,
  formatValidationErrors,
} from './form-validator.js';

// 表单配置工具
export {
  getDefaultFormOptions,
  getDefaultFormConfig,
} from './form-config.js';

// 表单工具MCP定义
export {
  getComponentsDetailTool,
  validateFormRuleTool,
  applyPatchFormRuleTool,
  getFeatureTemplateTool,
  pushCurrentRuleTool,
  default as formTools,
} from './form/index.js';

// 导出常量
export * from './form/constants.js';
