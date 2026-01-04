import { createResponse } from '../../../../utils/index.js';
import { ToolArgs, ToolContext, ToolRegistration } from '../../../../types/index.js';
import { DEFAULT_UI_FRAMEWORK, SUPPORTED_UI_FRAMEWORKS } from '../constants.js';
import { features } from '../features/index.js';
import featuresMap from '../features/index.js';
import yinhaiFeaturesMap from '../yinhai-features/index.js';

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
export const getFeatureTemplateTool: ToolRegistration = {
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
