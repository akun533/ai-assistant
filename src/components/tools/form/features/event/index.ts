export const description = `
## 核心功能

### 1. 事件类型

- **普通事件**: 组件支持的标准事件（如 \`click\`、\`change\`、\`blur\`）
- **钩子函数**: 生命周期事件（如 \`load\`、\`mounted\`、\`deleted\`）

### 2. 事件处理模式

- **flow**: 使用可视化流程，事件由行为节点和条件节点组成
- **function**: 使用 JavaScript 函数，必须以 \`$FNX:\` 前缀开头
- **global**: 引用全局事件，必须以 \`$GLOBAL:\` 前缀开头

## TypeScript 类型定义

ComputedConfig 使用 Computed 中的条件配置

\`\`\`typescript
// 组件事件，函数必须是字符串格式，且以 $FNX: 开头
type Event = {
    [eventName: string]: string
};
// 钩子函数，函数同样以 $FNX: 开头
type Hook = {
  load(evt: { rule: Rule, api: Api }): void;      // 表单规则加载时触发
  mounted(evt: { rule: Rule, api: Api }): void;   // 组件挂载后触发
  deleted(evt: { rule: Rule, api: Api }): void;   // 组件卸载时触发
  value(evt: { value: any, rule: Rule, api: Api }): void;  // 值变化
  hidden(evt: { value: boolean, rule: Rule, api: Api }): void; // 显隐变化
  watch(evt: { key: string, oldValue: any, newValue: any, rule: Rule, api: Api }): void; // 配置变化
};

// 行为流模式，事件对应行为节点数组
type Behavior = {
    // 事件名称: 行为节点数组
    [eventName: string]: Array<BehaviorNode | ConditionNode>  // 行为节点数组
};

// 行为节点方法类型
type BehaviorMethod = 
    // 页面操作
    | 'redirectPage' | 'reloadPage'
    // 弹窗操作
    | 'openModel' | 'closeModel' | 'message'
    // 表单操作
    | 'hidden' | 'disabled' | 'resetFields' | 'clearFields' | 'setValue' | 'validate' | 'validateFields' | 'submit'
    // 其他操作
    | 'fetch' | 'copy' | 'callback'
    // 流程控制节点（不在 behaviorTree 中，但在流程中使用）
    | 'condition' | 'conditionItem';

// 页面跳转类型
type RedirectPageType = 'location' | 'router';

// 消息类型
type MessageType = 'info' | 'warning' | 'success' | 'error';

// 计算方式
type ComputeMode = 'static' | 'formula';

// 页面跳转配置
interface RedirectPageConfig {
    type: RedirectPageType;
    break?: boolean;
    url: string;
}

// 页面刷新配置
interface ReloadPageConfig {
    // 无配置参数
}

// 打开弹窗配置
interface OpenModelConfig {
    model: string;  // 弹窗ID
}

// 关闭弹窗配置
interface CloseModelConfig {
}

// 消息提示配置
interface MessageConfig {
    type: MessageType;
    message: string;
}

// 隐藏字段配置
interface HiddenConfig {
    id: string | string[];
    compute: boolean;
    status?: boolean;  // 当 compute 为 false 时使用
    formula?: ComputedConfig;  // 当 compute 为 true 时使用
}

// 禁用字段配置
interface DisabledConfig {
    id: string | string[];
    compute: boolean;
    status?: boolean;  // 当 compute 为 false 时使用
    formula?: ComputedConfig;  // 当 compute 为 true 时使用
}

// 重置表单配置
interface ResetFieldsConfig {
}

// 清空字段配置
interface ClearFieldsConfig {
}

// 设置字段值配置
interface SetValueConfig {
    formData: Array<{
        id: string;
        compute: boolean;
        value?: any;  // 当 compute 为 false 时使用
        formula?: ComputedConfig;  // 当 compute 为 true 时使用
    }>;
}

// 验证表单配置
interface ValidateConfig {
}

// 验证字段配置
interface ValidateFieldsConfig {
    id: string[];
}

// 提交表单配置
interface SubmitConfig {
}

// 远程请求配置
interface FetchConfig {
    fetch: Fetch;  // FetchConfig 组件配置
    append?: boolean;
    response?: string;
}

// 复制文本配置
interface CopyConfig {
    compute: boolean;
    content?: string;  // 当 compute 为 false 时使用
    formula?:  ComputedConfig;  // 当 compute 为 true 时使用
}

// 自定义回调配置
interface CallbackConfig {
    callback: string;  // 回调函数, 必须 "[[FORM-CREATE-PREFIX-" 开头
}

interface ConditionNode {
  method: 'condition',
  children: Array<{
    method: 'conditionItem',
    config: ComputedConfig;
    children: Array<BehaviorNode | ConditionNode>
  }>
}

// 行为节点
interface BehaviorNode {
    method: BehaviorMethod;
    config?: 
        | RedirectPageConfig
        | ReloadPageConfig
        | OpenModelConfig
        | CloseModelConfig
        | MessageConfig
        | HiddenConfig
        | DisabledConfig
        | ResetFieldsConfig
        | ClearFieldsConfig
        | SetValueConfig
        | ValidateConfig
        | ValidateFieldsConfig
        | SubmitConfig
        | FetchConfig
        | CopyConfig
        | CallbackConfig
}

interface Api {
  // 表单的全局配置对象，包含了所有表单的配置信息
  readonly config: Options;
  readonly options: Options;
  // 获取当前表单在子表单(group)中的索引（如果表单是嵌套的子表单）
  readonly index: number|undefined;
  // 获取当前表单所在的子表单(group)中所有表单的API（如果表单是嵌套的子表单）
  readonly siblings: Api[]|undefined;
  // 当前表单的生成规则列表，定义了表单的结构和组件
  readonly rule: Rule[];
  // 当前表单的数据对象，其中包含了所有字段的值
  readonly form: Object;
  // 父级表单的 Api 对象（如果表单是嵌套的子表单）
  readonly parent: Api | undefined;
  // 最顶层表单的 Api 对象（适用于嵌套表单的场景）
  readonly top: Api | undefined;
  // 子表单的 Api 对象数组，允许对嵌套的子表单进行操作
  readonly children: Api[];
  // 提交按钮的控制接口，允许动态设置提交按钮的状态
  btn: {
    // 设置提交按钮的加载状态，如加载中状态
    loading(loading: boolean): void;
    // 设置提交按钮的禁用状态
    disabled(disabled: boolean): void;
    // 设置提交按钮的显示状态，控制按钮是否可见
    show(show: boolean): void;
  }
  // 重置按钮的控制接口，允许动态设置重置按钮的状态
  resetBtn: {
    // 设置重置按钮的加载状态
    loading(loading: boolean): void;
    // 设置重置按钮的禁用状态
    disabled(disabled: boolean): void;
    // 设置重置按钮的显示状态
    show(show: boolean): void;
  }
  // 打印当前表单
  print(): void;
  // 导出当前表单为 PDF
  exportPdf(): void;
  // 弹出提示消息
  message({message: string,type?: string}): void;
  // 获取指定组件的 DOM 元素或 Vue 实例
  el(id: string): any;
  // 获取整个表单的 Vue 组件实例，便于直接操作组件的内部方法或属性
  formEl(): undefined | ComponentInternalInstance;
  // 获取指定表单项的 Vue 组件实例，用于对具体表单项的操作
  wrapEl(id: string): undefined | ComponentInternalInstance;
  // 更新表单提交按钮的配置，如文本、样式等
  submitBtnProps(props: ButtonProps): void;
  // 更新表单重置按钮的配置
  resetBtnProps(props: ButtonProps): void;
  // 获取当前表单的数据对象，返回所有字段的值
  formData(): Object;
  // 获取特定字段的数据，返回指定字段的值
  formData(field: string[]): Object;
  // 获取指定字段的值
  getValue(field: string): any;
  // 用新的数据覆盖表单的当前值
  coverValue(formData: Object): void;
  // 设置表单的值，可以为整个表单设置，也可以为特定字段设置
  setValue(formData: Object): void;
  setValue(field: string, value: any): void;
  // 获取表单中所有字段的名称
  fields(): string[];
  // 隐藏或显示表单的指定组件(无 DOM 节点)
  hidden(hidden: Boolean): void;
  hidden(hidden: Boolean, field: string | Array<string>): void;
  // 控制表单组件的显示与否(有 DOM 节点)
  display(hidden: Boolean): void;
  display(hidden: Boolean, field: string | Array<string>): void;
  // 获取组件的隐藏状态，返回布尔值
  hiddenStatus(field: String): Boolean;
  // 获取组件的显示状态，返回布尔值
  displayStatus(field: String): Boolean;
  // 禁用或启用表单的指定组件
  disabled(disabled: Boolean): void;
  disabled(disabled: Boolean, field: string | Array<string>): void;
  // 获取所有表单组件的生成规则，返回一个对象，键为字段名，值为规则对象
  model(): { [field: string]: Rule };
  // 获取所有定义了 \`name\` 属性的组件规则，返回一个对象，键为组件名，值为规则对象
  component(): { [name: string]: Rule };
  // 更新表单的全局配置
  updateOptions(options: Options): void;
  // 监听表单提交事件，当表单被提交时执行回调
  onSubmit(fn: (formData: Object, api: Api) => void): void;
  // 手动提交表单，触发提交流程并执行成功或失败的回调
  submit(success?: (formData: Object, api: Api) => void, fail?: (api: Api) => void): Promise<any>;
  // 隐藏整个表单，通常用于表单不需要展示的场景
  hideForm(hide?: Boolean): void;
  // 获取表单的修改状态，返回布尔值
  changeStatus(): Boolean;
  // 重置表单的修改状态
  clearChangeStatus(): void;
  // 设置自定义属性，用于扩展表单功能
  setEffect(id: string, attr: string, value: any): void;
  // 清理自定义属性的数据
  clearEffectData(id: string, attr?: string): void;
  // 更新指定字段的表单生成规则
  updateRule(field: string, rule: Rule): void;
  updateRule(rules: { [field: string]: Rule }): void;
  // 合并指定字段的表单生成规则
  mergeRule(field: string, rule: Rule): void;
  mergeRules(rules: { [field: string]: Rule }): void;
  // 获取指定字段的生成规则
  getRule(id: string): Rule;
  //通过组件类型获取生成规则
  findType(type: string): Rule;
  findTypes(type: string): Array<Rule>;
  //如果当前表单是子表单, 可以通过这个方法获取子表单组件的规则
  getCurrentFormRule(): Rule;
  // 获取组件最终渲染的规则，包含动态变化后的内容
  getRenderRule(id: string): Rule;
  // 通过 \`name\` 属性获取组件规则，支持单个或多个组件
  getRefRule(id: string): Rule | Rule[];
  // 通过 \`name\`,\`field\`或者规则获取父级规则
  getParentRule(id: string | Rule): undefined | Rule;
  // 更新组件的验证规则，支持合并或替换
  updateValidate(id: string, validate: Object[], merge?: Boolean): Promise<any>;
  updateValidates(validates: { [id: string]: Object[] }, merge?: Boolean): Promise<any>;
  clearValidateState(fields?: string | string[], clearSub?: Boolean): void;
  // 清理指定字段子表单的表单的验证状态
  clearSubValidateState(fields?: string | string[]): void;
  // 验证表单，返回验证结果的 Promise
  validate(callback?: (state: any) => void): Promise<any>;
  // 验证指定字段，返回验证结果的 Promise
  validateField(field: string, callback?: (state: any) => void): Promise<any>;
  // 获取指定组件的方法，用于调用组件的自定义方法
  method(id: string, name: string): (...args: any[]) => any;
  // 手动执行指定组件的方法
  exec(id: string, name: string, ...args: any[]): any;
  // 手动触发组件的事件，适用于模拟用户操作或触发自定义逻辑
  trigger(id: string, event: string, ...args: any[]): void;
  // 获取表单的 JSON 生成规则，用于导出或保存表单结构
  toJson(space?: string | number): string;
  // 重置表单，将所有字段的值重置为初始状态
  resetFields(): void;
  resetFields(field: string | string[]): void;
  // 获取指定字段的子表单 Api 对象，支持嵌套表单的操作
  getSubForm(field: string): Api | Api[];
  // 发送远程请求，支持自定义的请求逻辑和处理方式
  fetch(opt: FetchOption): Promise<any>;
  // 设置外部数据，支持在表单中使用外部数据源
  setData(id: string, value?: any): void;
  // 获取外部数据，返回之前设置的数据对象
  getData(id: string, defaultValue?: any): any;
  // 在回调中通过get方法读取外部数据,获取对数据的变化监听,当数据变化后重新触发回调.返回解除监听函数
  watchData(fn: (get: (id: string, defaultValue?: any) => any, change: boolean) => void): () => Function;
  // 刷新与外部数据相关的组件，确保数据变更后 UI 同步更新
  refreshData(id: string): void;
  // 内置事件管理系统，支持手动触发和监听自定义事件
  bus: {
    $emit(event: string, ...args: any[]): void;  // 手动触发事件
    $on(event: string | string[], callback: Function): void;  // 监听事件
    $once(event: string | string[], callback: Function): void;  // 监听一次性事件
    $off(event: string | string[], callback: Function): void;  // 取消事件监听
  };
  // 手动触发表单的自定义事件
  emit(event: string, ...args: any[]): void;
  // 监听表单自定义事件
  on(event: string | string[], callback: Function): this;
  // 监听一次性表单自定义事件
  once(event: string | string[], callback: Function): this;
  // 取消表单自定义事件的监听
  off(event?: string | string[], callback?: Function): this;
}
\`\`\`

## 函数编辑器语法

因为 JSON 不支持函数，需要用字符串来表达

### 普通函数

\`[[FORM-CREATE-PREFIX-function(res, api) { api.message({message: '提交成功',type: 'success'}); }-FORM-CREATE-SUFFIX]]\`

等同于
\`\`\`javascript
function(res, api) {
  api.message({message: '提交成功',type: 'success'});
}
\`\`\`

### 上下文注入 ($inject), 仅在事件中使用

\`FNX:$inject.api.setValue('field1', 'new value');\`
等同于
\`\`\`javascript
// 基础注入参数
function($inject) {
  // $inject 包含以下属性：
  // - api \`Api\`: 表单API对象
  // - args \`Array\`: 事件原始参数
  
  // 设置字段值
  $inject.api.setValue('field1', 'new value');
}
\`\`\`

## 注意事项

1. 所有事件函数必须以 $FNX: 前缀开头
2. 全局事件必须以 $GLOBAL: 前缀开头
3. 函数必须使用多行缩进，统一为 2 空格，禁止单行写法
4. 需要加上错误处理，避免运行时异常
5. 注意数据安全（输入需校验）
6. 代码需保持可读性和一致风格
7. 字段引用: 只能使用 rule.name 或 rule.field 作为标识符
8. 禁止使用: rule._fc_id
`;

