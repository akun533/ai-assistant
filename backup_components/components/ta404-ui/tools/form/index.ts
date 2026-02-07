import { pushCurrentRuleTool, getComponentsDetailTool, applyPatchFormRuleTool } from '../../../common/tools/form/index.js';
import { validateFormRuleTool } from './handlers/validate-form-rule-tool.js'
import { getFeatureTemplateTool } from './handlers/get-feature-template-tool.js'



export { validateFormRuleTool, pushCurrentRuleTool, getComponentsDetailTool, applyPatchFormRuleTool, getFeatureTemplateTool };

export default [
  validateFormRuleTool,
  pushCurrentRuleTool,
  getComponentsDetailTool,
  applyPatchFormRuleTool,
  getFeatureTemplateTool,
];