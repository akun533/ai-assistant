import { ToolHandler, ToolContext, ToolArgs } from '../../src/types/index.js';
import { createResponse, removeRulePrefix } from '../../src/utils/index.js';
import { DEFAULT_UI_FRAMEWORK } from '../../src/components/common/tools/form/constants.js';
import { applyJSONPatch } from '../../src/core/json-patch-validator.js';
import { createDetailedValidate } from '../../src/components/common/tools/form-validator.js';

/**
 * Form Patch Skill Handlers
 * 
 * 提供 JSON Patch 补丁应用功能
 */

export async function handlePatch(args: ToolArgs, context: ToolContext): Promise<any> {
  const { sessionId = '', uiFramework, summarize } = args || {};
  const jsonPatch = (args.jsonPatch || []).map(patch => {
    if (patch.from) {
      patch.from = removeRulePrefix(patch.from);
    }
    if (patch.path) {
      patch.path = removeRulePrefix(patch.path);
    }
    return patch;
  });

  if (!jsonPatch || !Array.isArray(jsonPatch)) {
    return createResponse('缺少必需的 jsonPatch 参数');
  }

  const data = context.context;

  const results = applyJSONPatch(data.form.rule, jsonPatch as any);

  // 验证并改进规则
  const validateAndImproveResult = context.formGenerator.validateRule(
    { rule: results.newDocument },
    uiFramework,
    context.componentRegistry
  );

  // 创建详细的验证结果
  const detailedValidate = createDetailedValidate(
    validateAndImproveResult,
    { rule: results.newDocument },
    uiFramework as string,
    context.componentRegistry
  );

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
  context.context.form = results.newDocument;

  return createResponse(
    '完成执行',
    [
      `\`\`\`fcRuleDiff
${JSON.stringify(detailedValidate.improvedRule)}
\`\`\``,
      summarize as string,
    ],
    true
  );
}
