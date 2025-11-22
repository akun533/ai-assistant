import { ComponentInfo } from '../../core/component-registry.js';

export const antDesignVueComponents: ComponentInfo[] = [
  {
    type: 'input',
    label: '输入框',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'input',
        field: 'F6e6mguk6nrjacc',
        title: '输入框',
        _fc_id: 'id_F1i3mguk6nrjadc',
        name: 'ref_Ftfsmguk6nrjaec',
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
        name: 'allowClear',
        type: 'boolean',
        description: '是否显示清除按钮',
        required: false,
      },
      {
        name: 'showCount',
        type: 'boolean',
        description: '是否展示字数',
        required: false,
      },
      {
        name: 'bordered',
        type: 'boolean',
        description: '是否有边框',
        required: false,
        defaultValue: true,
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
        description: '输入框内容变化时触发',
      },
      {
        name: 'pressEnter',
        description: '按下回车键时触发',
      },
    ],
  },
  {
    type: 'textarea',
    label: '多行输入框',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'input',
        field: 'Fffcmguk6nrjagc',
        title: '多行输入框',
        props: {
          type: 'textarea',
        },
        _fc_id: 'id_Fbidmguk6nrjahc',
        name: 'ref_Fd87mguk6nrjaic',
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
        name: 'allowClear',
        type: 'boolean',
        description: '是否显示清除按钮',
        required: false,
      },
      {
        name: 'showCount',
        type: 'boolean',
        description: '是否展示字数',
        required: false,
      },
      {
        name: 'autoSize',
        type: 'boolean',
        description: '自适应内容高度',
        required: false,
      },
      {
        name: 'bordered',
        type: 'boolean',
        description: '是否有边框',
        required: false,
        defaultValue: true,
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
      {
        name: 'pressEnter',
        description: '按下回车键时触发',
      },
    ],
  },
  {
    type: 'password',
    label: '密码输入框',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'input',
        field: 'Fgiomguk6nrjakc',
        title: '密码输入框',
        props: {
          type: 'password',
        },
        _fc_id: 'id_F9scmguk6nrjalc',
        name: 'ref_Frh8mguk6nrjamc',
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
        name: 'allowClear',
        type: 'boolean',
        description: '是否显示清除按钮',
        required: false,
      },
      {
        name: 'visibilityToggle',
        type: 'boolean',
        description: '是否显示切换按钮或者控制密码显隐',
        required: false,
      },
      {
        name: 'showCount',
        type: 'boolean',
        description: '是否展示字数',
        required: false,
      },
      {
        name: 'bordered',
        type: 'boolean',
        description: '是否有边框',
        required: false,
        defaultValue: true,
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
        description: '输入框内容变化时触发',
      },
      {
        name: 'pressEnter',
        description: '按下回车键时触发',
      },
    ],
  },
  {
    type: 'aMentions',
    label: '提及',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'aMentions',
        modelField: 'value',
        field: 'Fakgmguk6nrjaoc',
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
            {
              label: 'btea',
              value: 'btea',
            },
          ],
        },
        _fc_id: 'id_F7o6mguk6nrjapc',
        name: 'ref_F53tmguk6nrjaqc',
        _fc_drag_tag: 'aMentions',
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
        name: 'placeholder',
        type: 'string',
        description: '输入框占位文本',
        required: false,
      },
      {
        name: 'rows',
        type: 'number',
        description: '内容高度',
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
    ],
  },
  {
    type: 'aSegmented',
    label: '分段控制器',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'aSegmented',
        field: 'Fbxpmguk6nrjasc',
        modelField: 'value',
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
            {
              label: 'Thu',
              value: 'Thu',
            },
            {
              label: 'Fri',
              value: 'Fri',
            },
            {
              label: 'Sat',
              value: 'Sat',
            },
            {
              label: 'Sun',
              value: 'Sun',
            },
          ],
        },
        _fc_id: 'id_Fmpimguk6nrjatc',
        name: 'ref_Fjyymguk6nrjauc',
        _fc_drag_tag: 'aSegmented',
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
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'inputNumber',
        field: 'Fdwemguk6nrjawc',
        title: '数字输入框',
        _fc_id: 'id_Fandmguk6nrjaxc',
        name: 'ref_F8icmguk6nrjayc',
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
        name: 'controls',
        type: 'boolean',
        description: '是否使用控制按钮',
        required: false,
        defaultValue: true,
      },
      {
        name: 'bordered',
        type: 'boolean',
        description: '是否有边框',
        required: false,
        defaultValue: true,
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
      {
        name: 'pressEnter',
        description: '按下回车键时触发',
      },
      {
        name: 'step',
        description: '点击上下箭头时触发',
      },
    ],
  },
  {
    type: 'radio',
    label: '单选框',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'radio',
        field: 'Fyfimguk6nrkb0c',
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
        _fc_id: 'id_Fcbjmguk6nrkb1c',
        name: 'ref_Fy19mguk6nrkb2c',
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
        name: 'optionType',
        type: 'boolean',
        description: '选项类型',
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
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'checkbox',
        field: 'F8timguk6nrkb4c',
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
        _fc_id: 'id_Fihamguk6nrkb5c',
        name: 'ref_Fvntmguk6nrkb6c',
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
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'select',
        field: 'F3a4mguk6nrkb8c',
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
        _fc_id: 'id_F5r9mguk6nrkb9c',
        name: 'ref_F5phmguk6nrkbac',
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
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'allowClear',
        type: 'boolean',
        description: '是否可以清空选项',
        required: false,
      },
      {
        name: 'mode',
        type: 'string',
        description: '模式',
        required: false,
        options: [
          'multiple',
          'tags',
          'combobox',
        ],
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '占位符',
        required: false,
      },
      {
        name: 'bordered',
        type: 'boolean',
        description: '是否有边框',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'search',
        description: '文本框值变化时触发',
      },
      {
        name: 'select',
        description: '被选中时调用',
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
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'switch',
        field: 'Fctumguk6nrkbcc',
        title: '开关',
        props: {
          checkedValue: true,
          unCheckedValue: false,
        },
        _fc_id: 'id_F1fcmguk6nrkbdc',
        name: 'ref_Fqllmguk6nrkbec',
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
        name: 'checkedChildren',
        type: 'string',
        description: '打开时的文字描述',
        required: false,
      },
      {
        name: 'unCheckedChildren',
        type: 'string',
        description: '关闭时的文字描述',
        required: false,
      },
      {
        name: 'checkedValue',
        type: 'string',
        description: '打开时的值',
        required: false,
      },
      {
        name: 'unCheckedValue',
        type: 'string',
        description: '关闭时的值',
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
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'rate',
        field: 'Fx1kmguk6nrkbgc',
        title: '评分',
        _fc_id: 'id_Fqecmguk6nrkbhc',
        name: 'ref_Fla3mguk6nrkbic',
        _fc_drag_tag: 'rate',
      },
    ],
    props: [
      {
        name: 'count',
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
        name: 'allowClear',
        type: 'boolean',
        description: '是否允许再次点击后清除',
        required: false,
        defaultValue: true,
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
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'timePicker',
        field: 'Fe2nmguk6nrkbkc',
        title: '时间',
        _fc_id: 'id_Fhzemguk6nrkblc',
        name: 'ref_Fs25mguk6nrkbmc',
        _fc_drag_tag: 'timePicker',
      },
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        description: '禁用',
        required: false,
      },
      {
        name: 'allowClear',
        type: 'boolean',
        description: '是否显示清除按钮',
        required: false,
        defaultValue: true,
      },
      {
        name: 'hourStep',
        type: 'number',
        description: '小时选项间隔',
        required: false,
      },
      {
        name: 'minuteStep',
        type: 'number',
        description: '分钟选项间隔',
        required: false,
      },
      {
        name: 'secondStep',
        type: 'number',
        description: '秒选项间隔',
        required: false,
      },
      {
        name: 'inputReadOnly',
        type: 'boolean',
        description: '文本框不可输入',
        required: false,
        defaultValue: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '选择时的占位内容',
        required: false,
      },
      {
        name: 'bordered',
        type: 'boolean',
        description: '是否有边框',
        required: false,
        defaultValue: true,
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
    type: 'timeRange',
    label: '时间区间',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'timePicker',
        field: 'F72pmguk6nrkboc',
        title: '时间区间',
        props: {
          range: true,
        },
        _fc_id: 'id_F8djmguk6nrkbpc',
        name: 'ref_Fzcqmguk6nrkbqc',
        _fc_drag_tag: 'timeRange',
      },
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        description: '禁用',
        required: false,
      },
      {
        name: 'allowClear',
        type: 'boolean',
        description: '是否显示清除按钮',
        required: false,
        defaultValue: true,
      },
      {
        name: 'hourStep',
        type: 'number',
        description: '小时选项间隔',
        required: false,
      },
      {
        name: 'minuteStep',
        type: 'number',
        description: '分钟选项间隔',
        required: false,
      },
      {
        name: 'secondStep',
        type: 'number',
        description: '秒选项间隔',
        required: false,
      },
      {
        name: 'inputReadOnly',
        type: 'boolean',
        description: '文本框不可输入',
        required: false,
        defaultValue: false,
      },
      {
        name: 'bordered',
        type: 'boolean',
        description: '是否有边框',
        required: false,
        defaultValue: true,
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
    type: 'slider',
    label: '滑块',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'slider',
        field: 'Fr9umguk6nrkbsc',
        title: '滑块',
        _fc_id: 'id_Fv3bmguk6nrkbtc',
        name: 'ref_Faurmguk6nrkbuc',
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
        name: 'dots',
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
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
    ],
  },
  {
    type: 'datePicker',
    label: '日期',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'datePicker',
        field: 'Fez2mguk6nrkbwc',
        title: '日期',
        _fc_id: 'id_F4jzmguk6nrkbxc',
        name: 'ref_Fbl9mguk6nrkbyc',
        _fc_drag_tag: 'datePicker',
      },
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        description: '禁用',
        required: false,
      },
      {
        name: 'bordered',
        type: 'boolean',
        description: '是否有边框',
        required: false,
        defaultValue: true,
      },
      {
        name: 'picker',
        type: 'string',
        description: '显示类型',
        required: false,
        options: [
          'year',
          'month',
          'date',
          'week',
          'quarter',
        ],
      },
      {
        name: 'showTime',
        type: 'boolean',
        description: '增加时间选择',
        required: false,
      },
      {
        name: 'allowClear',
        type: 'boolean',
        description: '是否显示清除按钮',
        required: false,
      },
      {
        name: 'inputReadOnly',
        type: 'boolean',
        description: '文本框不可输入',
        required: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '选择时的占位内容',
        required: false,
      },
      {
        name: 'format',
        type: 'string',
        description: '显示在输入框中的格式',
        required: false,
      },
      {
        name: 'valueFormat',
        type: 'string',
        description: '绑定值的格式',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'ok',
        description: '点击确定按钮时触发',
      },
    ],
  },
  {
    type: 'dateRange',
    label: '日期区间',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'datePicker',
        field: 'F4gkmguk6nrkc0c',
        title: '日期区间',
        props: {
          range: true,
        },
        _fc_id: 'id_Fxxkmguk6nrkc1c',
        name: 'ref_Fv5omguk6nrkc2c',
        _fc_drag_tag: 'dateRange',
      },
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        description: '禁用',
        required: false,
      },
      {
        name: 'bordered',
        type: 'boolean',
        description: '是否有边框',
        required: false,
        defaultValue: true,
      },
      {
        name: 'picker',
        type: 'string',
        description: '显示类型',
        required: false,
        options: [
          'year',
          'month',
          'date',
          'week',
          'quarter',
        ],
      },
      {
        name: 'showTime',
        type: 'boolean',
        description: '增加时间选择',
        required: false,
      },
      {
        name: 'allowClear',
        type: 'boolean',
        description: '是否显示清除按钮',
        required: false,
      },
      {
        name: 'inputReadOnly',
        type: 'boolean',
        description: '文本框不可输入',
        required: false,
      },
      {
        name: 'separator',
        type: 'string',
        description: '设置分隔符',
        required: false,
      },
      {
        name: 'format',
        type: 'string',
        description: '显示在输入框中的格式',
        required: false,
      },
      {
        name: 'valueFormat',
        type: 'string',
        description: '绑定值的格式',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'ok',
        description: '点击确定按钮时触发',
      },
      {
        name: 'calendarChange',
        description: '待选日期发生变化时触发',
      },
    ],
  },
  {
    type: 'cascader',
    label: '级联选择器',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'cascader',
        field: 'Fbm5mguk6nrlc4c',
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
        _fc_id: 'id_Fxr5mguk6nrlc5c',
        name: 'ref_Fkodmguk6nrlc6c',
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
        name: 'allowClear',
        type: 'boolean',
        description: '是否支持清空选项',
        required: false,
      },
      {
        name: 'multiple',
        type: 'boolean',
        description: '支持多选节点',
        required: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '输入框占位文本',
        required: false,
      },
      {
        name: 'showSearch',
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
        name: 'dropdownVisibleChange',
        description: '显示/隐藏浮层时触发',
      },
      {
        name: 'search',
        description: '监听搜索，返回输入的值',
      },
    ],
  },
  {
    type: 'upload',
    label: '上传',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'upload',
        field: 'Fq6lmguk6nrlc8c',
        title: '上传',
        props: {
          action: '/',
          onSuccess: '$FNX:const file = $inject.args[0];\n\nfile.url = file.response.url;',
        },
        _fc_id: 'id_Fr6kmguk6nrlc9c',
        name: 'ref_Fyjomguk6nrlcac',
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
        description: '上传文件之前的钩子',
        required: false,
      },
      {
        name: 'onSuccess',
        type: 'string',
        description: '上传成功回调',
        required: false,
      },
      {
        name: 'customRequest',
        type: 'string',
        description: '自定义上传行为',
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
        name: 'maxCount',
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
        name: 'download',
        description: '点击下载文件时触发',
      },
      {
        name: 'preview',
        description: '点击文件链接或预览图标时触发',
      },
      {
        name: 'remove',
        description: '文件列表移除文件时触发',
      },
    ],
  },
  {
    type: 'aTransfer',
    label: '穿梭框',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'aTransfer',
        field: 'F9sgmguk6nrlccc',
        modelField: 'targetKeys',
        title: '穿梭框',
        props: {
          dataSource: [
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
        _fc_id: 'id_Fa4hmguk6nrmcdc',
        name: 'ref_Fsn9mguk6nrmcec',
        _fc_drag_tag: 'aTransfer',
      },
    ],
    props: [
      {
        name: 'dataSource',
        type: 'Array',
        description: '选项数据',
        required: false,
      },
      {
        name: 'oneWay',
        type: 'boolean',
        description: '展示为单向样式',
        required: false,
      },
      {
        name: 'pagination',
        type: 'boolean',
        description: '使用分页样式',
        required: false,
      },
      {
        name: 'showSearch',
        type: 'boolean',
        description: '是否显示搜索框',
        required: false,
      },
      {
        name: 'showSelectAll',
        type: 'boolean',
        description: '是否展示全选勾选框',
        required: false,
      },
      {
        name: 'titles',
        type: 'string',
        description: '自定义列表标题',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'search',
        description: '搜索框内容时改变时触发',
      },
      {
        name: 'selectChange',
        description: '选中项发生改变时触发',
      },
    ],
  },
  {
    type: 'tree',
    label: '树形控件',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'tree',
        field: 'F3ekmguk6nrmcgc',
        title: '树形控件',
        props: {
          fieldNames: {
            title: 'label',
            key: 'id',
          },
          checkable: true,
          treeData: [
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
        _fc_id: 'id_Ft2jmguk6nrmchc',
        name: 'ref_Fvjdmguk6nrmcic',
        _fc_drag_tag: 'tree',
      },
    ],
    props: [
      {
        name: 'treeData',
        type: 'Array',
        description: '选项数据',
        required: false,
      },
      {
        name: 'fieldNames',
        type: 'string',
        description: '配置选项',
        required: false,
      },
      {
        name: 'showLine',
        type: 'boolean',
        description: '是否展示连接线',
        required: false,
      },
      {
        name: 'checkStrictly',
        type: 'boolean',
        description: '是否严格的遵循父子不互相关联的做法',
        required: false,
      },
      {
        name: 'defaultExpandAll',
        type: 'boolean',
        description: '是否默认展开所有节点',
        required: false,
      },
    ],
    events: [
      {
        name: 'check',
        description: '点击复选框触发',
      },
      {
        name: 'expand',
        description: '展开/收起节点时触发',
      },
      {
        name: 'select',
        description: '点击树节点触发',
      },
      {
        name: 'rightClick',
        description: '响应右键点击',
      },
    ],
  },
  {
    type: 'aTreeSelect',
    label: '树形选择',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'aTreeSelect',
        field: 'Faidmguk6nrmckc',
        modelField: 'value',
        title: '树形选择',
        props: {
          treeNodeFilterProp: 'label',
          treeData: [
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
        _fc_id: 'id_F6emmguk6nrmclc',
        name: 'ref_Fuzqmguk6nrmcmc',
        _fc_drag_tag: 'aTreeSelect',
      },
    ],
    props: [
      {
        name: 'treeData',
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
        name: 'allowClear',
        type: 'boolean',
        description: '是否可以清空选项',
        required: false,
      },
      {
        name: 'showSearch',
        type: 'boolean',
        description: '在下拉中显示搜索框(仅在单选模式下生效)',
        required: false,
      },
      {
        name: 'treeCheckable',
        type: 'boolean',
        description: '显示多选框',
        required: false,
      },
      {
        name: 'treeDefaultExpandAll',
        type: 'boolean',
        description: '是否默认展开所有节点',
        required: false,
      },
      {
        name: 'treeLine',
        type: 'boolean',
        description: '是否展示线条样式',
        required: false,
      },
      {
        name: 'checkStrictly',
        type: 'boolean',
        description: '是否严格的遵循父子不互相关联的做法',
        required: false,
      },
      {
        name: 'fieldNames',
        type: 'string',
        description: '配置选项',
        required: false,
      },
    ],
    events: [
      {
        name: 'check',
        description: '选中树节点或输入值发生变化时触发',
      },
      {
        name: 'treeExpand',
        description: '展开树节点时调用',
      },
      {
        name: 'select',
        description: '点击树节点触发',
      },
    ],
  },
  {
    type: 'dataTable',
    label: '数据表格',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
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
          'right',
        ],
      },
      {
        name: 'button>width',
        type: 'string',
        description: '列的宽度',
        required: false,
        defaultValue: '125px',
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
        name: 'page>props>size',
        type: 'string',
        description: '尺寸',
        required: false,
        options: [
          'default',
          'small',
        ],
      },
      {
        name: 'rowKey',
        type: 'string',
        description: '行数据的Key',
        required: false,
      },
      {
        name: 'selection',
        type: 'boolean',
        description: '是否显示多选框',
        required: false,
      },
      {
        name: 'bordered',
        type: 'boolean',
        description: '边框',
        required: false,
      },
      {
        name: 'scroll>x',
        type: 'string',
        description: '宽度',
        required: false,
      },
      {
        name: 'scroll>y',
        type: 'string',
        description: '高度',
        required: false,
      },
    ],
    events: [
      {
        name: 'handleClick',
        description: '点击操作按钮时会触发该事件',
      },
      {
        name: 'change',
        description: '分页、排序、筛选变化时触发',
      },
      {
        name: 'rowSelectionChange',
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
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
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
        name: 'allowClear',
        type: 'boolean',
        description: '是否可以清空选项',
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
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'stepForm',
        field: 'Fjhkmguk6nroefc',
        props: {
          steps: [
            {
              props: {
                title: '标题',
              },
              rule: [
                {
                  type: 'input',
                  field: 'Foa6mguk6nroejc',
                  title: '输入框',
                  $required: false,
                  _fc_id: 'id_Fmhdmguk6nroekc',
                  name: 'ref_F36hmguk6nroelc',
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
                  field: 'F0e9mguk6nrpenc',
                  title: '输入框',
                  $required: false,
                  _fc_id: 'id_F3zkmguk6nrpeoc',
                  name: 'ref_Fg2tmguk6nrpepc',
                  display: true,
                  hidden: false,
                  _fc_drag_tag: 'input',
                },
              ],
            },
          ],
        },
        _fc_id: 'id_Fc0zmguk6nroegc',
        name: 'ref_Fqi8mguk6nroehc',
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
        name: 'stepsProps>size',
        type: 'string',
        description: '尺寸',
        required: false,
        options: [
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
      {
        name: 'submit',
        description: '表单提交时触发',
      },
      {
        name: 'next',
        description: '点击下一步按钮时触发',
      },
      {
        name: 'validateFail',
        description: '表单验证失败时触发',
      },
    ],
  },
  {
    type: 'tableFormPro',
    label: '表格表单Pro',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
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
        name: 'page>props>size',
        type: 'string',
        description: '尺寸',
        required: false,
        options: [
          'default',
          'small',
        ],
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
          'default',
          'small',
        ],
      },
      {
        name: 'scroll>x',
        type: 'string',
        description: '宽度',
        required: false,
      },
      {
        name: 'scroll>y',
        type: 'string',
        description: '高度',
        required: false,
      },
      {
        name: 'bordered',
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
    type: 'aAlert',
    label: '提示',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'aAlert',
        props: {
          message: '提示',
          description: '说明文字',
          type: 'success',
        },
        style: {
          width: '100%',
        },
        _fc_id: 'id_Fsq0mguk6nrqg2c',
        name: 'ref_Faivmguk6nrqg3c',
        _fc_drag_tag: 'aAlert',
      },
    ],
    props: [
      {
        name: 'message',
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
        defaultValue: false,
      },
      {
        name: 'banner',
        type: 'boolean',
        description: '是否用作顶部公告',
        required: false,
        defaultValue: false,
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
    ],
    events: [
      {
        name: 'close',
        description: '关闭组件时触发',
      },
    ],
  },
  {
    type: 'aButton',
    label: '按钮',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'aButton',
        children: [
          '按钮',
        ],
        _fc_id: 'id_Fuzmmguk6nrqg4c',
        name: 'ref_Fisfmguk6nrqg5c',
        _fc_drag_tag: 'aButton',
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
          'large',
          'middle',
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
          'ghost',
          'dashed',
          'link',
          'text',
          'default',
        ],
      },
      {
        name: 'shape',
        type: 'string',
        description: '形状',
        required: false,
        options: [
          'circle',
          'round',
          'default',
        ],
      },
      {
        name: 'ghost',
        type: 'boolean',
        description: '使按钮背景透明',
        required: false,
      },
      {
        name: 'danger',
        type: 'boolean',
        description: '设置危险按钮',
        required: false,
      },
      {
        name: 'block',
        type: 'boolean',
        description: '将按钮宽度自动撑开',
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
    type: 'aStatistic',
    label: '统计栏',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'aStatistic',
        props: {
          value: 99000,
          title: '统计栏',
        },
        _fc_id: 'id_F4e9mguk6nrqgcc',
        name: 'ref_Fopnmguk6nrqgdc',
        _fc_drag_tag: 'aStatistic',
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
    type: 'aDivider',
    label: '分割线',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'aDivider',
        children: [
          '分割线',
        ],
        _fc_id: 'id_F2nimguk6nrrgec',
        name: 'ref_Fpc0mguk6nrrgfc',
        _fc_drag_tag: 'aDivider',
      },
    ],
    props: [
      {
        name: 'type',
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
        name: 'orientation',
        type: 'string',
        description: '设置分割线文案的位置',
        required: false,
        options: [
          'left',
          'right',
          'center',
        ],
      },
      {
        name: 'plain',
        type: 'boolean',
        description: '文字是否显示为普通正文样式',
        required: false,
      },
      {
        name: 'dashed',
        type: 'boolean',
        description: '是否虚线',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'aTag',
    label: '标签',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'aTag',
        children: [
          '标签',
        ],
        _fc_id: 'id_Fr7hmguk6nrrggc',
        name: 'ref_Fyo7mguk6nrrghc',
        _fc_drag_tag: 'aTag',
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
        name: 'color',
        type: 'string',
        description: '背景色',
        required: false,
      },
      {
        name: 'closable',
        type: 'boolean',
        description: '是否可关闭',
        required: false,
      },
      {
        name: 'bordered',
        type: 'boolean',
        description: '是否有边框',
        required: false,
        defaultValue: true,
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
    type: 'aTooltip',
    label: '文字提示',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    business: true,
    isField: false,
    isContainer: true,
    isAssist: true,
    defaultChildren: ['text'],
    examples: [
      {
        type: 'aTooltip',
        props: {
          title: '文字提示',
        },
        children: [
          {
            type: 'input',
            field: 'Fkz1mguk6nrrgkc',
            title: '输入框',
            _fc_id: 'id_Fo5mmguk6nrrglc',
            name: 'ref_Fjv6mguk6nrrgmc',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'F13vmguk6nrrgnc',
            title: '输入框',
            _fc_id: 'id_Filhmguk6nrrgoc',
            name: 'ref_Fnpfmguk6nrrgpc',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_Ftgcmguk6nrrgic',
        name: 'ref_F7p7mguk6nrrgjc',
        _fc_drag_tag: 'aTooltip',
      },
    ],
    props: [
      {
        name: 'title',
        type: 'string',
        description: '显示的内容',
        required: false,
      },
      {
        name: 'color',
        type: 'string',
        description: '背景色',
        required: false,
      },
      {
        name: 'placement',
        type: 'string',
        description: 'Tooltip 组件出现的位置',
        required: false,
        defaultValue: 'bottom',
        options: [
          'top',
          'topLeft',
          'topRight',
          'bottom',
          'bottomLeft',
          'bottomRight',
          'left',
          'leftTop',
          'leftBottom',
          'right',
          'rightTop',
          'rightBottom',
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
        name: 'mouseEnterDelay',
        type: 'number',
        description: '在触发后多久显示内容，单位秒',
        required: false,
      },
      {
        name: 'mouseLeaveDelay',
        type: 'number',
        description: '延迟关闭，单位秒',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'aWatermark',
    label: '水印',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    business: true,
    isField: false,
    isContainer: true,
    isAssist: true,
    examples: [
      {
        type: 'aWatermark',
        style: {
          width: '100%',
        },
        props: {
          content: '水印',
        },
        children: [
          {
            type: 'input',
            field: 'Fepsmguk6nrrgsc',
            title: '输入框',
            _fc_id: 'id_Fp0cmguk6nrrgtc',
            name: 'ref_Fe9smguk6nrrguc',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'Ft0amguk6nrrgvc',
            title: '输入框',
            _fc_id: 'id_Fnx0mguk6nrrgwc',
            name: 'ref_Fl5amguk6nrrgxc',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_Fuv7mguk6nrrgqc',
        name: 'ref_F2ilmguk6nrrgrc',
        _fc_drag_tag: 'aWatermark',
      },
    ],
    props: [
      {
        name: 'content',
        type: 'string',
        description: '水印文本内容',
        required: false,
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
    ],
    events: [],
  },
  {
    type: 'aImage',
    label: '图片',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'aImage',
        style: {
          width: '100px',
          height: '100px',
        },
        props: {
          src: 'https://static.form-create.com/example.png',
        },
        _fc_id: 'id_Fb8lmguk6nrrgyc',
        name: 'ref_Fa0tmguk6nrrgzc',
        _fc_drag_tag: 'aImage',
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
        name: 'preview',
        type: 'boolean',
        description: '开启预览',
        required: false,
        defaultValue: true,
      },
    ],
    events: [],
  },
  {
    type: 'aAvatar',
    label: '头像框',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'aAvatar',
        props: {
          fit: 'cover',
          src: 'https://static.form-create.com/example.png',
        },
        _fc_id: 'id_F3x0mguk6nrrh4c',
        name: 'ref_Fqmnmguk6nrrh5c',
        _fc_drag_tag: 'aAvatar',
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
    type: 'fcDynamicRender',
    label: 'Vue组件',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'fcDynamicRender',
        field: 'F5s6mguk6nrrhpc',
        native: false,
        readMode: 'custom',
        props: {
          vueContent: "<template>\n  <div class=\"dynamic-component\">\n    <h3>{{ title }}</h3>\n    <p>{{ content }}</p>\n    <div class=\"button-group\">\n      <button @click=\"increment\" class=\"btn btn-primary\">增加</button>\n      <button @click=\"decrement\" class=\"btn btn-secondary\">减少</button>\n      <button @click=\"reset\" class=\"btn btn-danger\">重置</button>\n    </div>\n    <p>当前计数: {{ count }}</p>\n    <div class=\"info-section\">\n      <p>状态: {{ status }}</p>\n      <p>计算属性演示: {{ doubleCount }}</p>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'DynamicComponent',\n  emits: ['update:modelValue', 'change'],\n  props: {\n    modelValue: Number,\n    formCreateInject: Object,\n  },\n  data() {\n    return {\n      title: 'Vue动态组件',\n      content: '这是一个使用Vue编写的动态渲染组件',\n      count: this.modelValue || 0\n    }\n  },\n  computed: {\n    status() {\n      if (this.count > 5) return '高'\n      if (this.count > 2) return '中'\n      return '低'\n    },\n    doubleCount() {\n      return this.count * 2\n    }\n  },\n  watch: {\n    modelValue(n) {\n      this.count = n;\n    },\n    count(n) {\n      this.$emit('update:modelValue', n);\n      this.$emit('change', n);\n    }\n  },\n  methods: {\n    increment() {\n      this.count++;\n    },\n    decrement() {\n      this.count--;\n    },\n    reset() {\n      this.count = 0;\n    }\n  },\n  mounted() {\n    console.log('Vue2动态组件已挂载');\n  },\n  beforeDestroy() {\n    console.log('Vue2动态组件即将销毁');\n  }\n}\n</script>\n\n<style>\n.dynamic-component {\n  padding: 20px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background-color: #f9f9f9;\n  width: 100%;\n  box-sizing: border-box;\n}\n.button-group {\n  margin: 15px 0;\n}\n.btn {\n  padding: 8px 16px;\n  margin: 0 5px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-primary {\n  background-color: #409eff;\n  color: white;\n}\n.btn-secondary {\n  background-color: #909399;\n  color: white;\n}\n.btn-danger {\n  background-color: #f56c6c;\n  color: white;\n}\n.btn:hover {\n  opacity: 0.8;\n}\n</style>",
        },
        _fc_id: 'id_Fl0omguk6nrrhqc',
        name: 'ref_F4zcmguk6nrrhrc',
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
    type: 'fcRow',
    label: '栅格布局',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
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
                field: 'Fql2mguk6nrsioc',
                title: '输入框',
                _fc_id: 'id_Fiqsmguk6nrsipc',
                name: 'ref_Fwocmguk6nrsiqc',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_Fh9umguk6nrsimc',
            name: 'ref_Fsaxmguk6nrsinc',
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
                field: 'Fehkmguk6nrsitc',
                title: '输入框',
                _fc_id: 'id_Fv54mguk6nrsiuc',
                name: 'ref_F5pnmguk6nrsivc',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_Fn50mguk6nrsirc',
            name: 'ref_Fcs2mguk6nrsisc',
            _fc_drag_tag: 'col',
          },
        ],
        _fc_id: 'id_F42zmguk6nrsikc',
        name: 'ref_Fyujmguk6nrsilc',
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
        name: 'justify',
        type: 'string',
        description: '水平排列方式',
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
        description: '垂直排列方式',
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
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    business: true,
    isField: false,
    isContainer: true,
    isAssist: true,
    examples: [
      {
        type: 'fcInlineForm',
        _fc_id: 'id_Fyqdmguk6nrsiyc',
        name: 'ref_F6lpmguk6nrsizc',
        _fc_drag_tag: 'fcInlineForm',
        children: [
          {
            type: 'input',
            field: 'Fae1mguk6nrsj0c',
            title: '输入框',
            _fc_id: 'id_F3crmguk6nrsj1c',
            name: 'ref_Fboymguk6nrsj2c',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'Fxi9mguk6nrsj3c',
            title: '输入框',
            _fc_id: 'id_F80ymguk6nrsj4c',
            name: 'ref_F01qmguk6nrsj5c',
            _fc_drag_tag: 'input',
          },
        ],
      },
    ],
    props: [],
    events: [],
  },
  {
    type: 'aTabs',
    label: '标签页',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    defaultChildren: [
      'aTabPane',
    ],
    examples: [
      {
        type: 'aTabs',
        style: {
          width: '100%',
        },
        children: [
          {
            type: 'aTabPane',
            props: {
              tab: '选项卡',
            },
            children: [
              {
                type: 'input',
                field: 'Fz2jmguk6nrtk2c',
                title: '输入框',
                _fc_id: 'id_Fx9mmguk6nrtk3c',
                name: 'ref_F4gsmguk6nrtk4c',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_Fq4kmguk6nrtk0c',
            name: 'ref_F43cmguk6nrtk1c',
            _fc_drag_tag: 'aTabPane',
          },
          {
            type: 'aTabPane',
            props: {
              tab: '选项卡',
            },
            children: [
              {
                type: 'input',
                field: 'Fcppmguk6nrtk7c',
                title: '输入框',
                _fc_id: 'id_Fj2mmguk6nrtk8c',
                name: 'ref_F51kmguk6nrtk9c',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_Fmlbmguk6nrtk5c',
            name: 'ref_F4cimguk6nrtk6c',
            _fc_drag_tag: 'aTabPane',
          },
        ],
        _fc_id: 'id_Ftyamguk6nrtjyc',
        name: 'ref_F0fxmguk6nrtjzc',
        _fc_drag_tag: 'aTabs',
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
          'line',
          'editable-card',
        ],
      },
      {
        name: 'tabPosition',
        type: 'string',
        description: '选项卡所在位置',
        required: false,
        options: [
          'top',
          'bottom',
          'right',
          'left',
        ],
      },
      {
        name: 'centered',
        type: 'boolean',
        description: '标签居中展示',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '切换面板时触发',
      },
      {
        name: 'tabClick',
        description: 'tab 被选中时触发',
      },
      {
        name: 'edit',
        description: '点击 tab 的新增或移除按钮后触发',
      },
    ],
  },
  {
    type: 'aCard',
    label: '卡片',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    examples: [
      {
        type: 'aCard',
        props: {
          title: '标题',
        },
        style: {
          width: '100%',
        },
        children: [
          {
            type: 'input',
            field: 'F8vymguk6nrtkec',
            title: '输入框',
            _fc_id: 'id_Fngbmguk6nrtkfc',
            name: 'ref_Fxljmguk6nrtkgc',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'Fpqgmguk6nrtkhc',
            title: '输入框',
            _fc_id: 'id_F4a9mguk6nrtkic',
            name: 'ref_Fxgamguk6nrtkjc',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_Fy38mguk6nrtkcc',
        name: 'ref_F1ylmguk6nrtkdc',
        _fc_drag_tag: 'aCard',
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
        description: '尺寸',
        required: false,
        options: [
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
          'inner',
          '',
        ],
      },
      {
        name: 'hoverable',
        type: 'boolean',
        description: '鼠标移过时可浮起',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'aCollapse',
    label: '折叠面板',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    defaultChildren: [
      'aCollapsePanel',
    ],
    examples: [
      {
        type: 'aCollapse',
        style: {
          width: '100%',
        },
        children: [
          {
            type: 'aCollapsePanel',
            props: {
              header: '面板',
              key: 'Fxx8mguk6nrtkmc',
            },
            children: [
              {
                type: 'input',
                field: 'Fe04mguk6nrtkpc',
                title: '输入框',
                _fc_id: 'id_F564mguk6nrtkqc',
                name: 'ref_Fbmtmguk6nrtkrc',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_F68hmguk6nrtknc',
            name: 'ref_Fejtmguk6nrtkoc',
            _fc_drag_tag: 'aCollapsePanel',
            key: 'Fxx8mguk6nrtkmc',
          },
          {
            type: 'aCollapsePanel',
            props: {
              header: '面板',
              key: 'Forgmguk6nrtksc',
            },
            children: [
              {
                type: 'input',
                field: 'Fpldmguk6nrtkvc',
                title: '输入框',
                _fc_id: 'id_F40dmguk6nrtkwc',
                name: 'ref_Ffylmguk6nrtkxc',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_Frf5mguk6nrtktc',
            name: 'ref_Fo4vmguk6nrtkuc',
            _fc_drag_tag: 'aCollapsePanel',
            key: 'Forgmguk6nrtksc',
          },
        ],
        _fc_id: 'id_Fsg9mguk6nrtkkc',
        name: 'ref_Fp03mguk6nrtklc',
        _fc_drag_tag: 'aCollapse',
      },
    ],
    props: [
      {
        name: 'accordion',
        type: 'boolean',
        description: '是否手风琴模式',
        required: false,
      },
      {
        name: 'bordered',
        type: 'boolean',
        description: '带边框风格的折叠面板',
        required: false,
        defaultValue: true,
      },
      {
        name: 'ghost',
        type: 'boolean',
        description: '使折叠面板透明且无边框',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '切换面板时触发',
      },
    ],
  },
  {
    type: 'aDescriptions',
    label: '描述列表',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    defaultChildren: [
      'aDescriptionsItem',
    ],
    examples: [
      {
        type: 'aDescriptions',
        props: {
          bordered: true,
        },
        style: {
          width: '100%',
        },
        children: [
          {
            type: 'aDescriptionsItem',
            props: {
              label: '标题',
            },
            children: [
              '内容',
            ],
            _fc_id: 'id_Fv4mmguk6nrtl0c',
            name: 'ref_F2x8mguk6nrtl1c',
            _fc_drag_tag: 'aDescriptionsItem',
          },
          {
            type: 'aDescriptionsItem',
            props: {
              label: '标题',
            },
            children: [
              '内容',
            ],
            _fc_id: 'id_Fie1mguk6nrtl2c',
            name: 'ref_Fu8umguk6nrtl3c',
            _fc_drag_tag: 'aDescriptionsItem',
          },
        ],
        _fc_id: 'id_Fvxumguk6nrtkyc',
        name: 'ref_F9m4mguk6nrtkzc',
        _fc_drag_tag: 'aDescriptions',
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
        name: 'bordered',
        type: 'boolean',
        description: '是否带有边框',
        required: false,
      },
      {
        name: 'layout',
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
          'middle',
          'small',
        ],
      },
    ],
    events: [],
  },
  {
    type: 'fcDialog',
    label: '弹出框',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
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
              field: 'Febomguk6nrul7c',
              title: '输入框',
              $required: false,
              _fc_id: 'id_F8simguk6nrul8c',
              name: 'ref_Fj7nmguk6nrul9c',
              display: true,
              hidden: false,
              _fc_drag_tag: 'input',
            },
            {
              type: 'input',
              field: 'Fmtnmguk6nrulac',
              title: '输入框',
              $required: false,
              _fc_id: 'id_Fisgmguk6nrulbc',
              name: 'ref_Fb7jmguk6nrulcc',
              display: true,
              hidden: false,
              _fc_drag_tag: 'input',
            },
          ],
        },
        native: true,
        ignore: true,
        _fc_id: 'id_F9wcmguk6nrul4c',
        name: 'ref_F7yjmguk6nrul5c',
        field: 'Fcjcmguk6nrul6c',
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
        name: 'mask',
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
        name: 'afterClose',
        type: 'string',
        description: '关闭后触发',
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
        name: 'cancel',
        description: '',
      },
      {
        name: 'validateFail',
        description: '表单验证失败时触发',
      },
    ],
  },
  {
    type: 'fcDrawer',
    label: '抽屉',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
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
              field: 'Fpbrmguk6nrulgc',
              title: '输入框',
              $required: false,
              _fc_id: 'id_Fgxkmguk6nrulhc',
              name: 'ref_Ffy2mguk6nrulic',
              display: true,
              hidden: false,
              _fc_drag_tag: 'input',
            },
            {
              type: 'input',
              field: 'F691mguk6nruljc',
              title: '输入框',
              $required: false,
              _fc_id: 'id_Fivlmguk6nrulkc',
              name: 'ref_Fzwamguk6nrullc',
              display: true,
              hidden: false,
              _fc_drag_tag: 'input',
            },
          ],
        },
        native: true,
        ignore: true,
        _fc_id: 'id_Fkjumguk6nruldc',
        name: 'ref_Ffvpmguk6nrulec',
        field: 'Fd0umguk6nrulfc',
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
        name: 'width',
        type: 'string',
        description: '对话框的宽度',
        required: false,
        defaultValue: '30%',
      },
      {
        name: 'placement',
        type: 'string',
        description: '打开的方向',
        required: false,
        defaultValue: 'right',
        options: [
          'left',
          'right',
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
        name: 'mask',
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
        name: 'afterOpenChange',
        description: '切换抽屉时动画结束后触发',
      },
    ],
  },
  {
    type: 'col',
    label: '格子',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
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
            field: 'Fcbtmguk6nruloc',
            title: '输入框',
            _fc_id: 'id_Fdinmguk6nrulpc',
            name: 'ref_Fdi1mguk6nrulqc',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'Fnvomguk6nrulrc',
            title: '输入框',
            _fc_id: 'id_Fls9mguk6nrulsc',
            name: 'ref_F4j3mguk6nrultc',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_F7o1mguk6nrulmc',
        name: 'ref_F6svmguk6nrulnc',
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
        name: 'xxs>span',
        type: 'number',
        description: '栅格占据的列数',
        required: false,
        defaultValue: 24,
      },
      {
        name: 'xxs>offset',
        type: 'number',
        description: '栅格左侧的间隔格数',
        required: false,
      },
      {
        name: 'xxs>push',
        type: 'number',
        description: '栅格向右移动格数',
        required: false,
      },
      {
        name: 'xxs>pull',
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
      {
        name: 'xxl>span',
        type: 'number',
        description: '栅格占据的列数',
        required: false,
        defaultValue: 24,
      },
      {
        name: 'xxl>offset',
        type: 'number',
        description: '栅格左侧的间隔格数',
        required: false,
      },
      {
        name: 'xxl>push',
        type: 'number',
        description: '栅格向右移动格数',
        required: false,
      },
      {
        name: 'xxl>pull',
        type: 'number',
        description: '栅格向左移动格数',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'aTabPane',
    label: '选项卡',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    examples: [
      {
        type: 'aTabPane',
        props: {
          tab: '选项卡',
        },
        children: [
          {
            type: 'input',
            field: 'Fqoamguk6nrwlwc',
            title: '输入框',
            _fc_id: 'id_Ftoumguk6nrwlxc',
            name: 'ref_Fpmnmguk6nrwlyc',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'F4gbmguk6nrwlzc',
            title: '输入框',
            _fc_id: 'id_F698mguk6nrwm0c',
            name: 'ref_Feeemguk6nrwm1c',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_Flc3mguk6nrwluc',
        name: 'ref_F60lmguk6nrwlvc',
        _fc_drag_tag: 'aTabPane',
      },
    ],
    props: [
      {
        name: 'tab',
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
        name: 'key',
        type: 'string',
        description: '选项卡的标识符',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'aCollapsePanel',
    label: '面板',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    examples: [
      {
        type: 'aCollapsePanel',
        props: {
          header: '面板',
          key: 'Fja6mguk6nrwm3c',
        },
        children: [
          {
            type: 'input',
            field: 'Fl4umguk6nrwm6c',
            title: '输入框',
            _fc_id: 'id_Fnmcmguk6nrwm7c',
            name: 'ref_F1kumguk6nrwm8c',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'Fcfamguk6nrwm9c',
            title: '输入框',
            _fc_id: 'id_Fkbbmguk6nrwmac',
            name: 'ref_Fe57mguk6nrwmbc',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_Fetvmguk6nrwm4c',
        name: 'ref_Fc2rmguk6nrwm5c',
        _fc_drag_tag: 'aCollapsePanel',
        key: 'Fja6mguk6nrwm3c',
      },
    ],
    props: [
      {
        name: 'header',
        type: 'string',
        description: '面板标题',
        required: false,
      },
      {
        name: 'key',
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
      {
        name: 'showArrow',
        type: 'boolean',
        description: '是否展示当前面板上的箭头',
        required: false,
        defaultValue: true,
      },
    ],
    events: [],
  },
  {
    type: 'aDescriptionsItem',
    label: '描述格子',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue3',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'aDescriptionsItem',
        props: {
          label: '标题',
        },
        children: [
          '内容',
        ],
        _fc_id: 'id_Fpjrmguk6nrwmcc',
        name: 'ref_Frd0mguk6nrwmdc',
        _fc_drag_tag: 'aDescriptionsItem',
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
