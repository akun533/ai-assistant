import { ComponentRegistry } from '../../core/component-registry';

export const getSections = (
  categorizedComponents: ReturnType<ComponentRegistry['categorizeComponents']>,
  version: { ui: string; vue: 'vue2' | 'vue3' },
) => {
  if (version.ui === 'ta404ui') {
    // 类型断言确保属性存在
    return [
      {
        title: '布局字段',
        category: categorizedComponents.layoutComponents,
      },
      {
        title: '输入字段',
        category: categorizedComponents.inputComponents,
      },
      {
        title: '选择字段',
        category: categorizedComponents.selectComponents,
      },
      {
        title: '日期时间字段',
        category: categorizedComponents.dateComponents,
      },
      {
        title: '其他字段',
        category: categorizedComponents.otherComponents,
      },
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
