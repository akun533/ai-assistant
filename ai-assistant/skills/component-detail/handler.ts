import { ToolHandler, ToolContext, ToolArgs } from '../../src/types/index.js';
import { createResponse } from '../../src/utils/index.js';
import { DEFAULT_UI_FRAMEWORK, DEFAULT_VUE_VERSION } from '../../src/components/common/tools/form/constants.js';
import { filterComponentsByNames, formatComponentsDetail } from '../../src/components/common/tools/component-detail-formatter.js';

/**
 * Component Detail Skill Handlers
 * 
 * 提供组件详情查询功能
 */

export async function handleDetail(args: ToolArgs, context: ToolContext): Promise<any> {
  const { componentNames = [], uiFramework = DEFAULT_UI_FRAMEWORK, vueVersion = 'auto' } = args || {};

  if (!Array.isArray(componentNames) || componentNames.length === 0) {
    return createResponse('componentNames 必须是一个非空的字符串数组');
  }

  const detectedVueVersion = vueVersion === 'auto' ? DEFAULT_VUE_VERSION : vueVersion;
  const allComponents = context.componentRegistry.getComponents(uiFramework, detectedVueVersion);

  // 使用工具函数筛选组件
  const { found: requestedComponents, notFound: notFoundComponents } = filterComponentsByNames(allComponents, componentNames);

  if (notFoundComponents.length > 0) {
    return createResponse(`错误: 不支持以下组件: ${notFoundComponents.join(', ')}，通过 get_component_specs 重新获取完整组件列表`);
  }

  // 使用工具函数格式化组件详情
  return createResponse(formatComponentsDetail(requestedComponents));
}
