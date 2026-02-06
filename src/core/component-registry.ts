import {
  // element-plus | element-ui
  elementPlusComponents,
  elementUIComponents,
  getElementPlusPrompt,
  getElementUIPrompt,
  getElementPlusUsages,
  getElementUIUsages,
  getElementPlusCategory,
  getElementPlusSections,
  getElementUICategory,
  getElementUISections,

  // ant-design-vue
  antDesignVue2Components,
  antDesignVueComponents,
  getAntDesignVueUsages,
  getAntDesignVueSections,
  getAntDesignVueCategory,
  getAntDesignVuePrompt,

  // vant UI
  vantComponents,
  vantVue2Components,
  getVantPrompt,
  getVantUsages,
  getVantSections,
  getVantCategory,

  // ta404-ui
  ta404uiVue2Components,
  getTa404uiVue2Prompt,
  getTa404uiVue2Usages,
  getTa404uiVue2Sections,
  getTa404uiVue2Validators,
  ta404uiFormTools,
} from '../components/index.js';
import { PropsDefinition } from '../components/ta404-ui/vue2/form/fieldsProps.js';
import type { ToolRegistration } from '../types/index.js';
import { formTools } from '../components/common/tools/index.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { skillRegistry } from './skill-registry.js';

// 获取项目根目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '../../');

// 组件分类类型
export type ComponentCategory = 'form' | 'layout' | 'assist' | 'input' | 'select' | 'date' | 'display';

export interface ComponentInfo {
  type: string;
  label?: string;
  uiFramework: string;
  vueVersion: 'vue2' | 'vue3' | 'common';
  // 新增：组件所属分类，优先使用此字段进行分类
  category?: ComponentCategory;
  // 保留兼容性字段
  fieldType?: 'input' | 'layout' | 'date' | 'select' | 'display' | 'assist',
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
  } | PropsDefinition>;
  // 组件的事件和描述
  events?: Array<{
    name: string;
    description?: string;
  }>;
}

export class ComponentRegistry {
  private components: Map<string, ComponentInfo[]> = new Map();
  private tools: Map<string, ToolRegistration> = new Map();
  // 存储每个UI框架的自定义工具
  private frameworkTools: Map<string, Map<string, ToolRegistration>> = new Map();

  constructor() {
    this.initializeComponents();
    this.initializeTools();
    
    // 异步加载 Skills
    this.initializeSkills();
  }

  /**
   * 初始化 Skills（异步）
   */
  private async initializeSkills(): Promise<void> {
    try {
      const skillsDir = path.join(PROJECT_ROOT, 'skills');
      await skillRegistry.loadFromSkillsDir(skillsDir);
      
      // 将 Skill tools 合并到组件工具中
      const skillTools = skillRegistry.getAllTools();
      for (const tool of skillTools) {
        this.registerTool(tool);
      }
      
      console.log(`✅ ComponentRegistry: 已加载 ${skillRegistry.getAllSkills().length} 个 Skills`);
    } catch (error) {
      console.warn('⚠️ ComponentRegistry: 加载 Skills 失败，将仅使用组件工具');
    }
  }

  private initializeComponents() {
    // 注册通用组件（所有UI框架都支持，不区分Vue版本）
    // commonComponents.forEach((component: ComponentInfo) => {
    //   this.registerComponent(component.type, component);
    // });

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

    // 注册 ta404-ui 组件
    ta404uiVue2Components.forEach((component: ComponentInfo) => {
      this.registerComponent(component.type, component);
    });
  }

  /**
   * 获取组件使用说明
   * @param uiFramework UI框架
   * @param vueVersion Vue版本
   * @returns 使用说明对象
   */
  private getComponentUsages(uiFramework: string, vueVersion: 'vue2' | 'vue3' | 'common'): Record<string, string> {
    if (uiFramework === 'ta404-ui') {
      return getTa404uiVue2Usages();
    } else if (uiFramework === 'element-plus') {
      return getElementPlusUsages();
    } else if (uiFramework === 'element-ui') {
      return getElementUIUsages();
    } else if (uiFramework === 'vant') {
      return getVantUsages();
    } else if (uiFramework === 'ant-design-vue') {
      return getAntDesignVueUsages();
    }
    return {};
  }

  private registerComponent(type: string, component: ComponentInfo) {
    if (component.business && process.env.FORM_CREATE_BUSINESS !== 'true') {
      return;
    }
    if (!this.components.has(type)) {
      this.components.set(type, []);
    }
    // 根据 UI 框架和 Vue 版本获取对应的 usages
    const usages = this.getComponentUsages(component.uiFramework, component.vueVersion);
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

    // 如果还是没有找到，且当前框架不是 ta404-ui，则查找通用组件
    if (!component && detectedFramework !== 'ta404-ui') {
      component = components.find(
        comp => comp.uiFramework === 'common' && comp.vueVersion === 'common',
      );
    }

    return component;
  }

