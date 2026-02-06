## 核心功能

表单规则支持两种主要的函数类型：

### 1. 组件事件函数
根据组件类型不同,函数定义的位置和方式也不同：
- **顶层组件 (type: `form-container`)**:
    - **`functions`**: 字符串类型。用于定义表单的全局方法。所有定义的方法**必须**挂载到 `this_` 对象上。
    - **`initMethod`**: 字符串类型。页面初始化时执行的方法,可用于初始数据加载等。
- **其他组件 (如 `single-input`, `select` 等)**:
    - **`eventList`**: 数组类型。定义组件的标准事件（如 `click`, `change` 等）。格式固定为 `[{"eventType": "", "methodType":"1", "textarea":""}]`。函数代码写在 `textarea` 字段中。

### 2. 全局工具函数
在 `eventList` 的 `textarea` 或 `initMethod`、`functions` 中,可以通过 `this_` 对象调用以下预定义的全局函数来访问和操作表单数据：
- `this_.getValue(id)`：获取指定字段的值。
- `this_.getObj(id)`：获取指定字段的组件对象。
- `this_.setValue(id, value)`：设置指定字段的值。

## 类型与格式定义

### 顶层组件 (`form-container`) 配置
```typescript
interface FormContainerConfig {
    // ... 其他配置项
    // 【关键】自定义全局方法。字符串格式,其代码执行环境会提供 `this_` 对象。
    functions?: string;
    // 【关键】页面初始化方法。字符串格式,在表单渲染时执行。
    initMethod?: string;
}
```

### 通用组件事件列表 (`eventList`)
```typescript
// 事件列表项的标准格式
interface EventListItem {
    // 事件类型,如 'click', 'change', 'blur' 等,具体取决于组件支持的事件
    eventType: string;
    // 方法类型,固定为字符串 "1"
    methodType: "1";
    // 【关键】函数执行代码。必须是包含有效 JavaScript 代码的字符串。
    textarea: string;
}

// 在组件规则中
interface ComponentRule {
    type: string; // 如 'single-input', 'select'
    // ... 其他配置项
    // 组件的事件绑定列表
    eventList?: EventListItem[];
}
```

### 函数代码格式规范
函数体必须写在 `textarea`、`functions` 或 `initMethod` 字段的字符串值中。

1.  **`functions` 字段 (定义全局方法)**:
    ```javascript
    // 正确示例：将方法挂载到 this_ 上
    this_.myGlobalFunc = function(arg1) {
      console.log('全局函数被调用:', arg1);
      return '处理结果';
    };
    this_.fetchOptions = function() {
      // 这里可以写获取下拉选项的异步逻辑
    };
    ```

2.  **`initMethod` 字段 (初始化执行)**:
    ```javascript
    // 正确示例：调用自定义的全局方法
    console.log('表单开始初始化');
    // 调用定义在 functions 中的全局方法
    if (this_.fetchOptions) {
      this_.fetchOptions();
    }
    // 使用工具函数设置初始值
    this_.setValue('status', 'draft');
    ```

3.  **`eventList[n].textarea` 字段 (事件处理)**:
    ```javascript
    // 正确示例：使用 this_ 调用工具函数
    // ------事件处理函数开始------
    try {
      const currentValue = this_.getValue('patientName');
      console.log('当前值：', currentValue);
      if (!currentValue) {
        this_.setValue('department', null);
      }
    } catch (error) {
      console.error('处理事件时出错：', error);
    }
    // ------事件处理函数结束------
    ```
    **注意**：建议始终用 `// ------事件处理函数开始------` 和 `// ------事件处理函数结束------` 包裹代码体,保持清晰。

## 全局工具函数 API 详述
在函数执行上下文中,`this_` 对象提供以下方法：

