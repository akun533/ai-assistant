import { ComponentRegistry } from '../../core/component-registry';

export const getSections = (
  categorizedComponents: ReturnType<ComponentRegistry['categorizeComponents']>,
  version: { ui: string; vue: 'vue2' | 'vue3' },
) => {
  if (version.ui === 'ta404-ui') {
    // 类型断言确保属性存在
    return [
      {
        title: '容器布局组件',
        category: categorizedComponents.layoutComponents,
      },
      {
        title: '输入组件',
        category: categorizedComponents.inputComponents,
      },
      {
        title: '选择组件',
        category: categorizedComponents.selectComponents,
      },
      {
        title: '日期时间组件',
        category: categorizedComponents.dateComponents,
      },
      {
        title: '数据展示组件',
        category: categorizedComponents.displayComponents,
      },
      {
        title: '辅助组件',
        category: categorizedComponents.assistComponents,
      }
    ];
  } else {
    return [
      {
        title: 'Field 表单组件',
        category: categorizedComponents.formComponents,
      },
      {
        title: 'Container 布局组件',
        category: categorizedComponents.layoutComponents,
      },
      {
        title: 'Assist 辅助组件',
        category: categorizedComponents.assistComponents,
      },
    ];
  }
};
