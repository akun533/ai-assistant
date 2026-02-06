import { ToolHandler, ToolContext, ToolArgs } from '../../src/types/index.js';
import { createResponse } from '../../src/utils/index.js';
import { DEFAULT_UI_FRAMEWORK } from '../../src/components/common/tools/form/constants.js';
import { createDetailedValidate } from '../../src/components/common/tools/form-validator.js';

/**
 * Form Pusher Skill Handlers
 * 
 * 提供表单规则推送功能
 */

export async function handlePush(args: ToolArgs, context: ToolContext): Promise<any> {
  const { sessionId, rule, summarize, isComplete = true, operationType, uiFramework } = args || {};

  if (!sessionId) {
    return createResponse('缺少必需的 sessionId 参数');
  }
  
  // 验证并改进规则
  const validateAndImproveResult = context.formGenerator.validateRule({ rule }, uiFramework, context.componentRegistry);

  // 创建详细的验证结果
  const detailedValidate = createDetailedValidate(validateAndImproveResult, { rule }, uiFramework as string, context.componentRegistry);

  if (!detailedValidate.isValid) {
    return createResponse(`推送失败，表单规则验证发现问题，需要修复：

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

请根据以上建议修改表单规则。`);
  }

  return createResponse(
    '完成执行',
    [
      `\`\`\`${operationType === 'create' ? 'fcRule' : 'fcRuleDiff'}
${JSON.stringify(detailedValidate.improvedRule)}
\`\`\``,
      summarize as string,
    ],
    isComplete
  );
}
