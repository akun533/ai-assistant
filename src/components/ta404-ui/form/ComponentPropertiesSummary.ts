/**
 * 组件属性配置信息接口
 */
export interface ComponentProperty {
  /** 属性名称 */
  name: string;
  /** 属性类型 */
  type: string;
  /** 描述 */
  description?: string;
  /** 是否必填 */
  required?: boolean;
  /** 默认值 */
  defaultValue?: any;
  /** 可选值 */
  options?: string[];
}

/**
 * 组件配置信息接口
 */
export interface ComponentConfig {
  /** 组件类型 */
  type: string;
  /** 组件中文名称 */
  label: string;
  /** 组件属性列表 */
  properties: ComponentProperty[];
}

// 公共基础属性
const baseProperties: ComponentProperty[] = [
  {
    name: 'fieldDecoratorId',
    type: 'string',
    description: '组件唯一标识符，自动生成，以字母开头的8位随机码（32进制）',
    required: true
  },
  {
    name: 'renderId',
    type: 'string',
    description: '组件唯一标识符，自动生成，以字母开头的12位随机码（32进制）',
    required: true
  },
  {
    name: 'css',
    type: 'string',
    description: 'CSS样式'
  },
  {
    name: 'style',
    type: 'string',
    description: '组件样式，示例："color:red;font-size:20px"'
  },
  {
    name: 'display',
    type: 'string',
    description: '是否显示组件，默认值："true"，可选值："false"和"true"',
    defaultValue: 'true',
    required: false
  },
];

// 表单控件通用属性
const formControlProperties: ComponentProperty[] = [
  ...baseProperties,
  { name: 'label', type: 'string', description: '组件显示名称', required: true },
  { name: 'initialValue', type: 'string', description: '默认值，类型根据组件类型而定' },
  { name: 'fieldsAlias', type: 'object', description: '组件字段别名' },
  { name: 'placeholder', type: 'string', description: '输入框占位提示文字' },
  { name: 'extra', type: 'string', description: '额外描述信息，示例："我是额外信息，主要用于补充描述该项属性的填写注意事项"' },
  { name: 'required', type: 'boolean', description: '是否必填' },
  { name: 'disabled', type: 'boolean', description: '是否禁用输入框' },
  { name: 'labelWidth', type: 'number', description: '标签宽度，示例：100' },
  { name: 'longLabel', type: 'boolean', description: '是否为长标签，可选值：false 和 true' },
  { name: 'label-col', type: 'object', description: '标签col布局' },
  { name: 'v-if', type: 'string', description: '条件渲染' },
  { name: 'message', type: 'string', description: '验证提示信息，示例："请填写单行文本信息"/"请填写密码"' },
  { name: 'rules', type: 'object', description: "自定义验证规则（转义的JSON字符串），示例：[{\n pattern: '(^\\d{15}$)\|(^\\d{17}(\\d\|X\|x)$)',\n message: '需要输入身份证号'\n}]" },
  { name: 'autoShow', type: 'boolean', description: '是否自动显示组件，默认值：false，可选值：false 和 true', defaultValue: false },
  { name: 'validateTrigger', type: 'Array', description: '触发验证的事件，可选值：["change", "blur"]，示例：["blur"]' },
  { name: 'allowClear', type: 'boolean', description: '是否允许清除 / 是否支持清空，默认值：true (在 rpc 中) / 无 (在 single-input, password 中)，可选值：false 和 true', defaultValue: true },
  { name: 'addonBefore', type: 'string', description: '前置内容，用于 single-input, password 组件' },
  { name: 'addonAfter', type: 'string', description: '后置内容，用于 single-input, password 组件' },
  { name: 'isRender', type: 'string', description: '是否渲染元素，为 false 时元素不渲染，表单提交时不验证，可选值：false 和 true' },
  { name: 'labelCol', type: 'number', description: '标签所占栅格，与 wrapperCol 属性合为 24，默认值：6，可选值：1-24', defaultValue: 6 },
  { name: 'wrapperCol', type: 'number', description: '封装组件栅格，与 labelCol 合为 24，默认值：18，可选值：1-24', defaultValue: 18 },
  { name: 'labelStyle', type: 'string', description: '标签样式（转义的JSON字符串），示例："{\"color\":\"red\"}"', required: true },
  { name: 'isLongLabel', type: 'boolean', description: '是否为长标签，可选值：false 和 true' },
  { name: 'haveEnterButton', type: 'boolean', description: '是否显示搜索按钮，默认值：false，可选值：false 和 true，用于 single-input 组件', defaultValue: false },
  { name: 'enterButton', type: 'string', description: '搜索按钮文本，用于 single-input 组件' },
  { name: 'itemStyle', type: 'string', description: '组件样式，示例："color:red;font-size:20px"，用于 multi-input 组件' },
  { name: 'autoSize', type: 'boolean', description: '是否根据内容自适应高度，默认值：true，可选值：false 和 true，用于 multi-input 组件', defaultValue: true },
  { name: 'rows', type: 'number', description: '多行文本行数，最小为1的整数。当 autoSize 属性为 false 时需要配置此项，当 autoSize 值为 true 时需要移除此项，默认值：2，用于 multi-input 组件', defaultValue: 2 },
  { name: 'min', type: 'number', description: '最小可输入值，示例：1，用于 number 组件' },
  { name: 'max', type: 'number', description: '最大可输入值，示例：100，用于 number 组件' },
  { name: 'precision', type: 'number', description: '数字精度,小数点后位数，比如2则为.00，示例：2，用于 number 组件', defaultValue: 0 },
  { name: 'step', type: 'number', description: '值修改时的步长，用于 number 组件', defaultValue: 1 },
  { name: 'asAmount', type: 'boolean', description: '是否为金额类型，可选值：false 和 true，用于 number 组件' },
  { name: 'amountPre', type: 'string', description: '金额前缀。数值为金额类型时（asAmount 值为 true）此项生效，需要配置，用于 number 组件' },
  { name: 'alignRight', type: 'boolean', description: '值是否右对齐，可选值：false 和 true，用于 number 组件', defaultValue: false },
  { name: 'decimalSeparator', type: 'string', description: '小数点符号，默认值：.，用于 number 组件', defaultValue: '.' },
  { name: 'dataType', type: 'string', description: '数据填充方式，默认值：static，可选值：static/remote/customRemote，用于 rpc 组件', defaultValue: 'static', options: ['static', 'remote', 'customRemote'] },
  { name: 'dropdownTrigger', type: 'string', description: '查询行为触发方式，默认值：delay，可选值：delay/enterKeyup/click，用于 rpc 组件', defaultValue: 'delay', options: ['delay', 'enterKeyup', 'click'] },
  { name: 'dropdownMatchSelectWidth', type: 'boolean', description: '下拉框与输入框同宽，默认值：false，可选值：false 和 true，用于 rpc 组件', defaultValue: false },
  { name: 'dropdownMatchSelectWidthValue', type: 'string', description: '下拉输入框宽度，一般为带 px 单位宽度，默认值：500px，用于 rpc 组件', defaultValue: '500px' },
  { name: 'searchDelay', type: 'number', description: '延迟时间，当 dropdownTrigger 属性值为 delay 时，此项必须，单位毫秒，默认值：600，用于 rpc 组件', defaultValue: 600 },
  { name: 'titleList', type: 'Array', description: '需要展示的表头信息配置，为 JSON 格式的对象数组，对象只能包含 key 和 value 属性。支持配置多组。key 属性表示属性字段变量，value 表示字段名称，不支持其他属性格式，默认值：[{"key": "id", "value": "编号"}, {"key": "name", "value": "名称"}]，用于 rpc 组件', defaultValue: [{ key: 'id', value: '编号' }, { key: 'name', value: '名称' }] },
  { name: 'optionConfig', type: 'object', description: '配置选中后的实际值对应的字段和显示值对应的字段。格式固定，为 JSON 对象，只能包含 value 和 label 属性，与 titleList 属性 key 关联，默认值：{"value": "id", "label": "name"}，用于 rpc 组件', defaultValue: { value: 'id', label: 'name' } },
  { name: 'data', type: 'string', description: '组件的数据项。格式为经过转义的标准 JSON 格式对象数组字符串。对象中的变量名称与 titleList 中配置的 key 值对应，同时与 optionConfig 中的值关联，默认值："[{\"name\":\"张三\",\"id\":\"10010\"}]"，用于 rpc 组件' },
  { name: 'cardHeadStyle', type: 'string', description: '标题CSS。标题的CSS样式，示例: width: 120px;height:120px;' },
  { name: 'width', type: 'number', description: '宽度。列宽度信息。' },
  { name: 'size', type: 'string', description: '组件大小，默认值：default，可选值：default(默认)/small(较小)/large(较大)', defaultValue: 'default', options: ['default', 'small', 'large'] },
  { name: 'labelText', type: 'boolean', description: 'Label的展示方式，为true则表示label为纯文本展示，不能编辑组件的label', defaultValue: false },
];

