import { ComponentInfo } from '../../core/component-registry.js';
import { commonComponents } from '../common/index.js'


export const elementPlusComponents: ComponentInfo[] = [
  {
    type: 'input',
    label: '输入框',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '用于输入单行文本信息的基本表单字段',
    examples: [
      {
        type: 'input',
        field: 'Fp3zmfb40ookabc',
        title: '输入框',
        props: {},
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
        name: 'maxlength',
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '支持输入和编辑多行文本内容的文本框',
    examples: [
      {
        type: 'input',
        field: 'F5o2mfb40oolacc',
        title: '多行输入框',
        props: {
          type: 'textarea',
        },
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
        name: 'maxlength',
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '用于安全输入密码，输入内容默认会被隐藏',
    examples: [
      {
        type: 'input',
        field: 'F0kbmfb40ooladc',
        title: '密码输入框',
        props: {
          type: 'password',
        },
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
        name: 'maxlength',
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
    type: 'elMention',
    label: '提及',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '通过@符号触发，提及或选择特定用户或对象',
    examples: [
      {
        type: 'elMention',
        field: 'Fq5pmfb40oolaec',
        title: '提及',
        props: {
          options: [
            {
              label: 'Fuphoenixes',
              value: 'Fuphoenixes',
            },
            {
              label: 'kooriookami',
              value: 'kooriookami',
            },
            {
              label: 'Jeremy',
              value: 'Jeremy',
            },
          ],
        },
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
        name: 'clearable',
        type: 'boolean',
        description: '是否显示清除按钮',
        required: false,
      },
      {
        name: 'whole',
        type: 'boolean',
        description: '当退格键被按下做删除操作时，是否将提及部分作为整体删除',
        required: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '输入框占位文本',
        required: false,
      },
      {
        name: 'type',
        type: 'string',
        description: '类型',
        required: false,
        options: [
          'input',
          'textarea',
        ],
      },
      {
        name: 'checkIsWhole',
        type: 'string',
        description: '当退格键被按下做删除操作时，检查是否将提及部分作为整体删除',
        required: false,
      },
      {
        name: 'filterOption',
        type: 'string',
        description: '筛选器选项逻辑',
        required: false,
      },
    ],
    events: [
      {
        name: 'search',
        description: '按下触发字段时触发',
      },
      {
        name: 'select',
        description: '当用户选择选项时触发',
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
        name: 'change',
        description: '当绑定值变化时触发',
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
    type: 'elSegmented',
    label: '分段控制器',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '提供一组互斥的选项按钮组，用于切换不同的视图或模式',
    examples: [
      {
        type: 'elSegmented',
        field: 'Fbiomfb40oolafc',
        props: {
          options: [
            {
              label: 'Mon',
              value: 'Mon',
            },
            {
              label: 'Tue',
              value: 'Tue',
            },
            {
              label: 'Wed',
              value: 'Wed',
            },
          ],
        },
      },
    ],
    props: [
      {
        name: 'options',
        type: 'object',
        description: '选项数据',
        required: true,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'block',
        type: 'boolean',
        description: '撑满父元素宽度',
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
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
    ],
  },
  {
    type: 'inputNumber',
    label: '计数器',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '用于输入数字，可通过按钮增减或直接输入特定数值',
    examples: [
      {
        type: 'inputNumber',
        field: 'F2mxmfb40oolagc',
        title: '数字输入框',
        props: {},
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '提供一组选项，用户只能从中选择一个选项',
    examples: [
      {
        type: 'radio',
        field: 'Fqbdmfb40oolahc',
        title: '单选框',
        props: {},
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
      },
    ],
    props: [
      {
        name: 'formCreateOptions',
        type: 'object',
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '提供一组选项，用户可以选择一个或多个选项',
    examples: [
      {
        type: 'checkbox',
        field: 'F8nhmfb40oolaic',
        title: '多选框',
        props: {},
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
      },
    ],
    props: [
      {
        name: 'formCreateOptions',
        type: 'object',
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '从多个选项中选择一个或多个，支持下拉展示形式',
    examples: [
      {
        type: 'select',
        field: 'F88dmfb40oolajc',
        title: '选择器',
        props: {},
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
      },
    ],
    props: [
      {
        name: 'formCreateOptions',
        type: 'object',
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '用于表示两种相互对立状态间的切换，如开/关',
    examples: [
      {
        type: 'switch',
        field: 'Fbmwmfb40oolakc',
        title: '开关',
        props: {
          activeValue: true,
          inactiveValue: false,
        },
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '允许用户通过点击图标对内容进行评分',
    examples: [
      {
        type: 'rate',
        field: 'F74tmfb40oomalc',
        title: '评分',
        props: {},
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '提供一个交互式界面用于选择具体的时间点',
    examples: [
      {
        type: 'timePicker',
        field: 'Fmismfb40oomamc',
        title: '时间',
        props: {},
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
      {
        name: 'visibleChange',
        description: '下拉框出现/隐藏时触发',
      },
    ],
  },
  {
    type: 'timeRange',
    label: '时间区间',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '用于选择或输入一个开始时间和一个结束时间',
    examples: [
      {
        type: 'timePicker',
        field: 'Fl9gmfb40oomanc',
        title: '时间区间',
        props: {
          isRange: true,
        },
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
      {
        name: 'visibleChange',
        description: '下拉框出现/隐藏时触发',
      },
    ],
  },
  {
    type: 'slider',
    label: '滑块',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '通过滑动滑块在一个固定区间内选择数值',
    examples: [
      {
        type: 'slider',
        field: 'Fi1gmfb40oomaoc',
        title: '滑块',
        props: {},
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '提供一个日历界面供用户选择单个日期',
    examples: [
      {
        type: 'datePicker',
        field: 'Fo54mfb40oomapc',
        title: '日期',
        props: {},
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
      {
        name: 'calendarChange',
        description: '在日历所选日期更改时触发',
      },
      {
        name: 'panelChange',
        description: '当日期面板改变时触发',
      },
      {
        name: 'visibleChange',
        description: '下拉框出现/隐藏时触发',
      },
    ],
  },
  {
    type: 'dateRange',
    label: '日期区间',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '提供一个日历界面供用户选择一个日期范围',
    examples: [
      {
        type: 'datePicker',
        field: 'F059mfb40oomaqc',
        title: '日期区间',
        props: {
          type: 'datetimerange',
        },
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
      {
        name: 'calendarChange',
        description: '在日历所选日期更改时触发',
      },
      {
        name: 'panelChange',
        description: '当日期面板改变时触发',
      },
      {
        name: 'visibleChange',
        description: '下拉框出现/隐藏时触发',
      },
    ],
  },
  {
    type: 'colorPicker',
    label: '颜色选择器',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '提供交互界面让用户选择颜色，支持多种格式',
    examples: [
      {
        type: 'colorPicker',
        field: 'Fs87mfb40oomarc',
        title: '颜色选择器',
        props: {},
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '用于处理层级关联的多级数据选择，如省市区',
    examples: [
      {
        type: 'cascader',
        field: 'Fvjumfb40oomasc',
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
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
    props: [
      {
        name: 'options',
        type: 'Array',
        description: '选项数据',
        required: true,
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
      {
        name: 'tagType',
        type: 'string',
        description: '标签类型',
        required: false,
        options: [
          'success',
          'info',
          'warning',
          'danger',
        ],
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '提供交互将本地文件上传到服务器的功能',
    examples: [
      {
        type: 'upload',
        field: 'Fouvmfb40oonatc',
        title: '上传',
        props: {
          action: '/',
          onSuccess: '$FNX:const res = $inject.args[0];\nconst file = $inject.args[1];\n\nfile.url = res.data.url;',
        },
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
        required: true,
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
        name: 'onSuccess',
        type: 'string',
        description: '上传成功时触发',
        required: true,
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
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'remove',
        description: '文件列表移除文件时触发',
      },
      {
        name: 'preview',
        description: '点击文件列表中已上传的文件时触发',
      },
      {
        name: 'error',
        description: '文件上传失败时触发',
      },
      {
        name: 'progress',
        description: '文件上传时触发',
      },
      {
        name: 'exceed',
        description: '当超出限制时触发',
      },
    ],
  },
  {
    type: 'elTransfer',
    label: '穿梭框',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '提供双列表结构，用于在左右两栏间移动和选择多项数据',
    examples: [
      {
        type: 'elTransfer',
        field: 'Fcwcmfb40oonauc',
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
      },
    ],
    props: [
      {
        name: 'data',
        type: 'Array',
        description: '选项数据',
        required: true,
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '以清晰的层级结构展示具有父子关系的数据集合',
    examples: [
      {
        type: 'tree',
        field: 'Fu5dmfb40oonavc',
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
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
    props: [
      {
        name: 'options',
        type: 'Array',
        description: '选项数据',
        required: true,
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
    type: 'elTreeSelect',
    label: '树形选择',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '结合树形结构和下拉选择，从层级数据中选择项',
    examples: [
      {
        type: 'elTreeSelect',
        field: 'Fpzwmfb40oonawc',
        title: '树形选择',
        props: {
          nodeKey: 'value',
          showCheckbox: true,
          data: [
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
                  ],
                },
              ],
            },
          ],
        },
      },
    ],
    props: [
      {
        name: 'data',
        type: 'Array',
        description: '选项数据',
        required: true,
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
        description: '是否在点击节点的时候展开或者收缩节点',
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
        name: 'checkStrictly',
        type: 'boolean',
        description: '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法',
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
    type: 'dataTable',
    label: '数据表格',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '以行和列的形式高效展示大量结构化数据',
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
      },
    ],
    props: [
      {
        name: 'data',
        type: 'Array',
        description: '数据',
        required: true,
      },
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
          'large',
          'default',
          'small',
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
    ],
  },
  {
    type: 'fcDataSelect',
    label: '子表单选择器',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '从数据列表弹窗中选择并插入到当前表单中',
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '将冗长的表单流程分解为多个步骤，引导用户逐步完成',
    examples: [
      {
        type: 'stepForm',
        field: 'F074mfb6yo0gc2c',
        props: {
          steps: [{
            props: {
              title: '标题',
            },
            rule: [{
              type: 'input',
              field: 'Fj43mfb6ypb9c7c',
              title: '输入框',
            }],
          },
          {
            props: {
              title: '标题',
            },
            rule: [{
              type: 'input',
              field: 'Fakomfb6yr7cccc',
              title: '输入框',
            }],
          },
          ],
        },
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '功能增强版的表格表单，提供更复杂的编辑和操作能力',
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
        name: 'columns',
        type: 'Array',
        description: '列',
        required: true,
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
    vueVersion: 'vue3',
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '用于显示辅助性说明、帮助或操作结果提示信息',
    examples: [
      {
        type: 'elAlert',
        props: {
          title: '提示',
          description: '说明文字',
          type: 'success',
          effect: 'dark',
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
        required: true,
      },
      {
        name: 'closable',
        type: 'boolean',
        description: '是否可关闭',
        required: false,
        defaultValue: true,
      },
      {
        name: 'center',
        type: 'boolean',
        description: '文字是否居中',
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '用户可点击的控件，用于触发相应的操作或命令',
    examples: [
      {
        type: 'elButton',
        props: {},
        children: [
          '按钮',
        ],
      },
    ],
    props: [
      {
        name: 'formCreateChild',
        type: 'string',
        description: '内容',
        required: true,
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
    type: 'elTag',
    label: '标签',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '用于标记和分类项目的小型标签，可包含关闭等功能',
    examples: [
      {
        type: 'elTag',
        children: [
          '标签',
        ],
      },
    ],
    props: [
      {
        name: 'formCreateChild',
        type: 'string',
        description: '标签内容',
        required: true,
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
          'large',
          'default',
          'small',
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
        name: 'round',
        type: 'boolean',
        description: '是否为圆形',
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
    type: 'elStatistic',
    label: '统计栏',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '以突出方式展示统计数字、状态或关键指标',
    examples: [
      {
        type: 'elStatistic',
        props: {
          value: 99000,
          title: '统计栏',
        },
      },
    ],
    props: [
      {
        name: 'value',
        type: 'number',
        description: '数值',
        required: true,
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '一条视觉上的分隔线，用于分隔不同内容区块',
    examples: [
      {
        type: 'elDivider',
        props: {},
        children: [
          '分割线',
        ],
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
        required: true,
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
    type: 'elLink',
    label: '链接',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '用于跳转到指定页面或锚点的文本超链接',
    examples: [
      {
        type: 'elLink',
        props: {
          href: 'https://www.form-create.com',
        },
        children: [
          '链接',
        ],
      },
    ],
    props: [
      {
        name: 'href',
        type: 'string',
        description: '跳转链接',
        required: true,
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    business: true,
    isField: false,
    isContainer: true,
    isAssist: true,
    defaultChildren: ['text'],
    usage: '当鼠标悬停时显示的文字提示框，提供额外信息',
    examples: [
      {
        type: 'elTooltip',
        props: {
          content: '文字提示',
        },
        children: [{
          type: 'div',
          style: {
            whiteSpace: 'pre-line',
          },
          children: [
            '文字',
          ],
          _fc_drag_tag: 'text',
        }],
      },
    ],
    props: [
      {
        name: 'content',
        type: 'string',
        description: '显示的内容',
        required: true,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'rawContent',
        type: 'boolean',
        description: '内容是否作为 HTML 字符串处理',
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
        name: 'trigger',
        type: 'string',
        description: '如何触发 Tooltip',
        required: false,
        defaultValue: 'hover',
        options: [
          'hover',
          'click',
          'focus',
          'contextmenu',
        ],
      },
      {
        name: 'offset',
        type: 'number',
        description: '出现位置的偏移量',
        required: false,
      },
      {
        name: 'showAfter',
        type: 'number',
        description: '在触发后多久显示内容，单位毫秒',
        required: false,
      },
      {
        name: 'hideAfter',
        type: 'number',
        description: '延迟关闭，单位毫秒',
        required: false,
      },
      {
        name: 'autoClose',
        type: 'number',
        description: '出现后自动隐藏延时，单位毫秒',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'elWatermark',
    label: '水印',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    business: true,
    isField: false,
    isContainer: true,
    isAssist: true,
    usage: '在页面或组件背景添加文字或图片水印，用于版权声明等',
    examples: [
      {
        type: 'elWatermark',
        style: {
          width: '100%',
        },
        props: {
          content: '水印',
        },
        children: [],
      },
    ],
    props: [
      {
        name: 'content',
        type: 'string',
        description: '水印文本内容',
        required: true,
      },
      {
        name: 'image',
        type: 'string',
        description: '水印图片，建议使用 2x 或 3x 图像',
        required: false,
      },
      {
        name: 'width',
        type: 'number',
        description: '水印的宽度， content 的默认值是它自己的宽度',
        required: false,
        defaultValue: 120,
      },
      {
        name: 'height',
        type: 'number',
        description: '水印的高度， content 的默认值是它自己的高度',
        required: false,
        defaultValue: 64,
      },
      {
        name: 'rotate',
        type: 'number',
        description: '水印的旋转角度, 单位 °',
        required: false,
        defaultValue: -22,
      },
      {
        name: 'zIndex',
        type: 'number',
        description: '水印元素的z-index值',
        required: false,
      },
      {
        name: 'gap',
        type: 'string',
        description: '水印之间的间距',
        required: false,
        defaultValue: [
          100,
          100,
        ],
      },
    ],
    events: [],
  },
  {
    type: 'elImage',
    label: '图片',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '用于在页面中展示图片',
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
      },
    ],
    props: [
      {
        name: 'src',
        type: 'string',
        description: '图片链接',
        required: true,
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '用于展示用户头像的圆形或方形框，可包含状态指示等',
    examples: [
      {
        type: 'elAvatar',
        props: {
          fit: 'cover',
          src: 'https://static.form-create.com/example.png',
        },
      },
    ],
    props: [
      {
        name: 'src',
        type: 'string',
        description: '图片链接',
        required: true,
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    defaultChildren: ['col'],
    usage: '基于24分栏的网格系统，实现响应式的页面布局',
    examples: [
      {
        type: 'fcRow',
        children: [{
          type: 'col',
          props: {
            span: 12,
          },
          children: [{
            type: 'input',
            field: 'F97zmfb7j7fle4c',
            title: '输入框',
          }],
        },
        {
          type: 'col',
          props: {
            span: 12,
          },
          children: [{
            type: 'input',
            field: 'Fd1mmfb7j8ise9c',
            title: '输入框',
          }],
        },
        ],
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    business: true,
    isField: false,
    isContainer: true,
    isAssist: true,
    defaultChildren: ['input'],
    usage: '使元素在一行内水平排列的布局方式',
    examples: [
      {
        type: 'fcInlineForm',
        children: [{
          type: 'input',
          field: 'Fpaomfb7rowqg7c',
          title: '输入框',
        },
        {
          type: 'input',
          field: 'F7sbmfb7rpmxgcc',
          title: '输入框',
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    usage: '将内容分组放在不同面板，通过标签头切换显示',
    defaultChildren: ['elTabPane'],
    examples: [
      {
        type: 'elTabs',
        style: {
          width: '100%',
        },
        props: {
          modelValue: '1',
        },
        sync: [
          'modelValue',
        ],
        children: [{
          type: 'elTabPane',
          props: {
            label: '选项卡',
          },
          children: [{
            type: 'input',
            field: 'Fsf6mfb7u5d3gsc',
            title: '输入框',
          }],
        },
        {
          type: 'elTabPane',
          props: {
            label: '选项卡',
          },
          children: [{
            type: 'input',
            field: 'Fixdmfb7u9nygxc',
            title: '输入框',
          }],
        },
        ],
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    usage: '一个包含边框、阴影和留白的容器，用于包裹一组相关内容',
    examples: [
      {
        type: 'elCard',
        props: {
          header: '标题',
        },
        style: {
          width: '100%',
        },
        children: [{
          type: 'input',
          field: 'F4qmmfb7w2ach6c',
          title: '输入框',
        }],
      },
    ],
    props: [
      {
        name: 'header',
        type: 'string',
        description: '标题',
        required: true,
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    defaultChildren: ['elCollapseItem'],
    usage: '提供可折叠/展开的内容区域，节省空间并分组信息',
    examples: [
      {
        type: 'elCollapse',
        props: {
          modelValue: [
            'Fq8vmfb7wlv6hdc',
          ],
        },
        sync: [
          'modelValue',
        ],
        style: {
          width: '100%',
        },
        children: [{
          type: 'elCollapseItem',
          props: {
            title: '面板',
            name: 'Fq8vmfb7wlv6hdc',
          },
          children: [],
        },
        {
          type: 'elCollapseItem',
          props: {
            title: '面板',
            name: 'Fi6fmfb7wqn1hgc',
          },
          children: [],
        },
        ],
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    defaultChildren: ['elDescriptionsItem'],
    usage: '以术语和描述成对的形式展示信息，常用于详情页',
    examples: [
      {
        type: 'elDescriptions',
        props: {
          border: true,
        },
        style: {
          width: '100%',
        },
        children: [{
          type: 'elDescriptionsItem',
          props: {
            label: '标题',
          },
          children: [
            '内容',
          ],
        },
        {
          type: 'elDescriptionsItem',
          props: {
            label: '标题',
          },
          children: [
            '内容',
          ],
        },
        ],
      },
    ],
    props: [
      {
        name: 'title',
        type: 'string',
        description: '标题文本，显示在左上方',
        required: false,
      },
      {
        name: 'extra',
        type: 'string',
        description: '操作区文本，显示在右上方',
        required: false,
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
          'large',
          'default',
          'small',
        ],
      },
    ],
    events: [],
  },
  {
    type: 'fcDialog',
    label: '弹出框',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    business: true,
    isField: true,
    isContainer: true,
    isAssist: false,
    childrenPath: 'props.rule',
    usage: '在页面顶部居中弹出并覆盖全屏的模态对话框',
    examples: [
      {
        type: 'fcDialog',
        props: {
          title: '弹出框',
          rule: [{
            type: 'input',
            field: 'Fhgbmfb7z1p1hxc',
            title: '输入框',
          }],
        },
        native: true,
        ignore: true,
      },
    ],
    props: [
      {
        name: 'title',
        type: 'string',
        description: '标题',
        required: true,
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
      {
        name: 'openAutoFocus',
        description: '输入焦点聚焦在内容时的回调',
      },
      {
        name: 'closeAutoFocus',
        description: '输入焦点从内容失焦时的回调',
      },
    ],
  },
  {
    type: 'fcDrawer',
    label: '抽屉',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    business: true,
    isField: true,
    isContainer: true,
    isAssist: false,
    childrenPath: 'props.rule',
    usage: '从屏幕边缘滑出的对话框，常用于承载详细操作或信息',
    examples: [
      {
        type: 'fcDrawer',
        field: 'Fvjumfb40oomasf',
        props: {
          title: '抽屉',
          rule: [{
            type: 'input',
            field: 'Fhgbmfb7z1p1hxc',
            title: '输入框',
          }],
        },
        native: true,
        ignore: true,
        children: [],
      },
    ],
    props: [
      {
        name: 'title',
        type: 'string',
        description: '标题',
        required: true,
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
      {
        name: 'openAutoFocus',
        description: '输入焦点聚焦在内容时的回调',
      },
      {
        name: 'closeAutoFocus',
        description: '输入焦点从内容失焦时的回调',
      },
    ],
  },
  {
    type: 'col',
    label: '格子',
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    usage: '布局系统中的一个基本单元，用于组合构建复杂布局',
    examples: [
      {
        type: 'col',
        props: {
          span: 12,
        },
        children: [],
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    usage: '提供多个内容视图的切换界面',
    examples: [
      {
        type: 'elTabPane',
        props: {
          label: '选项卡',
        },
        children: [{
          type: 'input',
          field: 'Fevtmfb80s23i6c',
          title: '输入框',
        }],
      },
    ],
    props: [
      {
        name: 'label',
        type: 'string',
        description: '选项卡标题',
        required: true,
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    usage: '一个具有标题和内容区域的通用内容容器',
    examples: [
      {
        type: 'elCollapseItem',
        props: {
          title: '面板',
          name: 'Fi6fmfb7wqn1hgc',
        },
        children: [{
          type: 'input',
          field: 'Fevtmfb80s23i6c',
          title: '输入框',
        }],
      },
    ],
    props: [
      {
        name: 'title',
        type: 'string',
        description: '面板标题',
        required: true,
      },
      {
        name: 'name',
        type: 'string',
        description: '唯一标志符',
        required: true,
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
    uiFramework: 'element-plus',
    vueVersion: 'vue3',
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '描述列表（Descriptions）中的一项，包含术语和描述',
    examples: [
      {
        type: 'elDescriptionsItem',
        props: {
          label: '标题',
        },
        children: [
          '内容',
        ],
      },
    ],
    props: [
      {
        name: 'label',
        type: 'string',
        description: '标签文本',
        required: true,
      },
      {
        name: 'formCreateChild',
        type: 'string',
        description: '内容',
        required: true,
      },
      {
        name: 'span',
        type: 'number',
        description: '列的数量',
        required: false,
      },
      {
        name: 'width',
        type: 'string',
        description: '列的宽度，不同行相同列的宽度按最大值设定（如无 border ，宽度包含标签与内容',
        required: false,
      },
      {
        name: 'minWidth',
        type: 'string',
        description: '列的最小宽度',
        required: false,
      },
      {
        name: 'align',
        type: 'string',
        description: '列的内容对齐方式（如无 border，对标签和内容均生效）',
        required: false,
        options: [
          'left',
          'center',
          'right',
        ],
      },
      {
        name: 'labelAlign',
        type: 'string',
        description: '列的标签对齐方式，若不设置该项，则使用内容的对齐方式（如无 border，请使用 align 参数）',
        required: false,
        options: [
          'left',
          'center',
          'right',
        ],
      },
    ],
    events: [],
  },
];
