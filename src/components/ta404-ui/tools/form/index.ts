import { ToolArgs, ToolContext, ToolRegistration } from '../../../../types';
import { createResponse } from '../../../../utils';
import yinhaiFeaturesMap from './yinhai-features';
import featuresMap, { features } from '../../../common/tools/form/features/index.js';
import { getDefaultFormConfig, getDefaultFormOptions } from '../../../common/tools/form-config.js';

import { pushCurrentRuleTool, getComponentsDetailTool, applyPatchFormRuleTool } from '../../../common/tools/form/index.js';
import { createDetailedValidate } from '../../../common/tools';
import { SUPPORTED_UI_FRAMEWORKS, DEFAULT_UI_FRAMEWORK } from '../../../common/tools/form/constants';


/**
 * 格式化功能模板响应
 */
function formatFeatureTemplateResponse(data: { uiFramework: string }): string {
  let response = '';
  let featuresMapTemp;
  const { uiFramework } = data;

  if (uiFramework === 'ta404-ui') {
    featuresMapTemp = yinhaiFeaturesMap;
  } else {
    featuresMapTemp = featuresMap;
  }

  Object.keys(featuresMapTemp).forEach((type: string) => {
    const featureData = featuresMapTemp[type];
    if (featureData.business && process.env.FORM_CREATE_BUSINESS !== 'true') {
      return;
    }
    if (featureData.business === false && process.env.FORM_CREATE_BUSINESS === 'true') {
      return;
    }
    response += `#${type}\n\n`;
    response += `${featureData.info}\n\n`;
    response += `${featureData.description}\n\n`;
    (featureData.templates || []).forEach((template: any) => {
      response += `- ${template.description}: 
\`\`\`
${JSON.stringify(template.example, null, 2)}
\`\`\`
`;
    });
    response += `\n`;
  });

  return response;
}

/**
 * 查看框架功能信息工具
 */
const getFeatureTemplateTool: ToolRegistration = {
  definition: {
    name: 'get_feature_template',
    title: '查看框架功能信息',
    description: `获取表单功能说明，包括${features.map(feature => `${feature.label}`).join('、')}等功能的类型定义和使用示例`,
    inputSchema: {
      type: 'object',
      properties: {
        sessionId: {
          type: 'string',
          description: '会话标识符，用于关联同一会话的多个请求',
        },
        uiFramework: {
          type: 'string',
          enum: SUPPORTED_UI_FRAMEWORKS,
          description: 'UI 框架类型，用于提供框架特定的示例',
          default: DEFAULT_UI_FRAMEWORK,
        },
      },
    },
  },
  handler: async (args: ToolArgs, request: ToolContext) => {
    const { uiFramework = DEFAULT_UI_FRAMEWORK } = args || {};
    return createResponse(formatFeatureTemplateResponse({
      uiFramework,
    }));
  },
};

/**
 * 检查表单规则有效性工具
 */
const validateFormRuleTool: ToolRegistration = {
  definition: {
    name: 'validate_form_rule',
    title: '检查表单规则有效性',
    description: '根据规范校验表单规则，不对操作计划负责。支持全量与增量，增量校验时仅传入发生变化的组件规则`ComponentRule[]`，无需携带未变更部分\n输出包含错误、警告、修复建议与优化后的规则',
    inputSchema: {
      type: 'object',
      properties: {
        sessionId: {
          type: 'string',
          description: '会话标识符，用于关联同一会话的多个请求',
        },
        rule: {
          type: 'array',
          description: '要校验的组件规则,不是补丁',
        },
        operationType: {
          type: 'string',
          enum: ['create', 'modify'],
          description: '操作类型：create(创建新表单)、modify(修改现有表单/修改现有组件)',
          default: 'create',
        },
        uiFramework: {
          type: 'string',
          enum: SUPPORTED_UI_FRAMEWORKS,
          description: 'UI 框架类型，用于框架特定的验证',
          default: DEFAULT_UI_FRAMEWORK,
        },
      },
      required: ['rule'],
    },
  },
  handler: async (args: ToolArgs, request: ToolContext) => {
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

    if (Object.is(uiFramework, 'ta404-ui')) {
      formRule.formConfig = getDefaultFormConfig();
    } else {
      formRule.option = option || getDefaultFormOptions();
    }

    // 验证并改进规则
    const validateAndImproveResult = request.formGenerator.validateRule(formRule, uiFramework, request.componentRegistry);

    // 创建详细的验证结果
    const detailedValidate = createDetailedValidate(validateAndImproveResult, formRule, uiFramework, request.componentRegistry);

    if (detailedValidate.isValid) {
      if (operationType === 'create') {
        request.context.newForm = detailedValidate.improvedRule;
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

${detailedValidate.warnings && detailedValidate.warnings.length > 0 ? `**警告信息：**
${detailedValidate.warnings.map((warning: string, index: number) => `${index + 1}. ${warning}`).join('\n')}` : ''}

${detailedValidate.suggestions && detailedValidate.suggestions.length > 0 ? `**修复建议：**
${detailedValidate.suggestions.map((suggestion: string, index: number) => `${index + 1}. ${suggestion}`).join('\n')}` : ''}

请根据以上建议修改表单规则，然后重新验证。`);
    }
  },
};

export { validateFormRuleTool, pushCurrentRuleTool, getComponentsDetailTool, applyPatchFormRuleTool, getFeatureTemplateTool };

export default [
  validateFormRuleTool,
  pushCurrentRuleTool,
  getComponentsDetailTool,
  applyPatchFormRuleTool,
  getFeatureTemplateTool,
];