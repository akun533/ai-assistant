import { YinhaiComponentInfo } from '../../core/yinhai-component-registry';

export const ta404uiComponents: YinhaiComponentInfo[] = [
  {
    type: 'single-input',
    label: '单行文本',
    uiFramework: 'ta404ui',
    vueVersion: 'vue2',
    fieldType: 'input',
    examples: [
      {
        type: 'single-input',
        label: '单行文本',
        span: 8,
        display: 'true',
        autoShow: false,
        tools: {},
        fieldDecoratorId: 'SA6D8AA6',
        renderId: 'FD32JD6D8H',
        labelStyle: '{}',
      },
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用输入框',
        required: false,
      },
      {
        name: 'type',
        type: 'string',
        description: '类型',
        required: false,
        options: ['text', 'number', 'time', 'date', 'month', 'datetime-local'],
      },
      {
        name: 'readonly',
        type: 'boolean',
        description: '是否为只读状态',
        required: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '输入框占位提示文字',
        required: false,
      },
      {
        name: 'maxlength',
        type: 'number',
        description: '输入的最大字符数',
        required: false,
      },
      {
        name: 'clearable',
        type: 'boolean',
        description: '是否启用清除图标',
        required: false,
      },
    ],
    events: [
      {
        name: 'blur',
        description: '失去焦点时触发',
      },
      {
        name: 'focus',
        description: '获得焦点时触发',
      },
      {
        name: 'clear',
        description: '在点击清空按钮时触发',
      },
      {
        name: 'click',
        description: '点击组件时触发',
      },
    ],
  },
];
