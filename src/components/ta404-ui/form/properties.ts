import { ComponentInfo } from '../../../core/component-registry';

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
  {
    name: 'required',
    type: 'boolean',
    description: '是否必填',
    required: false,
  },
  {
    name: 'label',
    type: 'string',
    description: '组件显示名称',
    required: true,
  },
  {
    name: 'fieldDecoratorId',
    type: 'string',
    description: '组件唯一标识符，自动生成，以字母开头的8位随机码（32进制）',
    required: true,
  },
  {
    name: 'renderId',
    type: 'string',
    description: '组件唯一标识符，自动生成，以字母开头的12位随机码（32进制）',
    required: true,
  },
  {
    name: 'display',
    type: 'string',
    description: '是否显示组件，默认值："true"，可选值："false"和"true"',
    required: false,
    defaultValue: 'true',
  },
  {
    name: 'style',
    type: 'string',
    description: '组件样式，示例："color:red;font-size:20px"',
    required: false,
  },
  {
    name: 'initialValue',
    type: 'string',
    description: '默认值，类型根据组件类型而定',
    required: false,
  },
  {
    name: 'message',
    type: 'string',
    description: '验证提示信息，示例："请填写单行文本信息"/"请填写密码"',
    required: false,
  },
  {
    name: 'rules',
    type: 'string',
    description: '自定义验证规则（转义的JSON字符串）',
    required: false,
  },
  {
    name: 'extra',
    type: 'string',
    description: '额外描述信息，示例："我是额外信息，主要用于补充描述该项属性的填写注意事项"',
    required: false,
  },
  {
    name: 'span',
    type: 'number',
    description: '栅格占据列数，整个组件在外部容器中占的栅格，计算方式为 24 / 列数。默认值：8，可选值：1-24',
    required: true,
    defaultValue: 8,
  },
  {
    name: 'tools',
    type: 'object',
    description: '工具配置，默认值：{}',
    required: true,
  },
  {
    name: 'autoShow',
    type: 'boolean',
    description: '是否自动显示组件，默认值：false，可选值：false 和 true',
    required: true,
    defaultValue: false,
  },
  {
    name: 'fieldsAlias',
    type: 'string',
    description: '组件字段别名',
    required: false,
  },
  {
    name: 'validateTrigger',
    type: 'Array',
    description: '触发验证的事件，可选值：["change", "blur"]，示例：["blur"]',
    required: false,
  },
  {
    name: 'rules',
    type: 'object',
    description:
      "自定义验证规则（转义的JSON字符串），示例：[{\n pattern: '(^\\\\d{15}$)\\|(^\\\\d{17}(\\\\d\\|X\\|x)$)',\\n message: '需要输入身份证号'\\n}]",
    required: false,
  },
  {
    name: 'allowClear',
    type: 'boolean',
    description: '是否允许清除 / 是否支持清空，默认值：true (在 rpc 中) / 无 (在 single-input, password 中)，可选值：false 和 true',
    required: false,
    defaultValue: true,
  },
  {
    name: 'addonBefore',
    type: 'string',
    description: '前置内容，用于 single-input, password 组件',
    required: false,
  },
  {
    name: 'addonAfter',
    type: 'string',
    description: '后置内容，用于 single-input, password 组件',
    required: false,
  },
  {
    name: 'isRender',
    type: 'string',
    description: '是否渲染元素，为 false 时元素不渲染，表单提交时不验证，可选值：false 和 true',
    required: false,
  },
  {
    name: 'labelCol',
    type: 'number',
    description: '标签所占栅格，与 wrapperCol 属性合为 24，默认值：6，可选值：1-24',
    required: false,
    defaultValue: 6,
  },
  {
    name: 'wrapperCol',
    type: 'number',
    description: '封装组件栅格，与 labelCol 合为 24，默认值：18，可选值：1-24',
    required: false,
    defaultValue: 18,
  },
  {
    name: 'labelStyle',
    type: 'string',
    description: '标签样式（转义的JSON字符串），示例："{\\"color\\":\\"red\\"}"',
    required: true,
  },
  {
    name: 'labelWidth',
    type: 'number',
    description: '标签宽度，示例：100',
    required: false,
  },
  {
    name: 'isLongLabel',
    type: 'boolean',
    description: '是否为长标签，可选值：false 和 true',
    required: false,
  },
  {
    name: 'haveEnterButton',
    type: 'boolean',
    description: '是否显示搜索按钮，默认值：false，可选值：false 和 true，用于 single-input 组件',
    required: false,
    defaultValue: false,
  },
  {
    name: 'enterButton',
    type: 'string',
    description: '搜索按钮文本，用于 single-input 组件',
    required: false,
  },
  {
    name: 'itemStyle',
    type: 'string',
    description: '组件样式，示例："color:red;font-size:20px"，用于 multi-input 组件',
    required: false,
  },
  {
    name: 'autoSize',
    type: 'boolean',
    description: '是否根据内容自适应高度，默认值：true，可选值：false 和 true，用于 multi-input 组件',
    required: false,
    defaultValue: true,
  },
  {
    name: 'rows',
    type: 'number',
    description:
      '多行文本行数，最小为1的整数。当 autoSize 属性为 false 时需要配置此项，当 autoSize 值为 true 时需要移除此项，默认值：2，用于 multi-input 组件',
    required: false,
    defaultValue: 2,
  },
  {
    name: 'min',
    type: 'number',
    description: '最小可输入值，示例：1，用于 number 组件',
    required: false,
  },
  {
    name: 'max',
    type: 'number',
    description: '最大可输入值，示例：100，用于 number 组件',
    required: false,
  },
  {
    name: 'precision',
    type: 'number',
    description: '数字精度,小数点后位数，比如2则为.00，示例：2，用于 number 组件',
    required: false,
    defaultValue: 0,
  },
  {
    name: 'step',
    type: 'number',
    description: '值修改时的步长，用于 number 组件',
    required: false,
    defaultValue: 1,
  },
  {
    name: 'asAmount',
    type: 'boolean',
    description: '是否为金额类型，可选值：false 和 true，用于 number 组件',
    required: false,
  },
  {
    name: 'amountPre',
    type: 'string',
    description: '金额前缀。数值为金额类型时（asAmount 值为 true）此项生效，需要配置，用于 number 组件',
    required: false,
  },
  {
    name: 'alignRight',
    type: 'boolean',
    description: '值是否右对齐，可选值：false 和 true，用于 number 组件',
    required: false,
    defaultValue: false,
  },
  {
    name: 'decimalSeparator',
    type: 'string',
    description: '小数点符号，默认值：.，用于 number 组件',
    required: false,
    defaultValue: '.',
  },
  {
    name: 'dataType',
    type: 'string',
    description: '数据填充方式，默认值：static，可选值：static/remote/customRemote，用于 rpc 组件',
    required: true,
    defaultValue: 'static',
    options: ['static', 'remote', 'customRemote'],
  },
  {
    name: 'dropdownTrigger',
    type: 'string',
    description: '查询行为触发方式，默认值：delay，可选值：delay/enterKeyup/click，用于 rpc 组件',
    required: false,
    defaultValue: 'delay',
    options: ['delay', 'enterKeyup', 'click'],
  },
  {
    name: 'dropdownMatchSelectWidth',
    type: 'boolean',
    description: '下拉框与输入框同宽，默认值：false，可选值：false 和 true，用于 rpc 组件',
    required: false,
    defaultValue: false,
  },
  {
    name: 'dropdownMatchSelectWidthValue',
    type: 'string',
    description: '下拉输入框宽度，一般为带 px 单位宽度，默认值：500px，用于 rpc 组件',
    required: false,
    defaultValue: '500px',
  },
  {
    name: 'searchDelay',
    type: 'number',
    description: '延迟时间，当 dropdownTrigger 属性值为 delay 时，此项必须，单位毫秒，默认值：600，用于 rpc 组件',
    required: true,
    defaultValue: 600,
  },
  {
    name: 'titleList',
    type: 'Array',
    description:
      '需要展示的表头信息配置，为 JSON 格式的对象数组，对象只能包含 key 和 value 属性。支持配置多组。key 属性表示属性字段变量，value 表示字段名称，不支持其他属性格式，默认值：[{"key": "id", "value": "编号"}, {"key": "name", "value": "名称"}]，用于 rpc 组件',
    required: true,
    defaultValue: [
      {
        key: 'id',
        value: '编号',
      },
      {
        key: 'name',
        value: '名称',
      },
    ],
  },
  {
    name: 'optionConfig',
    type: 'object',
    description:
      '配置选中后的实际值对应的字段和显示值对应的字段。格式固定，为 JSON 对象，只能包含 value 和 label 属性，与 titleList 属性 key 关联，默认值：{"value": "id", "label": "name"}，用于 rpc 组件',
    required: true,
    defaultValue: {
      value: 'id',
      label: 'name',
    },
  },
  {
    name: 'data',
    type: 'string',
    description:
      '组件的数据项。格式为经过转义的标准 JSON 格式对象数组字符串。对象中的变量名称与 titleList 中配置的 key 值对应，同时与 optionConfig 中的值关联，默认值："[{\\"name\\":\\"张三\\",\\"id\\":\\"10010\\"}]"，用于 rpc 组件',
    required: true,
  },
];

