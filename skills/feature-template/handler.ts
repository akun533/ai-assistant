import { ToolHandler, ToolContext, ToolArgs } from '../../src/types/index.js';
import { createResponse } from '../../src/utils/index.js';
import featuresMap from '../../src/components/common/tools/form/features/index.js';
import { DEFAULT_UI_FRAMEWORK } from '../../src/components/common/tools/form/constants.js';

/**
 * Feature Template Skill Handlers
 * 
 * 提供功能模板查询功能
 */

interface FeatureData {
  info?: string;
  description?: string;
  templates?: Array<{
    description?: string;
    example?: any;
  }>;
  business?: boolean;
}

/**
 * 格式化功能模板响应
 */
function formatFeatureTemplateResponse(data: { uiFramework: string }): string {
  let response = '';
  const { uiFramework } = data;

  Object.keys(featuresMap).forEach((type: string) => {
    const featureData = featuresMap[type] as FeatureData;
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

export async function handleFeatures(args: ToolArgs, context: ToolContext): Promise<any> {
  const { uiFramework = DEFAULT_UI_FRAMEWORK } = args || {};
  return createResponse(
    formatFeatureTemplateResponse({
      uiFramework,
    })
  );
}
