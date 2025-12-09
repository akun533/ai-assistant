import {
  ta404uiComponents,
} from '../components/index.js';
import usages from '../components/usages';

export interface YinhaiComponentInfo {
  type: string;
  label: string;
  uiFramework: string;
  vueVersion: 'vue2' | 'vue3' | 'common';
  fieldType: 'input' | 'layout' | 'date' | 'select' | 'other',
  childrenPath?: string; // 指定子组件的存储路径，如 'props.rule' 或 'children'
  defaultChildren?: string[]; // 默认子组件类型列表（存储组件type字符串）
  usage?: string; // 使用说明
  examples?: any[]; // 使用示例
  // 组件的配置项和描述
  props?: Array<{
    name: string;
    type: 'boolean' | 'string' | 'number' | 'object' | 'Function' | 'Array';
    defaultValue?: any;
    description?: string;
    options?: Array<Boolean | string | number>;
    required?: boolean;
    fields?: YinhaiComponentInfo['props'];
  }>;
  // 组件的事件和描述
  events?: Array<{
    name: string;
    description?: string;
  }>;
}

export class YinhaiComponentRegistry {
  private components: Map<string, YinhaiComponentInfo[]> = new Map();

  constructor() {
    this.initializeComponents();
  }

  private initializeComponents() {
    // 注册 ta404ui 组件
    ta404uiComponents.forEach((component: YinhaiComponentInfo) => {
      this.registerComponent(component.type, component);
    });
  }

  private registerComponent(type: string, component: YinhaiComponentInfo) {
    if (!this.components.has(type)) {
      this.components.set(type, []);
    }
    component.usage = usages[component.type];
    this.components.get(type)!.push(component);
  }

  getComponent(
    type: string,
    uiFramework: string,
    vueVersion: 'vue2' | 'vue3' = 'vue3',
  ): YinhaiComponentInfo | undefined {
    const components = this.components.get(type);
    if (!components) return undefined;

    const detectedFramework = this.detectFramework(uiFramework, vueVersion);

    // 优先查找完全匹配的组件
    let component = components.find(
      comp => comp.uiFramework === detectedFramework && comp.vueVersion === vueVersion,
    );

    // 如果没有找到完全匹配的，查找兼容 vue2-vue3 的组件
    if (!component) {
      component = components.find(
        comp => comp.uiFramework === detectedFramework && comp.vueVersion === 'common',
      );
    }

    // 如果还是没有找到，查找通用组件
    if (!component) {
      component = components.find(
        comp => comp.uiFramework === 'common' && comp.vueVersion === 'common',
      );
    }

    return component;
  }

  getComponents(uiFramework: string, vueVersion: 'vue2' | 'vue3' = 'vue3'): YinhaiComponentInfo[] {
    const allComponents: YinhaiComponentInfo[] = [];
    const detectedFramework = this.detectFramework(uiFramework, vueVersion);
    for (const components of this.components.values()) {
      const frameworkComponents = components.filter(
        comp =>
          (comp.uiFramework === detectedFramework || comp.uiFramework === 'common') &&
          (comp.vueVersion === vueVersion || comp.vueVersion === 'common'),
      );
      allComponents.push(...frameworkComponents);
    }

    const uniqueComponents = new Map<string, YinhaiComponentInfo>();
    for (const component of allComponents) {
      const key = `${component.uiFramework}-${component.type}`;
      if (!uniqueComponents.has(key) || component.vueVersion !== 'common') {
        uniqueComponents.set(key, component);
      }
    }

    return Array.from(uniqueComponents.values());
  }

  categorizeComponents(components: YinhaiComponentInfo[]) {
    const layoutComponents: YinhaiComponentInfo[] = [];
    const inputComponents: YinhaiComponentInfo[] = [];
    const selectComponents: YinhaiComponentInfo[] = [];
    const dateComponents: YinhaiComponentInfo[] = [];
    const otherComponents: YinhaiComponentInfo[] = [];
    const seenTypes = new Set<string>();

    components.forEach(comp => {
      // 跳过重复的组件类型
      if (seenTypes.has(comp.type)) {
        return;
      }
      seenTypes.add(comp.type);

      const componentInfo = {
        ...comp,
      };

      // 判断组件类型
      if (comp.fieldType === 'input') {
        // 表单组件：用于数据输入和收集
        inputComponents.push(componentInfo);
      } else if (comp.fieldType === 'layout') {
        // 布局组件：用于页面布局和结构
        layoutComponents.push(componentInfo);
      } else if (comp.fieldType === 'date') {
        // 日期时间组件：用于用户录入时间类型的字段
        dateComponents.push(componentInfo);
      } else if (comp.fieldType === 'select') {
        // 选择组件：用户选择预定义选择项的组件
        selectComponents.push(componentInfo);
      } else {
        // 其他组件
        otherComponents.push(componentInfo);
      }
    });
    return {
      layoutComponents: {
        name: '布局字段',
        description: '用于页面布局和结构组织的组件',
        count: layoutComponents.length,
        components: layoutComponents,
      },
      inputComponents: {
        name: '输入字段',
        description: '用于用户录入文本类型的信息的组件',
        count: inputComponents.length,
        components: inputComponents,
      },
      selectComponents: {
        name: '选择字段',
        description: '用户选择预定义选择项的组件',
        count: selectComponents.length,
        components: selectComponents,
      },
      dateComponents: {
        name: '日期时间字段',
        description: '用户录入时间类型字段的组件',
        count: dateComponents.length,
        components: dateComponents,
      },
      otherComponents: {
        name: '其他字段',
        description: '其他类型的组件',
        count: otherComponents.length,
        components: otherComponents,
      },
    };
  }

  private detectFramework(uiFramework: string, vueVersion: 'vue2' | 'vue3'): string {
    if (uiFramework === 'ta404ui') {
      return 'ta404ui';
    }

    // 默认返回 element-plus
    return 'ta404ui';
  }
}
