import {
  antDesignVue2Components,
  antDesignVueComponents,
  commonComponents,
  elementPlusComponents,
  elementUIComponents,
  vantComponents,
  vantVue2Components,
} from '../components/index.js';
import usages from '../components/usages';

export interface ComponentInfo {
  type: string;
  label: string;
  uiFramework: string;
  vueVersion: 'vue2' | 'vue3' | 'common';
  business?: true; // 是否是高级版组件
  isAssist?: boolean; // 标识是否为辅助组件（不需要field和title）
  isContainer?: boolean; // 标识是否为容器组件（必须包含children）
  isField?: boolean; // 标识是否为表单组件 (必须有 field)
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
    fields?: ComponentInfo['props'];
  }>;
  // 组件的事件和描述
  events?: Array<{
    name: string;
    description?: string;
  }>;
}

export class ComponentRegistry {
  private components: Map<string, ComponentInfo[]> = new Map();

  constructor() {
    this.initializeComponents();
  }

  private initializeComponents() {
    // 注册通用组件（所有UI框架都支持，不区分Vue版本）
    commonComponents.forEach((component: ComponentInfo) => {
      this.registerComponent(component.type, component);
    });

    // 注册 Element Plus 组件
    elementPlusComponents.forEach((component: ComponentInfo) => {
      this.registerComponent(component.type, component);
    });

    // 注册 Element UI 组件
    elementUIComponents.forEach((component: ComponentInfo) => {
      this.registerComponent(component.type, component);
    });

    // 注册 Ant Design Vue 组件
    antDesignVueComponents.forEach((component: ComponentInfo) => {
      this.registerComponent(component.type, component);
    });
    antDesignVue2Components.forEach((component: ComponentInfo) => {
      this.registerComponent(component.type, component);
    });

    // 注册 Vant 组件
    vantComponents.forEach((component: ComponentInfo) => {
      this.registerComponent(component.type, component);
    });
    vantVue2Components.forEach((component: ComponentInfo) => {
      this.registerComponent(component.type, component);
    });
  }

  private registerComponent(type: string, component: ComponentInfo) {
    if (component.business && process.env.FORM_CREATE_BUSINESS !== 'true') {
      return;
    }
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
  ): ComponentInfo | undefined {
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

  getComponents(uiFramework: string, vueVersion: 'vue2' | 'vue3' = 'vue3'): ComponentInfo[] {
    const allComponents: ComponentInfo[] = [];
    const detectedFramework = this.detectFramework(uiFramework, vueVersion);

    for (const components of this.components.values()) {
      const frameworkComponents = components.filter(
        comp =>
          (comp.uiFramework === detectedFramework || comp.uiFramework === 'common') &&
          (comp.vueVersion === vueVersion || comp.vueVersion === 'common'),
      );
      allComponents.push(...frameworkComponents);
    }

    const uniqueComponents = new Map<string, ComponentInfo>();
    for (const component of allComponents) {
      const key = `${component.uiFramework}-${component.type}`;
      if (!uniqueComponents.has(key) || component.vueVersion !== 'common') {
        uniqueComponents.set(key, component);
      }
    }

    return Array.from(uniqueComponents.values());
  }

  categorizeComponents(components: ComponentInfo[]) {
    const formComponents: ComponentInfo[] = [];
    const layoutComponents: ComponentInfo[] = [];
    const assistComponents: ComponentInfo[] = [];
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
      if (comp.isField) {
        // 表单组件：用于数据输入和收集
        formComponents.push(componentInfo);
      } else if (comp.isContainer) {
        // 布局组件：用于页面布局和结构
        layoutComponents.push(componentInfo);
      } else {
        // 辅助组件：其他功能组件
        assistComponents.push(componentInfo);
      }
    });

    return {
      formComponents: {
        name: '表单组件',
        description: '用于数据输入、收集和验证的组件',
        count: formComponents.length,
        components: formComponents,
      },
      layoutComponents: {
        name: '布局组件',
        description: '用于页面布局和结构组织的组件',
        count: layoutComponents.length,
        components: layoutComponents,
      },
      assistComponents: {
        name: '辅助组件',
        description: '提供其他功能的辅助组件',
        count: assistComponents.length,
        components: assistComponents,
      },
    };
  }

  private detectFramework(uiFramework: string, vueVersion: 'vue2' | 'vue3'): string {
    if (uiFramework === 'element-plus') {
      return vueVersion === 'vue2' ? 'element-ui' : 'element-plus';
    }

    if (uiFramework === 'ta404ui') {
      return 'ta404ui';
    }

    if (uiFramework === 'element-ui') {
      return 'element-ui';
    }

    if (uiFramework === 'ant-design-vue') {
      return 'ant-design-vue';
    }

    if (uiFramework === 'vant') {
      return 'vant';
    }

    // 默认返回 element-plus
    return 'element-plus';
  }
}
