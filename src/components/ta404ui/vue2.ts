import { ComponentInfo } from '../../core/component-registry.js';

export const vantVue2Components: ComponentInfo[] = [
  {
    type: 'input',
    label: '输入框',
    uiFramework: 'vant',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'input',
        field: 'Fti2mguy3bd9acc',
        title: '输入框',
        _fc_id: 'id_Flcamguy3bd9adc',
        name: 'ref_Fdzfmguy3bd9aec',
        _fc_drag_tag: 'input',
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
        options: [
          'text',
          'number',
          'time',
          'date',
          'month',
          'datetime-local',
        ],
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
  {
    type: 'textarea',
    label: '多行输入框',
    uiFramework: 'vant',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'input',
        field: 'Fvkfmguy3bd9agc',
        title: '多行输入框',
        props: {
          type: 'textarea',
        },
        _fc_id: 'id_F99kmguy3bd9ahc',
        name: 'ref_Ful7mguy3bd9aic',
        _fc_drag_tag: 'textarea',
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
        name: 'showWordLimit',
        type: 'boolean',
        description: '是否显示字数统计',
        required: false,
      },
      {
        name: 'clearable',
        type: 'boolean',
        description: '是否启用清除图标',
        required: false,
      },
      {
        name: 'rows',
        type: 'number',
        description: '输入框行数',
        required: false,
      },
      {
        name: 'autosize',
        type: 'boolean',
        description: '是否自适应内容高度',
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
  {
    type: 'password',
    label: '密码输入框',
    uiFramework: 'vant',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'input',
        field: 'F56xmguy3bd9akc',
        title: '密码输入框',
        props: {
          type: 'password',
        },
        _fc_id: 'id_Ft5lmguy3bd9alc',
        name: 'ref_F3q2mguy3bd9amc',
        _fc_drag_tag: 'password',
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
  }
];
