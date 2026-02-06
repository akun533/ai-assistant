import { validateFormRuleTool } from './handlers/validate-form-rule-tool.js';
import { pushCurrentRuleTool } from './handlers/push-current-rule-tool.js';
import { getComponentsDetailTool } from './handlers/get-components-detail-tool.js'
import { getFeatureTemplateTool } from './handlers/get-feature-template-tool.js'
import { applyPatchFormRuleTool } from './handlers/apply-patch-form-rule-tool.js'

export { validateFormRuleTool, pushCurrentRuleTool, getComponentsDetailTool, applyPatchFormRuleTool, getFeatureTemplateTool };

export default [
  validateFormRuleTool,
  pushCurrentRuleTool,
  getComponentsDetailTool,
  applyPatchFormRuleTool,
  getFeatureTemplateTool,
];