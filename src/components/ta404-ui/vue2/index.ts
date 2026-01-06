import { ComponentInfo } from '../../../core/component-registry';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export interface TaComponent extends Omit<ComponentInfo, 'events' | 'props' | 'fieldType' | 'uiFramework' | 'vueVersion' | 'label'> {
  type: string;
  label?: string;
  icon?: string;
  span?: number;
  display?: string | boolean;
  tools?: Record<string, any>;
  eventsDefinitions?: Record<string, any>;
  vueVersion?: 'vue2' | 'vue3' | 'common'; // 可选属性，因为不是所有地方都需要
  [key: string]: any;
}

export interface TaComponentGroup {
  title: string;
  type: 'layout' | 'input' | 'select' | 'date' | 'assist' | 'display';
  list: TaComponent[];
}

import taComponents from './form/fieldsConfig.js';
import fieldsProps, { PropsDefinition } from './form/fieldsProps.js';
import sections from './sections.js'
import usage from './usage.js';
import { ComponentProps, ValidationResult, validatorMap } from './form/fieldsPropsValidators';
import ta404uiFormToolsArray from '../tools/form/index.js';

/**
 * 解析组件事件配置
 * @param eventsDefinitions 事件定义对象
 * @returns 解析后的事件数组
 */
const parseComponentEvents = (eventsDefinitions: Record<string, any>): ComponentInfo['events'] => {
  return Object.entries(eventsDefinitions || {}).map(([name, definition]) => ({
    name,
    description: definition?.label || '',
    arguments: definition?.arguments || [],
  }));
};

/**
 * 获取ta404-ui组件配置信息
 * @returns ComponentInfo数组
 */
const getTaComponents = (): ComponentInfo[] => {
  // @ts-ignore
  const taComponentTemp: TaComponentGroup[] = taComponents;
  return taComponentTemp.flatMap(group =>
    group.list.map(item => {
      const eventsDefinitions = item.eventsDefinitions || {};
      const fieldType = group.type;

      const optionProps = JSON.parse(JSON.stringify(fieldsProps[item.type]?.props));

      optionProps?.forEach((prop: PropsDefinition) => {
        let description = prop.description;

        if (Object.hasOwn(prop, 'options') ) {
          description = `${description}。 可选值：${prop.options?.map((option: { value: string; label: string} | string | number | boolean) => {
            if (typeof option === 'object' && option !== null && 'value' in option && 'label' in option) {
              return `${option.value}-${option.label}`;
            }
            return String(option);
          }).join('， ')}`;
          prop.options = prop.options?.map((op) => {
            if (typeof op === 'object' && op !== null && 'value' in op) {
              return op.value;
            }
            return op;
          });
        }

        if (Object.hasOwn(prop, 'defaultValue')) {
          let defaultValue = prop.defaultValue;
          // 如果默认值是对象或数组，转换为JSON字符串
          if (typeof defaultValue === 'object' && defaultValue !== null) {
            defaultValue = JSON.stringify(defaultValue);
          }
          description = `${description}。 默认值：${defaultValue}`;
        }

        if (Object.hasOwn(prop, 'example')) {
          let example = prop.example;
          // 如果示例是对象或数组，转换为JSON字符串
          if (typeof example === 'object' && example !== null) {
            example = JSON.stringify(example);
          }
          description = `${description}。 示例：${example}`;
        }
        prop.description = description;

      });
      const cloneItem = JSON.parse(JSON.stringify(item));
      delete cloneItem.eventsDefinitions;
      return {
        type: item.type,
        label: item.label,
        uiFramework: 'ta404-ui',
        vueVersion: 'vue2',
        fieldType,
        examples: [
          cloneItem,
        ],
        props: optionProps,
        events: parseComponentEvents(eventsDefinitions),
      } satisfies ComponentInfo;
    }),
  );
};

/**
 * ta404-ui 组件分组展示配置
 */
export function getTa404uiVue2Sections() {
  return sections;
}

/**
 * 读取 ta404-ui 的系统提示词
 */
export function getTa404uiVue2Prompt(): string {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const promptPath = join(__dirname, '..', 'prompts', 'ta404-ui-prompt.md');
    return readFileSync(promptPath, 'utf-8');
  } catch (error) {
    console.error('❌ 读取 ta404-ui 提示词失败:', error);
    return '';
  }
}

/**
 * ta404-ui 组件使用说明
 */
export function getTa404uiVue2Usages(): Record<string, string> {
  return usage;
}

export function getTa404uiVue2Validators(): Record<string, (componentProps: ComponentProps | null | undefined) => ValidationResult> | null {
  return validatorMap
}

export const ta404uiVue2Components: ComponentInfo[] = getTaComponents();

export const ta404uiFormTools = ta404uiFormToolsArray;