// 容器组件通用属性
const containerProperties: ComponentProperty[] = [
  ...baseProperties,
  { name: 'span', type: 'number', description: '栅格占据列数，整个组件在外部容器中占的栅格，计算方式为 24 / 列数。默认值：8，可选值：1-24', defaultValue: 24, required: false },
  { name: 'tools', type: 'object', description: '工具配置，默认值：{}', defaultValue: { showClear: true }, required: false },
  { name: 'label', type: 'string', description: '组件显示名称', required: true },
  { name: 'autoShow', type: 'boolean', description: '是否自动显示组件，默认值：false，可选值：false 和 true', defaultValue: false },
  { name: 'dataType', type: 'string', description: '数据填充方式，默认值：static，可选值：static/remote/customRemote，用于 rpc 组件', defaultValue: 'static', options: ['static', 'remote', 'customRemote'] },
  { name: 'staticData', type: 'array', description: '静态数据' },
  { name: 'size', type: 'string', description: '组件大小，默认值：default，可选值：default(默认)/small(较小)/large(较大)', defaultValue: 'default', options: ['default', 'small', 'large'] },
  { name: 'labelText', type: 'boolean', description: 'Label的展示方式，为true则表示label为纯文本展示，不能编辑组件的label', defaultValue: false },
];

// 所有组件配置信息
export const ComponentPropertiesSummary: ComponentConfig[] = [
  // 容器布局组件
  {
    type: 'div',
    label: 'Div容器',
    properties: [
      {
        name: 'type',
        type: 'string',
        description: '组件类型',
        required: true,
        defaultValue: 'div'
      },
      {
        name: 'icon',
        type: 'string',
        description: '图标',
        required: false,
        defaultValue: 'icon-card'
      },
      {
        name: 'label',
        type: 'string',
        description: '组件显示名称',
        required: true,
        defaultValue: 'div容器'
      },
      {
        name: 'placement',
        type: 'string',
        defaultValue: 'right',
        required: false
      },
      {
        name: 'span',
        type: 'number',
        defaultValue: 24,
        required: false
      },
      {
        name: 'display',
        type: 'string',
        defaultValue: 'true',
        required: false
      },
      {
        name: 'tools',
        type: 'object',
        defaultValue: { showClone: true, showDelete: true, showClear: true },
        required: false
      },
      {
        name: 'children',
        type: 'object',
        defaultValue: { column: [] },
        required: false
      },
      ...baseProperties
    ]
  },
  {
    type: 'tabs',
    label: '标签页',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'tabs', required: false },
      { name: 'span', type: 'number', defaultValue: 24, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-tabs' },
      { name: 'label', type: 'string', defaultValue: '标签页', required: false },
      { name: 'labelText', type: 'boolean', defaultValue: true, required: false },
      { name: 'slotName', type: 'string', defaultValue: '', required: false },
      { name: 'tabPosition', type: 'string', defaultValue: 'left', required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'tabType', type: 'string', defaultValue: 'line', required: false },
      { name: 'tools', type: 'object', defaultValue: { showClear: true }, required: false },
      { name: 'staticData', type: 'array', defaultValue: [{ tab: 'tab-1', key: 1, children: { align: 'center', headerAlign: 'center', addBtn: true, delBtn: true, column: [], required: false } }] },
      ...baseProperties
    ]
  },
  {
    type: 'collapse',
    label: '折叠面板',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'collapse', required: false },
      { name: 'span', type: 'number', defaultValue: 24, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-cascader' },
      { name: 'label', type: 'string', defaultValue: '折叠面板', required: false },
      { name: 'labelText', type: 'boolean', defaultValue: true, required: false },
      { name: 'slotName', type: 'string', defaultValue: '', required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'tools', type: 'object', defaultValue: { showClear: true }, required: false },
      { name: 'bordered', type: 'boolean', defaultValue: true, required: false },
      { name: 'staticData', type: 'array', defaultValue: [{ header: 'pane-1', key: '1', column: [], required: false }] },
      ...baseProperties
    ]
  },
  {
    type: 'card',
    label: '卡片容器',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'card', required: false },
      { name: 'label', type: 'string', defaultValue: '卡片容器', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-card' },
      { name: 'span', type: 'number', defaultValue: 24, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'formCardStyleFit', type: 'boolean', defaultValue: false, required: false },
      { name: 'formCardStyle', type: 'object', defaultValue: { height: '450px' }, required: false },
      { name: 'children', type: 'object', defaultValue: { align: 'left', headerAlign: 'left', addBtn: true, delBtn: true, column: [] }, required: false },
      { name: 'tools', type: 'object', defaultValue: { showClear: true }, required: false },
      ...baseProperties
    ]
  },
  {
    type: 'drawer',
    label: '抽屉',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'drawer', required: false },
      { name: 'label', type: 'string', defaultValue: '抽屉', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-drawer' },
      { name: 'placement', type: 'string', defaultValue: 'right', required: false },
      { name: 'title', type: 'string', defaultValue: '抽屉标题', required: false },
      { name: 'width', type: 'number', defaultValue: 800, required: false },
      { name: 'footerHeight', type: 'string', defaultValue: '55px', required: false },
      { name: 'maskClosable', type: 'boolean', defaultValue: true, required: false },
      { name: 'closable', type: 'boolean', defaultValue: true, required: false },
      { name: 'span', type: 'number', defaultValue: 24, required: false },
      { name: 'display', type: 'boolean', defaultValue: false, required: false },
      { name: 'children', type: 'object', defaultValue: { align: 'center', headerAlign: 'center', addBtn: true, delBtn: true, column: [] }, required: false },
      { name: 'tools', type: 'object', defaultValue: { showClear: true }, required: false },
      ...baseProperties
    ]
  },
  {
    type: 'modal',
    label: '弹窗',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'modal', required: false },
      { name: 'label', type: 'string', defaultValue: '弹窗', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-model' },
      { name: 'title', type: 'string', defaultValue: '标题', required: false },
      { name: 'width', type: 'number', defaultValue: 800, required: false },
      { name: 'height', type: 'number', defaultValue: 500, required: false },
      { name: 'display', type: 'boolean', defaultValue: false, required: false },
      { name: 'okText', type: 'string', defaultValue: '确定', required: false },
      { name: 'cancelText', type: 'string', defaultValue: '取消', required: false },
      { name: 'okType', type: 'string', defaultValue: 'primary', required: false },
      { name: 'maskClosable', type: 'boolean', defaultValue: true, required: false },
      { name: 'keyboard', type: 'boolean', defaultValue: true, required: false },
      { name: 'destroyOnClose', type: 'boolean', defaultValue: true, required: false },
      { name: 'closeModalAfterOk', type: 'boolean', defaultValue: true, required: false },
      { name: 'children', type: 'object', defaultValue: { align: 'center', headerAlign: 'center', addBtn: true, delBtn: true, column: [] }, required: false },
      { name: 'tools', type: 'object', defaultValue: { showClear: true }, required: false },
      ...baseProperties
    ]
  },
  {
    type: 'border-layout',
    label: 'Border布局',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'border-layout', required: false },
      { name: 'label', type: 'string', defaultValue: 'Border布局', required: false },
      { name: 'formParams', type: 'array', defaultValue: [{ key: '', id: '' }], required: false },
      { name: 'fitHeight', type: 'string', defaultValue: '100%', required: false },
      { name: 'layout', type: 'object', defaultValue: { header: '0', right: '0', left: '0', footer: '0' }, required: false },
      { name: 'showBorder', type: 'boolean', defaultValue: true, required: false },
      { name: 'showPadding', type: 'boolean', defaultValue: true, required: false },
      { name: 'headerCfg', type: 'object', required: false },
      { name: 'leftCfg', type: 'object', required: false },
      { name: 'rightCfg', type: 'object', required: false },
      { name: 'footerCfg', type: 'object', required: false },
      { name: 'centerCfg', type: 'object', required: false },
      { name: 'children', type: 'object', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-border-layout' },
      { name: 'span', type: 'number', defaultValue: 24, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'dataType', type: 'string', defaultValue: 'remote', required: false },
      { name: 'scroll', type: 'object', defaultValue: { x: '100%', y: 100 }, required: false },
      { name: 'tools', type: 'object', defaultValue: { showClear: true }, required: false },
      ...baseProperties
    ]
  },
  {
    type: 'search',
    label: '搜索栏容器',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'search', required: false },
      { name: 'label', type: 'string', defaultValue: '搜索栏容器', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-card' },
      { name: 'span', type: 'number', defaultValue: 24, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'children', type: 'object', defaultValue: { align: 'center', headerAlign: 'center', addBtn: true, delBtn: true, column: [] }, required: false },
      { name: 'tools', type: 'object', defaultValue: { showClear: true }, required: false },
      ...baseProperties,
      { name: 'titleCss', type: 'string', description: '标题CSS样式' },
      { name: 'parent-col', type: 'object', description: '统一设置父组件下表单项的label-col和wrapper-col' },
      { name: 'v-if', type: 'string', description: '条件渲染' },
    ]
  },

  // 输入组件
  {
    type: 'single-input',
    label: '输入框',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'single-input', required: false },
      { name: 'label', type: 'string', defaultValue: '输入框', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-input' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      { name: 'comp', type: 'object', required: false },
      ...formControlProperties,
      { name: 'validate', type: 'array', description: '自定义校验规则' },
    ]
  },
  {
    type: 'input-group',
    label: '组合输入框',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'input-group', required: false },
      { name: 'label', type: 'string', defaultValue: '组合输入框', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-input-group' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      { name: 'compact', type: 'boolean', defaultValue: false, required: false },
      { name: 'size', type: 'string', defaultValue: 'default', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'takeOverMode', type: 'boolean', defaultValue: true, required: false },
      { name: 'staticData', type: 'array', defaultValue: [{ type: 'input' }, { type: 'input' }] },
      ...baseProperties,
      { name: 'label', type: 'string', description: '标签' },
      { name: 'css', type: 'string', description: 'CSS样式' },
      { name: 'autoShow', type: 'boolean', description: '是否自动显示' },
      { name: 'display', type: 'string', description: '是否展示' },
      { name: 'labelWidth', type: 'number/string', description: '标签宽度' },
      { name: 'longLabel', type: 'boolean', description: '标签换行' },
      { name: 'label-col', type: 'object', description: '标签col布局' },
    ]
  },
  {
    type: 'input-search',
    label: '带搜索文本',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'input-search', required: false },
      { name: 'label', type: 'string', defaultValue: '带搜索文本', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-search' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'haveEnterButton', type: 'boolean', defaultValue: false, required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...formControlProperties
    ]
  },
  {
    type: 'password',
    label: '密码输入框',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'password', required: false },
      { name: 'label', type: 'string', defaultValue: '密码输入框', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-password' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...formControlProperties,
      { name: 'validate', type: 'array', description: '自定义校验规则' },
    ]
  },
  {
    type: 'multi-input',
    label: '多行输入框',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'multi-input', required: false },
      { name: 'label', type: 'string', defaultValue: '多行输入框', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'autoSize', type: 'boolean', defaultValue: true, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-textarea' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...formControlProperties,
      { name: 'validate', type: 'array', description: '自定义校验规则' },
    ]
  },
  {
    type: 'number',
    label: '数字输入框',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'number', required: false },
      { name: 'label', type: 'string', defaultValue: '数字输入框', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-number' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'decimalSeparator', type: 'string', defaultValue: '.', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...formControlProperties,
      { name: 'validate', type: 'array', description: '自定义校验规则' },
    ]
  },
  {
    type: 'rpc',
    label: 'RPC查询',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'rpc', required: false },
      { name: 'label', type: 'string', defaultValue: 'RPC查询', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-suggest' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'dataType', type: 'string', defaultValue: 'static', required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'allowClear', type: 'boolean', defaultValue: true, required: false },
      { name: 'dropdownTrigger', type: 'string', defaultValue: 'delay', required: false },
      { name: 'dropdownMatchSelectWidth', type: 'boolean', defaultValue: false, required: false },
      { name: 'dropdownMatchSelectWidthValue', type: 'string', defaultValue: '500px', required: false },
      { name: 'searchDelay', type: 'number', defaultValue: 600, required: false },
      { name: 'titleList', type: 'array', defaultValue: [{ key: 'id', value: '编号' }, { key: 'name', value: '名称' }] },
      { name: 'formParams', type: 'array', defaultValue: [] },
      { name: 'optionConfig', type: 'object', defaultValue: { value: 'id', label: 'name' }, required: false },
      { name: 'data', type: 'string', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...baseProperties,
      { name: 'label', type: 'string', description: '标签' },
      { name: 'placeholder', type: 'string', description: '占位符' },
      { name: 'extra', type: 'string', description: '额外信息' },
      { name: 'css', type: 'string', description: 'CSS样式' },
      { name: 'required', type: 'boolean', description: '是否必填' },
      { name: 'disabled', type: 'boolean', description: '是否禁用' },
      { name: 'display', type: 'string', description: '是否展示' },
      { name: 'labelWidth', type: 'number/string', description: '标签宽度' },
      { name: 'longLabel', type: 'boolean', description: '标签换行' },
      { name: 'label-col', type: 'object', description: '标签col布局' },
      { name: 'v-if', type: 'string', description: '条件渲染' },
    ]
  },

  // 选择组件
  {
    type: 'switch',
    label: '开关',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'switch', required: false },
      { name: 'label', type: 'string', defaultValue: '开关', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-switcher' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'valueDefault', type: 'number', defaultValue: 0, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...baseProperties,
      { name: 'label', type: 'string', description: '标签' },
      { name: 'initialValue', type: 'string', description: '默认值' },
      { name: 'fieldsAlias', type: 'object', description: '字段别名' },
      { name: 'extra', type: 'string', description: '额外信息' },
      { name: 'css', type: 'string', description: 'CSS样式' },
      { name: 'required', type: 'boolean', description: '是否必填' },
      { name: 'disabled', type: 'boolean', description: '是否禁用' },
      { name: 'display', type: 'string', description: '是否展示' },
      { name: 'labelWidth', type: 'number/string', description: '标签宽度' },
      { name: 'longLabel', type: 'boolean', description: '标签换行' },
      { name: 'label-col', type: 'object', description: '标签col布局' },
      { name: 'v-if', type: 'string', description: '条件渲染' },
    ]
  },
  {
    type: 'radio',
    label: '单选框组',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'radio', required: false },
      { name: 'label', type: 'string', defaultValue: '单选框组', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-radio' },
      { name: 'dataType', type: 'string', defaultValue: 'static', required: false },
      { name: 'allowDataMapping', type: 'boolean', defaultValue: true, required: false },
      { name: 'collectionType', type: 'string', defaultValue: '', required: false },
      { name: 'collectionFilter', type: 'string', defaultValue: '', required: false },
      { name: 'radioButton', type: 'boolean', defaultValue: false, required: false },
      { name: 'buttonStyle', type: 'boolean', defaultValue: false, required: false },
      { name: 'radioStyle', type: 'string', defaultValue: '', required: false },
      { name: 'reverseFilter', type: 'boolean', defaultValue: false, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      { name: 'staticData', type: 'array', defaultValue: [{ label: '选项一', value: '0' }, { label: '选项二', value: '1' }, { label: '选项三', value: '2' }] },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      ...formControlProperties
    ]
  },
  {
    type: 'checkbox',
    label: '多选框组',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'checkbox', required: false },
      { name: 'label', type: 'string', defaultValue: '多选框组', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-checkbox' },
      { name: 'allowDataMapping', type: 'boolean', defaultValue: true, required: false },
      { name: 'dataType', type: 'string', defaultValue: 'static', required: false },
      { name: 'initialValuePlaceholder', type: 'string', defaultValue: '默认值示例：["1"]', required: false },
      { name: 'staticData', type: 'array', defaultValue: [{ label: '选项一', value: '0' }, { label: '选项二', value: '1' }, { label: '选项三', value: '2' }] },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...formControlProperties
    ]
  },
  {
    type: 'select',
    label: '下拉选择器',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'select', required: false },
      { name: 'label', type: 'string', defaultValue: '下拉选择器', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'allowDataMapping', type: 'boolean', defaultValue: true, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-select' },
      { name: 'dataType', type: 'string', defaultValue: 'static', required: false },
      { name: 'staticData', type: 'array', defaultValue: [{ label: '选项一', value: '0' }, { label: '选项二', value: '1' }, { label: '选项三', value: '2' }] },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'mode', type: 'string', defaultValue: 'default', required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'allowClear', type: 'boolean', defaultValue: true, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...formControlProperties
    ]
  },
  {
    type: 'cascader',
    label: '级联选择器',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'cascader', required: false },
      { name: 'label', type: 'string', defaultValue: '级联选择器', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-cascader' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'dataType', type: 'string', defaultValue: 'static', required: false },
      { name: 'allowClear', type: 'boolean', defaultValue: true, required: false },
      { name: 'changeOnSelect', type: 'boolean', defaultValue: true, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'expandTrigger', type: 'string', defaultValue: 'click', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      { name: 'skipCall', type: 'boolean', defaultValue: false, required: false },
      { name: 'staticData', type: 'array', required: false },
      { name: 'eventRunInNextTick', type: 'boolean', defaultValue: true, required: false },
      ...formControlProperties
    ]
  },
  {
    type: 'tree',
    label: '树形选择器',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'tree', required: false },
      { name: 'allowDataMapping', type: 'boolean', defaultValue: true, required: false },
      { name: 'label', type: 'string', defaultValue: '树形选择器', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-treeselect' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'dataType', type: 'string', defaultValue: 'static', required: false },
      { name: 'allowClear', type: 'boolean', defaultValue: true, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'staticData', type: 'array', required: false },
      { name: 'eventRunInNextTick', type: 'boolean', defaultValue: true, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...formControlProperties
    ]
  },
  {
    type: 'rate',
    label: '评价',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'rate', required: false },
      { name: 'label', type: 'string', defaultValue: '评价', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-rate' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'allowClear', type: 'boolean', defaultValue: true, required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...formControlProperties
    ]
  },
  {
    type: 'slider',
    label: '滑块',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'slider', required: false },
      { name: 'label', type: 'string', defaultValue: '滑块', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-slider' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'range', type: 'boolean', defaultValue: false, required: false },
      { name: 'step', type: 'number', defaultValue: 1, required: false },
      { name: 'min', type: 'number', defaultValue: 0, required: false },
      { name: 'max', type: 'number', defaultValue: 10, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...formControlProperties
    ]
  },
  {
    type: 'color',
    label: '颜色选择器',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'color', required: false },
      { name: 'label', type: 'string', defaultValue: '颜色选择器', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-color-picker' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'panelPosition', type: 'string', defaultValue: 'left', required: false },
      { name: 'verticalPosition', type: 'string', defaultValue: 'bottom', required: false },
      { name: 'initialValue', type: 'string', defaultValue: '#000000', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...baseProperties,
      { name: 'label', type: 'string', description: '标签' },
      { name: 'extra', type: 'string', description: '额外信息' },
      { name: 'css', type: 'string', description: 'CSS样式' },
      { name: 'required', type: 'boolean', description: '是否必填' },
      { name: 'disabled', type: 'boolean', description: '是否禁用' },
      { name: 'display', type: 'string', description: '是否展示' },
      { name: 'labelWidth', type: 'number/string', description: '标签宽度' },
      { name: 'longLabel', type: 'boolean', description: '标签换行' },
      { name: 'label-col', type: 'object', description: '标签col布局' },
      { name: 'v-if', type: 'string', description: '条件渲染' },
    ]
  },
  {
    type: 'photo',
    label: '图片上传',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'photo', required: false },
      { name: 'label', type: 'string', defaultValue: '图片上传', required: false },
      { name: 'labelText', type: 'boolean', defaultValue: true, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-img' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'itemStyle', type: 'string', defaultValue: 'float: right;margin-right: 30px; height: 230px;width:205px', required: false },
      { name: 'imgStyle', type: 'string', defaultValue: 'width:192px;height: 162px;', required: false },
      { name: 'uploadUrl', type: 'string', defaultValue: 'http://127.0.0.1:10186/formcenter/demo/uploadFile', required: false },
      { name: 'imageUrl', type: 'string', defaultValue: '', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'desc', type: 'string', defaultValue: '点击此处，选择上传', required: false },
      { name: 'isView', type: 'boolean', defaultValue: false, required: false },
      { name: 'maxType', type: 'string', defaultValue: '1', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...baseProperties
    ]
  },
  {
    type: 'upload',
    label: '文件上传',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'upload', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-upload' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'label', type: 'string', defaultValue: '文件上传', required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'isAuto', type: 'boolean', defaultValue: true, required: false },
      { name: 'fileList', type: 'array', defaultValue: [], required: false },
      { name: 'uploadUrl', type: 'string', required: false },
      { name: 'delUrl', type: 'string', required: false },
      { name: 'host', type: 'string', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...baseProperties
    ]
  },
  {
    type: 'transfer',
    label: '穿梭框',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'transfer', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-transfer' },
      { name: 'span', type: 'number', defaultValue: 10, required: false },
      { name: 'label', type: 'string', defaultValue: '穿梭框', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'rowKey', type: 'string', defaultValue: 'id', required: false },
      { name: 'currentMode', type: 'string', defaultValue: 'normal', required: false },
      { name: 'dataType', type: 'string', defaultValue: 'static', required: false },
      { name: 'staticData', type: 'string', required: false },
      { name: 'bigTableProps', type: 'object', required: false },
      { name: 'treeProps', type: 'object', defaultValue: { checkable: true, defaultExpandAll: true, checkStrictly: true }, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...baseProperties,
      { name: 'required', type: 'boolean', description: '是否必填' },
      { name: 'disabled', type: 'boolean', description: '是否禁用' },
      { name: 'display', type: 'string', description: '是否展示' },
    ]
  },

  // 日期时间组件
  {
    type: 'year',
    label: '年',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'year', required: false },
      { name: 'label', type: 'string', defaultValue: '年', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-date-picker' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'allowClear', type: 'boolean', defaultValue: true, required: false },
      { name: 'validNowTime', type: 'string', defaultValue: '-1', required: false },
      { name: 'format', type: 'string', defaultValue: 'YYYY', required: false },
      { name: 'eventRunInNextTick', type: 'boolean', defaultValue: true, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      ...formControlProperties
    ]
  },
  {
    type: 'quarter',
    label: '季度',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'quarter', required: false },
      { name: 'label', type: 'string', defaultValue: '季度', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-date-picker' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'allowClear', type: 'boolean', defaultValue: true, required: false },
      { name: 'format', type: 'string', defaultValue: 'YYYY-第Q季度', required: false },
      { name: 'validNowTime', type: 'string', defaultValue: '-1', required: false },
      { name: 'eventRunInNextTick', type: 'boolean', defaultValue: true, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      ...formControlProperties
    ]
  },
  {
    type: 'month',
    label: '月',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'month', required: false },
      { name: 'label', type: 'string', defaultValue: '月', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-date-picker' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'allowClear', type: 'boolean', defaultValue: true, required: false },
      { name: 'format', type: 'string', defaultValue: 'YYYY-MM', required: false },
      { name: 'validNowTime', type: 'string', defaultValue: '-1', required: false },
      { name: 'eventRunInNextTick', type: 'boolean', defaultValue: true, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      ...formControlProperties
    ]
  },
  {
    type: 'week',
    label: '周',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'week', required: false },
      { name: 'label', type: 'string', defaultValue: '周', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-date-picker' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'allowClear', type: 'boolean', defaultValue: true, required: false },
      { name: 'format', type: 'string', defaultValue: 'YYYY-第ww周', required: false },
      { name: 'validNowTime', type: 'string', defaultValue: '-1', required: false },
      { name: 'eventRunInNextTick', type: 'boolean', defaultValue: true, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...formControlProperties
    ]
  },
  {
    type: 'date',
    label: '日期',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'date', required: false },
      { name: 'label', type: 'string', defaultValue: '日期', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-date-picker' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'allowClear', type: 'boolean', defaultValue: true, required: false },
      { name: 'format', type: 'string', defaultValue: 'YYYY-MM-DD', required: false },
      { name: 'showToday', type: 'boolean', defaultValue: true, required: false },
      { name: 'validNowTime', type: 'string', defaultValue: '-1', required: false },
      { name: 'eventRunInNextTick', type: 'boolean', defaultValue: true, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...formControlProperties
    ]
  },
  {
    type: 'time',
    label: '时间',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'time', required: false },
      { name: 'label', type: 'string', defaultValue: '时间', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-date-picker' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'allowClear', type: 'boolean', defaultValue: true, required: false },
      { name: 'format', type: 'string', defaultValue: 'HH:mm:ss', required: false },
      { name: 'validNowTime', type: 'string', defaultValue: '-1', required: false },
      { name: 'eventRunInNextTick', type: 'boolean', defaultValue: true, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...formControlProperties
    ]
  },
  {
    type: 'datetime',
    label: '日期时间',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'datetime', required: false },
      { name: 'label', type: 'string', defaultValue: '日期时间', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-date-picker' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'allowClear', type: 'boolean', defaultValue: true, required: false },
      { name: 'format', type: 'string', defaultValue: 'YYYY-MM-DD HH:mm:ss', required: false },
      { name: 'validNowTime', type: 'string', defaultValue: '-1', required: false },
      { name: 'eventRunInNextTick', type: 'boolean', defaultValue: true, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...formControlProperties
    ]
  },
  {
    type: 'daterange',
    label: '日期范围',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'daterange', required: false },
      { name: 'label', type: 'string', defaultValue: '日期范围', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-date-picker' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'allowClear', type: 'boolean', defaultValue: true, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'format', type: 'string', defaultValue: 'YYYY-MM-DD', required: false },
      { name: 'validNowTime', type: 'string', defaultValue: '-1', required: false },
      { name: 'eventRunInNextTick', type: 'boolean', defaultValue: true, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...formControlProperties
    ]
  },
  {
    type: 'datetimerange',
    label: '日期时间范围',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'datetimerange', required: false },
      { name: 'label', type: 'string', defaultValue: '日期时间范围', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-date-picker' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'allowClear', type: 'boolean', defaultValue: true, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'format', type: 'string', defaultValue: 'YYYY-MM-DD HH:mm:ss', required: false },
      { name: 'validNowTime', type: 'string', defaultValue: '-1', required: false },
      { name: 'eventRunInNextTick', type: 'boolean', defaultValue: true, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...formControlProperties
    ]
  },

  // 数据展示组件
  {
    type: 'richText',
    label: '富文本',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'richText', required: false },
      { name: 'label', type: 'string', defaultValue: '富文本', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-rich' },
      { name: 'span', type: 'number', defaultValue: 24, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'content', type: 'string', defaultValue: '富文本内容', required: false },
      ...baseProperties
    ]
  },
  {
    type: 'echarts',
    label: 'echarts图表',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'echarts', required: false },
      { name: 'echarsType', type: 'string', defaultValue: 'bar', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-char-bar' },
      { name: 'name', type: 'string', defaultValue: '名称', required: false },
      { name: 'span', type: 'number', defaultValue: 24, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'optionConfigType', type: 'string', defaultValue: 'grap', required: false },
      { name: 'optionJsCode', type: 'string', required: false },
      { name: 'showType', type: 'string', defaultValue: 'xAxis', required: false },
      { name: 'showData', type: 'string', required: false },
      { name: 'localData', type: 'string', required: false },
      { name: 'label', type: 'string', defaultValue: 'echarts图表', required: false },
      { name: 'seriesLabelPosition', type: 'string', defaultValue: 'outside', required: false },
      { name: 'loading', type: 'object', required: false },
      { name: 'title', type: 'object', defaultValue: { show: true, text: 'echarts示例' }, required: false },
      { name: 'dataType', type: 'string', defaultValue: 'static', required: false },
      { name: 'formParams', type: 'array', defaultValue: [] },
      { name: 'style', type: 'string', defaultValue: 'width: 100%;height:300px;', required: false },
      { name: 'colorConfigType', type: 'string', defaultValue: 'text', required: false },
      { name: 'legend', type: 'object', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      { name: 'tooltip', type: 'object', defaultValue: { show: true, formatter: '' }, required: false },
      { name: 'xAsis', type: 'object', defaultValue: { show: true }, required: false },
      { name: 'yAsis', type: 'object', defaultValue: { show: true }, required: false },
      { name: 'visualMap', type: 'object', defaultValue: {}, required: false },
      { name: 'toolbox', type: 'object', required: false },
      { name: 'echartsEventList', type: 'array', defaultValue: [], required: false },
      ...baseProperties
    ]
  },
  {
    type: 'dynamic',
    label: '表格',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'dynamic', required: false },
      { name: 'label', type: 'string', defaultValue: '表格', required: false },
      { name: 'formParams', type: 'array', defaultValue: [{ key: '', id: '' }], required: false },
      { name: 'operateMenu', type: 'array', defaultValue: [], required: false },
      { name: 'haveSn', type: 'boolean', defaultValue: true, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-table' },
      { name: 'span', type: 'number', defaultValue: 24, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'dataType', type: 'string', defaultValue: 'remote', required: false },
      { name: 'scroll', type: 'object', defaultValue: { x: '100%', y: 100 }, required: false },
      { name: 'children', type: 'object', required: false },
      { name: 'tools', type: 'object', defaultValue: { showClear: true }, required: false },
      ...baseProperties
    ]
  },
  {
    type: 'bigTable',
    label: '大表格',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'bigTable', required: false },
      { name: 'label', type: 'string', defaultValue: '大表格', required: false },
      { name: 'labelText', type: 'boolean', defaultValue: true, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-table' },
      { name: 'itemStyle', type: 'object', defaultValue: {}, required: false },
      { name: 'formParams', type: 'array', defaultValue: [{ key: '', id: '' }], required: false },
      { name: 'size', type: 'string', defaultValue: 'medium', required: false },
      { name: 'border', type: 'string', defaultValue: 'default', required: false },
      { name: 'height', type: 'string', defaultValue: '400px', required: false },
      { name: 'span', type: 'number', defaultValue: 24, required: false },
      { name: 'operateMenu', type: 'array', defaultValue: [], required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'dataType', type: 'string', defaultValue: 'remote', required: false },
      { name: 'inputSearchWidth', type: 'string', defaultValue: '256px', required: false },
      { name: 'inputSearchPlaceholder', type: 'string', defaultValue: '输入内容搜索', required: false },
      { name: 'inputSearchVarName', type: 'string', defaultValue: 'query', required: false },
      { name: 'queryFieldsVarName', type: 'string', defaultValue: 'queryFields', required: false },
      { name: 'rowSelectionTrigger', type: 'string', defaultValue: 'default', required: false },
      { name: 'data', type: 'array', defaultValue: [], required: false },
      { name: 'column', type: 'array', defaultValue: [{ display: 'true', title: '列1', field: 'column1', align: 'left', columnFilterProps: {}, headerAlign: 'left' }], required: false },
      { name: 'tools', type: 'object', defaultValue: { showClear: true }, required: false },
      { name: 'hasTopBar', type: 'boolean', defaultValue: false, required: false },
      ...baseProperties
    ]
  },
  {
    type: 'span',
    label: '文本',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'span', required: false },
      { name: 'label', type: 'string', defaultValue: '文本', required: false },
      { name: 'labelText', type: 'boolean', defaultValue: true, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-span' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      { name: 'text', type: 'string', defaultValue: '文本文本', required: false },
      ...baseProperties,
      { name: 'label', type: 'string', description: '标签' },
      { name: 'span', type: 'number', description: '栅格跨度' },
      { name: 'display', type: 'string', description: '是否展示' },
    ]
  },
  {
    type: 'p',
    label: '段落',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'p', required: false },
      { name: 'label', type: 'string', defaultValue: '段落', required: false },
      { name: 'labelText', type: 'boolean', defaultValue: true, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-p' },
      { name: 'span', type: 'number', defaultValue: 24, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      { name: 'children', type: 'object', defaultValue: { align: 'left', headerAlign: 'left', column: [] }, required: false },
      { name: 'pText', type: 'string', defaultValue: '这是一个p标签', required: false },
      ...baseProperties
    ]
  },
  {
    type: 'steps',
    label: '步骤条',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'steps', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-steps' },
      { name: 'span', type: 'number', defaultValue: 24, required: false },
      { name: 'label', type: 'string', defaultValue: '步骤条', required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'direction', type: 'string', defaultValue: 'horizontal', required: false },
      { name: 'current', type: 'number', defaultValue: 0, required: false },
      { name: 'size', type: 'string', defaultValue: 'default', required: false },
      { name: 'stepType', type: 'string', defaultValue: 'default', required: false },
      { name: 'staticData', type: 'string', required: false },
      { name: 'dataType', type: 'string', defaultValue: 'static', required: false },
      { name: 'titleField', type: 'string', defaultValue: 'title', required: false },
      { name: 'descriptionField', type: 'string', defaultValue: 'description', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...baseProperties
    ]
  },
  {
    type: 'timeline',
    label: '时间轴',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'timeline', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-timeline' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'label', type: 'string', defaultValue: '时间轴', required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'mode', type: 'string', defaultValue: 'left', required: false },
      { name: 'color', type: 'string', defaultValue: 'blue', required: false },
      { name: 'staticData', type: 'string', required: false },
      { name: 'dataType', type: 'string', defaultValue: 'static', required: false },
      { name: 'nameField', type: 'string', defaultValue: 'time', required: false },
      { name: 'style', type: 'string', defaultValue: 'padding: 8px 0;', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...baseProperties
    ]
  },
  {
    type: 'e-tree',
    label: '树形数据',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'e-tree', required: false },
      { name: 'label', type: 'string', defaultValue: '树形数据', required: false },
      { name: 'autoShow', type: 'boolean', defaultValue: false, required: false },
      { name: 'labelText', type: 'boolean', defaultValue: true, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-tree' },
      { name: 'title', type: 'string', defaultValue: '弹窗标题', required: false },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'height', type: 'number', defaultValue: 120, required: false },
      { name: 'itemStyle', type: 'string', defaultValue: 'height:160px', required: false },
      { name: 'dataType', type: 'string', defaultValue: 'static', required: false },
      { name: 'inputDisplay', type: 'boolean', defaultValue: true, required: false },
      { name: 'staticData', type: 'array', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...formControlProperties
    ]
  },
  {
    type: 'iframe',
    label: 'iframe',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'iframe', required: false },
      { name: 'span', type: 'number', defaultValue: 24, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-iframe' },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'label', type: 'string', defaultValue: 'iframe', required: false },
      { name: 'labelText', type: 'boolean', defaultValue: true, required: false },
      { name: 'src', type: 'string', defaultValue: '', required: false },
      { name: 'itemStyle', type: 'string', defaultValue: 'width:100%;height:400px', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...baseProperties,
      { name: 'label', type: 'string', description: '标签' },
      { name: 'span', type: 'number', description: '栅格跨度' },
      { name: 'display', type: 'string', description: '是否展示' },
      { name: 'fitHeight', type: 'string', description: '适应屏幕高度' },
    ]
  },
  {
    type: 'tree-modal',
    label: '弹窗树形数据',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'tree-modal', required: false },
      { name: 'label', type: 'string', defaultValue: '弹窗树形数据', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-tree' },
      { name: 'title', type: 'string', defaultValue: '弹窗标题', required: false },
      { name: 'span', type: 'number', defaultValue: 24, required: false },
      { name: 'width', type: 'number', defaultValue: 800, required: false },
      { name: 'height', type: 'number', defaultValue: 500, required: false },
      { name: 'display', type: 'boolean', defaultValue: false, required: false },
      { name: 'okText', type: 'string', defaultValue: '保存', required: false },
      { name: 'cancelText', type: 'string', defaultValue: '关闭', required: false },
      { name: 'okType', type: 'string', defaultValue: 'primary', required: false },
      { name: 'maskClosable', type: 'boolean', defaultValue: true, required: false },
      { name: 'keyboard', type: 'boolean', defaultValue: true, required: false },
      { name: 'destroyOnClose', type: 'boolean', defaultValue: true, required: false },
      { name: 'dataType', type: 'string', defaultValue: 'static', required: false },
      { name: 'allowClear', type: 'boolean', defaultValue: true, required: false },
      { name: 'inputDisplay', type: 'boolean', defaultValue: true, required: false },
      { name: 'staticData', type: 'array', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...baseProperties,
      { name: 'label', type: 'string', description: '标签' },
      { name: 'initialValue', type: 'string', description: '默认值' },
      { name: 'placeholder', type: 'string', description: '占位符' },
      { name: 'extra', type: 'string', description: '额外信息' },
      { name: 'css', type: 'string', description: 'CSS样式' },
      { name: 'required', type: 'boolean', description: '是否必填' },
      { name: 'disabled', type: 'boolean', description: '是否禁用' },
      { name: 'display', type: 'string', description: '是否展示' },
    ]
  },

  // 辅助组件
  {
    type: 'space',
    label: '占位',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'space', required: false },
      { name: 'span', type: 'number', defaultValue: 24, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-space' },
      { name: 'label', type: 'string', defaultValue: '占位', required: false },
      { name: 'labelText', type: 'boolean', defaultValue: true, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...baseProperties,
      { name: 'label', type: 'string', description: '标签' },
      { name: 'span', type: 'number', description: '栅格跨度' },
      { name: 'display', type: 'string', description: '是否展示' },
    ]
  },
  {
    type: 'divider',
    label: '换行',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'divider', required: false },
      { name: 'span', type: 'number', defaultValue: 24, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-divider' },
      { name: 'height', type: 'string', defaultValue: '60px', required: false },
      { name: 'label', type: 'string', defaultValue: '换行', required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'itemStyle', type: 'string', defaultValue: 'height:60px', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
    ]
  },
  {
    type: 'label-con',
    label: '标签容器',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'label-con', required: false },
      { name: 'label', type: 'string', defaultValue: '标签容器', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-labelcon' },
      { name: 'span', type: 'number', defaultValue: 4, required: false },
      { name: 'labelCol', type: 'object', defaultValue: { span: 24 }, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'colon', type: 'boolean', defaultValue: true, required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
    ]
  },
  {
    type: 'button',
    label: '按钮',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'button', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-button' },
      { name: 'span', type: 'number', defaultValue: 4, required: false },
      { name: 'label', type: 'string', defaultValue: '按钮', required: false },
      { name: 'slotName', type: 'string', defaultValue: '', required: false },
      { name: 'size', type: 'string', defaultValue: 'default', required: false },
      { name: 'buttonType', type: 'string', defaultValue: 'primary', required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...baseProperties,
      { name: 'label', type: 'string', description: '标签' },
      { name: 'span', type: 'number', description: '栅格跨度' },
      { name: 'display', type: 'string', description: '是否展示' },
      { name: 'disabled', type: 'boolean', description: '是否禁用' },
    ]
  },
  {
    type: 'button-label',
    label: '带label按钮',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'button-label', required: false },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-button' },
      { name: 'label', type: 'string', defaultValue: '带label按钮', required: false },
      { name: 'buttonLabel', type: 'string', defaultValue: '按钮', required: false },
      { name: 'slotName', type: 'string', defaultValue: '', required: false },
      { name: 'size', type: 'string', defaultValue: 'default', required: false },
      { name: 'buttonType', type: 'string', defaultValue: 'primary', required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...baseProperties,
      { name: 'label', type: 'string', description: '标签' },
      { name: 'span', type: 'number', description: '栅格跨度' },
      { name: 'display', type: 'string', description: '是否展示' },
      { name: 'disabled', type: 'boolean', description: '是否禁用' },
    ]
  },
  {
    type: 'button-group',
    label: '按钮组',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'button-group', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-button-group' },
      { name: 'span', type: 'number', defaultValue: 8, required: false },
      { name: 'label', type: 'string', defaultValue: '按钮组', required: false },
      { name: 'slotName', type: 'string', defaultValue: '', required: false },
      { name: 'dataType', type: 'string', defaultValue: 'static', required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'staticData', type: 'array', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...baseProperties
    ]
  },
  {
    type: 'report',
    label: 'report报表',
    properties: [
      { name: 'type', type: 'string', defaultValue: 'report', required: false },
      { name: 'icon', type: 'string', description: '图标', required: false, defaultValue: 'icon-report' },
      { name: 'span', type: 'number', defaultValue: 24, required: false },
      { name: 'display', type: 'string', defaultValue: 'true', required: false },
      { name: 'label', type: 'string', defaultValue: 'report报表', required: false },
      { name: 'labelText', type: 'boolean', defaultValue: true, required: false },
      { name: 'tdSelectSourceType', type: 'string', defaultValue: 'collection', required: false },
      { name: 'thead', type: 'object', required: false },
      { name: 'tbody', type: 'array', required: false },
      { name: 'tfooter', type: 'object', required: false },
      { name: 'tools', type: 'object', defaultValue: {}, required: false },
      ...baseProperties,
      { name: 'titleCss', type: 'string', description: '标题CSS样式' },
      { name: 'parent-col', type: 'object', description: '统一设置父组件下表单项的label-col和wrapper-col' },
      { name: 'v-if', type: 'string', description: '条件渲染' },
    ]
  }
];