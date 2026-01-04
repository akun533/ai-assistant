export const description = `
## 字段说明:

| **字段**    | **类型** | **说明**                                |
|-----------|--------|-----------------------------------------|
| value     | any    | 通过内置条件控制,和\`handle\`二选一              |
| condition | string | 内置的条件,可以和\`value\`组合使用                |
| handle    | function | 自定义控制条件,优先级大于value                    |
| method    | string | 控制指定规则的显示,禁用,必填                      |
| rule      | string[] | 控制的字段                                |

### method 选项

| 键名 | 说明 |
|------|------|
| if | 条件渲染，控制组件的显示/隐藏状态 |
| required | 必填验证，设置字段是否为必填项 |
| enabled | 禁用状态，控制组件是否可交互 |
| display | 显示状态，控制组件的显示状态(会渲染 DOM) |

### condition 选项

| 键名 | 运算符 | 说明 | 值类型 | 示例 |
|------|--------|------|--------|------|
| == | 全等 | 组件值完全等于value | Any | \`value: 10\` |
| != | 不全等 | 组件值不等于value | Any | \`value: "error"\` |
| <> | 不全等 | 组件值不等于value（同!=） | Any | \`value: false\` |
| > | 大于 | 组件值大于value | Number | \`value: 100\` |
| >= | 大于等于 | 组件值大于等于value | Number | \`value: 18\` |
| < | 小于 | 组件值小于value | Number | \`value: 0\` |
| <= | 小于等于 | 组件值小于等于value | Number | \`value: 100\` |
| in | 包含 | 组件值存在于value数组中 | Array | \`value: [1,2,3]\` |
| notIn | 不包含 | 组件值不存在于value数组中 | Array | \`value: ["a","b"]\` |
| on | 包含值 | value存在于组件值（数组）中 | String/Number | \`value: "admin"\` |
| notOn | 不包含值 | value不存在于组件值（数组）中 | String/Number | \`value: "guest"\` |
| between | 区间内 | 组件值在value[0]和value[1]之间 | Array[2] | \`value: [10,20]\` |
| notBetween | 区间外 | 组件值不在value[0]和value[1]之间 | Array[2] | \`value: [0,100]\` |
| empty | 为空 | 组件值为空时通过验证 | - | \`value: true\` |
| notEmpty | 非空 | 组件值不为空时通过验证 | - | \`value: true\` |
| pattern | 正则 | 用正则表达式验证组件值 | String | \`value:'^1\\d{10}$'\` |

## 实例模板
input1输入值为"show"时，自动显示input2,并且让 input2必填

\`\`\`JSON
[{
  type: 'input',
  field: 'input1',
  control: [{
      value: 'show',
      condition: '==',
      method: 'if',
      rule: ['input2', 'input3']
    },{
      value: 'show',
      condition: '==',
      method: 'required',
      rule: ['input2']
    }
  ]
},{
  type: 'input',
  field: 'input2',
},{
  type: 'input',
  field: 'input3',
}]
\`\`\`
`;

export default {
  name: 'computed',
  label: '联动',
  info: '表单联动控制，用于实现字段之间的动态交互和依赖关系。支持条件显示、隐藏、启用、禁用等操作。',
  business: false,
  description,
  templates: [
    {
      description: '当值为1时显示指定字段',
      example: {
        control: [
          {
            value: 1,
            rule: ['field1', 'name2'],
          },
        ],
      },
    },
    {
      description: '当值大于等于1时显示指定字段',
      example: {
        control: [
          {
            value: 1,
            condition: '>=',
            rule: ['field1', 'name2'],
          },
        ],
      },
    },
    {
      description: '当值为1时禁用指定字段',
      example: {
        control: [
          {
            value: 1,
            method: 'enabled',
            rule: ['field1', 'name2'],
          },
        ],
      },
    },
    {
      description: '当值为1时设置指定字段为必填',
      example: {
        control: [
          {
            value: 1,
            method: 'required',
            rule: ['field1', 'name2'],
          },
        ],
      },
    },
    {
      description: '当值完全等于指定值时显示字段',
      example: {
        control: [
          {
            value: 'admin',
            condition: '==',
            rule: ['adminFields'],
          },
        ],
      },
    },
    {
      description: '当值不等于指定值时显示字段',
      example: {
        control: [
          {
            value: 'guest',
            condition: '!=',
            rule: ['userFields'],
          },
        ],
      },
    },
    {
      description: '当值大于指定数值时显示字段',
      example: {
        control: [
          {
            value: 18,
            condition: '>',
            rule: ['adultFields'],
          },
        ],
      },
    },
    {
      description: '当值在指定范围内时显示字段',
      example: {
        control: [
          {
            value: [18, 65],
            condition: 'between',
            rule: ['workingAgeFields'],
          },
        ],
      },
    },
    {
      description: '当值在指定数组中时显示字段',
      example: {
        control: [
          {
            value: ['admin', 'manager'],
            condition: 'in',
            rule: ['privilegeFields'],
          },
        ],
      },
    },
    {
      description: '当值不在指定数组中时显示字段',
      example: {
        control: [
          {
            value: ['guest', 'visitor'],
            condition: 'notIn',
            rule: ['memberFields'],
          },
        ],
      },
    },
    {
      description: '当值为空时显示字段',
      example: {
        control: [
          {
            value: true,
            condition: 'empty',
            rule: ['defaultFields'],
          },
        ],
      },
    },
    {
      description: '当值不为空时显示字段',
      example: {
        control: [
          {
            value: true,
            condition: 'notEmpty',
            rule: ['dynamicFields'],
          },
        ],
      },
    },
    {
      description: '当值匹配正则时显示字段',
      example: {
        control: [
          {
            value: '^1\\d{10}$',
            condition: 'pattern',
            rule: ['phoneFields'],
          },
        ],
      },
    },
    {
      description: '使用函数控制字段显示',
      example: {
        control: [
          {
            handle: 'function(val, api) { return val > 0 && api.getValue("status") === "active"; }',
            rule: ['conditionalFields'],
          },
        ],
      },
    },
    {
      description: '一个条件控制多个字段的显示',
      example: {
        control: [
          {
            value: 'enterprise',
            condition: '==',
            method: 'display',
            rule: ['companyName', 'taxNumber', 'businessLicense'],
          },
        ],
      },
    },
    {
      description: '结合多个控制条件',
      example: {
        control: [
          {
            value: 18,
            condition: '>=',
            method: 'display',
            rule: ['adultFields'],
          },
          {
            value: 'premium',
            condition: '==',
            method: 'required',
            rule: ['premiumFields'],
          },
        ],
      },
    },
  ],
};
