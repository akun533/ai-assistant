import { ToolArgs, ToolContext, ToolRegistration } from '../../../../../types/index.js';
import { DEFAULT_UI_FRAMEWORK, SUPPORTED_UI_FRAMEWORKS } from '../constants.js';
import { createResponse } from '../../../../../utils/index.js';
import { createDetailedValidate } from '../../form-validator.js';

/**
 * 推送当前表单规则工具
 */
export const pushCurrentRuleTool: ToolRegistration = {
  definition: {
    name: 'push_current_rule',
    description: '推送当前会话的当前表单规则',
    inputSchema: {
      type: 'object',
      properties: {
        sessionId: {
          type: 'string',
          description: '会话标识符，用于获取指定会话的规则',
        },
        rule: {
          type: 'array',
          description: '表单完整规则,不是补丁',
        },
        summarize: {
          type: 'string',
          description: '总结概括本次任务(MarkDown 格式)',
        },
        isComplete: {
          type: 'boolean',
          description: '是否已经结束修改，true表示表单规则已确定，false表示还需要继续修改',
          default: false,
        },
        operationType: {
          type: 'string',
          enum: ['create', 'modify'],
          description: '操作类型：create(创建新表单)、modify(修改现有表单)',
          default: 'create',
        },
        uiFramework: {
          type: 'string',
          enum: SUPPORTED_UI_FRAMEWORKS,
          description: 'UI 框架类型，用于框架特定的验证',
          default: DEFAULT_UI_FRAMEWORK,
        },
      },
      required: ['sessionId', 'rule', 'summarize', 'isComplete'],
    },
  },
  handler: async (args: ToolArgs, request: ToolContext) => {
    const { sessionId, rule, summarize, isComplete = true, operationType, uiFramework } = args || {};

    if (!sessionId) {
      return createResponse('缺少必需的 sessionId 参数');
    }
    // 验证并改进规则
    const validateAndImproveResult = request.formGenerator.validateRule({ rule }, uiFramework, request.componentRegistry);

    // 创建详细的验证结果
    const detailedValidate = createDetailedValidate(validateAndImproveResult, { rule }, uiFramework as string, request.componentRegistry);

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
  },
};
