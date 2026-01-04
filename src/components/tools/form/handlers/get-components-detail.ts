import { createResponse } from '../../../../utils/index.js';
import { ToolArgs, ToolContext, ToolRegistration } from '../../../../types/index.js';
import { DEFAULT_UI_FRAMEWORK, DEFAULT_VUE_VERSION, SUPPORTED_UI_FRAMEWORKS, SUPPORTED_VUE_VERSIONS } from '../constants.js';
import { filterComponentsByNames, formatComponentsDetail } from '../../index.js';

/**
 * 查看组件详细信息工具
 */
export const getComponentsDetailTool: ToolRegistration = {
  definition: {
    name: 'get_components_detail',
    title: '查看组件详细信息',
    description: '获取组件的配置项，包括使用方法、示例代码等',
    inputSchema: {
      type: 'object',
      properties: {
        sessionId: {
          type: 'string',
          description: '会话标识符，用于关联同一会话的多个请求',
        },
        componentNames: {
          type: 'array',
          items: {
            type: 'string',
          },
          description: '需要获取配置项的可用组件名称列表',
        },
        uiFramework: {
          type: 'string',
          enum: SUPPORTED_UI_FRAMEWORKS,
          description: 'UI 框架类型',
          default: DEFAULT_UI_FRAMEWORK,
        },
        vueVersion: {
          type: 'string',
          enum: SUPPORTED_VUE_VERSIONS,
          description: 'Vue版本，auto表示自动检测',
          default: 'auto',
        },
      },
      required: ['componentNames'],
    },
  },
  handler: async (args: ToolArgs, request: ToolContext) => {
    const { componentNames = [], uiFramework = DEFAULT_UI_FRAMEWORK, vueVersion = 'auto' } = args || {};

    if (!Array.isArray(componentNames) || componentNames.length === 0) {
      return createResponse('componentNames 必须是一个非空的字符串数组');
    }

    const detectedVueVersion = vueVersion === 'auto' ? DEFAULT_VUE_VERSION : vueVersion;
    const allComponents = request.componentRegistry.getComponents(uiFramework, detectedVueVersion);

    // 使用工具函数筛选组件
    const { found: requestedComponents, notFound: notFoundComponents } = filterComponentsByNames(
      allComponents,
      componentNames
    );

    if (notFoundComponents.length > 0) {
      return createResponse(`错误: 不支持以下组件: ${notFoundComponents.join(', ')}，通过 get_component_specs 重新获取完整组件列表`);
    }

    // 使用工具函数格式化组件详情
    return createResponse(formatComponentsDetail(requestedComponents));
  },
};
