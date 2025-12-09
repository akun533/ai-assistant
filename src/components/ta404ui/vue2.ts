import { ComponentInfo } from '../../core/component-registry';

interface TaComponent extends Omit<ComponentInfo, 'events' | 'props' | 'fieldType' | 'uiFramework' | 'vueVersion' | 'label'> {
  type: string;
  label: string;
  icon: string;
  span?: number;
  display: string | boolean;
  tools: Record<string, any>;
  eventsDefinitions?: Record<string, any>;
  vueVersion?: 'vue2' | 'vue3' | 'common'; // 可选属性，因为不是所有地方都需要
  [key: string]: any;
}

interface TaComponentGroup {
  title: string;
  type: 'layout' | 'input' | 'select' | 'date' | 'other' | '';
  list: TaComponent[];
}

import taComponents from './form/fieldsConfig';


/**
 * 根据组件类型获取默认属性配置
 * @param fieldType 组件字段类型
 * @returns 属性配置数组
 */
const getDefaultPropsByFieldType = (fieldType: string): ComponentInfo['props'] => {
  // 通用属性
  const commonProps: ComponentInfo['props'] = [
    {
      name: 'disabled',
      type: 'boolean',
      description: '是否禁用输入框',
      required: false,
    },
    {
      name: 'placeholder',
      type: 'string',
      description: '输入框占位提示文字',
      required: false,
    },
  ];

  // 根据不同的组件类型返回相应的属性
  switch (fieldType) {
    case 'input':
    case 'select':
    case 'date':
      return [
        ...commonProps,
        {
          name: 'allowClear',
          type: 'boolean',
          description: '是否启用清除图标',
          required: false,
        },
      ];
    default:
      return commonProps;
  }
};

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
 * 获取ta404ui组件配置信息
 * @returns ComponentInfo数组
 */
const getTaComponents = (): ComponentInfo[] => {
  // @ts-ignore
  const taComponentTemp: TaComponentGroup[] = taComponents;
  return taComponentTemp.flatMap(group =>
    group.list.map(item => {
      const eventsDefinitions = item.eventsDefinitions || {};
      const fieldType = group.type || 'other';

      return {
        type: item.type,
        label: item.label,
        uiFramework: 'ta404ui',
        vueVersion: 'vue2',
        fieldType,
        examples: [
          JSON.parse(JSON.stringify(item)),
        ],
        props: getDefaultPropsByFieldType(fieldType),
        events: parseComponentEvents(eventsDefinitions),
      } satisfies ComponentInfo;
    }),
  );
};

export const ta404uiComponents: ComponentInfo[] = getTaComponents();