export default {
  name: 'event',
  label: '事件交互',
  info: '用于配置组件的各种事件处理逻辑，包括普通事件、钩子函数、行为流等。支持三种事件处理模式：流程模式、自定义函数模式和全局事件模式',
  description,
  templates: [
    {
      description: '输入框点击时显示成功消息',
      example: [
        {
          'type': 'input',
          'field': 'input',
          'title': '输入框',
          'on': {
            'click': "$FNX:$inject.api.message({message: '按钮被点击了',type: 'success'});",
          },
        },
      ],
    },
    {
      description: '根据用户类型控制折扣字段的显示',
      example: [
        {
          'type': 'select',
          'field': 'userType',
          'title': '用户类型',
          'options': [
            { 'label': '普通用户', 'value': 'normal' },
            { 'label': 'VIP用户', 'value': 'vip' },
          ],
          'on': {
            'change': "$FNX:const status = $inject.api.getValue('userType') !== 'vip'\nif(status) {\n\t$inject.api.hidden('discount', false);\n} else {\n\t$inject.api.hidden('discount', true);\n} ",
          },
        },
        {
          'type': 'inputNumber',
          'field': 'discount',
          'title': '折扣',
          'hidden': true,
        },
      ],
    },
    {
      description: '提交时先验证再发送请求',
      example: [
        {
          'type': 'input',
          'field': 'name',
          'title': '姓名',
          'validate': [
            { 'required': true, 'message': '请输入姓名' },
          ],
        },
        {
          'type': 'button',
          '$behavior': {
            'click': [
              {
                'method': 'validate',
                'config': {},
              },
              {
                'method': 'fetch',
                'config': {
                  'action': '/api/submit',
                  'method': 'POST',
                  'success': "[[FORM-CREATE-PREFIX-function(res, api) { this.api.message({message: '请求成功',type: 'success'}); }-FORM-CREATE-SUFFIX]]",
                  'error': "[[FORM-CREATE-PREFIX-function(err) { console.log('提交失败', 'error'); }-FORM-CREATE-SUFFIX]]",
                },
              },
            ],
          },
          'children': ['提交'],
        },
      ],
    },
    {
      description: '组件生命周期事件处理',
      example: [
        {
          'type': 'input',
          'field': 'dynamicField',
          'title': '动态字段',
          'hook': {
            'load': "$FNX:console.log('组件加载完成');",
            'mounted': "$FNX:$inject.api.setValue('loaded', true);",
            'watch': "$FNX:console.log('值发生变化');",
          },
        },
      ],
    },
    {
      description: '根据年龄条件执行不同操作',
      example: [
        {
          'type': 'inputNumber',
          'field': 'age',
          'title': '年龄',
        },
        {
          'type': 'button',
          '$behavior': {
            'click': [
              {
                'method': 'condition',
                'children': [
                  {
                    'method': 'conditionItem',
                    'config': {
                      'mode': 'AND',
                      'group': [
                        {
                          'field': 'age',
                          'condition': '>=',
                          'value': 18,
                        },
                      ],
                    },
                    'children': [
                      {
                        'method': 'message',
                        'config': {
                          'message': '成年人可以提交',
                          'type': 'success',
                        },
                      },
                      {
                        'method': 'submit',
                        'config': {},
                      },
                    ],
                  },
                  {
                    'method': 'conditionItem',
                    'config': {
                      'mode': 'AND',
                      'group': [
                        {
                          'field': 'age',
                          'condition': '<',
                          'value': 18,
                        },
                      ],
                    },
                    'children': [
                      {
                        'method': 'message',
                        'config': {
                          'message': '未成年人不能提交',
                          'type': 'error',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          'children': ['检查年龄'],
        },
      ],
    },
    {
      description: '点击按钮跳转到指定页面',
      example: [
        {
          'type': 'button',
          '$behavior': {
            'click': [
              {
                'method': 'redirectPage',
                'config': {
                  'type': 'location',
                  'break': false,
                  'url': '/target-page',
                },
              },
            ],
          },
          'children': ['跳转页面'],
        },
      ],
    },
    {
      description: '打开和关闭弹窗',
      example: [
        {
          'type': 'button',
          '$behavior': {
            'click': [
              {
                'method': 'openModel',
                'config': {
                  'id': 'modalId',
                },
              },
            ],
          },
          'children': ['打开弹窗'],
        },
        {
          'type': 'button',
          '$behavior': {
            'click': [
              {
                'method': 'closeModel',
                'config': {
                  'id': 'modalId',
                },
              },
            ],
          },
          'children': ['关闭弹窗'],
        },
      ],
    },
    {
      description: '批量操作表单字段',
      example: [
        {
          'type': 'input',
          'field': 'field1',
          'title': '字段1',
        },
        {
          'type': 'input',
          'field': 'field2',
          'title': '字段2',
        },
        {
          'type': 'button',
          '$behavior': {
            'click': [
              {
                'method': 'resetFields',
                'config': {
                  'id': ['field1', 'field2'],
                },
              },
            ],
            children: ['重置字段'],
          },
        },
      ],
    },
    {
      description: '发送HTTP请求并处理响应',
      example: [
        {
          'type': 'input',
          'field': 'searchKeyword',
          'title': '搜索关键词',
        },
        {
          'type': 'button',
          '$behavior': {
            'click': [
              {
                'method': 'fetch',
                'config': {
                  'action': '/api/search',
                  'method': 'POST',
                  'data': {
                    'keyword': '{{$form.searchKeyword}}',
                  },
                  'success': "[[FORM-CREATE-PREFIX-function(res) { console.log('搜索结果:', res); }-FORM-CREATE-SUFFIX]]",
                  'error': "[[FORM-CREATE-PREFIX-function(err) { console.error('搜索失败:', err); }-FORM-CREATE-SUFFIX]]",
                },
              },
            ],
          },
          children: ['搜索'],
        },
      ],
    },
    {
      description: '引用预定义的全局事件',
      example: [
        {
          'type': 'button',
          'on': {
            'click': '$GLOBAL:globalClickHandler',
          },
          children: ['全局事件'],
        },
      ],
    },
  ],
};