  getComponents(uiFramework: string, vueVersion: 'vue2' | 'vue3' = 'vue3'): ComponentInfo[] {
    const allComponents: ComponentInfo[] = [];
    const detectedFramework = this.detectFramework(uiFramework, vueVersion);

    // 如果是 ta404-ui 框架，则不包含公共组件
    const shouldIncludeCommon = detectedFramework !== 'ta404-ui';

    for (const components of this.components.values()) {
      const frameworkComponents = components.filter(
        comp =>
          (comp.uiFramework === detectedFramework || (shouldIncludeCommon && comp.uiFramework === 'common')) &&
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

  /**
   * 根据UI框架和组件类型获取分类
   * 调用各UI框架组件文件中定义的分类函数
   */
  private getComponentCategoryByType(
    componentType: string,
    uiFramework: string,
  ): ComponentCategory | undefined {
    // 根据不同UI框架调用对应的分类函数
    switch (uiFramework) {
      case 'element-plus':
        return getElementPlusCategory(componentType);

      case 'element-ui':
        return getElementUICategory(componentType);

      case 'ant-design-vue':
        return getAntDesignVueCategory(componentType);

      case 'vant':
        return getVantCategory(componentType);

      case 'ta404-ui':
        // ta404-ui 使用 fieldType 字段，不需要额外的分类配置
        return undefined;

      default:
        return undefined;
    }
  }

  /**
   * 获取组件分类
   * 优先级：
   * 1. 组件定义中的 category 字段
   * 2. 配置文件中定义的分类规则
   * 3. ta404-ui 的 fieldType 字段
   * 4. 根据 isField、isContainer 等字段判断
   */
  private getComponentCategory(comp: ComponentInfo): ComponentCategory {
    // 1. 优先使用显式定义的 category 字段
    if (comp.category) {
      return comp.category;
    }

    // 2. 使用配置文件中的分类规则
    const configCategory = this.getComponentCategoryByType(comp.type, comp.uiFramework);
    if (configCategory) {
      return configCategory;
    }

    // 3. ta404-ui: 使用 fieldType 字段
    if (comp.uiFramework === 'ta404-ui' && comp.fieldType) {
      return comp.fieldType;
    }

    // 4. 其他UI框架: 根据 isField、isContainer 等字段判断（兼容旧逻辑）
    if (comp.isField) {
      return 'form';
    }
    if (comp.isContainer) {
      return 'layout';
    }

    // 5. 默认归类为辅助组件
    return 'assist';
  }

  categorizeComponents(components: ComponentInfo[]) {
    const layoutComponents: ComponentInfo[] = [];
    const inputComponents: ComponentInfo[] = [];
    const selectComponents: ComponentInfo[] = [];
    const dateComponents: ComponentInfo[] = [];
    const formComponents: ComponentInfo[] = [];
    const assistComponents: ComponentInfo[] = [];
    const displayComponents: ComponentInfo[] = [];
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

      // 使用统一的分类方法
      const category = this.getComponentCategory(comp);

      switch (category) {
        case 'input':
          inputComponents.push(componentInfo);
          break;
        case 'layout':
          layoutComponents.push(componentInfo);
          break;
        case 'date':
          dateComponents.push(componentInfo);
          break;
        case 'select':
          selectComponents.push(componentInfo);
          break;
        case 'display':
          displayComponents.push(componentInfo);
          break;
        case 'form':
          formComponents.push(componentInfo);
          break;
        case 'assist':
        default:
          assistComponents.push(componentInfo);
          break;
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
        name: '容器布局组件',
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
      inputComponents: {
        name: '输入组件',
        description: '用于用户录入文本类型的信息的组件',
        count: inputComponents.length,
        components: inputComponents,
      },
      selectComponents: {
        name: '选择组件',
        description: '用户选择预定义选择项的组件',
        count: selectComponents.length,
        components: selectComponents,
      },
      dateComponents: {
        name: '日期时间组件',
        description: '用户录入时间类型字段的组件',
        count: dateComponents.length,
        components: dateComponents,
      },
      displayComponents: {
        name: '数据展示组件',
        description: '主要用于展示数据的组件，比如表格，文本span，段落p，步骤，时间轴等',
        count: displayComponents.length,
        components: displayComponents,
      },
    };
  }

  private detectFramework(uiFramework: string, vueVersion: 'vue2' | 'vue3'): string {
    if (uiFramework === 'element-plus') {
      return vueVersion === 'vue2' ? 'element-ui' : 'element-plus';
    }

    if (uiFramework === 'ta404-ui') {
      return 'ta404-ui';
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

  /**
   * 获取系统提示词
   * 根据UI框架和Vue版本返回对应的提示词
   */
  getSystemPrompt(uiFramework: string, vueVersion: 'vue2' | 'vue3'): string {
    console.log('开始读取系统提示词文件...');

    try {
      let prompt = '';

      // 根据UI框架调用对应的提示词函数
      if (uiFramework === 'ta404-ui') {
        prompt = getTa404uiVue2Prompt();
      } else if (uiFramework === 'element-plus') {
        prompt = getElementPlusPrompt();
      } else if (uiFramework === 'element-ui') {
        prompt = getElementUIPrompt();
      } else if (uiFramework === 'vant') {
        prompt = getVantPrompt();
      } else if (uiFramework === 'ant-design-vue') {
        prompt = getAntDesignVuePrompt();
      } else {
        // 默认使用 element-plus 的提示词
        prompt = getElementPlusPrompt();
      }

      if (prompt) {
        console.log('✅ 成功读取系统提示词文件');
      }

      return prompt;
    } catch (error) {
      console.error('❌ 读取系统提示词失败:', error);
      return '';
    }
  }

  /**
   * 获取组件分组展示配置
   * 根据不同UI框架调用对应的sections函数
   */
  getSections(
    categorizedComponents: ReturnType<ComponentRegistry['categorizeComponents']>,
    uiFramework: string,
    vueVersion: 'vue2' | 'vue3',
  ) {
    // 根据UI框架获取对应的sections配置
    let sectionsConfig;

    if (uiFramework === 'ta404-ui') {
      sectionsConfig = getTa404uiVue2Sections();
    } else if (uiFramework === 'element-plus') {
      sectionsConfig = getElementPlusSections();
    } else if (uiFramework === 'element-ui') {
      sectionsConfig = getElementUISections();
    } else if (uiFramework === 'vant') {
      sectionsConfig = getVantSections();
    } else if (uiFramework === 'ant-design-vue') {
      sectionsConfig = getAntDesignVueSections();
    } else {
      // 默认使用element-plus的配置
      sectionsConfig = getElementPlusSections();
    }

    // 将sections配置和实际的组件数据结合
    return sectionsConfig.map((section: { title: string; categoryKey: string }) => ({
      title: section.title,
      category: categorizedComponents[section.categoryKey as keyof typeof categorizedComponents],
    }));
  }

  /**
   * 初始化工具注册
   */
  private initializeTools() {
    // 注册公共表单工具
    this.registerTools(formTools);
    
    // 注册 ta404-ui 框架的自定义工具
    this.registerFrameworkTools('ta404-ui@vue2', ta404uiFormTools);
  }

  /**
   * 注册工具
   */
  registerTool(registration: ToolRegistration) {
    this.tools.set(registration.definition.name, registration);
  }

  /**
   * 批量注册工具
   */
  registerTools(registrations: ToolRegistration[]) {
    registrations.forEach((registration) => {
      this.registerTool(registration);
    });
  }

  /**
   * 为特定UI框架注册自定义工具
   */
  registerFrameworkTools(uiFramework: string, registrations: ToolRegistration[]) {
    if (!this.frameworkTools.has(uiFramework)) {
      this.frameworkTools.set(uiFramework, new Map());
    }
    const frameworkToolsMap = this.frameworkTools.get(uiFramework)!;
    registrations.forEach((registration) => {
      frameworkToolsMap.set(registration.definition.name, registration);
    });
  }

  /**
   * 获取工具处理器
   * 优先使用组件自定义的工具，没有则使用公共工具
   */
  getToolHandler(name: string, uiFramework?: string) {
    console.log('uiFramework', uiFramework);
    // 如果指定了UI框架，先查找该框架的自定义工具
    if (uiFramework) {
      const frameworkToolsMap = this.frameworkTools.get(uiFramework);
      if (frameworkToolsMap?.has(name)) {
        return frameworkToolsMap.get(name)?.handler;
      }
    }
    // 如果没有自定义工具，使用公共工具
    return this.tools.get(name)?.handler;
  }

  /**
   * 获取所有工具定义
   * 优先使用组件自定义工具，公共工具作为默认
   */
  getAllToolDefinitions(uiFramework?: string) {
    const toolsMap = new Map<string, any>();
    
    // 先添加公共工具
    Array.from(this.tools.values()).forEach(reg => {
      toolsMap.set(reg.definition.name, reg.definition);
    });
    
    // 如果指定了UI框架，用该框架的自定义工具覆盖同名公共工具
    if (uiFramework) {
      const frameworkToolsMap = this.frameworkTools.get(uiFramework);
      if (frameworkToolsMap) {
        Array.from(frameworkToolsMap.values()).forEach(reg => {
          toolsMap.set(reg.definition.name, reg.definition);
        });
      }
    }
    
    return Array.from(toolsMap.values());
  }

  /**
   * 获取所有已注册的工具
   * 优先使用组件自定义工具，公共工具作为默认
   */
  getAllTools(uiFramework?: string): ToolRegistration[] {
    const toolsMap = new Map<string, ToolRegistration>();
    
    // 先添加公共工具
    Array.from(this.tools.values()).forEach(reg => {
      toolsMap.set(reg.definition.name, reg);
    });
    
    // 如果指定了UI框架，用该框架的自定义工具覆盖同名公共工具
    if (uiFramework) {
      const frameworkToolsMap = this.frameworkTools.get(uiFramework);
      if (frameworkToolsMap) {
        Array.from(frameworkToolsMap.values()).forEach(reg => {
          toolsMap.set(reg.definition.name, reg);
        });
      }
    }
    
    return Array.from(toolsMap.values());
  }

  /**
   * 获取所有已注册的验证器
   * @param uiFramework
   */
  getValidators(uiFramework: string) {
    if (uiFramework === 'ta404-ui') {
      return getTa404uiVue2Validators();
    }
    return null;
  }
}
