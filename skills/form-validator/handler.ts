import { ToolHandler, ToolContext, ToolArgs } from '../../src/types/index.js';
import { createResponse } from '../../src/utils/index.js';
import { DEFAULT_UI_FRAMEWORK } from '../../src/components/common/tools/form/constants.js';
import { getDefaultFormOptions } from '../../src/components/common/tools/form/handlers/form-config.js';
import { createDetailedValidate } from '../../src/components/common/tools/form-validator.js';

/**
 * Form Validator Skill Handlers
 * 
 * 提供表单规则校验功能
 */

export async function handleValidate(args: ToolArgs, context: ToolContext): Promise<any> {
  const { operationType, rule, option, sessionId = '', uiFramework = DEFAULT_UI_FRAMEWORK } = args || {};

  if (!rule) {
    return createResponse('缺少必需的 rule 参数');
  }
  if (typeof rule === 'string') {
    return createResponse('rule 参数必须是 Array 数据类型');
  }
  if (typeof option === 'string') {
    return createResponse('option 参数必须是 Object 数据类型');
  }

  // 处理新的参数结构：rule 可能是数组或对象
  const formRule: any = {
    rule: rule,
  };

  formRule.option = option || getDefaultFormOptions();

  // 验证并改进规则
  const validateAndImproveResult = context.formGenerator.validateRule(formRule, uiFramework, context.componentRegistry);

  // 创建详细的验证结果
  const detailedValidate = createDetailedValidate(validateAndImproveResult, formRule, uiFramework, context.componentRegistry);

  if (detailedValidate.isValid) {
    if (operationType === 'create') {
      context.context.newForm = detailedValidate.improvedRule;
    }
    return createResponse(`校验通过:
\`\`\`json
${JSON.stringify(detailedValidate.improvedRule, null, 2)}
\`\`\`

检查是否符合操作计划, 然后执行下一步
`);
  } else {
    return createResponse(`表单规则验证发现问题，需要修复：

**需要修复的错误：**
${detailedValidate.errors.map((error: string, index: number) => `${index + 1}. ${error}`).join('\n')}

${
  detailedValidate.warnings && detailedValidate.warnings.length > 0
    ? `**警告信息：**
${detailedValidate.warnings.map((warning: string, index: number) => `${index + 1}. ${warning}`).join('\n')}`
    : ''
}

${
  detailedValidate.suggestions && detailedValidate.suggestions.length > 0
    ? `**修复建议：**
${detailedValidate.suggestions.map((suggestion: string, index: number) => `${index + 1}. ${suggestion}`).join('\n')}`
    : ''
}

请根据以上建议修改表单规则，然后重新验证。`);
  }
}
