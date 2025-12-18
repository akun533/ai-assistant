interface ComponentEvent {
  name: string;
  args: string[];
  functionBody: string;
  description: string;
}

const events: ComponentEvent[] = [
  {
    name: 'getObj',
    args: ['id'],
    functionBody: 'const obj = this_.getObj(id);\nconsole.log("Component object:", obj);\nreturn obj;',
    description: '选择需要获取目标对象的组件(id)',
  },
  {
    name: 'showObj',
    args: ['id'],
    functionBody: 'this_.showObj(id);\nconsole.log("Component shown:", id);',
    description: '请选择需要展示的组件(id1,id2,id3)',
  },
  {
    name: 'hideObj',
    args: ['id'],
    functionBody: 'this_.hideObj(id);\nconsole.log("Component hidden:", id);',
    description: '请选择需要隐藏的组件(id1,id2,id3)',
  },
  {
    name: 'updateComp',
    args: ['id'],
    functionBody: 'this_.updateComp(id);\nconsole.log("Component updated:", id);',
    description: '选择需要刷新的组件(id)',
  },
  {
    name: 'getInsertRecords',
    args: ['tableId'],
    functionBody: '// 获取表格对象\nlet tableObj = this_.getObj(tableId).getTable();\ntableObj.insert({});\n// 激活新增行\ntableObj.setActiveRow(tableObj.getInsertRecords()[0]);\nconsole.log("New row added to table:", tableId);',
    description: '请选择需要新增表格行数据的大表格组件(id)',
  },
  {
    name: 'setTableData',
    args: ['tableId', 'value'],
    functionBody: 'this_.setTableData(tableId, value);\nconsole.log("Table data set for:", tableId, "with value:", value);',
    description: '该方法有两个参数，id: 选择表格组件(id)，value:设置的值【Array】或者变量名',
  },
  {
    name: 'setNotRequired',
    args: ['id'],
    functionBody: 'this_.setNotRequired(id);\nconsole.log("Component(s) set as not required:", id);',
    description: '请选择需要设置非必填的组件(id1,id2,id3)',
  },
  {
    name: 'setRequired',
    args: ['id'],
    functionBody: 'this_.setRequired(id);\nconsole.log("Component(s) set as required:", id);',
    description: '请选择需要设置必填的组件(id1,id2,id3)',
  },
  {
    name: 'setValue',
    args: ['id', 'value'],
    functionBody: 'this_.setValue(id, value);\nconsole.log("Value set for component:", id, "with value:", value);',
    description: '该方法有两个参数，id: 选择组件(id)，value: 组件对应的值',
  },
  {
    name: 'setValues',
    args: ['id', 'value'],
    functionBody: 'this_.setValues(id, value);\nconsole.log("Values set for components:", id, "with values:", value);',
    description: '该方法参数value值为多个时将根据id顺序进行对应，传入方法时为{id: value}对象',
  },
  {
    name: 'setParam',
    args: ['key', 'value'],
    functionBody: 'this_.setParam(key, value);\nconsole.log("Parameter set - key:", key, "value:", value);',
    description: '该方法有两个参数，key:字段变量,value:字段值。例如：\'name\', \'333\'，如果值是变量的话：\'name\',nameStr 。',
  },
  {
    name: 'setParams',
    args: ['obj'],
    functionBody: 'this_.setParams(obj);\nconsole.log("Parameters set:", obj);',
    description: '该方法的参数类型为对象，例如：{key: val}',
  },
  {
    name: 'changeStepsCurrent',
    args: ['id', 'obj'],
    functionBody: 'this_.changeStepsCurrent(id, obj);\nconsole.log("Step changed for:", id, "with data:", obj);',
    description: '该方法有两个参数，id:组件id,obj:{current: 当前步骤, status: 当前步骤状态}。例如：\'id1\', {\'current\':2, \'status\':\'process\'}',
  },
  {
    name: 'setModalSaveHide',
    args: ['id', 'flag'],
    functionBody: 'this_.setModalSaveHide(id, flag);\nconsole.log("Modal save button visibility set for:", id, "hidden:", flag);',
    description: '该方法有两个参数，id: 选择组件(id)，flag(boolean类型):确认按钮是否隐藏',
  },
  {
    name: 'resetInputGroupValue',
    args: ['inputGroupId'],
    functionBody: 'this_.resetInputGroupValue(inputGroupId);\nconsole.log("Input group value reset for:", inputGroupId);',
    description: '请选择需要重置值的组合输入框组件(id1,id2,id3)',
  },
  {
    name: 'handleReset',
    args: [],
    functionBody: 'this_.handleReset();\nconsole.log("Form reset");',
    description: '该方法无参数，直接调用即可',
  },
  {
    name: 'resetFields',
    args: ['partId'],
    functionBody: 'this_.resetFields(partId);\nconsole.log("Fields reset:", partId);',
    description: '请选择需要重置值的表单项([\'id1\',\'id2\',\'id3\'])',
  },
  {
    name: 'setReadonly',
    args: ['id'],
    functionBody: 'this_.setReadonly(id);\nconsole.log("Component(s) set as readonly:", id);',
    description: '请选择需要设置只读的组件(id1,id2,id3)',
  },
  {
    name: 'setAllDisable',
    args: ['flag'],
    functionBody: 'this_.setAllDisable(flag);\nconsole.log("All components disable state set to:", flag);',
    description: '该方法参数为flag，是boolean类型，值为【true】实现组件禁用，值为【false】，全部组件可用。注意：设置参数值为【true】，会禁用页面上全部有禁用属性的组件。',
  },
  {
    name: 'setDisable',
    args: ['id'],
    functionBody: 'this_.setDisable(id);\nconsole.log("Component(s) disabled:", id);',
    description: '该方法的参数为id组成的字符串，例如：id1,id2（设置按钮组中按钮禁用时,id为`按钮组组件id_当前按钮顺序数`）',
  },
  {
    name: 'setEnable',
    args: ['id'],
    functionBody: 'this_.setEnable(id);\nconsole.log("Component(s) enabled:", id);',
    description: '该方法的参数为id组成的字符串，例如：id1,id2（设置按钮组中按钮可用时,id为`按钮组组件id_当前按钮顺序数`）',
  },
  {
    name: 'changeActiveKey',
    args: ['tabId', 'key'],
    functionBody: 'this_.changeActiveKey(tabId, key);\nconsole.log("Tab active key changed for:", tabId, "to:", key);',
    description: '该方法有两个参数，id:组件id,key:标签页的key值',
  },
  {
    name: 'getParam',
    args: ['key'],
    functionBody: 'const value = this_.getParam(key);\nconsole.log("Parameter value for", key, "is:", value);\nreturn value;',
    description: '该方法参数为变量的key值',
  },
  {
    name: 'getValues',
    args: [],
    functionBody: 'const values = this_.getValues();\nconsole.log("All form values:", values);\nreturn values;',
    description: '该方法无参数，直接调用即可',
  },
  {
    name: 'getValue',
    args: ['id'],
    functionBody: 'const value = this_.getValue(id);\nconsole.log("Value for component", id, "is:", value);\nreturn value;',
    description: '选择需要获取值的组件(id)',
  },
  {
    name: 'getValuesWithValid',
    args: [],
    functionBody: 'const validValues = this_.getValuesWithValid();\nconsole.log("Valid form values:", validValues);\nreturn validValues;',
    description: '该方法无参数，直接调用即可',
  },
  {
    name: 'fnGetUrlParam',
    args: ['paramName'],
    functionBody: 'const paramValue = this_.fnGetUrlParam(paramName);\nconsole.log("URL parameter", paramName, "value:", paramValue);\nreturn paramValue;',
    description: '该方法参数为url的参数名，如：taskId',
  },
  {
    name: 'refreshRpcAfter',
    args: ['id'],
    functionBody: 'this_.refreshRpcAfter(id);\nconsole.log("RPC component refreshed:", id);',
    description: '该方法的参数为rpc组件id组成的字符串，例如：\'id1,id2\'}',
  },
  {
    name: 'emitMethod',
    args: ['methodName', 'args'],
    functionBody: 'this_.emitMethod(methodName, ...args);\nconsole.log("Method emitted:", methodName, "with args:", args);',
    description: '该方法有多个参数，methodName:外层函数名称,arg1,arg2...:参数。例如：\'sendParam\', 123,\'aaa\'',
  },
  {
    name: 'setAutoShow',
    args: ['id', 'flag'],
    functionBody: 'this_.setAutoShow(id, flag);\nconsole.log("Auto show set for:", id, "flag:", flag);',
    description: '该方法有两个参数，id:组件id,多个用逗号分隔, flag(boolean类型):是否让自动显示隐藏生效',
  },
  {
    name: 'loadAutoShow',
    args: ['isV'],
    functionBody: 'this_.loadAutoShow(isV);\nconsole.log("Auto show loaded with flag:", isV);',
    description: '该方法有一个可选参数，isV(boolean类型):是否让自动显示隐藏生效,默认为true。例如：false',
  },
  {
    name: 'cloneObj',
    args: ['id'],
    functionBody: 'const clonedObj = this_.cloneObj(id);\nconsole.log("Component cloned:", id, "cloned object:", clonedObj);\nreturn clonedObj;',
    description: '传入需要复制的组件id值，在该组件后方复制一个相同的组件',
  },
  {
    name: 'getFieldsId',
    args: ['containerId'],
    functionBody: 'const fieldsIds = this_.getFieldsId(containerId);\nconsole.log("Fields IDs in container", containerId, ":", fieldsIds);\nreturn fieldsIds;',
    description: '获取所有组件ID，该方法有一个可选参数，containerId:容器类型组件ID，传入容器类型组件可以获取该容器内部所有组件ID。目前仅限于表单，抽屉，弹窗，DIV容器，动态表单，标签页，Border布局',
  },
  {
    name: 'getCardAddData',
    args: ['cardAddId'],
    functionBody: 'const cardData = this_.getCardAddData(cardAddId);\nconsole.log("Card add data for", cardAddId, ":", cardData);\nreturn cardData;',
    description: '选择需要获取表单值的动态表单组件(id)',
  }
]
