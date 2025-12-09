import { ComponentInfo } from '../../core/component-registry.js';
import { commonComponents } from '../common';

export const elementUIComponents: ComponentInfo[] = [
  ...commonComponents,
  {
    type: 'input',
    label: '输入框',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'input',
        field: 'Fj7jmguygzs1acc',
        title: '输入框',
        _fc_id: 'id_Fbclmguygzs1adc',
        name: 'ref_Flbpmguygzs1aec',
        _fc_drag_tag: 'input',
      },
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'readonly',
        type: 'boolean',
        description: '是否只读',
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
        name: 'formCreateAttrs>maxlength',
        type: 'number',
        description: '最大输入长度',
        required: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '输入框占位文本',
        required: false,
      },
      {
        name: 'clearable',
        type: 'boolean',
        description: '是否显示清除按钮',
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
        name: 'change',
        description: '当值改变时，当组件失去焦点或用户按Enter时触发',
      },
      {
        name: 'input',
        description: '在值改变时触发',
      },
      {
        name: 'clear',
        description: '在点击清空按钮时触发',
      },
    ],
  },
  {
    type: 'textarea',
    label: '多行输入框',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'input',
        field: 'Fb1amguygzs1agc',
        title: '多行输入框',
        props: {
          type: 'textarea',
        },
        _fc_id: 'id_Fbeemguygzs1ahc',
        name: 'ref_Fgmrmguygzs1aic',
        _fc_drag_tag: 'textarea',
      },
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'readonly',
        type: 'boolean',
        description: '是否只读',
        required: false,
      },
      {
        name: 'formCreateAttrs>maxlength',
        type: 'number',
        description: '最大输入长度',
        required: false,
      },
      {
        name: 'showWordLimit',
        type: 'boolean',
        description: '是否显示统计字数',
        required: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '输入框占位文本',
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
        description: '高度是否自适应',
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
        name: 'change',
        description: '当值改变时，当组件失去焦点或用户按Enter时触发',
      },
      {
        name: 'input',
        description: '在值改变时触发',
      },
    ],
  },
  {
    type: 'password',
    label: '密码输入框',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'input',
        field: 'Fv6tmguygzs1akc',
        title: '密码输入框',
        props: {
          type: 'password',
        },
        _fc_id: 'id_Fyafmguygzs1alc',
        name: 'ref_Fw3kmguygzs1amc',
        _fc_drag_tag: 'password',
      },
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'readonly',
        type: 'boolean',
        description: '是否只读',
        required: false,
      },
      {
        name: 'formCreateAttrs>maxlength',
        type: 'number',
        description: '最大输入长度',
        required: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '输入框占位文本',
        required: false,
      },
      {
        name: 'clearable',
        type: 'boolean',
        description: '是否显示清除按钮',
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
        name: 'change',
        description: '当值改变时，当组件失去焦点或用户按Enter时触发',
      },
      {
        name: 'input',
        description: '在值改变时触发',
      },
      {
        name: 'clear',
        description: '在点击清空按钮时触发',
      },
    ],
  },
  {
    type: 'inputNumber',
    label: '计数器',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'inputNumber',
        field: 'Fvb7mguygzs1aoc',
        title: '数字输入框',
        _fc_id: 'id_Fggzmguygzs1apc',
        name: 'ref_Fp67mguygzs1aqc',
        _fc_drag_tag: 'inputNumber',
      },
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用计数器',
        required: false,
      },
      {
        name: 'min',
        type: 'number',
        description: '设置计数器允许的最小值',
        required: false,
      },
      {
        name: 'max',
        type: 'number',
        description: '设置计数器允许的最大值',
        required: false,
      },
      {
        name: 'precision',
        type: 'number',
        description: '数值精度',
        required: false,
      },
      {
        name: 'step',
        type: 'number',
        description: '计数器步长',
        required: false,
      },
      {
        name: 'stepStrictly',
        type: 'boolean',
        description: '是否只能输入 step 的倍数',
        required: false,
      },
      {
        name: 'controls',
        type: 'boolean',
        description: '是否使用控制按钮',
        required: false,
        defaultValue: true,
      },
      {
        name: 'controlsPosition',
        type: 'string',
        description: '控制按钮位置',
        required: false,
        options: [
          '',
          'right',
        ],
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '输入框占位文本',
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
        name: 'change',
        description: '当绑定值变化时触发',
      },
    ],
  },
  {
    type: 'radio',
    label: '单选框',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'radio',
        field: 'Fv2hmguygzs1asc',
        title: '单选框',
        options: [
          {
            label: '选项01',
            value: '1',
          },
          {
            label: '选项02',
            value: '2',
          },
          {
            label: '选项03',
            value: '3',
          },
        ],
        _fc_id: 'id_Ftzjmguygzs1atc',
        name: 'ref_F1ekmguygzs1auc',
        _fc_drag_tag: 'radio',
      },
    ],
    props: [
      {
        name: 'formCreateOptions',
        type: 'Array',
        description: '选项数据',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'input',
        type: 'boolean',
        description: '是否可以填写',
        required: false,
      },
      {
        name: 'type',
        type: 'boolean',
        description: '按钮形式',
        required: false,
      },
      {
        name: 'textColor',
        type: 'string',
        description: '按钮形式激活时的文本颜色',
        required: false,
      },
      {
        name: 'fill',
        type: 'string',
        description: '按钮形式激活时的填充色和边框色',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
    ],
  },
  {
    type: 'checkbox',
    label: '多选框',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'checkbox',
        field: 'Fnavmguygzs1awc',
        title: '多选框',
        options: [
          {
            label: '选项01',
            value: '1',
          },
          {
            label: '选项02',
            value: '2',
          },
          {
            label: '选项03',
            value: '3',
          },
        ],
        _fc_id: 'id_Fy8amguygzs1axc',
        name: 'ref_Ftrymguygzs1ayc',
        _fc_drag_tag: 'checkbox',
      },
    ],
    props: [
      {
        name: 'formCreateOptions',
        type: 'Array',
        description: '选项数据',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'input',
        type: 'boolean',
        description: '是否可以填写',
        required: false,
      },
      {
        name: 'type',
        type: 'boolean',
        description: '按钮类型',
        required: false,
      },
      {
        name: 'min',
        type: 'number',
        description: '可被勾选的最小数量',
        required: false,
      },
      {
        name: 'max',
        type: 'number',
        description: '可被勾选的最大数量',
        required: false,
      },
      {
        name: 'textColor',
        type: 'string',
        description: '当按钮为活跃状态时的字体颜色',
        required: false,
      },
      {
        name: 'fill',
        type: 'string',
        description: '当按钮为活跃状态时的边框和背景颜色',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
    ],
  },
  {
    type: 'select',
    label: '选择器',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'select',
        field: 'Fft7mguygzs1b0c',
        title: '选择器',
        options: [
          {
            label: '选项01',
            value: '1',
          },
          {
            label: '选项02',
            value: '2',
          },
          {
            label: '选项03',
            value: '3',
          },
        ],
        _fc_id: 'id_F6t0mguygzs1b1c',
        name: 'ref_Fbhxmguygzs1b2c',
        _fc_drag_tag: 'select',
      },
    ],
    props: [
      {
        name: 'formCreateOptions',
        type: 'Array',
        description: '选项数据',
        required: false,
      },
      {
        name: 'multiple',
        type: 'boolean',
        description: '是否多选',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'clearable',
        type: 'boolean',
        description: '是否可以清空选项',
        required: false,
      },
      {
        name: 'collapseTags',
        type: 'boolean',
        description: '多选时是否将选中值按文字的形式展示',
        required: false,
      },
      {
        name: 'multipleLimit',
        type: 'number',
        description: '多选时用户最多可以选择的项目数，为 0 则不限制',
        required: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '占位符',
        required: false,
      },
      {
        name: 'filterable',
        type: 'boolean',
        description: '是否可搜索',
        required: false,
      },
      {
        name: 'remote',
        type: 'boolean',
        description: '其中的选项是否从服务器远程加载',
        required: false,
      },
      {
        name: 'remoteMethod',
        type: 'string',
        description: '自定义远程搜索方法',
        required: false,
      },
      {
        name: 'allowCreate',
        type: 'boolean',
        description: '是否允许用户创建新条目',
        required: false,
      },
      {
        name: 'noMatchText',
        type: 'string',
        description: '搜索条件无匹配时显示的文字',
        required: false,
      },
      {
        name: 'noDataText',
        type: 'string',
        description: '选项为空时显示的文字',
        required: false,
      },
      {
        name: 'reserveKeyword',
        type: 'boolean',
        description: '多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词',
        required: false,
      },
      {
        name: 'defaultFirstOption',
        type: 'boolean',
        description: '在输入框按下回车，选择第一个匹配项',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'visibleChange',
        description: '下拉框出现/隐藏时触发',
      },
      {
        name: 'removeTag',
        description: '多选模式下移除tag时触发',
      },
      {
        name: 'clear',
        description: '在点击清空按钮时触发',
      },
      {
        name: 'blur',
        description: '失去焦点时触发',
      },
      {
        name: 'focus',
        description: '获得焦点时触发',
      },
    ],
  },
  {
    type: 'switch',
    label: '开关',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'switch',
        field: 'Fz9emguygzs1b4c',
        title: '开关',
        props: {
          activeValue: true,
          inactiveValue: false,
        },
        _fc_id: 'id_Fyz5mguygzs1b5c',
        name: 'ref_Fyevmguygzs1b6c',
        _fc_drag_tag: 'switch',
      },
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'width',
        type: 'number',
        description: '宽度（px）',
        required: false,
      },
      {
        name: 'activeText',
        type: 'string',
        description: '打开时的文字描述',
        required: false,
      },
      {
        name: 'inactiveText',
        type: 'string',
        description: '关闭时的文字描述',
        required: false,
      },
      {
        name: 'activeValue',
        type: 'string',
        description: '打开时的值',
        required: false,
      },
      {
        name: 'inactiveValue',
        type: 'string',
        description: '关闭时的值',
        required: false,
      },
      {
        name: 'activeColor',
        type: 'string',
        description: '打开时的背景色',
        required: false,
      },
      {
        name: 'inactiveColor',
        type: 'string',
        description: '关闭时的背景色',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
    ],
  },
  {
    type: 'rate',
    label: '评分',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'rate',
        field: 'F4llmguygzs2b8c',
        title: '评分',
        _fc_id: 'id_Faiwmguygzs2b9c',
        name: 'ref_Fe06mguygzs2bac',
        _fc_drag_tag: 'rate',
      },
    ],
    props: [
      {
        name: 'max',
        type: 'number',
        description: '最大分值',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'allowHalf',
        type: 'boolean',
        description: '是否允许半选',
        required: false,
      },
      {
        name: 'voidColor',
        type: 'string',
        description: '未选中时图标的颜色',
        required: false,
      },
      {
        name: 'disabledVoidColor',
        type: 'string',
        description: '只读时未选中时图标的颜色',
        required: false,
      },
      {
        name: 'voidIconClass',
        type: 'string',
        description: '未选中时图标的类名',
        required: false,
      },
      {
        name: 'disabledVoidIconClass',
        type: 'string',
        description: '只读时未选中时图标的类名',
        required: false,
      },
      {
        name: 'showScore',
        type: 'boolean',
        description: '是否显示当前分数',
        required: false,
      },
      {
        name: 'textColor',
        type: 'string',
        description: '辅助文字的颜色',
        required: false,
      },
      {
        name: 'scoreTemplate',
        type: 'string',
        description: '分数显示模板',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
    ],
  },
  {
    type: 'timePicker',
    label: '时间',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'timePicker',
        field: 'F7szmguygzs2bcc',
        title: '时间',
        _fc_id: 'id_Fm0emguygzs2bdc',
        name: 'ref_F6d8mguygzs2bec',
        _fc_drag_tag: 'timePicker',
      },
    ],
    props: [
      {
        name: 'readonly',
        type: 'boolean',
        description: '完全只读',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '禁用',
        required: false,
      },
      {
        name: 'isRange',
        type: 'boolean',
        description: '是否为时间范围选择',
        required: false,
      },
      {
        name: 'clearable',
        type: 'boolean',
        description: '是否显示清除按钮',
        required: false,
        defaultValue: true,
      },
      {
        name: 'pickerOptions',
        type: 'string',
        description: '当前时间日期选择器特有的选项',
        required: false,
      },
      {
        name: 'editable',
        type: 'boolean',
        description: '文本框可输入',
        required: false,
        defaultValue: true,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '非范围选择时的占位内容',
        required: false,
      },
      {
        name: 'startPlaceholder',
        type: 'string',
        description: '范围选择时开始日期的占位内容',
        required: false,
      },
      {
        name: 'endPlaceholder',
        type: 'string',
        description: '范围选择时结束日期的占位内容',
        required: false,
      },
      {
        name: 'arrowControl',
        type: 'boolean',
        description: '是否使用箭头进行时间选择',
        required: false,
      },
      {
        name: 'align',
        type: 'string',
        description: '对齐方式',
        required: false,
        options: [
          'left',
          'center',
          'right',
        ],
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'blur',
        description: '失去焦点时触发',
      },
      {
        name: 'focus',
        description: '获得焦点时触发',
      },
    ],
  },
  {
    type: 'timeRange',
    label: '时间区间',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'timePicker',
        field: 'Fhc1mguygzs2bgc',
        title: '时间区间',
        props: {
          isRange: true,
        },
        _fc_id: 'id_Fsgxmguygzs2bhc',
        name: 'ref_F1vhmguygzs2bic',
        _fc_drag_tag: 'timeRange',
      },
    ],
    props: [
      {
        name: 'readonly',
        type: 'boolean',
        description: '完全只读',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '禁用',
        required: false,
      },
      {
        name: 'clearable',
        type: 'boolean',
        description: '是否显示清除按钮',
        required: false,
        defaultValue: true,
      },
      {
        name: 'pickerOptions',
        type: 'string',
        description: '当前时间日期选择器特有的选项',
        required: false,
      },
      {
        name: 'editable',
        type: 'boolean',
        description: '文本框可输入',
        required: false,
        defaultValue: true,
      },
      {
        name: 'startPlaceholder',
        type: 'string',
        description: '范围选择时开始日期的占位内容',
        required: false,
      },
      {
        name: 'endPlaceholder',
        type: 'string',
        description: '范围选择时结束日期的占位内容',
        required: false,
      },
      {
        name: 'arrowControl',
        type: 'boolean',
        description: '是否使用箭头进行时间选择',
        required: false,
      },
      {
        name: 'align',
        type: 'string',
        description: '对齐方式',
        required: false,
        options: [
          'left',
          'center',
          'right',
        ],
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'blur',
        description: '失去焦点时触发',
      },
      {
        name: 'focus',
        description: '获得焦点时触发',
      },
    ],
  },
  {
    type: 'slider',
    label: '滑块',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'slider',
        field: 'F2x5mguygzs2bkc',
        title: '滑块',
        _fc_id: 'id_Fkkgmguygzs2blc',
        name: 'ref_F1spmguygzs2bmc',
        _fc_drag_tag: 'slider',
      },
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'range',
        type: 'boolean',
        description: '是否为范围选择',
        required: false,
      },
      {
        name: 'min',
        type: 'number',
        description: '最小值',
        required: false,
      },
      {
        name: 'max',
        type: 'number',
        description: '最大值',
        required: false,
      },
      {
        name: 'step',
        type: 'number',
        description: '步长',
        required: false,
      },
      {
        name: 'showInput',
        type: 'boolean',
        description: '是否显示输入框，仅在非范围选择时有效',
        required: false,
      },
      {
        name: 'showInputControls',
        type: 'boolean',
        description: '在显示输入框的情况下，是否显示输入框的控制按钮',
        required: false,
        defaultValue: true,
      },
      {
        name: 'showStops',
        type: 'boolean',
        description: '是否显示间断点',
        required: false,
      },
      {
        name: 'vertical',
        type: 'boolean',
        description: '是否竖向模式',
        required: false,
      },
      {
        name: 'height',
        type: 'string',
        description: 'Slider 高度，竖向模式时必填',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'input',
        description: '在值改变时触发',
      },
    ],
  },
  {
    type: 'datePicker',
    label: '日期',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'datePicker',
        field: 'F4pcmguygzs2boc',
        title: '日期',
        _fc_id: 'id_F39smguygzs2bpc',
        name: 'ref_Fz61mguygzs2bqc',
        _fc_drag_tag: 'datePicker',
      },
    ],
    props: [
      {
        name: 'readonly',
        type: 'boolean',
        description: '完全只读',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '禁用',
        required: false,
      },
      {
        name: 'type',
        type: 'string',
        description: '显示类型',
        required: false,
        options: [
          'year',
          'month',
          'date',
          'dates',
          'week',
          'datetime',
          'datetimerange',
          'daterange',
          'monthrange',
        ],
      },
      {
        name: 'clearable',
        type: 'boolean',
        description: '是否显示清除按钮',
        required: false,
        defaultValue: true,
      },
      {
        name: 'pickerOptions',
        type: 'string',
        description: '当前时间日期选择器特有的选项',
        required: false,
      },
      {
        name: 'editable',
        type: 'boolean',
        description: '文本框可输入',
        required: false,
        defaultValue: true,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '非范围选择时的占位内容',
        required: false,
      },
      {
        name: 'startPlaceholder',
        type: 'string',
        description: '范围选择时开始日期的占位内容',
        required: false,
      },
      {
        name: 'endPlaceholder',
        type: 'string',
        description: '范围选择时结束日期的占位内容',
        required: false,
      },
      {
        name: 'format',
        type: 'string',
        description: '显示在输入框中的格式',
        required: false,
      },
      {
        name: 'rangeSeparator',
        type: 'string',
        description: '选择范围时的分隔符',
        required: false,
      },
      {
        name: 'unlinkPanels',
        type: 'boolean',
        description: '在范围选择器里取消两个日期面板之间的联动',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'blur',
        description: '失去焦点时触发',
      },
      {
        name: 'focus',
        description: '获得焦点时触发',
      },
    ],
  },
  {
    type: 'dateRange',
    label: '日期区间',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'datePicker',
        field: 'F534mguygzs2bsc',
        title: '日期区间',
        props: {
          type: 'datetimerange',
        },
        _fc_id: 'id_Fbkymguygzs2btc',
        name: 'ref_Fuuemguygzs2buc',
        _fc_drag_tag: 'dateRange',
      },
    ],
    props: [
      {
        name: 'readonly',
        type: 'boolean',
        description: '完全只读',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '禁用',
        required: false,
      },
      {
        name: 'type',
        type: 'string',
        description: '显示类型',
        required: false,
        options: [
          'datetimerange',
          'daterange',
          'monthrange',
        ],
      },
      {
        name: 'clearable',
        type: 'boolean',
        description: '是否显示清除按钮',
        required: false,
        defaultValue: true,
      },
      {
        name: 'pickerOptions',
        type: 'string',
        description: '当前时间日期选择器特有的选项',
        required: false,
      },
      {
        name: 'editable',
        type: 'boolean',
        description: '文本框可输入',
        required: false,
        defaultValue: true,
      },
      {
        name: 'startPlaceholder',
        type: 'string',
        description: '范围选择时开始日期的占位内容',
        required: false,
      },
      {
        name: 'endPlaceholder',
        type: 'string',
        description: '范围选择时结束日期的占位内容',
        required: false,
      },
      {
        name: 'format',
        type: 'string',
        description: '显示在输入框中的格式',
        required: false,
      },
      {
        name: 'align',
        type: 'string',
        description: '对齐方式',
        required: false,
        options: [
          'left',
          'center',
          'right',
        ],
      },
      {
        name: 'rangeSeparator',
        type: 'string',
        description: '选择范围时的分隔符',
        required: false,
      },
      {
        name: 'unlinkPanels',
        type: 'boolean',
        description: '在范围选择器里取消两个日期面板之间的联动',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'blur',
        description: '失去焦点时触发',
      },
      {
        name: 'focus',
        description: '获得焦点时触发',
      },
    ],
  },
  {
    type: 'colorPicker',
    label: '颜色选择器',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'colorPicker',
        field: 'Fjnjmguygzs2bwc',
        title: '颜色选择器',
        props: {
        },
        _fc_id: 'id_Fb1cmguygzs2bxc',
        name: 'ref_Feztmguygzs2byc',
        _fc_drag_tag: 'colorPicker',
      },
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'showAlpha',
        type: 'boolean',
        description: '是否支持透明度选择',
        required: false,
      },
      {
        name: 'colorFormat',
        type: 'string',
        description: '颜色的格式',
        required: false,
        options: [
          'hsl',
          'hsv',
          'hex',
          'rgb',
        ],
      },
      {
        name: 'predefine',
        type: 'string',
        description: '预定义颜色',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'activeChange',
        description: '面板中当前显示的颜色发生改变时触发',
      },
      {
        name: 'focus',
        description: '获得焦点时触发',
      },
      {
        name: 'blur',
        description: '失去焦点时触发',
      },
    ],
  },
  {
    type: 'cascader',
    label: '级联选择器',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'cascader',
        field: 'Fekdmguygzs2c0c',
        title: '级联选择器',
        props: {
          options: [
            {
              label: '选项201',
              value: '1',
              children: [
                {
                  label: '选项1-101',
                  value: '2',
                  children: [
                    {
                      label: '选项1-1-01',
                      value: '3',
                    },
                    {
                      label: '选项1-1-02',
                      value: '4',
                    },
                    {
                      label: '选项1-1-03',
                      value: '5',
                    },
                  ],
                },
                {
                  label: '选项1-102',
                  value: '6',
                  children: [
                    {
                      label: '选项1-2-01',
                      value: '7',
                    },
                    {
                      label: '选项1-2-02',
                      value: '8',
                    },
                    {
                      label: '选项1-2-03',
                      value: '9',
                    },
                  ],
                },
                {
                  label: '选项1-103',
                  value: '10',
                  children: [
                    {
                      label: '选项1-3-01',
                      value: '11',
                    },
                    {
                      label: '选项1-3-02',
                      value: '12',
                    },
                    {
                      label: '选项1-3-03',
                      value: '13',
                    },
                  ],
                },
              ],
            },
            {
              label: '选项202',
              value: '14',
              children: [
                {
                  label: '选项2-101',
                  value: '15',
                  children: [
                    {
                      label: '选项2-1-01',
                      value: '16',
                    },
                    {
                      label: '选项2-1-02',
                      value: '17',
                    },
                    {
                      label: '选项2-1-03',
                      value: '18',
                    },
                  ],
                },
                {
                  label: '选项2-102',
                  value: '19',
                  children: [
                    {
                      label: '选项2-2-01',
                      value: '20',
                    },
                    {
                      label: '选项2-2-02',
                      value: '21',
                    },
                    {
                      label: '选项2-2-03',
                      value: '22',
                    },
                  ],
                },
                {
                  label: '选项2-103',
                  value: '23',
                  children: [
                    {
                      label: '选项2-3-01',
                      value: '24',
                    },
                    {
                      label: '选项2-3-02',
                      value: '25',
                    },
                    {
                      label: '选项2-3-03',
                      value: '26',
                    },
                  ],
                },
              ],
            },
            {
              label: '选项203',
              value: '27',
              children: [
                {
                  label: '选项3-101',
                  value: '28',
                  children: [
                    {
                      label: '选项3-1-01',
                      value: '29',
                    },
                    {
                      label: '选项3-1-02',
                      value: '30',
                    },
                    {
                      label: '选项3-1-03',
                      value: '31',
                    },
                  ],
                },
                {
                  label: '选项3-102',
                  value: '32',
                  children: [
                    {
                      label: '选项3-2-01',
                      value: '33',
                    },
                    {
                      label: '选项3-2-02',
                      value: '34',
                    },
                    {
                      label: '选项3-2-03',
                      value: '35',
                    },
                  ],
                },
                {
                  label: '选项3-103',
                  value: '36',
                  children: [
                    {
                      label: '选项3-3-01',
                      value: '37',
                    },
                    {
                      label: '选项3-3-02',
                      value: '38',
                    },
                    {
                      label: '选项3-3-03',
                      value: '39',
                    },
                  ],
                },
              ],
            },
          ],
        },
        _fc_id: 'id_Figdmguygzs2c1c',
        name: 'ref_Fvkfmguygzs2c2c',
        _fc_drag_tag: 'cascader',
      },
    ],
    props: [
      {
        name: 'options',
        type: 'Array',
        description: '选项数据',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'clearable',
        type: 'boolean',
        description: '是否支持清空选项',
        required: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '输入框占位文本',
        required: false,
      },
      {
        name: 'props',
        type: 'string',
        description: '配置选项',
        required: false,
      },
      {
        name: 'showAllLevels',
        type: 'boolean',
        description: '输入框中是否显示选中值的完整路径',
        required: false,
        defaultValue: true,
      },
      {
        name: 'collapseTags',
        type: 'boolean',
        description: '多选模式下是否折叠Tag',
        required: false,
      },
      {
        name: 'collapseTagsTooltip',
        type: 'boolean',
        description: '当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签',
        required: false,
      },
      {
        name: 'separator',
        type: 'string',
        description: '选项分隔符',
        required: false,
      },
      {
        name: 'filterable',
        type: 'boolean',
        description: '该选项是否可以被搜索',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'expandChange',
        description: '当展开节点发生变化时触发',
      },
      {
        name: 'blur',
        description: '失去焦点时触发',
      },
      {
        name: 'focus',
        description: '获得焦点时触发',
      },
      {
        name: 'visibleChange',
        description: '下拉框出现/隐藏时触发',
      },
      {
        name: 'removeTag',
        description: '在多选模式下，移除Tag时触发',
      },
    ],
  },
  {
    type: 'upload',
    label: '上传',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'upload',
        field: 'F8b4mguygzs2c4c',
        title: '上传',
        props: {
          action: '/',
          onSuccess: '$FNX:const res = $inject.args[0];\nconst file = $inject.args[1];\n\nfile.url = res.data.url;',
        },
        _fc_id: 'id_Fiv0mguygzs2c5c',
        name: 'ref_Fs1zmguygzs2c6c',
        _fc_drag_tag: 'upload',
      },
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'listType',
        type: 'string',
        description: '上传类型',
        required: false,
        options: [
          'text',
          'picture',
          'picture-card',
        ],
      },
      {
        name: 'multiple',
        type: 'boolean',
        description: '是否支持多选文件',
        required: false,
      },
      {
        name: 'name',
        type: 'string',
        description: '上传的文件字段名',
        required: false,
      },
      {
        name: 'accept',
        type: 'string',
        description: '接受上传的文件类型',
        required: false,
      },
      {
        name: 'action',
        type: 'string',
        description: '上传的地址(必填)',
        required: false,
      },
      {
        name: 'beforeUpload',
        type: 'string',
        description: '上传文件之前触发',
        required: false,
      },
      {
        name: 'beforeRemove',
        type: 'string',
        description: '删除文件之前触发',
        required: false,
      },
      {
        name: 'onRemove',
        type: 'string',
        description: '文件列表移除文件时触发',
        required: false,
      },
      {
        name: 'onSuccess',
        type: 'string',
        description: '上传成功时触发',
        required: false,
      },
      {
        name: 'onPreview',
        type: 'string',
        description: '点击文件列表中已上传的文件时触发',
        required: false,
      },
      {
        name: 'headers',
        type: 'string',
        description: '设置上传的请求头部',
        required: false,
      },
      {
        name: 'data',
        type: 'string',
        description: '上传时附带的额外参数',
        required: false,
      },
      {
        name: 'withCredentials',
        type: 'boolean',
        description: '支持发送 cookie 凭证信息',
        required: false,
      },
      {
        name: 'autoUpload',
        type: 'boolean',
        description: '是否在选取文件后立即进行上传',
        required: false,
        defaultValue: true,
      },
      {
        name: 'limit',
        type: 'number',
        description: '最大允许上传个数',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'elTransfer',
    label: '穿梭框',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'elTransfer',
        field: 'Fntzmguygzs3c8c',
        title: '穿梭框',
        props: {
          data: [
            {
              label: '选项01',
              key: '1',
            },
            {
              label: '选项02',
              key: '2',
            },
            {
              label: '选项03',
              key: '3',
            },
          ],
        },
        _fc_id: 'id_Fudwmguygzs3c9c',
        name: 'ref_Fojlmguygzs3cac',
        _fc_drag_tag: 'elTransfer',
      },
    ],
    props: [
      {
        name: 'data',
        type: 'Array',
        description: '选项数据',
        required: false,
      },
      {
        name: 'filterable',
        type: 'boolean',
        description: '是否可搜索',
        required: false,
      },
      {
        name: 'filterPlaceholder',
        type: 'string',
        description: '搜索框占位符',
        required: false,
      },
      {
        name: 'targetOrder',
        type: 'string',
        description: '右侧列表元素的排序策略',
        required: false,
        options: [
          'original',
          'push',
          'unshift',
        ],
      },
      {
        name: 'titles',
        type: 'string',
        description: '自定义列表标题',
        required: false,
      },
      {
        name: 'buttonTexts',
        type: 'string',
        description: '自定义按钮文案',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'leftCheckChange',
        description: '左侧列表元素被用户选中 / 取消选中时触发',
      },
      {
        name: 'rightCheckChange',
        description: '右侧列表元素被用户选中 / 取消选中时触发',
      },
    ],
  },
  {
    type: 'tree',
    label: '树形控件',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'tree',
        field: 'Ftjxmguygzs3ccc',
        title: '树形控件',
        props: {
          props: {
            label: 'label',
          },
          showCheckbox: true,
          nodeKey: 'id',
          data: [
            {
              label: '选项201',
              id: '1',
              children: [
                {
                  label: '选项1-101',
                  id: '2',
                  children: [
                    {
                      label: '选项1-1-01',
                      id: '3',
                    },
                    {
                      label: '选项1-1-02',
                      id: '4',
                    },
                    {
                      label: '选项1-1-03',
                      id: '5',
                    },
                  ],
                },
                {
                  label: '选项1-102',
                  id: '6',
                  children: [
                    {
                      label: '选项1-2-01',
                      id: '7',
                    },
                    {
                      label: '选项1-2-02',
                      id: '8',
                    },
                    {
                      label: '选项1-2-03',
                      id: '9',
                    },
                  ],
                },
                {
                  label: '选项1-103',
                  id: '10',
                  children: [
                    {
                      label: '选项1-3-01',
                      id: '11',
                    },
                    {
                      label: '选项1-3-02',
                      id: '12',
                    },
                    {
                      label: '选项1-3-03',
                      id: '13',
                    },
                  ],
                },
              ],
            },
            {
              label: '选项202',
              id: '14',
              children: [
                {
                  label: '选项2-101',
                  id: '15',
                  children: [
                    {
                      label: '选项2-1-01',
                      id: '16',
                    },
                    {
                      label: '选项2-1-02',
                      id: '17',
                    },
                    {
                      label: '选项2-1-03',
                      id: '18',
                    },
                  ],
                },
                {
                  label: '选项2-102',
                  id: '19',
                  children: [
                    {
                      label: '选项2-2-01',
                      id: '20',
                    },
                    {
                      label: '选项2-2-02',
                      id: '21',
                    },
                    {
                      label: '选项2-2-03',
                      id: '22',
                    },
                  ],
                },
                {
                  label: '选项2-103',
                  id: '23',
                  children: [
                    {
                      label: '选项2-3-01',
                      id: '24',
                    },
                    {
                      label: '选项2-3-02',
                      id: '25',
                    },
                    {
                      label: '选项2-3-03',
                      id: '26',
                    },
                  ],
                },
              ],
            },
            {
              label: '选项203',
              id: '27',
              children: [
                {
                  label: '选项3-101',
                  id: '28',
                  children: [
                    {
                      label: '选项3-1-01',
                      id: '29',
                    },
                    {
                      label: '选项3-1-02',
                      id: '30',
                    },
                    {
                      label: '选项3-1-03',
                      id: '31',
                    },
                  ],
                },
                {
                  label: '选项3-102',
                  id: '32',
                  children: [
                    {
                      label: '选项3-2-01',
                      id: '33',
                    },
                    {
                      label: '选项3-2-02',
                      id: '34',
                    },
                    {
                      label: '选项3-2-03',
                      id: '35',
                    },
                  ],
                },
                {
                  label: '选项3-103',
                  id: '36',
                  children: [
                    {
                      label: '选项3-3-01',
                      id: '37',
                    },
                    {
                      label: '选项3-3-02',
                      id: '38',
                    },
                    {
                      label: '选项3-3-03',
                      id: '39',
                    },
                  ],
                },
              ],
            },
          ],
        },
        _fc_id: 'id_F870mguygzs3cdc',
        name: 'ref_Fe59mguygzs3cec',
        _fc_drag_tag: 'tree',
      },
    ],
    props: [
      {
        name: 'data',
        type: 'Array',
        description: '选项数据',
        required: false,
      },
      {
        name: 'emptyText',
        type: 'string',
        description: '内容为空的时候展示的文本',
        required: false,
      },
      {
        name: 'props',
        type: 'string',
        description: '配置选项',
        required: false,
      },
      {
        name: 'renderAfterExpand',
        type: 'boolean',
        description: '是否在第一次展开某个树节点后才渲染其子节点',
        required: false,
        defaultValue: true,
      },
      {
        name: 'defaultExpandAll',
        type: 'boolean',
        description: '是否默认展开所有节点',
        required: false,
      },
      {
        name: 'expandOnClickNode',
        type: 'boolean',
        description: '是否在点击节点的时候展开或者收缩节点，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。',
        required: false,
        defaultValue: true,
      },
      {
        name: 'checkOnClickNode',
        type: 'boolean',
        description: '是否在点击节点的时候选中节点',
        required: false,
      },
      {
        name: 'autoExpandParent',
        type: 'boolean',
        description: '展开子节点的时候是否自动展开父节点',
        required: false,
        defaultValue: true,
      },
      {
        name: 'checkStrictly',
        type: 'boolean',
        description: '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法',
        required: false,
      },
      {
        name: 'accordion',
        type: 'boolean',
        description: '是否每次只打开一个同级树节点展开',
        required: false,
      },
      {
        name: 'indent',
        type: 'number',
        description: '相邻级节点间的水平缩进(px)',
        required: false,
      },
      {
        name: 'nodeKey',
        type: 'string',
        description: '每个树节点用来作为唯一标识的属性，整棵树应该是唯一的',
        required: false,
      },
    ],
    events: [
      {
        name: 'nodeClick',
        description: '当节点被点击的时候触发',
      },
      {
        name: 'nodeContextmenu',
        description: '当某一节点被鼠标右键点击时会触发该事件',
      },
      {
        name: 'checkChange',
        description: '当复选框被点击的时候触发',
      },
      {
        name: 'check',
        description: '点击节点复选框之后触发',
      },
      {
        name: 'currentChange',
        description: '当前选中节点变化时触发的事件',
      },
      {
        name: 'nodeExpand',
        description: '节点被展开时触发的事件',
      },
      {
        name: 'nodeCollapse',
        description: '节点被关闭时触发的事件',
      },
      {
        name: 'nodeDragStart',
        description: '节点开始拖拽时触发的事件',
      },
      {
        name: 'nodeDragEnter',
        description: '拖拽进入其他节点时触发的事件',
      },
      {
        name: 'nodeDragLeave',
        description: '拖拽离开某个节点时触发的事件',
      },
      {
        name: 'nodeDragOver',
        description: '在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）',
      },
      {
        name: 'nodeDragEnd',
        description: '拖拽结束时（可能未成功）触发的事件',
      },
      {
        name: 'nodeDrop',
        description: '拖拽成功完成时触发的事件',
      },
    ],
  },
  {
    type: 'dataTable',
    label: '数据表格',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'dataTable',
        native: true,
        props: {
          height: '500px',
          button: {},
          data: [

            {
              date: '2016-05-12',
              name: 'Tom 10',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
            },
            {
              date: '2016-05-12',
              name: 'Tom 11',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
            },
            {
              date: '2016-05-12',
              name: 'Tom 12',
              state: 'California',
              city: 'Los Angeles',
              address: 'No. 189, Grove St, Los Angeles',
              zip: 'CA 90036',
            },
          ],
          column: [
            {
              format: 'default',
              prop: 'date',
              label: 'Date',
              width: '150',
            },
            {
              format: 'default',
              prop: 'name',
              label: 'Name',
              width: '120',
            },
            {
              format: 'default',
              prop: 'state',
              label: 'State',
              width: '120',
            },
            {
              format: 'default',
              prop: 'city',
              label: 'City',
              width: '320',
            },
            {
              format: 'default',
              prop: 'address',
              label: 'Address',
              width: '600',
            },
            {
              format: 'default',
              prop: 'zip',
              label: 'Zip',
              width: '120',
            },
          ],
        },
        _fc_id: 'id_Fe79mguygzs3cnc',
        name: 'ref_Flh1mguygzs3coc',
        _fc_drag_tag: 'dataTable',
      },
    ],
    props: [
      {
        name: 'column',
        type: 'string',
        description: '表格管理',
        required: false,
      },
      {
        name: 'size',
        type: 'string',
        description: '尺寸',
        required: false,
        options: [
          'default',
          'medium',
          'small',
          'mini',
        ],
      },
      {
        name: 'button>open',
        type: 'boolean',
        description: '操作按钮',
        required: false,
      },
      {
        name: 'button>column',
        type: 'string',
        description: '按钮管理',
        required: false,
      },
      {
        name: 'button>label',
        type: 'string',
        description: '操作',
        required: false,
        defaultValue: '操作',
      },
      {
        name: 'button>fixed',
        type: 'string',
        description: '位置',
        required: false,
        defaultValue: 'right',
        options: [
          false,
          'left',
          'right',
        ],
      },
      {
        name: 'button>width',
        type: 'string',
        description: '列的宽度',
        required: false,
        defaultValue: '100px',
      },
      {
        name: 'page>open',
        type: 'boolean',
        description: '分页',
        required: false,
      },
      {
        name: 'page>position',
        type: 'string',
        description: '位置',
        required: false,
        defaultValue: 'right',
        options: [
          'left',
          'center',
          'right',
        ],
      },
      {
        name: 'page>props>pageSize',
        type: 'number',
        description: '每页显示条目个数',
        required: false,
        defaultValue: 20,
      },
      {
        name: 'page>pageSizes',
        type: 'string',
        description: '页面大小选项',
        required: false,
        defaultValue: '10, 20, 50, 100',
      },
      {
        name: 'page>props>small',
        type: 'boolean',
        description: '使用小型分页样式',
        required: false,
      },
      {
        name: 'page>props>background',
        type: 'boolean',
        description: '为分页按钮添加背景色',
        required: false,
      },
      {
        name: 'rowKey',
        type: 'string',
        description: '行数据的Key',
        required: false,
      },
      {
        name: 'emptyText',
        type: 'string',
        description: '空数据时显示的文本内容',
        required: false,
      },
      {
        name: 'height',
        type: 'string',
        description: '高度',
        required: false,
      },
      {
        name: 'showSummary',
        type: 'boolean',
        description: '是否在表尾显示合计行',
        required: false,
      },
      {
        name: 'sumText',
        type: 'string',
        description: '合计行的描述文字',
        required: false,
      },
      {
        name: 'selection',
        type: 'boolean',
        description: '是否显示多选框',
        required: false,
      },
      {
        name: 'index',
        type: 'boolean',
        description: '显示行号',
        required: false,
      },
      {
        name: 'stripe',
        type: 'boolean',
        description: '显示斑马纹',
        required: false,
      },
      {
        name: 'border',
        type: 'boolean',
        description: '边框',
        required: false,
      },
      {
        name: 'defaultExpandAll',
        type: 'boolean',
        description: '默认展开所有行',
        required: false,
      },
    ],
    events: [
      {
        name: 'cellMouseEnter',
        description: '当单元格 hover 进入时会触发该事件',
      },
      {
        name: 'cellMouseLeave',
        description: '当单元格 hover 退出时会触发该事件',
      },
      {
        name: 'handleClick',
        description: '点击操作按钮时会触发该事件',
      },
      {
        name: 'rowClick',
        description: '当某一行被点击时会触发该事件',
      },
      {
        name: 'rowDblclick',
        description: '当某一行被双击时会触发该事件',
      },
      {
        name: 'headerClick',
        description: '当某一列的表头被点击时会触发该事件',
      },
      {
        name: 'filterChange',
        description: '筛选条件变化时会触发该事件',
      },
      {
        name: 'expandChange',
        description: '当用户对某一行展开或者关闭的时候会触发该事件',
      },
      {
        name: 'sortChange',
        description: '当表格的排序条件发生变化的时候会触发该事件',
      },
      {
        name: 'selectionChange',
        description: '当选择项发生变化时触发',
      },
      {
        name: 'currentChange',
        description: '切换分页时触发',
      },
      {
        name: 'pageSizeChange',
        description: '当页面大小发生变化时触发',
      },
    ],
  },
  {
    type: 'fcDataSelect',
    label: '子表单选择器',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'fcDataSelect',
        field: 'Ft4lmfb6v1ribfc',
        title: '子表单选择器',
        props: {
          title: '请选择',
          labelKey: 'name',
          valueKey: 'name',
          searchRule: {
            type: 'fcInlineForm',
            children: [{
              type: 'input',
              field: 'F6r1mfb6v4ghboc',
              title: '关键字',
            }],
          },
          tableRule: {
            type: 'dataTable',
            native: true,
            props: {
              height: '500px',
              button: {},
              data: [{
                date: '2016-05-12',
                name: 'Tom 10',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
              },
              {
                date: '2016-05-12',
                name: 'Tom 11',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
              },
              {
                date: '2016-05-12',
                name: 'Tom 12',
                state: 'California',
                city: 'Los Angeles',
                address: 'No. 189, Grove St, Los Angeles',
                zip: 'CA 90036',
              },
              ],
              column: [{
                format: 'default',
                prop: 'date',
                label: 'Date',
                width: '150',
              },
              {
                format: 'default',
                prop: 'name',
                label: 'Name',
                width: '120',
              },
              {
                format: 'default',
                prop: 'state',
                label: 'State',
                width: '120',
              },
              {
                format: 'default',
                prop: 'city',
                label: 'City',
                width: '320',
              },
              {
                format: 'default',
                prop: 'address',
                label: 'Address',
                width: '600',
              },
              {
                format: 'default',
                prop: 'zip',
                label: 'Zip',
                width: '120',
              },
              ],
            },
          },
        },
      },
    ],
    props: [
      {
        name: 'title',
        type: 'string',
        description: '标题',
        required: false,
      },
      {
        name: 'labelKey',
        type: 'string',
        description: '指定选项标签为选项对象的某个属性值',
        required: false,
        defaultValue: 'label',
      },
      {
        name: 'valueKey',
        type: 'string',
        description: '指定选项的值为选项对象的某个属性值',
        required: false,
        defaultValue: 'value',
      },
      {
        name: 'autoLoad',
        type: 'boolean',
        description: '自动触发搜索',
        required: false,
      },
      {
        name: 'multiple',
        type: 'boolean',
        description: '是否多选',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'clearable',
        type: 'boolean',
        description: '是否可以清空选项',
        required: false,
      },
      {
        name: 'multipleLimit',
        type: 'number',
        description: '多选时用户最多可以选择的项目数，为 0 则不限制',
        required: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '占位符',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'clear',
        description: '在点击清空按钮时触发',
      },
    ],
  },
  {
    type: 'stepForm',
    label: '分步表单',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'stepForm',
        field: 'Fy2tmguygzs5e7c',
        props: {
          steps: [
            {
              props: {
                title: '标题',
              },
              rule: [
                {
                  type: 'input',
                  field: 'F2wqmguygzs7ebc',
                  title: '输入框',
                  $required: false,
                  _fc_id: 'id_Fdoamguygzs7ecc',
                  name: 'ref_Fj5cmguygzs7edc',
                  display: true,
                  hidden: false,
                  _fc_drag_tag: 'input',
                },
              ],
            },
            {
              props: {
                title: '标题',
              },
              rule: [
                {
                  type: 'input',
                  field: 'Fa5vmguygzs7efc',
                  title: '输入框',
                  $required: false,
                  _fc_id: 'id_Flf4mguygzs7egc',
                  name: 'ref_Fgeqmguygzs7ehc',
                  display: true,
                  hidden: false,
                  _fc_drag_tag: 'input',
                },
              ],
            },
          ],
        },
        _fc_id: 'id_Fc1amguygzs5e8c',
        name: 'ref_F6pwmguygzs5e9c',
        _fc_drag_tag: 'stepForm',
      },
    ],
    props: [
      {
        name: 'steps',
        type: 'Array',
        description: '步骤条',
        required: true,
      },
      {
        name: 'submitBtn',
        type: 'boolean',
        description: '显示提交按钮',
        required: false,
        defaultValue: true,
      },
      {
        name: 'autoValidate',
        type: 'boolean',
        description: '进入下一步前自动验证表单',
        required: false,
      },
      {
        name: 'stepsProps>alignCenter',
        type: 'boolean',
        description: '进行居中对齐',
        required: false,
      },
      {
        name: 'stepsProps>simple',
        type: 'boolean',
        description: '是否应用简洁风格',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'submit',
        description: '表单提交时触发',
      },
      {
        name: 'next',
        description: '点击下一步按钮时触发',
      },
    ],
  },
  {
    type: 'tableFormPro',
    label: '表格表单Pro',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [

      {
        type: 'tableFormPro',
        field: 'Fatumfb747ajcxc',
        title: '表格表单Pro',
        props: {
          button: {
            open: true,
            column: [{
              key: 'delete',
              name: '删除',
              type: 'danger',
              size: 'small',
              prop: [
                'link',
              ],
            }],
          },
          columns: [{
            align: 'left',
            label: '自定义名称',
            style: {
              width: 'auto',
            },
            rule: [{
              type: 'input',
              field: 'Fbvcmfb7490cd2c',
              title: '输入框',
            }],
          },
          {
            align: 'left',
            label: '自定义名称',
            style: {
              width: 'auto',
            },
            rule: [{
              type: 'input',
              field: 'Fubxmfb74aiad7c',
              title: '输入框',
            }],
          },
          ],
        },
      },
    ],
    props: [
      {
        name: 'button>open',
        type: 'boolean',
        description: '操作按钮',
        required: false,
      },
      {
        name: 'button>column',
        type: 'string',
        description: '按钮管理',
        required: false,
      },
      {
        name: 'button>label',
        type: 'string',
        description: '操作',
        required: false,
        defaultValue: '操作',
      },
      {
        name: 'button>fixed',
        type: 'string',
        description: '位置',
        required: false,
        defaultValue: 'right',
        options: [
          false,
          'left',
          'right',
        ],
      },
      {
        name: 'button>width',
        type: 'string',
        description: '列的宽度',
        required: false,
        defaultValue: '100px',
      },
      {
        name: 'page>open',
        type: 'boolean',
        description: '分页',
        required: false,
      },
      {
        name: 'page>props>pageSize',
        type: 'number',
        description: '每页显示条目个数',
        required: false,
        defaultValue: 20,
      },
      {
        name: 'page>props>small',
        type: 'boolean',
        description: '使用小型分页样式',
        required: false,
      },
      {
        name: 'page>props>background',
        type: 'boolean',
        description: '为分页按钮添加背景色',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'size',
        type: 'string',
        description: '尺寸',
        required: false,
        options: [
          'large',
          'default',
          'small',
        ],
      },
      {
        name: 'emptyText',
        type: 'string',
        description: '空数据时显示的文本内容',
        required: false,
      },
      {
        name: 'stripe',
        type: 'boolean',
        description: '显示斑马纹',
        required: false,
      },
      {
        name: 'border',
        type: 'boolean',
        description: '边框',
        required: false,
      },
      {
        name: 'showIndex',
        type: 'boolean',
        description: '显示行号',
        required: false,
      },
      {
        name: 'addable',
        type: 'boolean',
        description: '允许新增',
        required: false,
        defaultValue: true,
      },
      {
        name: 'deletable',
        type: 'boolean',
        description: '允许删除',
        required: false,
        defaultValue: true,
      },
      {
        name: 'newColumn',
        type: 'boolean',
        description: '默认显示新行',
        required: false,
      },
      {
        name: 'filterEmptyColumn',
        type: 'boolean',
        description: '是否过滤空行的数据',
        required: false,
        defaultValue: true,
      },
      {
        name: 'height',
        type: 'string',
        description: '高度',
        required: false,
      },
      {
        name: 'min',
        type: 'number',
        description: '最少添加几行',
        required: false,
      },
      {
        name: 'max',
        type: 'number',
        description: '最多添加几行，为 0 则不限制',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'add',
        description: '增加时触发',
      },
      {
        name: 'delete',
        description: '删除时触发',
      },
      {
        name: 'handleClick',
        description: '点击操作按钮时会触发该事件',
      },
    ],
  },
  {
    type: 'fcDynamicRender',
    label: 'Vue组件',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'fcDynamicRender',
        field: 'Fafamguygzs8g5c',
        native: false,
        readMode: 'custom',
        props: {
          vueContent: "<template>\n  <div class=\"dynamic-component\">\n    <h3>{{ title }}</h3>\n    <p>{{ content }}</p>\n    <div class=\"button-group\">\n      <button @click=\"increment\" class=\"btn btn-primary\">增加</button>\n      <button @click=\"decrement\" class=\"btn btn-secondary\">减少</button>\n      <button @click=\"reset\" class=\"btn btn-danger\">重置</button>\n    </div>\n    <p>当前计数: {{ count }}</p>\n    <div class=\"info-section\">\n      <p>状态: {{ status }}</p>\n      <p>计算属性演示: {{ doubleCount }}</p>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'DynamicComponent',\n  props: {\n    value: Number,\n    formCreateInject: Object,\n  },\n  data() {\n    return {\n      title: 'Vue动态组件',\n      content: '这是一个使用Vue编写的动态渲染组件',\n      count: this.value || 0\n    }\n  },\n  computed: {\n    status() {\n      if (this.count > 5) return '高'\n      if (this.count > 2) return '中'\n      return '低'\n    },\n    doubleCount() {\n      return this.count * 2\n    }\n  },\n  watch: {\n    value(n) {\n      this.count = n;\n    },\n    count(n) {\n      this.$emit('input', n);\n      this.$emit('change', n);\n    }\n  },\n  methods: {\n    increment() {\n      this.count++;\n    },\n    decrement() {\n      this.count--;\n    },\n    reset() {\n      this.count = 0;\n    }\n  },\n  mounted() {\n    console.log('Vue2动态组件已挂载');\n  },\n  beforeDestroy() {\n    console.log('Vue2动态组件即将销毁');\n  }\n}\n</script>\n\n<style>\n.dynamic-component {\n  padding: 20px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background-color: #f9f9f9;\n  width: 100%;\n  box-sizing: border-box;\n}\n.button-group {\n  margin: 15px 0;\n}\n.btn {\n  padding: 8px 16px;\n  margin: 0 5px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-primary {\n  background-color: #409eff;\n  color: white;\n}\n.btn-secondary {\n  background-color: #909399;\n  color: white;\n}\n.btn-danger {\n  background-color: #f56c6c;\n  color: white;\n}\n.btn:hover {\n  opacity: 0.8;\n}\n</style>",
        },
        _fc_id: 'id_Fyyhmguygzs8g6c',
        name: 'ref_Fiuwmguygzs8g7c',
        _fc_drag_tag: 'fcDynamicRender',
      },
    ],
    props: [
      {
        name: 'vueContent',
        type: 'string',
        description: 'Vue模板',
        required: false,
      },
    ],
    events: [
      {
        name: 'mounted',
        description: '组件挂载后触发',
      },
      {
        name: 'error',
        description: '组件渲染错误时触发',
      },
    ],
  },
  {
    type: 'elAlert',
    label: '提示',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'elAlert',
        props: {
          title: '提示',
          description: '说明文字',
          type: 'success',
          effect: 'dark',
        },
        _fc_id: 'id_F2fvmguygzs8ggc',
        name: 'ref_F4osmguygzs8ghc',
        _fc_drag_tag: 'elAlert',
      },
    ],
    props: [
      {
        name: 'title',
        type: 'string',
        description: '标题',
        required: false,
      },
      {
        name: 'type',
        type: 'string',
        description: '主题',
        required: false,
        options: [
          'success',
          'warning',
          'info',
          'error',
        ],
      },
      {
        name: 'description',
        type: 'string',
        description: '辅助性文字',
        required: false,
      },
      {
        name: 'closable',
        type: 'boolean',
        description: '是否可关闭',
        required: false,
        defaultValue: true,
      },
      {
        name: 'closeText',
        type: 'string',
        description: '关闭按钮自定义文本',
        required: false,
      },
      {
        name: 'showIcon',
        type: 'boolean',
        description: '是否显示图标',
        required: false,
      },
      {
        name: 'effect',
        type: 'string',
        description: '选择提供的主题',
        required: false,
        options: [
          'light',
          'dark',
        ],
      },
    ],
    events: [
      {
        name: 'close',
        description: '关闭组件时触发',
      },
    ],
  },
  {
    type: 'elButton',
    label: '按钮',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'elButton',
        children: [
          '按钮',
        ],
        _fc_id: 'id_Fo4emguygzs8gic',
        name: 'ref_Fbr6mguygzs8gjc',
        _fc_drag_tag: 'elButton',
      },
    ],
    props: [
      {
        name: 'formCreateChild',
        type: 'string',
        description: '内容',
        required: false,
      },
      {
        name: 'size',
        type: 'string',
        description: '尺寸',
        required: false,
        options: [
          'default',
          'medium',
          'small',
          'mini',
        ],
      },
      {
        name: 'type',
        type: 'string',
        description: '类型',
        required: false,
        options: [
          'primary',
          'success',
          'warning',
          'danger',
          'info',
          'text',
        ],
      },
      {
        name: 'plain',
        type: 'boolean',
        description: '是否朴素按钮',
        required: false,
      },
      {
        name: 'round',
        type: 'boolean',
        description: '是否圆角按钮',
        required: false,
      },
      {
        name: 'circle',
        type: 'boolean',
        description: '是否圆形按钮',
        required: false,
      },
      {
        name: 'loading',
        type: 'boolean',
        description: '是否加载中状态',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用状态',
        required: false,
      },
    ],
    events: [
      {
        name: 'click',
        description: '点击组件时触发',
      },
    ],
  },
  {
    type: 'elStatistic',
    label: '统计栏',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'elStatistic',
        props: {
          value: 99000,
          title: '统计栏',
        },
        _fc_id: 'id_Fklnmguygzs9gqc',
        name: 'ref_Fypemguygzs9grc',
        _fc_drag_tag: 'elStatistic',
      },
    ],
    props: [
      {
        name: 'value',
        type: 'number',
        description: '数值',
        required: false,
      },
      {
        name: 'title',
        type: 'string',
        description: '标题',
        required: false,
      },
      {
        name: 'prefix',
        type: 'string',
        description: '数值的前缀',
        required: false,
      },
      {
        name: 'suffix',
        type: 'string',
        description: '数值的后缀',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'elDivider',
    label: '分割线',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'elDivider',
        children: [
          '分割线',
        ],
        _fc_id: 'id_Fyelmguygzs9gsc',
        name: 'ref_F6fymguygzs9gtc',
        _fc_drag_tag: 'elDivider',
      },
    ],
    props: [
      {
        name: 'direction',
        type: 'string',
        description: '设置分割线方向',
        required: false,
        options: [
          'horizontal',
          'vertical',
        ],
      },
      {
        name: 'formCreateChild',
        type: 'string',
        description: '设置分割线文案',
        required: false,
      },
      {
        name: 'contentPosition',
        type: 'string',
        description: '设置分割线文案的位置',
        required: false,
        options: [
          'left',
          'right',
          'center',
        ],
      },
    ],
    events: [],
  },
  {
    type: 'elTag',
    label: '标签',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'elTag',
        children: [
          '标签',
        ],
        _fc_id: 'id_Fxckmguygzs9guc',
        name: 'ref_F0olmguygzs9gvc',
        _fc_drag_tag: 'elTag',
      },
    ],
    props: [
      {
        name: 'formCreateChild',
        type: 'string',
        description: '标签内容',
        required: false,
      },
      {
        name: 'type',
        type: 'string',
        description: '标签的类型',
        required: false,
        options: [
          'primary',
          'success',
          'warning',
          'danger',
          'info',
        ],
      },
      {
        name: 'size',
        type: 'string',
        description: '标签的尺寸',
        required: false,
        options: [
          'default',
          'medium',
          'small',
          'mini',
        ],
      },
      {
        name: 'effect',
        type: 'string',
        description: '标签的主题',
        required: false,
        options: [
          'dark',
          'light',
          'plain',
        ],
      },
      {
        name: 'closable',
        type: 'boolean',
        description: '是否可关闭',
        required: false,
      },
      {
        name: 'disableTransitions',
        type: 'boolean',
        description: '是否禁用渐变动画',
        required: false,
      },
      {
        name: 'hit',
        type: 'boolean',
        description: '是否有边框描边',
        required: false,
      },
      {
        name: 'color',
        type: 'string',
        description: '背景色',
        required: false,
      },
    ],
    events: [
      {
        name: 'click',
        description: '点击组件时触发',
      },
      {
        name: 'close',
        description: '关闭组件时触发',
      },
    ],
  },
  {
    type: 'elLink',
    label: '链接',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'elLink',
        children: [
          '链接',
        ],
        _fc_id: 'id_F53imguygzs9gwc',
        name: 'ref_Fzaxmguygzs9gxc',
        _fc_drag_tag: 'elLink',
      },
    ],
    props: [
      {
        name: 'href',
        type: 'string',
        description: '跳转链接',
        required: false,
      },
      {
        name: 'formCreateChild',
        type: 'string',
        description: '内容',
        required: false,
      },
      {
        name: 'target',
        type: 'string',
        description: '打开方式',
        required: false,
        options: [
          '_self',
          '_blank',
          '_parent',
          '_top',
        ],
      },
      {
        name: 'underline',
        type: 'boolean',
        description: '是否显示下划线',
        required: false,
        defaultValue: true,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'type',
        type: 'string',
        description: '类型',
        required: false,
        options: [
          'primary',
          'success',
          'warning',
          'danger',
          'info',
          'default',
        ],
      },
    ],
    events: [],
  },
  {
    type: 'elTooltip',
    label: '文字提示',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    business: true,
    isField: false,
    isContainer: true,
    isAssist: true,
    examples: [
      {
        type: 'elTooltip',
        props: {
          content: '文字提示',
        },
        children: [
          {
            type: 'input',
            field: 'Fn6gmguygzs9h0c',
            title: '输入框',
            _fc_id: 'id_F82pmguygzs9h1c',
            name: 'ref_Fve9mguygzs9h2c',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'Faqmmguygzs9h3c',
            title: '输入框',
            _fc_id: 'id_F76mmguygzs9h4c',
            name: 'ref_Fpf7mguygzs9h5c',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_F6w6mguygzs9gyc',
        name: 'ref_F8nfmguygzs9gzc',
        _fc_drag_tag: 'elTooltip',
      },
    ],
    props: [
      {
        name: 'content',
        type: 'string',
        description: '显示的内容',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'enterable',
        type: 'boolean',
        description: '鼠标是否可进入到 Tooltip 中',
        required: false,
        defaultValue: true,
      },
      {
        name: 'effect',
        type: 'string',
        description: '主题',
        required: false,
        defaultValue: 'dark',
        options: [
          'dark',
          'light',
        ],
      },
      {
        name: 'placement',
        type: 'string',
        description: 'Tooltip 组件出现的位置',
        required: false,
        defaultValue: 'bottom',
        options: [
          'top',
          'top-start',
          'top-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'left',
          'left-start',
          'left-end',
          'right',
          'right-start',
          'right-end',
        ],
      },
      {
        name: 'offset',
        type: 'number',
        description: '出现位置的偏移量',
        required: false,
      },
      {
        name: 'hideAfter',
        type: 'number',
        description: '延迟关闭，单位毫秒',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'elImage',
    label: '图片',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'elImage',
        style: {
          width: '100px',
          height: '100px',
        },
        props: {
          src: 'https://static.form-create.com/example.png',
        },
        _fc_id: 'id_F6w2mguygzs9h6c',
        name: 'ref_Fyknmguygzs9h7c',
        _fc_drag_tag: 'elImage',
      },
    ],
    props: [
      {
        name: 'src',
        type: 'string',
        description: '图片链接',
        required: false,
      },
      {
        name: 'previewSrcList',
        type: 'string',
        description: '预览图片列表',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'elAvatar',
    label: '头像框',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'elAvatar',
        props: {
          fit: 'cover',
          src: 'https://static.form-create.com/example.png',
        },
        _fc_id: 'id_Fvgkmguygzs9hac',
        name: 'ref_Fc33mguygzs9hbc',
        _fc_drag_tag: 'elAvatar',
      },
    ],
    props: [
      {
        name: 'src',
        type: 'string',
        description: '图片链接',
        required: false,
      },
      {
        name: 'shape',
        type: 'string',
        description: '形状',
        required: false,
        options: [
          'circle',
          'square',
        ],
      },
      {
        name: 'size',
        type: 'string',
        description: '尺寸',
        required: false,
        options: [
          'large',
          'default',
          'small',
        ],
      },
    ],
    events: [],
  },
  {
    type: 'fcRow',
    label: '栅格布局',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: false,
    isContainer: true,
    isAssist: true,
    defaultChildren: [
      'col',
    ],
    examples: [
      {
        type: 'fcRow',
        children: [
          {
            type: 'col',
            props: {
              span: 12,
            },
            children: [
              {
                type: 'input',
                field: 'Fz1hmguygzsaiac',
                title: '输入框',
                _fc_id: 'id_Fw0qmguygzsaibc',
                name: 'ref_Fvpsmguygzsaicc',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_Fo6smguygzsai8c',
            name: 'ref_Fmovmguygzsai9c',
            _fc_drag_tag: 'col',
          },
          {
            type: 'col',
            props: {
              span: 12,
            },
            children: [
              {
                type: 'input',
                field: 'F9armguygzsaifc',
                title: '输入框',
                _fc_id: 'id_Fdt1mguygzsaigc',
                name: 'ref_Fa5umguygzsaihc',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_F1j0mguygzsaidc',
            name: 'ref_Ffp5mguygzsaiec',
            _fc_drag_tag: 'col',
          },
        ],
        _fc_id: 'id_Fq3tmguygzsai6c',
        name: 'ref_Fqammguygzsai7c',
        _fc_drag_tag: 'fcRow',
      },
    ],
    props: [
      {
        name: 'gutter',
        type: 'number',
        description: '栅格间隔',
        required: false,
      },
      {
        name: 'type',
        type: 'boolean',
        description: 'flex布局模式',
        required: false,
      },
      {
        name: 'justify',
        type: 'string',
        description: 'flex布局下的水平排列方式',
        required: false,
        options: [
          'start',
          'end',
          'center',
          'space-around',
          'space-between',
        ],
      },
      {
        name: 'align',
        type: 'string',
        description: 'flex布局下的垂直排列方式',
        required: false,
        options: [
          'top',
          'middle',
          'bottom',
        ],
      },
    ],
    events: [],
  },
  {
    type: 'fcInlineForm',
    label: '内联布局',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    business: true,
    isField: false,
    isContainer: true,
    isAssist: true,
    examples: [
      {
        type: 'fcInlineForm',
        _fc_id: 'id_Fbjlmguygzsaikc',
        name: 'ref_Fth7mguygzsailc',
        _fc_drag_tag: 'fcInlineForm',
        children: [
          {
            type: 'input',
            field: 'F6yumguygzsaimc',
            title: '输入框',
            _fc_id: 'id_F89emguygzsainc',
            name: 'ref_Fmrfmguygzsaioc',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'Fhc4mguygzsaipc',
            title: '输入框',
            _fc_id: 'id_Fbqsmguygzsaiqc',
            name: 'ref_Fdllmguygzsairc',
            _fc_drag_tag: 'input',
          },
        ],
      },
    ],
    props: [],
    events: [],
  },
  {
    type: 'elTabs',
    label: '标签页',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: false,
    isContainer: true,
    isAssist: true,
    defaultChildren: [
      'elTabPane',
    ],
    examples: [
      {
        type: 'elTabs',
        style: {
          width: '100%',
        },
        props: {
          modelValue: '0',
        },
        sync: [
          'modelValue',
        ],
        children: [
          {
            type: 'elTabPane',
            props: {
              label: '选项卡',
            },
            children: [
              {
                type: 'input',
                field: 'Fy6xmguygzsajoc',
                title: '输入框',
                _fc_id: 'id_Faxqmguygzsajpc',
                name: 'ref_Fnprmguygzsajqc',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_Fukxmguygzsajmc',
            name: 'ref_Flcomguygzsajnc',
            _fc_drag_tag: 'elTabPane',
          },
          {
            type: 'elTabPane',
            props: {
              label: '选项卡',
            },
            children: [
              {
                type: 'input',
                field: 'Feoamguygzsbjtc',
                title: '输入框',
                _fc_id: 'id_F1jcmguygzsbjuc',
                name: 'ref_Fopfmguygzsbjvc',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_Fd3bmguygzsbjrc',
            name: 'ref_F3demguygzsbjsc',
            _fc_drag_tag: 'elTabPane',
          },
        ],
        _fc_id: 'id_Feemmguygzsajkc',
        name: 'ref_Fd5cmguygzsajlc',
        _fc_drag_tag: 'elTabs',
      },
    ],
    props: [
      {
        name: 'type',
        type: 'string',
        description: '风格类型',
        required: false,
        options: [
          'card',
          'border-card',
        ],
      },
      {
        name: 'closable',
        type: 'boolean',
        description: '标签是否可关闭',
        required: false,
      },
      {
        name: 'tabPosition',
        type: 'string',
        description: '选项卡所在位置',
        required: false,
        options: [
          'top',
          'right',
          'left',
        ],
      },
      {
        name: 'stretch',
        type: 'boolean',
        description: '标签的宽度是否自撑开',
        required: false,
      },
    ],
    events: [
      {
        name: 'tabClick',
        description: 'tab 被选中时触发',
      },
      {
        name: 'tabChange',
        description: 'activeName 改变时触发',
      },
      {
        name: 'tabRemove',
        description: '点击 tab 移除按钮时触发',
      },
      {
        name: 'tabAdd',
        description: '点击 tab 新增按钮时触发',
      },
      {
        name: 'edit',
        description: '点击 tab 的新增或移除按钮后触发',
      },
    ],
  },
  {
    type: 'elCard',
    label: '卡片',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: false,
    isContainer: true,
    isAssist: true,
    examples: [
      {
        type: 'elCard',
        props: {
          header: '标题',
        },
        style: {
          width: '100%',
        },
        children: [
          {
            type: 'input',
            field: 'F2sgmguygzsbk0c',
            title: '输入框',
            _fc_id: 'id_Feszmguygzsbk1c',
            name: 'ref_Fcxfmguygzsbk2c',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'Fd3hmguygzsbk3c',
            title: '输入框',
            _fc_id: 'id_F8iimguygzsbk4c',
            name: 'ref_F70smguygzsbk5c',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_F888mguygzsbjyc',
        name: 'ref_Fexomguygzsbjzc',
        _fc_drag_tag: 'elCard',
      },
    ],
    props: [
      {
        name: 'header',
        type: 'string',
        description: '标题',
        required: false,
      },
      {
        name: 'shadow',
        type: 'string',
        description: '阴影显示时机',
        required: false,
        defaultValue: 'always',
        options: [
          'always',
          'never',
          'hover',
        ],
      },
    ],
    events: [],
  },
  {
    type: 'elCollapse',
    label: '折叠面板',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: false,
    isContainer: true,
    isAssist: true,
    defaultChildren: [
      'elCollapseItem',
    ],
    examples: [
      {
        type: 'elCollapse',
        props: {
          modelValue: [],
        },
        sync: [
          'modelValue',
        ],
        style: {
          width: '100%',
        },
        children: [
          {
            type: 'elCollapseItem',
            props: {
              title: '面板',
              name: 'F9jmmguygzsbk8c',
            },
            children: [
              {
                type: 'input',
                field: 'Fes2mguygzsbkbc',
                title: '输入框',
                _fc_id: 'id_F8b4mguygzsbkcc',
                name: 'ref_Fgokmguygzsbkdc',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_F2y3mguygzsbk9c',
            name: 'ref_F7xbmguygzsbkac',
            _fc_drag_tag: 'elCollapseItem',
          },
          {
            type: 'elCollapseItem',
            props: {
              title: '面板',
              name: 'Fmopmguygzsbkec',
            },
            children: [
              {
                type: 'input',
                field: 'Fwc7mguygzsbkhc',
                title: '输入框',
                _fc_id: 'id_Fuafmguygzsbkic',
                name: 'ref_F7gfmguygzsbkjc',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_F7upmguygzsbkfc',
            name: 'ref_F4wtmguygzsbkgc',
            _fc_drag_tag: 'elCollapseItem',
          },
        ],
        _fc_id: 'id_Fbpbmguygzsbk6c',
        name: 'ref_Fg7vmguygzsbk7c',
        _fc_drag_tag: 'elCollapse',
      },
    ],
    props: [
      {
        name: 'accordion',
        type: 'boolean',
        description: '是否手风琴模式',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '切换当前活动面板，在手风琴模式下其类型是string，在其他模式下是array',
      },
    ],
  },
  {
    type: 'elDescriptions',
    label: '描述列表',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: false,
    isContainer: true,
    isAssist: true,
    defaultChildren: [
      'elDescriptionsItem',
    ],
    examples: [
      {
        type: 'elDescriptions',
        props: {
          border: true,
        },
        style: {
          width: '100%',
        },
        children: [
          {
            type: 'elDescriptionsItem',
            props: {
              label: '标题',
            },
            children: [
              '内容',
            ],
            _fc_id: 'id_Fvhbmguygzsbkmc',
            name: 'ref_Fikymguygzsbknc',
            _fc_drag_tag: 'elDescriptionsItem',
          },
          {
            type: 'elDescriptionsItem',
            props: {
              label: '标题',
            },
            children: [
              '内容',
            ],
            _fc_id: 'id_F4jwmguygzsbkoc',
            name: 'ref_Fdj0mguygzsbkpc',
            _fc_drag_tag: 'elDescriptionsItem',
          },
        ],
        _fc_id: 'id_Fpehmguygzsbkkc',
        name: 'ref_Fu4amguygzsbklc',
        _fc_drag_tag: 'elDescriptions',
      },
    ],
    props: [
      {
        name: 'title',
        type: 'string',
        description: '标题文本，显示在左上方',
        required: false,
        defaultValue: '',
      },
      {
        name: 'extra',
        type: 'string',
        description: '操作区文本，显示在右上方',
        required: false,
        defaultValue: '',
      },
      {
        name: 'column',
        type: 'number',
        description: '一行中表格的数量',
        required: false,
        defaultValue: 3,
      },
      {
        name: 'border',
        type: 'boolean',
        description: '是否带有边框',
        required: false,
      },
      {
        name: 'direction',
        type: 'string',
        description: '排列的方向',
        required: false,
        options: [
          'vertical',
          'horizontal',
        ],
      },
      {
        name: 'size',
        type: 'string',
        description: '列表的尺寸',
        required: false,
        options: [
          'default',
          'medium',
          'small',
          'mini',
        ],
      },
    ],
    events: [],
  },
  {
    type: 'fcDialog',
    label: '弹出框',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    business: true,
    isField: true,
    isContainer: true,
    isAssist: false,
    childrenPath: 'props.rule',
    examples: [
      {
        type: 'fcDialog',
        props: {
          title: '弹出框',
          rule: [
            {
              type: 'input',
              field: 'Fieimguygzsbktc',
              title: '输入框',
              $required: false,
              _fc_id: 'id_Fv56mguygzsbkuc',
              name: 'ref_Fgkvmguygzsbkvc',
              display: true,
              hidden: false,
              _fc_drag_tag: 'input',
            },
            {
              type: 'input',
              field: 'Fqpfmguygzsbkwc',
              title: '输入框',
              $required: false,
              _fc_id: 'id_Fun3mguygzsbkxc',
              name: 'ref_Fqw0mguygzsbkyc',
              display: true,
              hidden: false,
              _fc_drag_tag: 'input',
            },
          ],
        },
        native: true,
        ignore: true,
        _fc_id: 'id_Fgcfmguygzsbkqc',
        name: 'ref_Fk8smguygzsbkrc',
        field: 'Fotsmguygzsbksc',
        _fc_drag_tag: 'fcDialog',
      },
    ],
    props: [
      {
        name: 'title',
        type: 'string',
        description: '标题',
        required: false,
      },
      {
        name: 'width',
        type: 'string',
        description: '对话框的宽度',
        required: false,
        defaultValue: '50%',
      },
      {
        name: 'fullscreen',
        type: 'boolean',
        description: '是否为全屏',
        required: false,
      },
      {
        name: 'preview',
        type: 'boolean',
        description: '阅读模式',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '禁用',
        required: false,
      },
      {
        name: 'modal',
        type: 'boolean',
        description: '是否需要遮罩层',
        required: false,
        defaultValue: true,
      },
      {
        name: 'footer',
        type: 'boolean',
        description: '是否显示操作按钮',
        required: false,
        defaultValue: true,
      },
      {
        name: 'autoClose',
        type: 'boolean',
        description: '提交表单后自动关闭弹出框',
        required: false,
        defaultValue: true,
      },
      {
        name: 'beforeClose',
        type: 'string',
        description: '关闭前的回调',
        required: false,
      },
    ],
    events: [
      {
        name: 'confirm',
        description: '点击确认按钮时触发',
      },
      {
        name: 'submit',
        description: '表单提交时触发',
      },
      {
        name: 'validateFail',
        description: '表单验证失败时触发',
      },
      {
        name: 'open',
        description: '打开的回调',
      },
      {
        name: 'opened',
        description: '打开动画结束时的回调',
      },
      {
        name: 'close',
        description: '关闭组件时触发',
      },
      {
        name: 'closed',
        description: '关闭动画结束时的回调',
      },
    ],
  },
  {
    type: 'fcDrawer',
    label: '抽屉',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    business: true,
    isField: true,
    isContainer: true,
    isAssist: false,
    childrenPath: 'props.rule',
    examples: [
      {
        type: 'fcDrawer',
        props: {
          title: '抽屉',
          rule: [
            {
              type: 'input',
              field: 'Faz3mguygzsbl2c',
              title: '输入框',
              $required: false,
              _fc_id: 'id_F7oomguygzsbl3c',
              name: 'ref_Feprmguygzsbl4c',
              display: true,
              hidden: false,
              _fc_drag_tag: 'input',
            },
            {
              type: 'input',
              field: 'Fe8kmguygzsbl5c',
              title: '输入框',
              $required: false,
              _fc_id: 'id_Fghzmguygzsbl6c',
              name: 'ref_Fs6hmguygzsbl7c',
              display: true,
              hidden: false,
              _fc_drag_tag: 'input',
            },
          ],
        },
        native: true,
        ignore: true,
        _fc_id: 'id_F9h8mguygzsbkzc',
        name: 'ref_F7jzmguygzsbl0c',
        field: 'Fwekmguygzsbl1c',
        _fc_drag_tag: 'fcDrawer',
      },
    ],
    props: [
      {
        name: 'title',
        type: 'string',
        description: '标题',
        required: false,
      },
      {
        name: 'size',
        type: 'string',
        description: '对话框的宽度',
        required: false,
        defaultValue: '30%',
      },
      {
        name: 'direction',
        type: 'string',
        description: '打开的方向',
        required: false,
        defaultValue: 'rtl',
        options: [
          'ltr',
          'rtl',
        ],
      },
      {
        name: 'preview',
        type: 'boolean',
        description: '阅读模式',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '禁用',
        required: false,
      },
      {
        name: 'modal',
        type: 'boolean',
        description: '是否需要遮罩层',
        required: false,
        defaultValue: true,
      },
      {
        name: 'footer',
        type: 'boolean',
        description: '是否显示操作按钮',
        required: false,
        defaultValue: true,
      },
      {
        name: 'autoClose',
        type: 'boolean',
        description: '提交表单后自动关闭弹出框',
        required: false,
        defaultValue: true,
      },
      {
        name: 'beforeClose',
        type: 'string',
        description: '关闭前的回调',
        required: false,
      },
    ],
    events: [
      {
        name: 'confirm',
        description: '点击确认按钮时触发',
      },
      {
        name: 'submit',
        description: '表单提交时触发',
      },
      {
        name: 'validateFail',
        description: '表单验证失败时触发',
      },
      {
        name: 'open',
        description: '打开的回调',
      },
      {
        name: 'opened',
        description: '打开动画结束时的回调',
      },
      {
        name: 'close',
        description: '关闭组件时触发',
      },
      {
        name: 'closed',
        description: '关闭动画结束时的回调',
      },
    ],
  },
  {
    type: 'col',
    label: '格子',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: false,
    isContainer: true,
    isAssist: true,
    examples: [
      {
        type: 'col',
        props: {
          span: 12,
        },
        children: [
          {
            type: 'input',
            field: 'F2g5mguygzsblac',
            title: '输入框',
            _fc_id: 'id_Fmkamguygzsblbc',
            name: 'ref_F5q6mguygzsblcc',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'Fjtmmguygzsbldc',
            title: '输入框',
            _fc_id: 'id_Fflgmguygzsblec',
            name: 'ref_Fbmkmguygzsblfc',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_F3vymguygzsbl8c',
        name: 'ref_Ftrcmguygzsbl9c',
        _fc_drag_tag: 'col',
      },
    ],
    props: [
      {
        name: 'span',
        type: 'number',
        description: '栅格占据的列数',
        required: false,
        defaultValue: 24,
      },
      {
        name: 'offset',
        type: 'number',
        description: '栅格左侧的间隔格数',
        required: false,
      },
      {
        name: 'push',
        type: 'number',
        description: '栅格向右移动格数',
        required: false,
      },
      {
        name: 'pull',
        type: 'number',
        description: '栅格向左移动格数',
        required: false,
      },
      {
        name: 'xs>span',
        type: 'number',
        description: '栅格占据的列数',
        required: false,
        defaultValue: 24,
      },
      {
        name: 'xs>offset',
        type: 'number',
        description: '栅格左侧的间隔格数',
        required: false,
      },
      {
        name: 'xs>push',
        type: 'number',
        description: '栅格向右移动格数',
        required: false,
      },
      {
        name: 'xs>pull',
        type: 'number',
        description: '栅格向左移动格数',
        required: false,
      },
      {
        name: 'sm>span',
        type: 'number',
        description: '栅格占据的列数',
        required: false,
        defaultValue: 24,
      },
      {
        name: 'sm>offset',
        type: 'number',
        description: '栅格左侧的间隔格数',
        required: false,
      },
      {
        name: 'sm>push',
        type: 'number',
        description: '栅格向右移动格数',
        required: false,
      },
      {
        name: 'sm>pull',
        type: 'number',
        description: '栅格向左移动格数',
        required: false,
      },
      {
        name: 'md>span',
        type: 'number',
        description: '栅格占据的列数',
        required: false,
        defaultValue: 24,
      },
      {
        name: 'md>offset',
        type: 'number',
        description: '栅格左侧的间隔格数',
        required: false,
      },
      {
        name: 'md>push',
        type: 'number',
        description: '栅格向右移动格数',
        required: false,
      },
      {
        name: 'md>pull',
        type: 'number',
        description: '栅格向左移动格数',
        required: false,
      },
      {
        name: 'lg>span',
        type: 'number',
        description: '栅格占据的列数',
        required: false,
        defaultValue: 24,
      },
      {
        name: 'lg>offset',
        type: 'number',
        description: '栅格左侧的间隔格数',
        required: false,
      },
      {
        name: 'lg>push',
        type: 'number',
        description: '栅格向右移动格数',
        required: false,
      },
      {
        name: 'lg>pull',
        type: 'number',
        description: '栅格向左移动格数',
        required: false,
      },
      {
        name: 'xl>span',
        type: 'number',
        description: '栅格占据的列数',
        required: false,
        defaultValue: 24,
      },
      {
        name: 'xl>offset',
        type: 'number',
        description: '栅格左侧的间隔格数',
        required: false,
      },
      {
        name: 'xl>push',
        type: 'number',
        description: '栅格向右移动格数',
        required: false,
      },
      {
        name: 'xl>pull',
        type: 'number',
        description: '栅格向左移动格数',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'elTabPane',
    label: '选项卡',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: false,
    isContainer: true,
    isAssist: true,
    examples: [
      {
        type: 'elTabPane',
        props: {
          label: '选项卡',
        },
        children: [
          {
            type: 'input',
            field: 'Fm6bmguygzsblic',
            title: '输入框',
            _fc_id: 'id_Fpyfmguygzsbljc',
            name: 'ref_Fnknmguygzsblkc',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'Fv53mguygzsbllc',
            title: '输入框',
            _fc_id: 'id_Ff8nmguygzsblmc',
            name: 'ref_Fhjamguygzsblnc',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_F2gjmguygzsblgc',
        name: 'ref_F69gmguygzsblhc',
        _fc_drag_tag: 'elTabPane',
      },
    ],
    props: [
      {
        name: 'label',
        type: 'string',
        description: '选项卡标题',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'name',
        type: 'string',
        description: '选项卡的标识符',
        required: false,
      },
      {
        name: 'lazy',
        type: 'boolean',
        description: '标签是否延迟渲染',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'elCollapseItem',
    label: '面板',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: false,
    isContainer: true,
    isAssist: true,
    examples: [
      {
        type: 'elCollapseItem',
        props: {
          title: '面板',
          name: 'Fipcmguygzsblpc',
        },
        children: [
          {
            type: 'input',
            field: 'F4f8mguygzsblsc',
            title: '输入框',
            _fc_id: 'id_F8fqmguygzsbltc',
            name: 'ref_Fgo8mguygzsbluc',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'F6e8mguygzsclvc',
            title: '输入框',
            _fc_id: 'id_Fb73mguygzsclwc',
            name: 'ref_Fp3lmguygzsclxc',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_F2r1mguygzsblqc',
        name: 'ref_Fe4umguygzsblrc',
        _fc_drag_tag: 'elCollapseItem',
      },
    ],
    props: [
      {
        name: 'title',
        type: 'string',
        description: '面板标题',
        required: false,
      },
      {
        name: 'name',
        type: 'string',
        description: '唯一标志符',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'elDescriptionsItem',
    label: '描述格子',
    uiFramework: 'element-ui',
    vueVersion: 'vue2',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'elDescriptionsItem',
        props: {
          label: '标题',
        },
        children: [
          '内容',
        ],
        _fc_id: 'id_F4cqmguygzsclyc',
        name: 'ref_Fkjtmguygzsclzc',
        _fc_drag_tag: 'elDescriptionsItem',
      },
    ],
    props: [
      {
        name: 'label',
        type: 'string',
        description: '标签文本',
        required: false,
      },
      {
        name: 'span',
        type: 'number',
        description: '列的数量',
        required: false,
      },
    ],
    events: [],
  },
];
