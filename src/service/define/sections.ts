import { ComponentRegistry } from '../../core/component-registry';
import { YinhaiComponentRegistry } from '../../core/yinhai-component-registry';

// 定义更精确的类型
type CategorizedComponents =
  | ReturnType<ComponentRegistry['categorizeComponents']>
  | ReturnType<YinhaiComponentRegistry['categorizeComponents']>;

export const getSections = (
  categorizedComponents: CategorizedComponents,
  version: { ui: string; vue: 'vue2' | 'vue3' }
) => {
  if (version.ui === 'ta404ui') {
    // 类型断言确保属性存在
    const taComponents = categorizedComponents as ReturnType<YinhaiComponentRegistry['categorizeComponents']>;
    return [
      {
        title: '布局字段',
        category: taComponents.layoutComponents,
      },
      {
        title: '输入字段',
        category: taComponents.inputComponents,
      },
      {
        title: '选择字段',
        category: taComponents.selectComponents,
      },
      {
        title: '日期时间字段',
        category: taComponents.dateComponents,
      },
      {
        title: '其他字段',
        category: taComponents.otherComponents,
      },
    ];
  } else {
    const defaultComponents = categorizedComponents as ReturnType<ComponentRegistry['categorizeComponents']>;
    return [
      {
        title: 'Field 表单组件',
        category: defaultComponents.formComponents,
      },
      {
        title: 'Container 布局组件',
        category: defaultComponents.layoutComponents,
      },
      {
        title: 'Assist 辅助组件',
        category: defaultComponents.assistComponents,
      },
    ];
  }
};
