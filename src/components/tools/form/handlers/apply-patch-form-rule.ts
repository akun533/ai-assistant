import { applyJSONPatch } from '../../../../core/json-patch-validator.js';
import { createResponse, removeRulePrefix } from '../../../../utils/index.js';
import { ToolArgs, ToolContext, ToolRegistration } from '../../../../types/index.js';
import { DEFAULT_UI_FRAMEWORK, SUPPORTED_UI_FRAMEWORKS } from '../constants.js';
import { createDetailedValidate } from '../../index.js';

/**
 * 调整表单规则工具
 */
export const applyPatchFormRuleTool: ToolRegistration = {
  definition: {
    name: 'apply_patch_form_rule',
    title: '调整表单规则',
    private: true,
    description: '应用JSONPatch补丁，必须全量传入。JSONPatch 操作规范 (RFC 6902)',
    inputSchema: {
      type: 'object',
      properties: {
        sessionId: {
          type: 'string',
          description: '会话标识符，用于关联同一会话的多个请求',
        },
        summarize: {
          type: 'string',
          description: '总结概括本次任务(MarkDown 格式)',
        },
        jsonPatch: {
          type: 'array',
          description: 'JSONPatch补丁数组',
          items: {
            type: 'object',
            required: ['op', 'path'],
            properties: {
              op: {
                type: 'string',
                enum: ['add', 'remove', 'replace', 'move', 'copy', 'test'],
                description: '操作类型',
              },
              path: {
                type: 'string',
                description: 'JSON Pointer路径',
              },
              value: {
                description: '操作值',
              },
              from: {
                type: 'string',
                description: '源路径（move/copy操作）',
              },
            },
          },
        },
        uiFramework: {
          type: 'string',
          enum: SUPPORTED_UI_FRAMEWORKS,
          description: 'UI 框架类型，用于框架特定的验证',
          default: DEFAULT_UI_FRAMEWORK,
        },
      },
      required: ['jsonPatch'],
    },
  },
  handler: async (args: ToolArgs, request: ToolContext) => {
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

    const data = request.context;

    const results = applyJSONPatch(data.form.rule, jsonPatch as any);

    // 验证并改进规则
    const validateAndImproveResult = request.formGenerator.validateRule({ rule: results.newDocument }, uiFramework, request.componentRegistry);

    // 创建详细的验证结果
    const detailedValidate = createDetailedValidate(validateAndImproveResult, { rule: results.newDocument }, uiFramework as string, request.componentRegistry);

    if (!detailedValidate.isValid) {
      return createResponse(`推送失败，表单规则验证发现问题，需要修复：

**需要修复的错误：**
${detailedValidate.errors.map((error: string, index: number) => `${index + 1}. ${error}`).join('\n')}

${detailedValidate.warnings && detailedValidate.warnings.length > 0 ? `**警告信息：**
${detailedValidate.warnings.map((warning: string, index: number) => `${index + 1}. ${warning}`).join('\n')}` : ''}

${detailedValidate.suggestions && detailedValidate.suggestions.length > 0 ? `**修复建议：**
${detailedValidate.suggestions.map((suggestion: string, index: number) => `${index + 1}. ${suggestion}`).join('\n')}` : ''}

请根据以上建议修改表单规则。`);
    }
    request.context.form = results.newDocument;

    return createResponse('完成执行', [`\`\`\`fcRuleDiff
${JSON.stringify(detailedValidate.improvedRule)}
\`\`\``, summarize as string], true);
  },
};
