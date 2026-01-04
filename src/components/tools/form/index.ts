/**
 * 表单工具模块统一导出
 * 将原有的大文件拆分为多个小模块，按功能组织
 */

import {
  getComponentsDetailTool,
  validateFormRuleTool,
  applyPatchFormRuleTool,
  getFeatureTemplateTool,
  pushCurrentRuleTool,
} from './handlers/index.js';

// 导出所有工具
export default [
  getComponentsDetailTool,
  validateFormRuleTool,
  applyPatchFormRuleTool,
  getFeatureTemplateTool,
  pushCurrentRuleTool,
];

// 也可以单独导出
export {
  getComponentsDetailTool,
  validateFormRuleTool,
  applyPatchFormRuleTool,
  getFeatureTemplateTool,
  pushCurrentRuleTool,
};

// 导出常量
export * from './constants.js';
