
## 核心功能

### 1. 事件类型

- **自定义事件**: 
  - initMethod, functions 等部分组件属性中有特殊说明的事件;
  - 主动触发: 自定义事件，页面初始化时触发的事件。
  - 定义为字符串

- **基础事件**: 
  - click, change, blur 等定义在组件的 `events` 属性中定义的事件;
  - 直接绑定在组件固定属性eventList中，每个组件绑定方式一致;
  - 被动触发: 操作组件时触发的事件，比如点击时触动的click，输入时触动的change。


### 2. 组件绑定函数定义

```typescript
// 基础事件定义
interface Event {
  eventType: string; // 事件类型, 如 click、change、blur
  methodType: string; // 方法类型, 默认为 '1',
  textarea: string; // 方法内容，函数体
}

// 基础事件绑定
interface ComponentInfo {
  // ...其他组件定义
  eventList: Array<Event>;
}


```

- 基础绑定示例(eventList)，输入姓名时触发点击和值变化事件
```json
{
  "type": "single-input",
  "label": "输入姓名",
  "span": 12,
  "display": "true",
  "autoShow": false,
  "tools": {},
  "fieldDecoratorId": "D2QP698P",
  "renderId": "3QOUQ838M3T2",
  "labelStyle": "{}",
  "events": {},
  "eventList": [
      {
        "eventType": "click",
        "methodType": "1",
        "textarea": "console.log('点击了姓名输入框')"
      },
      {
        "eventType": "change",
        "methodType": "1",
        "textarea": "console.log('输入了姓名', value.target.value)"
      }
    ]
}
```

- 自定义函数示例(initMethod, functions)：
```json
{
  "type": "form-container",
  "formConfig": {
    "layout": "horizontal",
    "layoutCol": "auto",
    "labelCol": 6,
    "wrapperCol": 18,
    "header": "0px",
    "footer": "0px",
    "left": "0px",
    "right": "0px",
    "gutter": 0,
    "previewDrawerWidth": "95%",
    "previewDrawerMinWidth": "",
    "showButton": true,
    "buttons": [],
    "backgroundColor": "white",
    "initMethod": "console.log('页面初始化中......')",
    "functions": "this_.getObj('D2QP698P')",
    "isLabelWidth": true,
    "labelWidth": 120
  },
  "formColumns": [
    {
      "type": "single-input",
      "label": "输入姓名",
      "span": 12,
      "display": "true",
      "autoShow": false,
      "tools": {},
      "fieldDecoratorId": "D2QP698P",
      "renderId": "3QOUQ838M3T2",
      "labelStyle": "{}",
      "events": {},
      "eventList": [
        {
          "eventType": "click",
          "methodType": "1",
          "textarea": "console.log('点击了姓名输入框')"
        },
        {
          "eventType": "change",
          "methodType": "1",
          "textarea": "console.log('输入了姓名', value.target.value)"
        }
      ]
    }
  ],
  "formHeader": [],
  "formLeft": [],
  "formRight": [],
  "formFooter": [],
  "version": {
    "updateTime": 1766032168538
  }
}
```

## 注意事项

- 定义全局函数：必须挂载到 `this_` 对象中, 如 `this_.getMessage = () => { return '获取消息成功'}`;
- 调用全局函数：调用全局函数必须使用 `this_.` 开头。比如 `this_.getObj('AD3SQ2J8')`，未定义的不能直接使用;
- 函数必须使用多行缩进，统一为 2 空格，禁止单行写法
- 需要加上错误处理，避免运行时异常
- 注意数据安全（输入需校验）
- 代码需保持可读性和一致风格


## 示例
### 示例 1：

当我选择性别为男时，显示俯卧撑数量，否则显示仰卧起坐数量：

