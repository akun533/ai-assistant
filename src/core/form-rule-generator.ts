import { ComponentRegistry } from './component-registry.js';
import { validatorMap } from '../components/ta404-ui/form/componentValidators.js';

// 常量定义
export const ASSIST_COMPONENT_TYPES = ['fcRow', 'col'] as const;
export const CONTAINER_COMPONENT_TYPES = ['fcRow', 'col', 'group'] as const;
export const DEFAULT_CHILDREN_PATH = 'children' as const;
export const DEFAULT_UI_FRAMEWORK = 'element-plus' as const;

// 类型定义
export interface ValidateAndImproveResult {
  isValid: boolean;
  errors: string[];
  warnings?: string[];
  suggestions?: string[];
  improvedRule?: FormRule;
}

export interface FormRule {
  rule: FormField[];
  option?: Record<string, any>;
}

export interface FormField {
  type: string;
  field?: string;
  title?: string;
  name?: string;
  _fc_id?: string;
  props?: Record<string, any>;
  validate?: ValidateRule[];
  children?: FormField[] | string[];
  [key: string]: any;
}

export interface ValidateRule {
  required?: boolean;
  type?: string;
  message: string;
  trigger?: string;
  [key: string]: any;
}

export class FormRuleGenerator {
  private componentRegistry: ComponentRegistry;

  constructor(componentRegistry?: ComponentRegistry) {
    this.componentRegistry = componentRegistry || new ComponentRegistry();
  }

  /**
   * 根据路径设置对象的值
   */
  private setValueByPath(obj: any, path: string, value: any): void {
    if (!path) return;

    const keys = path.split('.');
    let current = obj;

    for (let i = 0; i < keys.length - 1; i++) {
      const key = keys[i];
      if (!current[key] || typeof current[key] !== 'object') {
        current[key] = {};
      }
      current = current[key];
    }

    current[keys[keys.length - 1]] = value;
  }

  /**
   * 根据路径获取对象的值
   */
  private getValueByPath(obj: any, path: string): any {
    if (!path || !obj) return undefined;

    const keys = path.split('.');
    let current = obj;

    for (const key of keys) {
      if (current == null || typeof current !== 'object') {
        return undefined;
      }
      current = current[key];
    }

    return current;
  }

  /**
   * 检查组件是否为辅助组件
   */
  private isAssistComponent(
    field: FormField,
    componentRegistry?: any,
    uiFramework: string = DEFAULT_UI_FRAMEWORK,
  ): boolean {
    return (
      ASSIST_COMPONENT_TYPES.includes(field.type as any) ||
      componentRegistry?.getComponent(field.type, uiFramework)?.isAssist === true
    );
  }

  /**
   * 检查组件是否为容器组件
   */
  private isContainerComponent(
    field: FormField,
    componentRegistry?: any,
    uiFramework: string = DEFAULT_UI_FRAMEWORK,
  ): boolean {
    return (
      CONTAINER_COMPONENT_TYPES.includes(field.type as any) ||
      componentRegistry?.getComponent(field.type, uiFramework)?.isContainer === true
    );
  }

