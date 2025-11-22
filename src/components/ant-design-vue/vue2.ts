import { ComponentInfo } from '../../core/component-registry.js';

export const antDesignVue2Components: ComponentInfo[] = [
  {
    type: 'input',
    label: '输入框',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'input',
        field: 'Fb1pmguzotzhacc',
        title: '输入框',
        _fc_id: 'id_F9pbmguzotzhadc',
        name: 'ref_Fbr9mguzotzhaec',
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
        name: 'allowClear',
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
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'input',
        field: 'Fcakmguzotzhagc',
        title: '多行输入框',
        props: {
          type: 'textarea',
        },
        _fc_id: 'id_Fffqmguzotzhahc',
        name: 'ref_Ff0tmguzotzhaic',
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
        name: 'allowClear',
        type: 'boolean',
        description: '是否显示清除按钮',
        required: false,
      },
      {
        name: 'autoSize',
        type: 'boolean',
        description: '自适应内容高度',
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
    ],
  },
  {
    type: 'password',
    label: '密码输入框',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'inputPassword',
        field: 'Ff6ymguzotzhakc',
        title: '密码输入框',
        _fc_id: 'id_Fmhsmguzotzhalc',
        name: 'ref_Fvvrmguzotzhamc',
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
    type: 'inputNumber',
    label: '计数器',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'inputNumber',
        field: 'F9rtmguzotziaoc',
        title: '数字输入框',
        _fc_id: 'id_F6eqmguzotziapc',
        name: 'ref_Fynvmguzotziaqc',
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
    ],
  },
  {
    type: 'radio',
    label: '单选框',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'radio',
        field: 'F4qmmguzotziasc',
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
        _fc_id: 'id_Fax4mguzotziatc',
        name: 'ref_Fbpxmguzotziauc',
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
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'checkbox',
        field: 'F0u0mguzotziawc',
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
        _fc_id: 'id_F1p8mguzotziaxc',
        name: 'ref_Fi9nmguzotziayc',
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
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'select',
        field: 'F571mguzotzib0c',
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
        _fc_id: 'id_Fxbcmguzotzib1c',
        name: 'ref_Fyz2mguzotzib2c',
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
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'switch',
        field: 'Fc8cmguzotzib4c',
        title: '开关',
        props: {
          checkedValue: true,
          unCheckedValue: false,
        },
        _fc_id: 'id_Fpkymguzotzib5c',
        name: 'ref_Fdxamguzotzib6c',
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
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'rate',
        field: 'Fgntmguzotzib8c',
        title: '评分',
        _fc_id: 'id_Fiigmguzotzib9c',
        name: 'ref_Ftxhmguzotzibac',
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
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'timePicker',
        field: 'Fycrmguzotzibcc',
        title: '时间',
        _fc_id: 'id_Fr26mguzotzibdc',
        name: 'ref_F1csmguzotzibec',
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
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'slider',
        field: 'F0zwmguzotzibgc',
        title: '滑块',
        _fc_id: 'id_Ff0mmguzotzibhc',
        name: 'ref_F95mmguzotzibic',
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
    type: 'cascader',
    label: '级联选择器',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'cascader',
        field: 'Fahmmguzotzibkc',
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
        _fc_id: 'id_Fgp8mguzotziblc',
        name: 'ref_Fdddmguzotzibmc',
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
    type: 'datePicker',
    label: '日期',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'datePicker',
        field: 'Fg22mguzotzjboc',
        title: '日期',
        _fc_id: 'id_Fkurmguzotzjbpc',
        name: 'ref_Frhmmguzotzjbqc',
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
        name: 'type',
        type: 'string',
        description: '显示类型',
        required: false,
        options: [
          'month',
          'date',
          'week',
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
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'datePicker',
        field: 'Fs0dmguzotzjbsc',
        title: '日期区间',
        props: {
          type: 'range',
        },
        _fc_id: 'id_F6ljmguzotzjbtc',
        name: 'ref_Fgoomguzotzjbuc',
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
    type: 'upload',
    label: '上传',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'upload',
        field: 'Fivbmguzotzjbwc',
        title: '上传',
        props: {
          action: '/',
          onSuccess: '$FNX:const file = $inject.args[0];\n\nfile.url = file.response.url;',
        },
        _fc_id: 'id_Fw4mmguzotzjbxc',
        name: 'ref_Fwlnmguzotzjbyc',
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
        name: 'remove',
        type: 'string',
        description: '文件列表移除文件之前的钩子',
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
        name: 'download',
        description: '点击下载文件时触发',
      },
      {
        name: 'preview',
        description: '点击文件链接或预览图标时触发',
      },
    ],
  },
  {
    type: 'aTransfer',
    label: '穿梭框',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'aTransfer',
        field: 'Fkfbmguzotzjc0c',
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
        _fc_id: 'id_Fjwtmguzotzjc1c',
        name: 'ref_Fqswmguzotzjc2c',
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
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
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
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'tree',
        field: 'Fn26mguzotzjc4c',
        title: '树形控件',
        props: {
          replaceFields: {
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
        _fc_id: 'id_Filnmguzotzjc5c',
        name: 'ref_F6ewmguzotzjc6c',
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
        name: 'replaceFields',
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
    vueVersion: 'vue2',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'aTreeSelect',
        field: 'Fm9qmguzotzjc8c',
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
        _fc_id: 'id_F43nmguzotzkc9c',
        name: 'ref_Ffkjmguzotzkcac',
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
        name: 'replaceFields',
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
    type: 'fcCity',
    label: '省市区选择器',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue2',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'fcCity',
        field: 'F9xkmguzotzkccc',
        title: '省市区选择器',
        _fc_id: 'id_Fwojmguzotzkcdc',
        name: 'ref_F0vomguzotzkcec',
        _fc_drag_tag: 'fcCity',
      },
    ],
    props: [
      {
        name: 'level',
        type: 'string',
        description: '类型',
        required: false,
        defaultValue: 3,
        options: [
          1,
          2,
          3,
        ],
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
        description: '是否显示清除按钮',
        required: false,
      },
      {
        name: 'filter',
        type: 'string',
        description: '数据过滤,返回可选择数据',
        required: false,
      },
      {
        name: 'api',
        type: 'string',
        description: '数据链接 URI',
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
    type: 'dataTable',
    label: '数据表格',
    uiFramework: 'ant-design-vue',
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
          scroll: {
            x: '1000px',
            y: '500px',
          },
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
        _fc_id: 'id_Ft6gmguzotzkcrc',
        name: 'ref_F11kmguzotzkcsc',
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
          'middle',
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
        defaultValue: '170px',
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
    vueVersion: 'vue2',
    business: true,
    isField: true,
    isContainer: true,
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
    vueVersion: 'vue2',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'stepForm',
        field: 'Frb9mguzotzme3c',
        props: {
          steps: [
            {
              props: {
                title: '标题',
              },
              rule: [
                {
                  type: 'input',
                  field: 'Fva3mguzotzme7c',
                  title: '输入框',
                  $required: false,
                  _fc_id: 'id_F7ptmguzotzme8c',
                  name: 'ref_Fg0emguzotzme9c',
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
                  field: 'Fyqkmguzotzmebc',
                  title: '输入框',
                  $required: false,
                  _fc_id: 'id_F7nemguzotzmecc',
                  name: 'ref_F64zmguzotzmedc',
                  display: true,
                  hidden: false,
                  _fc_drag_tag: 'input',
                },
              ],
            },
          ],
        },
        _fc_id: 'id_Ffkwmguzotzme4c',
        name: 'ref_F88tmguzotzme5c',
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
    vueVersion: 'vue2',
    business: true,
    isField: true,
    isContainer: true,
    isAssist: false,
    defaultChildren: [
      'tableFormColumn2',
    ],
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
    type: 'fcDynamicRender',
    label: 'Vue组件',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue2',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'fcDynamicRender',
        field: 'F1i0mguzotzng1c',
        native: false,
        readMode: 'custom',
        props: {
          vueContent: "<template>\n  <div class=\"dynamic-component\">\n    <h3>{{ title }}</h3>\n    <p>{{ content }}</p>\n    <div class=\"button-group\">\n      <button @click=\"increment\" class=\"btn btn-primary\">增加</button>\n      <button @click=\"decrement\" class=\"btn btn-secondary\">减少</button>\n      <button @click=\"reset\" class=\"btn btn-danger\">重置</button>\n    </div>\n    <p>当前计数: {{ count }}</p>\n    <div class=\"info-section\">\n      <p>状态: {{ status }}</p>\n      <p>计算属性演示: {{ doubleCount }}</p>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'DynamicComponent',\n  props: {\n    value: Number,\n    formCreateInject: Object,\n  },\n  data() {\n    return {\n      title: 'Vue动态组件',\n      content: '这是一个使用Vue编写的动态渲染组件',\n      count: this.value || 0\n    }\n  },\n  computed: {\n    status() {\n      if (this.count > 5) return '高'\n      if (this.count > 2) return '中'\n      return '低'\n    },\n    doubleCount() {\n      return this.count * 2\n    }\n  },\n  watch: {\n    value(n) {\n      this.count = n;\n    },\n    count(n) {\n      this.$emit('input', n);\n      this.$emit('change', n);\n    }\n  },\n  methods: {\n    increment() {\n      this.count++;\n    },\n    decrement() {\n      this.count--;\n    },\n    reset() {\n      this.count = 0;\n    }\n  },\n  mounted() {\n    console.log('Vue2动态组件已挂载');\n  },\n  beforeDestroy() {\n    console.log('Vue2动态组件即将销毁');\n  }\n}\n</script>\n\n<style>\n.dynamic-component {\n  padding: 20px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background-color: #f9f9f9;\n  width: 100%;\n  box-sizing: border-box;\n}\n.button-group {\n  margin: 15px 0;\n}\n.btn {\n  padding: 8px 16px;\n  margin: 0 5px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-primary {\n  background-color: #409eff;\n  color: white;\n}\n.btn-secondary {\n  background-color: #909399;\n  color: white;\n}\n.btn-danger {\n  background-color: #f56c6c;\n  color: white;\n}\n.btn:hover {\n  opacity: 0.8;\n}\n</style>",
        },
        _fc_id: 'id_Frx7mguzotzng2c',
        name: 'ref_Fsaamguzotzng3c',
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
    type: 'aAlert',
    label: '提示',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue2',
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
        _fc_id: 'id_F8uimguzotzogcc',
        name: 'ref_Fesmmguzotzogdc',
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
    vueVersion: 'vue2',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'aButton',
        children: [
          '按钮',
        ],
        _fc_id: 'id_F7ptmguzotzogec',
        name: 'ref_Futrmguzotzogfc',
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
          'danger',
          'dashed',
          'link',
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
    vueVersion: 'vue2',
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
        _fc_id: 'id_F4bimguzotzogmc',
        name: 'ref_Flvomguzotzognc',
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
    vueVersion: 'vue2',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'aDivider',
        children: [
          '分割线',
        ],
        _fc_id: 'id_Fczhmguzotzogoc',
        name: 'ref_Fez4mguzotzogpc',
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
    vueVersion: 'vue2',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'aTag',
        children: [
          '标签',
        ],
        _fc_id: 'id_Fgt5mguzotzogqc',
        name: 'ref_Fz1jmguzotzogrc',
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
    vueVersion: 'vue2',
    business: true,
    isField: false,
    isContainer: true,
    isAssist: true,
    examples: [
      {
        type: 'aTooltip',
        props: {
          title: '文字提示',
        },
        children: [
          {
            type: 'input',
            field: 'Ff70mguzotzoguc',
            title: '输入框',
            _fc_id: 'id_Fparmguzotzogvc',
            name: 'ref_Fhk5mguzotzogwc',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'Flzjmguzotzogxc',
            title: '输入框',
            _fc_id: 'id_Fw65mguzotzogyc',
            name: 'ref_Fljymguzotzogzc',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_F49kmguzotzogsc',
        name: 'ref_Fpotmguzotzogtc',
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
        defaultValue: 'top',
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
    type: 'aImage',
    label: '图片',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue2',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'img',
        style: {
          width: '100px',
          height: '100px',
        },
        attrs: {
          src: 'https://static.form-create.com/example.png',
        },
        _fc_id: 'id_Fc9cmguzotzoh0c',
        name: 'ref_Fn8fmguzotzoh1c',
        _fc_drag_tag: 'aImage',
      },
    ],
    props: [
      {
        name: 'formCreateAttrs>src',
        type: 'string',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'aAvatar',
    label: '头像框',
    uiFramework: 'ant-design-vue',
    vueVersion: 'vue2',
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
        _fc_id: 'id_Fc1bmguzotzoh6c',
        name: 'ref_Furzmguzotzoh7c',
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
    type: 'fcRow',
    label: '栅格布局',
    uiFramework: 'ant-design-vue',
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
                field: 'Fxromguzotzpi4c',
                title: '输入框',
                _fc_id: 'id_Fx9rmguzotzpi5c',
                name: 'ref_Flqvmguzotzpi6c',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_F6jumguzotzpi2c',
            name: 'ref_Fc73mguzotzpi3c',
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
                field: 'F8xkmguzotzpi9c',
                title: '输入框',
                _fc_id: 'id_Fy0mmguzotzpiac',
                name: 'ref_F245mguzotzpibc',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_Fb1amguzotzpi7c',
            name: 'ref_Fxqhmguzotzpi8c',
            _fc_drag_tag: 'col',
          },
        ],
        _fc_id: 'id_Ffd6mguzotzpi0c',
        name: 'ref_Fivimguzotzpi1c',
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
    vueVersion: 'vue2',
    business: true,
    isField: false,
    isContainer: true,
    isAssist: true,
    examples: [
      {
        type: 'fcInlineForm',
        _fc_id: 'id_F63rmguzotzpiec',
        name: 'ref_F2qcmguzotzpifc',
        _fc_drag_tag: 'fcInlineForm',
        children: [
          {
            type: 'input',
            field: 'Fm6lmguzotzpigc',
            title: '输入框',
            _fc_id: 'id_Fsh2mguzotzpihc',
            name: 'ref_Fgu1mguzotzpiic',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'Ft9cmguzotzpijc',
            title: '输入框',
            _fc_id: 'id_Fi17mguzotzpikc',
            name: 'ref_Fnfemguzotzpilc',
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
    vueVersion: 'vue2',
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
        props: {
          animated: false,
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
                field: 'F2x3mguzotzqjic',
                title: '输入框',
                _fc_id: 'id_Fgfwmguzotzqjjc',
                name: 'ref_Fa6umguzotzqjkc',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_F7wwmguzotzqjgc',
            name: 'ref_Fcm1mguzotzqjhc',
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
                field: 'Fle0mguzotzqjnc',
                title: '输入框',
                _fc_id: 'id_Fwj8mguzotzqjoc',
                name: 'ref_Fbpdmguzotzqjpc',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_F5memguzotzqjlc',
            name: 'ref_F5vtmguzotzqjmc',
            _fc_drag_tag: 'aTabPane',
          },
        ],
        _fc_id: 'id_Fnvymguzotzqjec',
        name: 'ref_F3kymguzotzqjfc',
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
        name: 'animated',
        type: 'boolean',
        description: '是否使用动画切换',
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
    vueVersion: 'vue2',
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
            field: 'Fqz8mguzotzqjuc',
            title: '输入框',
            _fc_id: 'id_F7lxmguzotzqjvc',
            name: 'ref_Fue8mguzotzqjwc',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'F86cmguzotzqjxc',
            title: '输入框',
            _fc_id: 'id_Foucmguzotzqjyc',
            name: 'ref_Fzz0mguzotzqjzc',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_Ffxjmguzotzqjsc',
        name: 'ref_Far6mguzotzqjtc',
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
    vueVersion: 'vue2',
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
              key: 'Fb2tmguzotzqk2c',
            },
            children: [
              {
                type: 'input',
                field: 'F80mmguzotzqk5c',
                title: '输入框',
                _fc_id: 'id_F85ymguzotzqk6c',
                name: 'ref_Fbp6mguzotzqk7c',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_Fxfxmguzotzqk3c',
            name: 'ref_Fajxmguzotzqk4c',
            _fc_drag_tag: 'aCollapsePanel',
            key: 'Fb2tmguzotzqk2c',
          },
          {
            type: 'aCollapsePanel',
            props: {
              header: '面板',
              key: 'Fu16mguzotzqk8c',
            },
            children: [
              {
                type: 'input',
                field: 'F4wbmguzotzqkbc',
                title: '输入框',
                _fc_id: 'id_F2bgmguzotzqkcc',
                name: 'ref_F8nnmguzotzqkdc',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_Fjddmguzotzqk9c',
            name: 'ref_Fsqdmguzotzqkac',
            _fc_drag_tag: 'aCollapsePanel',
            key: 'Fu16mguzotzqk8c',
          },
        ],
        _fc_id: 'id_Fjx9mguzotzqk0c',
        name: 'ref_Fksamguzotzqk1c',
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
    vueVersion: 'vue2',
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
            _fc_id: 'id_F312mguzotzqkgc',
            name: 'ref_Fflymguzotzqkhc',
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
            _fc_id: 'id_Fw93mguzotzqkic',
            name: 'ref_Frwwmguzotzqkjc',
            _fc_drag_tag: 'aDescriptionsItem',
          },
        ],
        _fc_id: 'id_Fsdbmguzotzqkec',
        name: 'ref_Fn6wmguzotzqkfc',
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
              field: 'Fnr6mguzotzqknc',
              title: '输入框',
              $required: false,
              _fc_id: 'id_Fmknmguzotzqkoc',
              name: 'ref_F202mguzotzqkpc',
              display: true,
              hidden: false,
              _fc_drag_tag: 'input',
            },
            {
              type: 'input',
              field: 'Ftnpmguzotzqkqc',
              title: '输入框',
              $required: false,
              _fc_id: 'id_F2acmguzotzqkrc',
              name: 'ref_Fv8bmguzotzqksc',
              display: true,
              hidden: false,
              _fc_drag_tag: 'input',
            },
          ],
        },
        native: true,
        ignore: true,
        _fc_id: 'id_Fl4jmguzotzqkkc',
        name: 'ref_Fz1jmguzotzqklc',
        field: 'Fn6pmguzotzqkmc',
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
        description: '关闭组件时触发',
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
              field: 'Fipumguzotzqkwc',
              title: '输入框',
              $required: false,
              _fc_id: 'id_Fmq3mguzotzqkxc',
              name: 'ref_Fnolmguzotzqkyc',
              display: true,
              hidden: false,
              _fc_drag_tag: 'input',
            },
            {
              type: 'input',
              field: 'Fwt5mguzotzqkzc',
              title: '输入框',
              $required: false,
              _fc_id: 'id_F41qmguzotzql0c',
              name: 'ref_Fzgxmguzotzql1c',
              display: true,
              hidden: false,
              _fc_drag_tag: 'input',
            },
          ],
        },
        native: true,
        ignore: true,
        _fc_id: 'id_Fknnmguzotzqktc',
        name: 'ref_F349mguzotzqkuc',
        field: 'Fshpmguzotzqkvc',
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
        name: 'close',
        description: '关闭组件时触发',
      },
    ],
  },
  {
    type: 'col',
    label: '格子',
    uiFramework: 'ant-design-vue',
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
            field: 'F1timguzotzql4c',
            title: '输入框',
            _fc_id: 'id_Fpj1mguzotzql5c',
            name: 'ref_Fhf3mguzotzql6c',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'F8jhmguzotzql7c',
            title: '输入框',
            _fc_id: 'id_Fzcnmguzotzql8c',
            name: 'ref_Fsewmguzotzql9c',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_Fo5imguzotzql2c',
        name: 'ref_F5spmguzotzql3c',
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
    vueVersion: 'vue2',
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
            field: 'Fujzmguzotzqlcc',
            title: '输入框',
            _fc_id: 'id_Fighmguzotzqldc',
            name: 'ref_Fze5mguzotzqlec',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'F10emguzotzrlfc',
            title: '输入框',
            _fc_id: 'id_Fp1qmguzotzrlgc',
            name: 'ref_Fjc7mguzotzrlhc',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_Fik6mguzotzqlac',
        name: 'ref_Fuh1mguzotzqlbc',
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
    vueVersion: 'vue2',
    isField: false,
    isContainer: true,
    isAssist: true,
    examples: [
      {
        type: 'aCollapsePanel',
        props: {
          header: '面板',
          key: 'F07omguzotzrljc',
        },
        children: [
          {
            type: 'input',
            field: 'Fq4umguzotzrlmc',
            title: '输入框',
            _fc_id: 'id_Fugfmguzotzrlnc',
            name: 'ref_Fbepmguzotzrloc',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'Fuldmguzotzrlpc',
            title: '输入框',
            _fc_id: 'id_F13fmguzotzrlqc',
            name: 'ref_Frcumguzotzrlrc',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_Fceymguzotzrlkc',
        name: 'ref_Fwcumguzotzrllc',
        _fc_drag_tag: 'aCollapsePanel',
        key: 'F07omguzotzrljc',
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
    vueVersion: 'vue2',
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
        _fc_id: 'id_F1n3mguzotzrlsc',
        name: 'ref_Fnmomguzotzrltc',
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
