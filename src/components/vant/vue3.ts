import { ComponentInfo } from '../../core/component-registry.js';

export const vantComponents: ComponentInfo[] = [
  {
    type: 'input',
    label: '输入框',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'input',
        field: 'Flq1mgulez0gacc',
        title: '输入框',
        _fc_id: 'id_Faztmgulez0gadc',
        name: 'ref_Fi8bmgulez0gaec',
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
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'input',
        field: 'Fu54mgulez0gagc',
        title: '多行输入框',
        props: {
          type: 'textarea',
        },
        _fc_id: 'id_F1xomgulez0gahc',
        name: 'ref_Fzbbmgulez0gaic',
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
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'input',
        field: 'Fnvzmgulez0gakc',
        title: '密码输入框',
        props: {
          type: 'password',
        },
        _fc_id: 'id_F9u9mgulez0galc',
        name: 'ref_F4bjmgulez0gamc',
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
  },
  {
    type: 'stepper',
    label: '数字输入框',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'stepper',
        field: 'Fslpmgulez0gaoc',
        title: '数字输入框',
        _fc_id: 'id_Fks0mgulez0gapc',
        name: 'ref_Ff84mgulez0gaqc',
        _fc_drag_tag: 'stepper',
      },
    ],
    props: [
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
        name: 'decimalLength',
        type: 'number',
        description: '固定显示的小数位数',
        required: false,
      },
      {
        name: 'theme',
        type: 'string',
        description: '样式风格',
        required: false,
        options: [
          'round',
          'default',
        ],
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '输入框占位提示文字',
        required: false,
      },
      {
        name: 'integer',
        type: 'boolean',
        description: '是否只允许输入整数',
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
      {
        name: 'overlimit',
        description: '点击不可用的按钮时触发',
      },
      {
        name: 'plus',
        description: '点击增加按钮时触发',
      },
      {
        name: 'minus',
        description: '点击减少按钮时触发',
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
    type: 'radio',
    label: '单选框',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'radio',
        field: 'Fu8vmgulez0gasc',
        title: '单选框',
        optionsTo: 'props.options',
        options: [
          {
            text: '选项01',
            value: '1',
          },
          {
            text: '选项02',
            value: '2',
          },
          {
            text: '选项03',
            value: '3',
          },
        ],
        _fc_id: 'id_Ft79mgulez0gatc',
        name: 'ref_F5vamgulez0gauc',
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
        name: 'checkedColor',
        type: 'string',
        description: '所有复选框的选中状态颜色',
        required: false,
      },
      {
        name: 'direction',
        type: 'string',
        description: '排列方向',
        required: false,
        options: [
          'horizontal',
          'vertical',
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
    type: 'checkbox',
    label: '多选框',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'checkbox',
        field: 'Fi0rmgulez0gawc',
        title: '多选框',
        optionsTo: 'props.options',
        options: [
          {
            text: '选项01',
            value: '1',
          },
          {
            text: '选项02',
            value: '2',
          },
          {
            text: '选项03',
            value: '3',
          },
        ],
        _fc_id: 'id_F3oamgulez0gaxc',
        name: 'ref_Fv73mgulez0gayc',
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
        name: 'max',
        type: 'number',
        description: '可被勾选的最大数量',
        required: false,
      },
      {
        name: 'checkedColor',
        type: 'string',
        description: '所有复选框的选中状态颜色',
        required: false,
      },
      {
        name: 'direction',
        type: 'string',
        description: '排列方向',
        required: false,
        options: [
          'horizontal',
          'vertical',
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
    type: 'select',
    label: '选择器',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'select',
        field: 'Fpljmgulez0hb0c',
        title: '选择器',
        optionsTo: 'props.options',
        options: [
          {
            text: '选项01',
            value: '1',
          },
          {
            text: '选项02',
            value: '2',
          },
          {
            text: '选项03',
            value: '3',
          },
        ],
        _fc_id: 'id_Fjwamgulez0hb1c',
        name: 'ref_Fb6zmgulez0hb2c',
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
        name: 'title',
        type: 'string',
        description: '顶部栏标题',
        required: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '输入框占位提示文字',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'readonly',
        type: 'boolean',
        description: '是否为只读状态',
        required: false,
      },
      {
        name: 'visibleOptionNum',
        type: 'number',
        description: '可见的选项个数',
        required: false,
        defaultValue: 6,
      },
    ],
    events: [
      {
        name: 'confirm',
        description: '点击确认按钮时触发',
      },
      {
        name: 'cancel',
        description: '点击取消按钮时触发',
      },
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'clickOption',
        description: '点击选项时触发',
      },
      {
        name: 'scrollInto',
        description: '当用户通过点击或拖拽让一个选项滚动到中间的选择区域时触发',
      },
    ],
  },
  {
    type: 'switch',
    label: '开关',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'switch',
        field: 'Fk4xmgulez0hb4c',
        title: '开关',
        props: {
          activeValue: true,
          inactiveValue: false,
        },
        _fc_id: 'id_Fjekmgulez0hb5c',
        name: 'ref_F3bbmgulez0hb6c',
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
      {
        name: 'activeValue',
        type: 'string',
        description: '打开时对应的值',
        required: false,
      },
      {
        name: 'inactiveValue',
        type: 'string',
        description: '关闭时对应的值',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'click',
        description: '点击组件时触发',
      },
    ],
  },
  {
    type: 'rate',
    label: '评分',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'rate',
        field: 'Fjiomgulez0hb8c',
        title: '评分',
        _fc_id: 'id_F6aemgulez0hb9c',
        name: 'ref_F0y4mgulez0hbac',
        _fc_drag_tag: 'rate',
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
        description: '是否为只读状态',
        required: false,
      },
      {
        name: 'allowHalf',
        type: 'boolean',
        description: '是否允许半选',
        required: false,
      },
      {
        name: 'count',
        type: 'number',
        description: '最大分值',
        required: false,
      },
      {
        name: 'color',
        type: 'string',
        description: '选中时的颜色',
        required: false,
      },
      {
        name: 'voidColor',
        type: 'string',
        description: '未选中时的颜色',
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
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'timePicker',
        field: 'F69jmgulez0hbcc',
        title: '时间',
        _fc_id: 'id_F9d4mgulez0hbdc',
        name: 'ref_Fp94mgulez0hbec',
        _fc_drag_tag: 'timePicker',
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
        description: '是否启用清除图标',
        required: false,
      },
      {
        name: 'title',
        type: 'string',
        description: '顶部栏标题',
        required: false,
      },
      {
        name: 'columnsType',
        type: 'string',
        description: '选项类型',
        required: false,
        options: [
          'hour',
          'minute',
          'second',
        ],
      },
      {
        name: 'minTime',
        type: 'string',
        description: '可选的最小时间',
        required: false,
      },
      {
        name: 'maxTime',
        type: 'string',
        description: '可选的最大时间',
        required: false,
      },
      {
        name: 'visibleOptionNum',
        type: 'number',
        description: '可见的选项个数',
        required: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '未选中时的提示文案',
        required: false,
      },
    ],
    events: [
      {
        name: 'confirm',
        description: '点击确认按钮时触发',
      },
      {
        name: 'cancel',
        description: '点击取消按钮时触发',
      },
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
    ],
  },
  {
    type: 'datePicker',
    label: '日期',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'datePicker',
        field: 'F2b1mgulez0hbgc',
        title: '日期',
        _fc_id: 'id_Ftl0mgulez0hbhc',
        name: 'ref_Flb5mgulez0hbic',
        _fc_drag_tag: 'datePicker',
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
        description: '是否启用清除图标',
        required: false,
      },
      {
        name: 'title',
        type: 'string',
        description: '顶部栏标题',
        required: false,
      },
      {
        name: 'columnsType',
        type: 'string',
        description: '选项类型',
        required: false,
        options: [
          'year',
          'month',
          'day',
        ],
      },
      {
        name: 'minDate',
        type: 'string',
        description: '可选的最小时间',
        required: false,
      },
      {
        name: 'maxDate',
        type: 'string',
        description: '可选的最大时间',
        required: false,
      },
      {
        name: 'visibleOptionNum',
        type: 'number',
        description: '可见的选项个数',
        required: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '未选中时的提示文案',
        required: false,
      },
    ],
    events: [
      {
        name: 'confirm',
        description: '点击确认按钮时触发',
      },
      {
        name: 'cancel',
        description: '点击取消按钮时触发',
      },
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
    ],
  },
  {
    type: 'cascader',
    label: '级联选择器',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'cascader',
        field: 'F5hwmgulez0hbkc',
        title: '级联选择器',
        props: {
          options: [
            {
              text: '选项201',
              value: '1',
              children: [
                {
                  text: '选项1-101',
                  value: '2',
                  children: [
                    {
                      text: '选项1-1-01',
                      value: '3',
                    },
                    {
                      text: '选项1-1-02',
                      value: '4',
                    },
                    {
                      text: '选项1-1-03',
                      value: '5',
                    },
                  ],
                },
                {
                  text: '选项1-102',
                  value: '6',
                  children: [
                    {
                      text: '选项1-2-01',
                      value: '7',
                    },
                    {
                      text: '选项1-2-02',
                      value: '8',
                    },
                    {
                      text: '选项1-2-03',
                      value: '9',
                    },
                  ],
                },
                {
                  text: '选项1-103',
                  value: '10',
                  children: [
                    {
                      text: '选项1-3-01',
                      value: '11',
                    },
                    {
                      text: '选项1-3-02',
                      value: '12',
                    },
                    {
                      text: '选项1-3-03',
                      value: '13',
                    },
                  ],
                },
              ],
            },
            {
              text: '选项202',
              value: '14',
              children: [
                {
                  text: '选项2-101',
                  value: '15',
                  children: [
                    {
                      text: '选项2-1-01',
                      value: '16',
                    },
                    {
                      text: '选项2-1-02',
                      value: '17',
                    },
                    {
                      text: '选项2-1-03',
                      value: '18',
                    },
                  ],
                },
                {
                  text: '选项2-102',
                  value: '19',
                  children: [
                    {
                      text: '选项2-2-01',
                      value: '20',
                    },
                    {
                      text: '选项2-2-02',
                      value: '21',
                    },
                    {
                      text: '选项2-2-03',
                      value: '22',
                    },
                  ],
                },
                {
                  text: '选项2-103',
                  value: '23',
                  children: [
                    {
                      text: '选项2-3-01',
                      value: '24',
                    },
                    {
                      text: '选项2-3-02',
                      value: '25',
                    },
                    {
                      text: '选项2-3-03',
                      value: '26',
                    },
                  ],
                },
              ],
            },
            {
              text: '选项203',
              value: '27',
              children: [
                {
                  text: '选项3-101',
                  value: '28',
                  children: [
                    {
                      text: '选项3-1-01',
                      value: '29',
                    },
                    {
                      text: '选项3-1-02',
                      value: '30',
                    },
                    {
                      text: '选项3-1-03',
                      value: '31',
                    },
                  ],
                },
                {
                  text: '选项3-102',
                  value: '32',
                  children: [
                    {
                      text: '选项3-2-01',
                      value: '33',
                    },
                    {
                      text: '选项3-2-02',
                      value: '34',
                    },
                    {
                      text: '选项3-2-03',
                      value: '35',
                    },
                  ],
                },
                {
                  text: '选项3-103',
                  value: '36',
                  children: [
                    {
                      text: '选项3-3-01',
                      value: '37',
                    },
                    {
                      text: '选项3-3-02',
                      value: '38',
                    },
                    {
                      text: '选项3-3-03',
                      value: '39',
                    },
                  ],
                },
              ],
            },
          ],
        },
        _fc_id: 'id_Fljdmgulez0hblc',
        name: 'ref_Ftcgmgulez0hbmc',
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
        name: 'title',
        type: 'string',
        description: '顶部标题',
        required: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '输入框占位文本',
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
        description: '是否启用清除图标',
        required: false,
      },
      {
        name: 'activeColor',
        type: 'string',
        description: '选中状态的高亮颜色',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'finish',
        description: '全部选项选择完成后触发',
      },
      {
        name: 'close',
        description: '关闭组件时触发',
      },
      {
        name: 'clickTab',
        description: '点击标签时触发',
      },
    ],
  },
  {
    type: 'calendar',
    label: '日历',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'calendar',
        field: 'Fbz4mgulez0hboc',
        title: '日历',
        _fc_id: 'id_Fh34mgulez0hbpc',
        name: 'ref_F7sfmgulez0hbqc',
        _fc_drag_tag: 'calendar',
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
        description: '是否启用清除图标',
        required: false,
      },
      {
        name: 'title',
        type: 'string',
        description: '日历标题',
        required: false,
      },
      {
        name: 'type',
        type: 'string',
        description: '选项类型',
        required: false,
        options: [
          'single',
          'multiple',
        ],
      },
      {
        name: 'switchMode',
        type: 'string',
        description: '切换模式',
        required: false,
        options: [
          'none',
          'month',
          'year-month',
        ],
      },
      {
        name: 'minDate',
        type: 'string',
        description: '可选的最小时间',
        required: false,
      },
      {
        name: 'maxDate',
        type: 'string',
        description: '可选的最大时间',
        required: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '未选中时的提示文案',
        required: false,
      },
    ],
    events: [
      {
        name: 'select',
        description: '点击并选中任意日期时触发',
      },
      {
        name: 'confirm',
        description: '点击确认按钮时触发',
      },
      {
        name: 'open',
        description: '打开的回调',
      },
      {
        name: 'close',
        description: '关闭组件时触发',
      },
      {
        name: 'opened',
        description: '打开动画结束时的回调',
      },
      {
        name: 'closed',
        description: '关闭动画结束时的回调',
      },
      {
        name: 'unselect',
        description: '当日历组件的 type 为 multiple 时，取消选中日期时触发',
      },
      {
        name: 'monthShow',
        description: '当某个月份进入可视区域时触发',
      },
      {
        name: 'overRange',
        description: '范围选择超过最多可选天数时触发',
      },
      {
        name: 'clickSubtitle',
        description: '点击日历副标题时触发',
      },
      {
        name: 'clickDisabledDate',
        description: '点击禁用日期时触发',
      },
      {
        name: 'panelChange',
        description: '当日期面板改变时触发',
      },
    ],
  },
  {
    type: 'calendarRange',
    label: '日历区间',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'calendar',
        field: 'F3wpmgulez0hbsc',
        title: '日期区间',
        props: {
          type: 'range',
        },
        _fc_id: 'id_F1xnmgulez0hbtc',
        name: 'ref_F2a6mgulez0hbuc',
        _fc_drag_tag: 'calendarRange',
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
        description: '是否启用清除图标',
        required: false,
      },
      {
        name: 'title',
        type: 'string',
        description: '日历标题',
        required: false,
      },
      {
        name: 'switchMode',
        type: 'string',
        description: '切换模式',
        required: false,
        options: [
          'none',
          'month',
          'year-month',
        ],
      },
      {
        name: 'minDate',
        type: 'string',
        description: '可选的最小时间',
        required: false,
      },
      {
        name: 'maxDate',
        type: 'string',
        description: '可选的最大时间',
        required: false,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '未选中时的提示文案',
        required: false,
      },
    ],
    events: [
      {
        name: 'select',
        description: '点击并选中任意日期时触发',
      },
      {
        name: 'confirm',
        description: '点击确认按钮时触发',
      },
      {
        name: 'open',
        description: '打开的回调',
      },
      {
        name: 'close',
        description: '关闭组件时触发',
      },
      {
        name: 'opened',
        description: '打开动画结束时的回调',
      },
      {
        name: 'closed',
        description: '关闭动画结束时的回调',
      },
      {
        name: 'unselect',
        description: '当日历组件的 type 为 multiple 时，取消选中日期时触发',
      },
      {
        name: 'monthShow',
        description: '当某个月份进入可视区域时触发',
      },
      {
        name: 'overRange',
        description: '范围选择超过最多可选天数时触发',
      },
      {
        name: 'clickSubtitle',
        description: '点击日历副标题时触发',
      },
      {
        name: 'clickDisabledDate',
        description: '点击禁用日期时触发',
      },
      {
        name: 'panelChange',
        description: '当日期面板改变时触发',
      },
    ],
  },
  {
    type: 'slider',
    label: '滑块',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'slider',
        field: 'F4zumgulez0hbwc',
        title: '滑块',
        _fc_id: 'id_Fl4kmgulez0hbxc',
        name: 'ref_Faaqmgulez0hbyc',
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
        name: 'readonly',
        type: 'boolean',
        description: '是否为只读状态',
        required: false,
      },
      {
        name: 'range',
        type: 'boolean',
        description: '是否为范围选择',
        required: false,
      },
      {
        name: 'max',
        type: 'number',
        description: '最大值',
        required: false,
      },
      {
        name: 'min',
        type: 'number',
        description: '最小值',
        required: false,
      },
      {
        name: 'step',
        type: 'number',
        description: '步长',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'dragStart',
        description: '开始拖动时触发',
      },
      {
        name: 'dragEnd',
        description: '结束拖动时触发',
      },
    ],
  },
  {
    type: 'uploader',
    label: '上传',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'uploader',
        field: 'Ft68mgulez0ic0c',
        title: '上传',
        props: {
          action: '/',
          onSuccess: '$FNX:const res = $inject.args[0];\nconst file = $inject.args[1];\n\nfile.url = res.data.url;',
        },
        _fc_id: 'id_Fdapmgulez0ic1c',
        name: 'ref_Fk5pmgulez0ic2c',
        _fc_drag_tag: 'uploader',
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
        name: 'accept',
        type: 'string',
        description: '允许上传的文件类型',
        required: false,
      },
      {
        name: 'maxSize',
        type: 'number',
        description: '文件大小限制，单位为 byte',
        required: false,
      },
      {
        name: 'maxCount',
        type: 'number',
        description: '文件上传数量限制',
        required: false,
      },
      {
        name: 'uploadName',
        type: 'string',
        description: '上传的文件字段名',
        required: false,
      },
      {
        name: 'action',
        type: 'string',
        description: '上传的地址(必填)',
        required: false,
      },
      {
        name: 'onSuccess',
        type: 'string',
        description: '上传成功回调',
        required: false,
      },
      {
        name: 'beforeDelete',
        type: 'string',
        description: '文件删除前的回调',
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
    ],
    events: [
      {
        name: 'oversize',
        description: '文件大小超过限制时触发',
      },
      {
        name: 'clickUpload',
        description: '点击上传区域时触发',
      },
      {
        name: 'clickPreview',
        description: '点击预览图时触发',
      },
      {
        name: 'clickReupload',
        description: '点击覆盖上传时触发',
      },
      {
        name: 'closePreview',
        description: '关闭全屏图片预览时触发',
      },
      {
        name: 'delete',
        description: '删除文件预览时触发',
      },
    ],
  },
  {
    type: 'stepForm',
    label: '分步表单',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'stepForm',
        field: 'F7n2mgulez0kd8c',
        props: {
          steps: [
            {
              props: {
                title: '标题',
              },
              rule: [
                {
                  type: 'input',
                  field: 'F6hwmgulez0kdcc',
                  title: '输入框',
                  $required: false,
                  _fc_id: 'id_Fllimgulez0kddc',
                  name: 'ref_F2ucmgulez0kdec',
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
                  field: 'Ft1hmgulez0kdgc',
                  title: '输入框',
                  $required: false,
                  _fc_id: 'id_F8clmgulez0kdhc',
                  name: 'ref_Fq6fmgulez0kdic',
                  display: true,
                  hidden: false,
                  _fc_drag_tag: 'input',
                },
              ],
            },
          ],
        },
        _fc_id: 'id_Fup3mgulez0kd9c',
        name: 'ref_Fts1mgulez0kdac',
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
        name: 'stepsProps>activeColor',
        type: 'string',
        description: '当前步骤和已完成步骤的颜色',
        required: false,
      },
      {
        name: 'stepsProps>inactiveColor',
        type: 'string',
        description: '未激活步骤的颜色',
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
    type: 'fcDynamicRender',
    label: 'Vue组件',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'fcDynamicRender',
        field: 'Fo20mgulez0le6c',
        native: false,
        readMode: 'custom',
        props: {
          vueContent: "<template>\n  <div class=\"dynamic-component\">\n    <h3>{{ title }}</h3>\n    <p>{{ content }}</p>\n    <div class=\"button-group\">\n      <button @click=\"increment\" class=\"btn btn-primary\">增加</button>\n      <button @click=\"decrement\" class=\"btn btn-secondary\">减少</button>\n      <button @click=\"reset\" class=\"btn btn-danger\">重置</button>\n    </div>\n    <p>当前计数: {{ count }}</p>\n    <div class=\"info-section\">\n      <p>状态: {{ status }}</p>\n      <p>计算属性演示: {{ doubleCount }}</p>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'DynamicComponent',\n  emits: ['update:modelValue', 'change'],\n  props: {\n    modelValue: Number,\n    formCreateInject: Object,\n  },\n  data() {\n    return {\n      title: 'Vue动态组件',\n      content: '这是一个使用Vue编写的动态渲染组件',\n      count: this.modelValue || 0\n    }\n  },\n  computed: {\n    status() {\n      if (this.count > 5) return '高'\n      if (this.count > 2) return '中'\n      return '低'\n    },\n    doubleCount() {\n      return this.count * 2\n    }\n  },\n  watch: {\n    modelValue(n) {\n      this.count = n;\n    },\n    count(n) {\n      this.$emit('update:modelValue', n);\n      this.$emit('change', n);\n    }\n  },\n  methods: {\n    increment() {\n      this.count++;\n    },\n    decrement() {\n      this.count--;\n    },\n    reset() {\n      this.count = 0;\n    }\n  },\n  mounted() {\n    console.log('Vue2动态组件已挂载');\n  },\n  beforeDestroy() {\n    console.log('Vue2动态组件即将销毁');\n  }\n}\n</script>\n\n<style>\n.dynamic-component {\n  padding: 20px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background-color: #f9f9f9;\n  width: 100%;\n  box-sizing: border-box;\n}\n.button-group {\n  margin: 15px 0;\n}\n.btn {\n  padding: 8px 16px;\n  margin: 0 5px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.btn-primary {\n  background-color: #409eff;\n  color: white;\n}\n.btn-secondary {\n  background-color: #909399;\n  color: white;\n}\n.btn-danger {\n  background-color: #f56c6c;\n  color: white;\n}\n.btn:hover {\n  opacity: 0.8;\n}\n</style>",
        },
        _fc_id: 'id_F06umgulez0le7c',
        name: 'ref_Fkyemgulez0le8c',
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
    type: 'vanNoticeBar',
    label: '通知',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'vanNoticeBar',
        props: {
          text: '通知文字',
        },
        _fc_id: 'id_Fvuimgulez0lehc',
        name: 'ref_Fyz6mgulez0leic',
        _fc_drag_tag: 'vanNoticeBar',
      },
    ],
    props: [
      {
        name: 'mode',
        type: 'string',
        description: '通知栏模式',
        required: false,
        options: [
          'closeable',
          'link',
        ],
      },
      {
        name: 'text',
        type: 'string',
        description: '通知文本内容',
        required: false,
      },
      {
        name: 'color',
        type: 'string',
        description: '通知文本颜色',
        required: false,
      },
      {
        name: 'background',
        type: 'string',
        description: '滚动条背景',
        required: false,
      },
      {
        name: 'speed',
        type: 'number',
        description: '滚动速率',
        required: false,
        defaultValue: 60,
      },
      {
        name: 'scrollable',
        type: 'boolean',
        description: '是否开启滚动播放，内容长度溢出时默认开启',
        required: false,
        defaultValue: true,
      },
      {
        name: 'wrapable',
        type: 'boolean',
        description: '是否开启文本换行，只在禁用滚动时生效',
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
      {
        name: 'replay',
        description: '每当滚动栏重新开始滚动时触发',
      },
    ],
  },
  {
    type: 'vanButton',
    label: '按钮',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'vanButton',
        children: [
          '按钮',
        ],
        _fc_id: 'id_Fe15mgulez0mejc',
        name: 'ref_F0lpmgulez0mekc',
        _fc_drag_tag: 'vanButton',
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
        name: 'type',
        type: 'string',
        description: '类型',
        required: false,
        options: [
          'primary',
          'success',
          'warning',
          'danger',
        ],
      },
      {
        name: 'size',
        type: 'string',
        description: '尺寸',
        required: false,
        options: [
          'large',
          'small',
          'mini',
        ],
      },
      {
        name: 'color',
        type: 'string',
        description: '按钮颜色',
        required: false,
      },
      {
        name: 'block',
        type: 'boolean',
        description: '是否为块级元素',
        required: false,
      },
      {
        name: 'square',
        type: 'boolean',
        description: '是否为方形按钮',
        required: false,
      },
      {
        name: 'round',
        type: 'boolean',
        description: '是否为圆形按钮',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用按钮',
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
    type: 'vanDivider',
    label: '分割线',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'vanDivider',
        style: {
          width: '100%',
        },
        children: [
          '分割线',
        ],
        _fc_id: 'id_Feodmgulez0merc',
        name: 'ref_Fwd9mgulez0mesc',
        _fc_drag_tag: 'vanDivider',
      },
    ],
    props: [
      {
        name: 'formCreateChild',
        type: 'string',
        description: '设置分割线文案',
        required: false,
      },
      {
        name: 'dashed',
        type: 'boolean',
        description: '是否使用虚线',
        required: false,
      },
      {
        name: 'contentPosition',
        type: 'string',
        description: '内容位置',
        required: false,
        options: [
          'left',
          'center',
          'right',
        ],
      },
      {
        name: 'vertical',
        type: 'boolean',
        description: '是否使用垂直',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'vanTag',
    label: '标签',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'vanTag',
        children: [
          '标签',
        ],
        _fc_id: 'id_F266mgulez0metc',
        name: 'ref_Fspimgulez0meuc',
        _fc_drag_tag: 'vanTag',
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
        ],
      },
      {
        name: 'size',
        type: 'string',
        description: '标签的尺寸',
        required: false,
        options: [
          'large',
          'medium',
          'default',
        ],
      },
      {
        name: 'color',
        type: 'string',
        description: '标签颜色',
        required: false,
      },
      {
        name: 'plain',
        type: 'boolean',
        description: '是否为空心样式',
        required: false,
      },
      {
        name: 'round',
        type: 'boolean',
        description: '是否为圆角样式',
        required: false,
      },
      {
        name: 'textColor',
        type: 'string',
        description: '文本颜色',
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
    type: 'vanImage',
    label: '图片',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'vanImage',
        style: {
          width: '100px',
          height: '100px',
        },
        props: {
          src: 'https://static.form-create.com/example.png',
        },
        _fc_id: 'id_Fr1dmgulez0mevc',
        name: 'ref_Fvxumgulez0mewc',
        _fc_drag_tag: 'vanImage',
      },
    ],
    props: [
      {
        name: 'src',
        type: 'string',
        description: '图片链接',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'vanIcon',
    label: '图标',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'vanIcon',
        props: {
          name: 'https://static.form-create.com/example.png',
          size: '1em',
        },
        _fc_id: 'id_F8kemgulez0mf9c',
        name: 'ref_Fe09mgulez0mfac',
        _fc_drag_tag: 'vanIcon',
      },
    ],
    props: [
      {
        name: 'name',
        type: 'string',
        description: '图标名称或图片链接',
        required: false,
      },
      {
        name: 'dot',
        type: 'boolean',
        description: '是否显示图标右上角小红点',
        required: false,
      },
      {
        name: 'badge',
        type: 'string',
        description: '图标右上角徽标的内容',
        required: false,
      },
      {
        name: 'color',
        type: 'string',
        description: '图标颜色',
        required: false,
      },
      {
        name: 'size',
        type: 'string',
        description: '图标大小',
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
    type: 'fcRow',
    label: '栅格布局',
    uiFramework: 'vant',
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
                field: 'F7grmgulez0nfzc',
                title: '输入框',
                _fc_id: 'id_Fmcjmgulez0ng0c',
                name: 'ref_Fs6tmgulez0ng1c',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_Faz2mgulez0nfxc',
            name: 'ref_Fm80mgulez0nfyc',
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
                field: 'Fe6imgulez0ng4c',
                title: '输入框',
                _fc_id: 'id_Fu66mgulez0ng5c',
                name: 'ref_Fz6smgulez0ng6c',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_Frp7mgulez0ng2c',
            name: 'ref_F94nmgulez0ng3c',
            _fc_drag_tag: 'col',
          },
        ],
        _fc_id: 'id_Fblamgulez0nfvc',
        name: 'ref_Fpaomgulez0nfwc',
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
          'center',
          'bottom',
        ],
      },
    ],
    events: [],
  },
  {
    type: 'col',
    label: '格子',
    uiFramework: 'vant',
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
            field: 'Fz95mgulez0ng9c',
            title: '输入框',
            _fc_id: 'id_Faicmgulez0ngac',
            name: 'ref_Ffbkmgulez0ngbc',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'F65amgulez0ngcc',
            title: '输入框',
            _fc_id: 'id_Fv15mgulez0ngdc',
            name: 'ref_Fu7ymgulez0ngec',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_Fr27mgulez0ng7c',
        name: 'ref_F3yrmgulez0ng8c',
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
    ],
    events: [],
  },
  {
    type: 'vanTabs',
    label: '标签页',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    defaultChildren: [
      'vanTab',
    ],
    examples: [
      {
        type: 'vanTabs',
        style: {
          width: '100%',
        },
        children: [
          {
            type: 'vanTab',
            props: {
              title: '选项卡',
            },
            children: [
              {
                type: 'input',
                field: 'F8egmgulez0oh1c',
                title: '输入框',
                _fc_id: 'id_Fw7hmgulez0oh2c',
                name: 'ref_Fsilmgulez0oh3c',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_Fh63mgulez0ogzc',
            name: 'ref_F6anmgulez0oh0c',
            _fc_drag_tag: 'vanTab',
          },
          {
            type: 'vanTab',
            props: {
              title: '选项卡',
            },
            children: [
              {
                type: 'input',
                field: 'Fdrtmgulez0oh6c',
                title: '输入框',
                _fc_id: 'id_Fwbvmgulez0oh7c',
                name: 'ref_Fkzfmgulez0oh8c',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_Fi0mmgulez0oh4c',
            name: 'ref_Fvaemgulez0oh5c',
            _fc_drag_tag: 'vanTab',
          },
        ],
        _fc_id: 'id_F8qwmgulez0ogxc',
        name: 'ref_Fpdxmgulez0ogyc',
        _fc_drag_tag: 'vanTabs',
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
        ],
      },
      {
        name: 'color',
        type: 'string',
        description: '标签主题色',
        required: false,
      },
      {
        name: 'background',
        type: 'string',
        description: '标签栏背景色',
        required: false,
      },
      {
        name: 'sticky',
        type: 'boolean',
        description: '是否使用粘性布局',
        required: false,
      },
      {
        name: 'swipeable',
        type: 'boolean',
        description: '是否开启手势左右滑动切换',
        required: false,
      },
      {
        name: 'scrollspy',
        type: 'boolean',
        description: '是否开启滚动导航',
        required: false,
      },
      {
        name: 'titleActiveColor',
        type: 'string',
        description: '标题选中态颜色',
        required: false,
      },
      {
        name: 'titleInactiveColor',
        type: 'string',
        description: '标题默认态颜色',
        required: false,
      },
    ],
    events: [
      {
        name: 'clickTab',
        description: '点击标签时触发',
      },
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'rendered',
        description: '标签内容首次渲染时触发（仅在开启延迟渲染后触发）',
      },
      {
        name: 'scroll',
        description: '滚动时触发，仅在 sticky 模式下生效',
      },
    ],
  },
  {
    type: 'vanTab',
    label: '选项卡',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    examples: [
      {
        type: 'vanTab',
        props: {
          title: '选项卡',
        },
        children: [
          {
            type: 'input',
            field: 'Fngmmgulez0ohbc',
            title: '输入框',
            _fc_id: 'id_F589mgulez0ohcc',
            name: 'ref_Fwjimgulez0ohdc',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'F7t0mgulez0ohec',
            title: '输入框',
            _fc_id: 'id_Ftgzmgulez0ohfc',
            name: 'ref_Fjaymgulez0ohgc',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_F2e5mgulez0oh9c',
        name: 'ref_Fckxmgulez0ohac',
        _fc_drag_tag: 'vanTab',
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
        name: 'title',
        type: 'string',
        description: '选项卡标题',
        required: false,
      },
      {
        name: 'name',
        type: 'string',
        description: '选项卡的标识符',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'vanCollapse',
    label: '折叠面板',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    defaultChildren: [
      'vanCollapseItem',
    ],
    examples: [
      {
        type: 'vanCollapse',
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
            type: 'vanCollapseItem',
            props: {
              title: '面板',
            },
            children: [
              {
                type: 'input',
                field: 'Fo4lmgulez0ohnc',
                title: '输入框',
                _fc_id: 'id_Fz4imgulez0ohoc',
                name: 'ref_Fl58mgulez0ohpc',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_Fbs8mgulez0ohlc',
            name: 'ref_Fe9wmgulez0ohmc',
            _fc_drag_tag: 'vanCollapseItem',
          },
          {
            type: 'vanCollapseItem',
            props: {
              title: '面板',
            },
            children: [
              {
                type: 'input',
                field: 'F7tvmgulez0ohsc',
                title: '输入框',
                _fc_id: 'id_Fl4umgulez0ohtc',
                name: 'ref_Fzp1mgulez0ohuc',
                _fc_drag_tag: 'input',
              },
            ],
            _fc_id: 'id_Fp9bmgulez0ohqc',
            name: 'ref_Flxrmgulez0ohrc',
            _fc_drag_tag: 'vanCollapseItem',
          },
        ],
        _fc_id: 'id_Fs3amgulez0ohjc',
        name: 'ref_Fui7mgulez0ohkc',
        _fc_drag_tag: 'vanCollapse',
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
        description: '切换面板时触发',
      },
    ],
  },
  {
    type: 'vanCollapseItem',
    label: '面板',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    examples: [
      {
        type: 'vanCollapseItem',
        props: {
          title: '面板',
        },
        children: [
          {
            type: 'input',
            field: 'F2wqmgulez0ohxc',
            title: '输入框',
            _fc_id: 'id_Fe9omgulez0ohyc',
            name: 'ref_Fmn9mgulez0ohzc',
            _fc_drag_tag: 'input',
          },
          {
            type: 'input',
            field: 'Faonmgulez0oi0c',
            title: '输入框',
            _fc_id: 'id_Fmtpmgulez0oi1c',
            name: 'ref_Frf0mgulez0oi2c',
            _fc_drag_tag: 'input',
          },
        ],
        _fc_id: 'id_Fiwdmgulez0ohvc',
        name: 'ref_Fpi7mgulez0ohwc',
        _fc_drag_tag: 'vanCollapseItem',
      },
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用面板',
        required: false,
      },
      {
        name: 'name',
        type: 'string',
        description: '唯一标志符',
        required: false,
      },
      {
        name: 'title',
        type: 'string',
        description: '标题栏左侧内容',
        required: false,
      },
      {
        name: 'value',
        type: 'string',
        description: '标题栏右侧内容',
        required: false,
      },
      {
        name: 'label',
        type: 'string',
        description: '标题栏描述信息',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'vanCellGroup',
    label: '单元格',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: false,
    isContainer: true,
    isAssist: true,
    defaultChildren: [
      'vanCell',
    ],
    examples: [
      {
        type: 'vanCellGroup',
        native: false,
        col: {
          show: true,
        },
        wrap: {
          show: false,
        },
        props: {
          title: '单元格',
        },
        _fc_id: 'id_Fkotmgulez0oi3c',
        name: 'ref_Fpi5mgulez0oi4c',
        _fc_drag_tag: 'vanCellGroup',
        children: [
          {
            type: 'vanCell',
            props: {
              title: '标题',
              value: '内容',
            },
            _fc_id: 'id_F0mbmgulez0oi5c',
            name: 'ref_Fzphmgulez0oi6c',
            _fc_drag_tag: 'vanCell',
          },
          {
            type: 'vanCell',
            props: {
              title: '标题',
              value: '内容',
            },
            _fc_id: 'id_F7pomgulez0oi7c',
            name: 'ref_Fa4wmgulez0oi8c',
            _fc_drag_tag: 'vanCell',
          },
        ],
      },
    ],
    props: [
      {
        name: 'title',
        type: 'string',
        description: '分组标题',
        required: false,
      },
      {
        name: 'inset',
        type: 'boolean',
        description: '是否展示为圆角卡片风格',
        required: false,
      },
      {
        name: 'border',
        type: 'boolean',
        description: '是否显示外边框',
        required: false,
        defaultValue: true,
      },
    ],
    events: [],
  },
  {
    type: 'vanCell',
    label: '单元格子',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    isField: false,
    isContainer: false,
    isAssist: true,
    examples: [
      {
        type: 'vanCell',
        props: {
          title: '标题',
          value: '内容',
        },
        _fc_id: 'id_F38tmgulez0oi9c',
        name: 'ref_Fmpkmgulez0oiac',
        _fc_drag_tag: 'vanCell',
      },
    ],
    props: [
      {
        name: 'title',
        type: 'string',
        description: '左侧标题',
        required: false,
      },
      {
        name: 'value',
        type: 'string',
        description: '右侧内容',
        required: false,
      },
      {
        name: 'label',
        type: 'string',
        description: '标题下方的描述信息',
        required: false,
      },
      {
        name: 'icon',
        type: 'string',
        description: '左侧图标名称或图片链接',
        required: false,
      },
      {
        name: 'url',
        type: 'string',
        description: '点击后跳转的链接地址',
        required: false,
      },
      {
        name: 'isLink',
        type: 'boolean',
        description: '是否展示右侧箭头并开启点击反馈',
        required: false,
      },
      {
        name: 'center',
        type: 'boolean',
        description: '是否使内容垂直居中',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'fcPopup',
    label: '弹出层',
    uiFramework: 'vant',
    vueVersion: 'vue3',
    business: true,
    isField: true,
    isContainer: true,
    isAssist: false,
    childrenPath: 'props.rule',
    examples: [
      {
        type: 'fcPopup',
        props: {
          title: '弹出层',
          rule: [
            {
              type: 'input',
              field: 'Fresmgulez0piec',
              title: '输入框',
              $required: false,
              _fc_id: 'id_Fqx7mgulez0pifc',
              name: 'ref_Fsjwmgulez0pigc',
              display: true,
              hidden: false,
              _fc_drag_tag: 'input',
            },
            {
              type: 'input',
              field: 'Ft7umgulez0pihc',
              title: '输入框',
              $required: false,
              _fc_id: 'id_Fnykmgulez0piic',
              name: 'ref_F83gmgulez0pijc',
              display: true,
              hidden: false,
              _fc_drag_tag: 'input',
            },
          ],
        },
        native: true,
        ignore: true,
        _fc_id: 'id_Flx4mgulez0oibc',
        name: 'ref_Fmpcmgulez0oicc',
        field: 'Fg8omgulez0oidc',
        _fc_drag_tag: 'fcPopup',
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
        name: 'position',
        type: 'string',
        description: '弹出位置',
        required: false,
        options: [
          'center',
          'top',
          'bottom',
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
        name: 'autoClose',
        type: 'boolean',
        description: '提交表单后自动关闭弹出框',
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
        name: 'beforeClose',
        type: 'string',
        description: '关闭前的回调函数',
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
        name: 'click',
        description: '点击组件时触发',
      },
      {
        name: 'clickCloseIcon',
        description: '点击关闭图标时触发',
      },
    ],
  },
];