| 函数 | 参数 | 返回值 | 说明 |
| :--- | :--- | :--- | :--- |
| `getValue(id)` | `id: string` - 目标组件的 `fieldDecoratorId` | `any` - 该字段的当前值 | 获取指定表单字段的值。 |
| `getObj(id)` | `id: string` - 目标组件的 `fieldDecoratorId` | `Object` - 该字段的组件对象 | 获取指定字段的组件对象,可能包含更多内部属性和方法。 |
| `setValue(id, value)` | `id: string` - 目标组件的 `fieldDecoratorId` <br> `value: any` - 要设置的值 | `undefined` | 设置指定表单字段的值。会触发相应的视图更新。 |
| `showObj(id)` | `id: string` - 目标组件的 `fieldDecoratorId` | `undefined` | 使指定组件显示。 |
| `hideObj(id)` | `id: string` - 目标组件的 `fieldDecoratorId` | `undefined` | 使指定组件隐藏。 |
| `updateComp(id)` | `id: string` - 目标组件的 `fieldDecoratorId` | `undefined` | 刷新指定组件。 |
| `setTableData(tableId, value)` | `tableId: string` - 表格组件的 `fieldDecoratorId` <br> `value: Array` - 要设置的表格数据 | `undefined` | 设置表格组件的数据。 |
| `setNotRequired(id)` | `id: string` - 目标组件的 `fieldDecoratorId` | `undefined` | 设置指定表单项为非必填。 |
| `setRequired(id)` | `id: string` - 目标组件的 `fieldDecoratorId` | `undefined` | 设置指定表单项为必填。 |
| `setValues(id, value)` | `id: Array<string>` - 组件ID数组 <br> `value: Object` - 包含ID和值的对象 | `undefined` | 设置多个表单项的值。 |
| `setParam(key, value)` | `key: string` - 变量名 <br> `value: any` - 变量值 | `undefined` | 设置页面某个变量。 |
| `setParams(obj)` | `obj: Object` - 包含多个键值对的对象 | `undefined` | 批量设置页面变量。 |
| `changeStepsCurrent(id, obj)` | `id: string` - 步骤条组件ID <br> `obj: Object` - 包含current和status的对象 | `undefined` | 设置步骤条当前步骤信息。 |
| `setModalSaveHide(id, flag)` | `id: string` - 组件ID <br> `flag: boolean` - 确认按钮是否隐藏 | `undefined` | 设置弹窗确认按钮是否隐藏。 |
| `resetInputGroupValue(id)` | `id: string` - 组合输入框组件ID | `undefined` | 重置组合输入框的值。 |
| `handleReset()` | 无参数 | `undefined` | 重置表单。 |
| `resetFields(id)` | `id: Array<string>` - 表单项ID数组 | `undefined` | 重置部分表单项的值。 |
| `setReadonly(id)` | `id: string` - 组件ID | `undefined` | 设置组件只读。 |
| `setAllDisable(flag)` | `flag: boolean` - 是否禁用所有组件 | `undefined` | 设置所有组件是否禁用。 |
| `setDisable(id)` | `id: string` - 组件ID | `undefined` | 设置组件禁用。 |
| `setEnable(id)` | `id: string` - 组件ID | `undefined` | 设置组件可用。 |
| `changeActiveKey(tabId, key)` | `tabId: string` - tabs组件ID <br> `key: string` - 标签页的key值 | `undefined` | 切换tabs组件选中tab页。 |
| `getParam(key)` | `key: string` - 变量名 | `any` - 该变量的值 | 获取页面某个变量。 |
| `getValues()` | 无参数 | `Object` - 包含所有表单字段值的对象 | 获取全部表单项值。 |
| `getValuesWithValid()` | 无参数 | `Object` - 包含验证通过的表单字段值的对象 | 获取验证通过的表单值。 |
| `fnGetUrlParam(paramName)` | `paramName: string` - URL参数名 | `string` - URL参数值 | 获取地址栏的参数值。 |
| `refreshRpcAfter(id)` | `id: string` - RPC组件ID | `undefined` | RPC组件回填刷新。 |
| `emitMethod(methodName, ...args)` | `methodName: string` - 外层函数名称 <br> `...args: any` - 参数列表 | `undefined` | 调用外层函数($bus/$emit)。 |
| `setAutoShow(id, flag)` | `id: string` - 组件ID <br> `flag: boolean` - 是否让自动显示隐藏生效 | `undefined` | 设置组件是否自动显示隐藏。 |
| `loadAutoShow(isV)` | `isV: boolean` - 是否让自动显示隐藏生效 | `undefined` | 刷新组件，使组件的自动显示隐藏功能生效。 |
| `cloneObj(id)` | `id: string` - 组件ID | `undefined` | 复制组件，在目标组件后方插入。 |
| `getFieldsId(containerId)` | `containerId: string` - 容器组件ID | `Array<string>` - 组件ID数组 | 批量获取组件ID。 |
| `getCardAddData(cardAddId)` | `cardAddId: string` - 动态表单组件ID | `any` - 动态表单值 | 获取动态表单值。 |
| `handleAllAfterGetValue(formValues)` | `formValues: Object` - 表单值对象 | `Object` - 处理后的表单值对象 | 业务组件块afterGetValue执行。 |
| `handleAllBeforeSetValue(formValues)` | `formValues: Object` - 表单值对象 | `Object` - 处理后的表单值对象 | 业务组件块beforeSetValue执行。 |
| `handleAllMountedBlock()` | 无参数 | `undefined` | 业务组件块请求回调执行。 |

## 注意事项（关键约束）

1.  **`this_` 对象是唯一入口**：在 `functions`、`initMethod`、`eventList[].textarea` 的所有代码中,**禁止直接访问 `this`**。访问表单数据和模型**必须**通过 `this_.getValue()`、`this_.setValue()` 等提供的全局函数。
2.  **全局方法挂载**：在 `form-container` 的 `functions` 字段中定义的任何希望全局可用的方法,**必须**以 `this_.methodName = function() { ... }` 的形式挂载到 `this_` 对象上。
3.  **字段标识符**：所有 `getValue`、`setValue`、`getObj` 调用中的 `id` 参数,**必须且只能**使用组件规则中定义的 `fieldDecoratorId`。
4.  **代码格式**：
    - 函数代码字符串应使用多行格式,保持缩进（建议2空格）。
    - 在 `textarea` 中,推荐使用 `// ------...------` 注释块明确标出函数体边界。
    - 避免单行压缩写法,确保代码可读性。
5.  **错误处理**：在事件处理函数中,应考虑使用 `try...catch` 包裹核心逻辑,避免未捕获的异常导致整个表单交互中断。
6.  **`eventList` 格式固定**：`eventList` 必须是包含 `eventType`、`methodType`（值为`"1"`）、`textarea` 这三个键的**对象数组**。AI生成时需确保结构正确。
7.  **执行顺序**：`form-container` 的 `functions` 中代码会先于 `initMethod` 执行,以确保 `initMethod` 可以调用到定义好的全局方法。

## 示例回顾（来自你的规则）

1.  **顶层 `functions` 定义全局方法**：
    ```
    "functions": "this_.getMsg = function (msg) { return \"我获取到了消息：\" + msg }"
    ```

2.  **顶层 `initMethod` 调用全局方法**：
    ```
    "initMethod": "console.log(this_.getMsg('错误'))"
    ```

3.  **组件 `eventList` 中的事件处理**：
    ```
    "eventList": [
      {
        "eventType": "change",
        "methodType": "1",
        "textarea": "\r\n// ------设置单个表单项值-函数开始------\r\n this_.setValue('department',undefined)\r\n// ------设置单个表单项值-函数结束------\r\n"
      }
    ]
    ```