/**
 * 根据参数列表获取属性配置
 * @param properties 要获取的属性名称列表
 */
export const getProperties = (properties: string[]): ComponentInfo['props'] => {
  if (!properties || properties.length === 0) {
    return [];
  }

  return commonProps.filter(prop => properties.includes(prop.name));
}


/**
 * 根据组件类型获取默认属性配置
 * @param fieldType 组件字段类型
 * @returns 属性配置数组
 */
export const getDefaultPropsByFieldType = (fieldType: string): ComponentInfo['props'] => {

  // 根据不同的组件类型返回相应的属性
  switch (fieldType) {
    case 'input-search':
      return getProperties([
        'extra',
        'disabled',
        'isRender',
        'labelCol',
        'wrapperCol',
        'labelWidth',
        'isLongLabel',
        'placeholder',
        'fieldsAlias',
        'initialValue',
        'haveEnterButton',
        'enterButton',
      ]);
    case 'rpc':
      return getProperties([
        'extra',
        'disabled',
        'isRender',
        'labelCol',
        'wrapperCol',
        'labelWidth',
        'isLongLabel',
        'placeholder',
        'required',
        'message',
        'dataType',
        'allowClear',
        'dropdownTrigger',
        'dropdownMatchSelectWidth',
        'dropdownMatchSelectWidthValue',
        'searchDelay',
        'titleList',
        'optionConfig',
        'data',
      ]);
    case 'password':
      return getProperties([
        'extra',
        'disabled',
        'isRender',
        'labelCol',
        'wrapperCol',
        'labelWidth',
        'isLongLabel',
        'placeholder',
        'fieldsAlias',
        'initialValue',
        'style',
        'required',
        'message',
        'validateTrigger',
        'rules',
        'allowClear',
        'addonBefore',
        'addonAfter',
      ]);
    case 'number':
      return getProperties([
        'extra',
        'disabled',
        'isRender',
        'labelCol',
        'wrapperCol',
        'labelWidth',
        'isLongLabel',
        'placeholder',
        'fieldsAlias',
        'initialValue',
        'style',
        'required',
        'message',
        'validateTrigger',
        'min',
        'max',
        'precision',
        'step',
        'asAmount',
        'amountPre',
        'alignRight',
        'decimalSeparator',
      ]);
    case 'multi-input':
      return getProperties([
        'extra',
        'disabled',
        'isRender',
        'labelCol',
        'wrapperCol',
        'labelWidth',
        'isLongLabel',
        'placeholder',
        'fieldsAlias',
        'initialValue',
        'style',
        'required',
        'message',
        'validateTrigger',
        'rules',
        'itemStyle',
        'autoSize',
        'rows',
      ]);
    case 'single-input':
      return getProperties([
        'extra',
        'disabled',
        'isRender',
        'labelCol',
        'wrapperCol',
        'labelWidth',
        'isLongLabel',
        'placeholder',
        'fieldsAlias',
        'initialValue',
        'style',
        'required',
        'message',
        'validateTrigger',
        'rules',
        'allowClear',
        'addonBefore',
        'addonAfter',
      ]);
    case 'input':
      return getProperties(['disabled', 'placeholder', 'allowClear']);
    case 'select':
      return getProperties(['disabled', 'placeholder', 'allowClear']);
    case 'date':
      return getProperties(['disabled', 'placeholder', 'allowClear']);
    default:
      return [];
  }
};