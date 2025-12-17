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
  type: 'layout' | 'input' | 'select' | 'date' | 'assist' | 'display';
  list: TaComponent[];
}

import taComponents from './form/fieldsConfig';
import fieldsProps from './form/fieldsProps';

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

      const optionProps = fieldsProps[item.type]?.props;

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

export const ta404uiComponents: ComponentInfo[] = getTaComponents();