  /**
   * 验证并改进表单规则（合并了验证和自动推断功能）
   */
  validateRule(
    rule: any,
    uiFramework: string = DEFAULT_UI_FRAMEWORK,
    componentRegistry?: any,
  ): ValidateAndImproveResult {
    const errors: string[] = [];
    const warnings: string[] = [];
    const suggestions: string[] = [];

    // 基础验证
    if (!rule || typeof rule !== 'object') {
      errors.push('规则必须是一个对象');
      return { isValid: false, errors, warnings, suggestions };
    }

    if (!rule.rule || !Array.isArray(rule.rule)) {
      errors.push('规则必须包含 rule 数组');
      return { isValid: false, errors, warnings, suggestions };
    }

    // 创建改进后的规则副本
    const improvedRule: FormRule = {
      ...rule,
      rule: JSON.parse(JSON.stringify(rule.rule)), // 深拷贝
    };

    const validateAndImproveField = (field: FormField | string, index: number, path: string = '') => {
      if (typeof field === 'string') {
        return;
      }

      // 使用 JSONPath 格式：$ 表示根节点，[] 表示数组索引
      const fieldPath = path ? `${path}.rule[${index}]` : `$.rule[${index}]`;

      if (!Object.is(uiFramework, 'ta404-ui')) {
        if (!field.props) {
          field.props = {};
        } else {
          Object.keys(field.props).forEach(key => {
            let flag = false;
            if (key === 'formCreateChild' && typeof field.props?.[key] === 'string') {
              field.children = [field.props[key]];
              flag = true;
            } else if (key.indexOf('formCreate') === 0 || key.indexOf('>') > 0) {
              let path = key;
              if (path.indexOf('formCreate') === 0) {
                path = path.replace('formCreate', '');
                path = path.replace(path[0], path[0].toLowerCase());
              } else {
                path = `props>${key}`;
              }
              this.setValueByPath(field, path.replace('>', '.'), field.props?.[key]);
              flag = true;
            }
            if (flag) {
              delete field.props?.[key];
            }
          });
        }

        if (!field.type) {
          errors.push(`${fieldPath} 缺少 type 属性`);
          suggestions.push(`为 ${fieldPath} 添加 type 属性，例如: "input", "select", "textarea" 等`);
          return;
        }

        // 检查组件是否支持
        let component = componentRegistry?.getComponent(field.type, uiFramework);
        if (!component && field._fc_drag_tag) {
          component = componentRegistry?.getComponent(field._fc_drag_tag, uiFramework);
          if (component) {
            field.type = component.examples[0].type;
          }
        }
        if (!component) {
          if (field?.children?.length) {
            component = {
              isField: !!field?.field,
              isAssist: !field?.field,
              isContainer: true,
            };
          } else {
            return;
          }
        }

        const isAssist = this.isAssistComponent(field, componentRegistry, uiFramework);
        const isContainer = this.isContainerComponent(field, componentRegistry, uiFramework);

        // 检查必需字段
        if (component.isField && !field.field) {
          errors.push(`${fieldPath} 缺少必需的 field 属性`);
          suggestions.push(`为 ${fieldPath} 添加 field 属性，例如: "username", "email" 等`);
        } else if (isAssist) {
          delete field.field;
        }

        if (!field._fc_drag_tag && component.type) {
          field._fc_drag_tag = component.type;
        }

        // 容器组件验证和改进
        const childrenPath = component?.childrenPath || DEFAULT_CHILDREN_PATH;

        // 如果组件定义了 childrenPath 且不是默认的 children，需要迁移子组件
        if (childrenPath !== DEFAULT_CHILDREN_PATH && field.children && Array.isArray(field.children)) {
          // 将 children 移动到正确的位置
          this.setValueByPath(field, childrenPath, field.children);
          delete field.children;
        }

        const children = this.getValueByPath(field, childrenPath);

        // 如果没有子组件，尝试自动推断并添加默认子组件
        if (isContainer && (!children || !Array.isArray(children) || children.length === 0)) {
          errors.push(`${fieldPath} 是容器组件，必须包含 ${childrenPath} 属性`);
          suggestions.push(`为 ${fieldPath} 添加 ${childrenPath} 属性，包含子组件数组`);
          if (component.examples && component.examples.length > 0) {
            suggestions.push(`参考示例: ${JSON.stringify(component.examples[0], null, 2)}`);
          }
        }

        // 递归验证和改进子组件
        if (children && Array.isArray(children)) {
          children.forEach((child: FormField, childIndex: number) => {
            // 使用 JSONPath 格式：在父路径基础上添加 .props.rule[index]
            const childPath = `${fieldPath}.${childrenPath}[${childIndex}]`;
            validateAndImproveField(child, childIndex, childPath);
          });
        }
      } else {
        console.log('调用了ta404-ui的组件校验函数');
        const validator = validatorMap[field.type];

        if (validator) {
          // 验证组件属性
          const result = validator(field);

          if (!result.isValid) {
            errors.push(...result.errors.map((error: any) => `${fieldPath} ${error}`));
          }
        }
      }

    };

    // 处理所有字段
    improvedRule.rule.forEach((field: FormField, index: number) => {
      validateAndImproveField(field, index);
    });

    // 对结果数组进行去重处理
    const uniqueErrors = [...new Set(errors)];
    const uniqueWarnings = [...new Set(warnings)];
    const uniqueSuggestions = [...new Set(suggestions)];

    return {
      isValid: uniqueErrors.length === 0,
      errors: uniqueErrors,
      warnings: uniqueWarnings,
      suggestions: uniqueSuggestions,
      improvedRule,
    };
  }
}