```json
{"type":"form-container","formConfig":{"layout":"horizontal","layoutCol":"auto","labelCol":6,"wrapperCol":18,"header":"0px","footer":"0px","left":"0px","right":"0px","gutter":0,"previewDrawerWidth":"95%","previewDrawerMinWidth":"","showButton":true,"buttons":[],"backgroundColor":"white","isLabelWidth":true,"labelWidth":120,"initMethod":"","functions":""},"formColumns":[{"type":"card","label":"体能测试记录","span":24,"display":"true","formCardStyleFit":false,"formCardStyle":{"height":"auto"},"children":{"align":"left","headerAlign":"left","addBtn":false,"delBtn":false,"column":[{"type":"radio","label":"性别","span":8,"display":"true","autoShow":false,"icon":"icon-radio","dataType":"static","allowDataMapping":true,"collectionType":"","collectionFilter":"","radioButton":false,"buttonStyle":false,"radioStyle":"","reverseFilter":false,"tools":{},"staticData":[{"label":"男","value":"male"},{"label":"女","value":"female"}],"fieldDecoratorId":"gender","renderId":"gender_render","labelStyle":"{}","disabled":false,"required":true,"events":{},"eventList":[{"eventType":"change","methodType":"1","textarea":"if(e.target.value === 'male') {\n  \n this_.showObj('pushupCount')\n   this_.hideObj('situpCount')\n  \n} else {\n   this_.showObj('situpCount')\n   this_.hideObj('pushupCount')\n}\n"}]},{"type":"number","label":"俯卧撑数量","span":8,"display":"true","autoShow":false,"icon":"icon-number","decimalSeparator":".","tools":{},"fieldDecoratorId":"pushupCount","renderId":"pushupCount_render","labelStyle":"{}","disabled":false,"required":true,"placeholder":"请输入俯卧撑数量","min":0,"precision":0},{"type":"number","label":"仰卧起坐数量","span":8,"display":"true","autoShow":false,"icon":"icon-number","decimalSeparator":".","tools":{},"fieldDecoratorId":"situpCount","renderId":"situpCount_render","labelStyle":"{}","disabled":false,"required":true,"placeholder":"请输入仰卧起坐数量","min":0,"precision":0}]},"tools":{"showClear":false},"fieldDecoratorId":"fitnessTestCard","renderId":"fitnessTestCard_render","disabled":"false","required":false}],"formHeader":[],"formLeft":[],"formRight":[],"formFooter":[],"version":{"updateTime":1766032169346}}
```

### 示例 2：

帮我定义一个函数，函数是根据身份证号码获取性别，年龄，出生日期。当我输入完身份证号码时，触发函数，将结果显示在页面上：

