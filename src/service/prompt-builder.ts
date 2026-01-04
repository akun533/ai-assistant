import { ComponentRegistry } from '../core/component-registry.js';

/**
 * 提示词构建器
 * 负责读取系统提示词、构建组件列表、会话信息等
 */
export class PromptBuilder {
  private componentRegistry: ComponentRegistry;

  constructor(componentRegistry: ComponentRegistry) {
    this.componentRegistry = componentRegistry;
  }

  /**
   * 读取系统提示词
   * 根据UI框架调用对应的提示词函数
   */
  readSystemPrompt(version: { ui: string; vue: 'vue2' | 'vue3' }): string {
    return this.componentRegistry.getSystemPrompt(version.ui, version.vue);
  }

  /**
   * 生成会话信息部分
   */
  buildSessionInfo(sessionId: string, ui: string, vueVersion: 'vue2' | 'vue3'): string {
    return `<session_id readonly>
${sessionId}
</session_id>
<ui readonly>
${ui}
</ui>
<vue_version readonly>
${vueVersion}
</vue_version>`;
  }

  /**
   * 生成组件列表部分
   */
  buildComponentList(
    categorizedComponents: ReturnType<ComponentRegistry['categorizeComponents']>,
    version: { ui: string; vue: 'vue2' | 'vue3' },
  ): string {
    const sections = this.componentRegistry.getSections(categorizedComponents, version.ui, version.vue);

    const componentListParts = sections.map(section => {
      const componentItems = section.category.components.map(comp => `- ${comp.type}: ${comp.label}`).join('\n');

      return `## ${section.title} (${section.category.count}个)
${section.category.description}
${componentItems}`;
    });

    return `## 可用组件列表
${componentListParts.join('\n\n')}

请只使用以上组件来构建您的表单规则。`;
  }

  /**
   * 生成用户规则部分
   */
  buildUserRule(formRule: any): string {
    if (!formRule) {
      return '';
    }

    return `
<current_user_rule>
${JSON.stringify(formRule)}
</current_user_rule>`;
  }

  /**
   * 构建增强的系统提示词
   */
  buildEnhancedSystemPrompt(
    sessionId: string,
    version: { ui: string; vue: 'vue2' | 'vue3' },
    formRule?: any,
  ): string {
    const systemPrompt = this.readSystemPrompt(version);
    const sessionInfo = this.buildSessionInfo(sessionId, version.ui, version.vue);
    const components = this.componentRegistry.getComponents(version.ui, version.vue);
    const categorizedComponents = this.componentRegistry.categorizeComponents(components);
    const componentList = this.buildComponentList(categorizedComponents, version);
    const userRule = this.buildUserRule(formRule);

    return `${systemPrompt}
${sessionInfo}

${componentList}

${userRule}`;
  }

  /**
   * 获取UI版本信息
   */
  getUiVersion(ui: string): { ui: string; vue: 'vue2' | 'vue3' } {
    const alias = {
      'element-plus': {
        ui: 'element-plus',
        vue: 'vue3',
      },
      'element-ui': {
        ui: 'element-ui',
        vue: 'vue2',
      },
      vant: {
        ui: 'vant',
        vue: 'vue3',
      },
      'vant@vue2': {
        ui: 'vant',
        vue: 'vue2',
      },
      'ant-design-vue': {
        ui: 'ant-design-vue',
        vue: 'vue3',
      },
      'ant-design-vue@vue2': {
        ui: 'ant-design-vue',
        vue: 'vue2',
      },
      'ta404-ui@vue2': {
        ui: 'ta404-ui',
        vue: 'vue2',
      },
    } as { [key: string]: { ui: string; vue: 'vue2' | 'vue3' } };
    return alias[ui] || alias['element-plus'];
  }
}