```json
{"type":"form-container","formConfig":{"layout":"horizontal","layoutCol":"auto","labelCol":6,"wrapperCol":18,"header":"0px","footer":"0px","left":"0px","right":"0px","gutter":0,"previewDrawerWidth":"95%","previewDrawerMinWidth":"","showButton":true,"buttons":[],"backgroundColor":"white","initMethod":"this_.getIdCardInfo = function(idCard) {\n  if (!idCard) return null;\n  \n  // 移除空格\n  idCard = idCard.toString().trim();\n  \n  // 验证身份证格式\n  const idCardRegex = /^(\\d{15}$|^\\d{17}(\\d|X|x))$/;\n  if (!idCardRegex.test(idCard)) {\n    console.warn('身份证格式不正确');\n    return null;\n  }\n  \n  let year, month, day, birthday, genderCode;\n  const result = {};\n  \n  // 处理15位身份证\n  if (idCard.length === 15) {\n    year = '19' + idCard.substr(6, 2);\n    month = idCard.substr(8, 2);\n    day = idCard.substr(10, 2);\n    genderCode = parseInt(idCard.substr(14, 1)); // 15位身份证的最后一位是性别码\n  } \n  // 处理18位身份证\n  else if (idCard.length === 18) {\n    year = idCard.substr(6, 4);\n    month = idCard.substr(10, 2);\n    day = idCard.substr(12, 2);\n    genderCode = parseInt(idCard.substr(16, 1)); // 18位身份证的倒数第二位是性别码\n  }\n  \n  // 验证日期有效性\n  const dateStr = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;\n  const birthDate = new Date(dateStr);\n  \n  if (isNaN(birthDate.getTime()) || \n      birthDate.getFullYear() != year || \n      birthDate.getMonth() + 1 != month || \n      birthDate.getDate() != day) {\n    console.warn('身份证中的出生日期无效');\n    return null;\n  }\n  \n  // 计算年龄\n  const today = new Date();\n  let age = today.getFullYear() - birthDate.getFullYear();\n  \n  // 如果今年生日还没过，年龄减1\n  const currentMonth = today.getMonth() + 1;\n  const currentDay = today.getDate();\n  \n  if (currentMonth < month || (currentMonth == month && currentDay < day)) {\n    age--;\n  }\n  \n  // 设置生日格式\n  birthday = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;\n  \n  // 判断性别：奇数-男，偶数-女\n  const gender = genderCode % 2 === 0 ? '女' : '男';\n  \n  return {\n    birthday,       // 生日，格式：YYYY-MM-DD\n    gender,         // 性别：'男' 或 '女'\n    age,            // 年龄（周岁）\n    birthDate       // 生日日期对象\n  };\n}\n\nthis_.handleIdCardChange = function(value) {\n  const idCardInfo = this_.getIdCardInfo(value);\n  \n  if (idCardInfo) {\n    // 设置生日\n    this_.setValue('birthday', idCardInfo.birthday);\n    \n    // 设置性别\n    this_.setValue('gender', idCardInfo.gender);\n    \n    // 设置年龄\n    this_.setValue('age', idCardInfo.age);\n  } else {\n    // 清空解析结果\n    this_.setValue('birthday', '');\n    this_.setValue('gender', '');\n    this_.setValue('age', '');\n  }\n}","functions":"","isLabelWidth":true,"labelWidth":120},"formColumns":[{"type":"card","label":"身份证信息解析","span":24,"display":"true","formCardStyleFit":false,"formCardStyle":{"height":"auto"},"children":{"align":"left","headerAlign":"left","addBtn":false,"delBtn":false,"column":[{"type":"single-input","label":"身份证号码","span":12,"display":"true","autoShow":false,"tools":{},"fieldDecoratorId":"idCard","renderId":"idCard_render","labelStyle":"{}","disabled":false,"required":true,"placeholder":"请输入15位或18位身份证号码","rules":"[{\\"pattern\\":\\"(^\\\\d{15}$)|(^\\\\d{17}(\\\\d|X|x)$)\\",\\"message\\":\\"请输入正确的身份证号码格式\\"}]","validateTrigger":["blur"],"onchange":"this_.handleIdCardChange(value)","events":{},"eventList":[{"eventType":"blur","methodType":"1","textarea":"this_.handleIdCardChange(e.target.value)"}]},{"type":"date","label":"出生日期","span":12,"display":"true","autoShow":false,"allowClear":true,"format":"YYYY-MM-DD","showToday":true,"validNowTime":"-1","eventRunInNextTick":true,"tools":{},"fieldDecoratorId":"birthday","renderId":"birthday_render","labelStyle":"{}","disabled":true,"required":false,"placeholder":"自动解析"},{"type":"radio","label":"性别","span":12,"display":"true","autoShow":false,"icon":"icon-radio","dataType":"static","allowDataMapping":true,"collectionType":"","collectionFilter":"","radioButton":false,"buttonStyle":false,"radioStyle":"","reverseFilter":false,"tools":{},"staticData":[{"label":"男","value":"男"},{"label":"女","value":"女"}],"fieldDecoratorId":"gender","renderId":"gender_render","labelStyle":"{}","disabled":true,"required":false},{"type":"number","label":"年龄","span":12,"display":"true","autoShow":false,"icon":"icon-number","decimalSeparator":".","tools":{},"fieldDecoratorId":"age","renderId":"age_render","labelStyle":"{}","disabled":true,"required":false,"placeholder":"自动计算","min":0,"max":150,"precision":0,"step":1}]},"tools":{"showClear":false},"fieldDecoratorId":"idCardInfoCard","renderId":"idCardInfoCard_render","disabled":"false","required":false}],"formHeader":[],"formLeft":[],"formRight":[],"formFooter":[],"version":{"updateTime":1766032168538}}
```
