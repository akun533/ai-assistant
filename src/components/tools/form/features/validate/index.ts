export const description = `
字段说明:

| 字段    | 验证逻辑                                | 示例                                                           |
|-----------|-----------------------------------------|------------------------------------------------------------------|
| adapter   | 开启新版验证逻辑,固定为 true                       | \`adapter: true\`                                                  |
| required  | 必填                                      | \`required:true\` → "hello"（通过）                                    |
| len       | 值长度必须等于指定数值                             | \`len:5\` → "hello"（通过）                                            |
| maxLen    | 值长度不超过指定数值                              | \`maxLen:10\` → "abc"（通过）                                          |
| minLen    | 值长度不小于指定数值                              | \`minLen:3\` → "ab"（失败）                                            |
| pattern   | 值需匹配正则表达式（支持字符串或RegExp对象）               | \`pattern:^\\d+$\` → "123"（通过）                                      |
| uppercase | 字符串必须全大写                                | \`uppercase:true\` → "ABC"（通过）                                     |
| lowercase | 字符串必须全小写                                | \`lowercase:true\` → "abc"（通过）                                     |
| email     | 需符合邮箱格式                                 | \`email:true\` → "a@b.com"（通过）                                     |
| url       | 需符合URL格式（排除\`mailto:\`）                   | \`url:true\` → "https://example.com"                               |
| ip        | 需符合IPv4地址格式                             | \`ip:true\` → "192.168.1.1"（通过）                                    |
| phone     | 需符合手机号格式（支持+86前缀）                       | \`phone:true\` → "13800138000"（通过）                                 |
| min       | 数值不小于指定值                                | \`min:10\` → 15（通过）                                                |
| max       | 数值不超过指定值                                | \`max:100\` → 50（通过）                                               |
| positive  | 必须为正数（>0）                               | \`positive:true\` → 1（通过）                                          |
| negative  | 必须为负数（<0）                               | \`negative:true\` → -1（通过）                                         |
| integer   | 必须为整数                                   | \`integer:true\` → 3.0（通过）                                         |
| number    | 必须为有效数字（非NaN）                           | \`number:true\` → "123"（通过）                                        |
| validator | 自定义验证逻辑,必须调用 \`callback\`, \`this.api\` 可以拿到表单 api | \`validator:(value, callback) => void;\`                             |
| message   | 错误信息                                    | \`message:"填写错误"\` <br/> \`message:{default:"填写错误", min:"不能小于5位" }\` |

## 实例模板
联系电话必填并且必须有效

\`\`\`JSON
[{
  "type": "input",
  "field": "phone",
  "title": "联系电话",
  "props": {
    "placeholder": "请输入手机号码"
  },
  "validate": [{
      "adapter": true,
      "required": true,
      "message": "请输入联系电话",
      "mode": "required"
    },
    {
      "adapter": true,
      "phone": true,
      "message": "请输入正确的手机号码格式",
      "mode": "phone"
    }
  ],
}]
\`\`\`
`;

export default {
  name: 'validate',
  label: '验证规则',
  info: '表单验证规则(仅表单组件可用)，用于验证用户输入的数据是否符合要求。支持必填、格式、长度、范围等多种验证类型',
  description,
  templates: [
    {
      description: '验证字段是否为空，必须填写',
      example: {
        adapter: true,
        required: true,
        message: '此字段为必填项',
      },
    },
    {
      description: '验证字符串长度必须等于指定数值',
      example: {
        adapter: true,
        len: 5,
        message: '长度必须为5位',
      },
    },
    {
      description: '验证字符串长度不超过指定数值',
      example: {
        adapter: true,
        maxLen: 10,
        message: '长度不能超过10位',
      },
    },
    {
      description: '验证字符串长度不小于指定数值',
      example: {
        adapter: true,
        minLen: 3,
        message: '长度不能少于3位',
      },
    },
    {
      description: '验证字符串长度在指定范围内',
      example: {
        adapter: true,
        minLen: 3,
        maxLen: 10,
        message: '长度必须在3-10位之间',
      },
    },
    {
      description: '验证值需匹配正则表达式',
      example: {
        adapter: true,
        pattern: '^\\d+$',
        message: '只能输入数字',
      },
    },
    {
      description: '验证字符串必须全大写',
      example: {
        adapter: true,
        uppercase: true,
        message: '必须全大写',
      },
    },
    {
      description: '验证字符串必须全小写',
      example: {
        adapter: true,
        lowercase: true,
        message: '必须全小写',
      },
    },
    {
      description: '验证邮箱格式是否正确',
      example: {
        adapter: true,
        email: true,
        message: '请输入正确的邮箱格式',
      },
    },
    {
      description: '验证URL格式是否正确',
      example: {
        adapter: true,
        url: true,
        message: '请输入正确的URL地址',
      },
    },
    {
      description: '验证IPv4地址格式',
      example: {
        adapter: true,
        ip: true,
        message: '请输入正确的IP地址',
      },
    },
    {
      description: '验证手机号格式（支持+86前缀）',
      example: {
        adapter: true,
        phone: true,
        message: '请输入正确的手机号',
      },
    },
    {
      description: '验证数值不小于指定值',
      example: {
        adapter: true,
        min: 10,
        message: '值不能小于10',
      },
    },
    {
      description: '验证数值不超过指定值',
      example: {
        adapter: true,
        max: 100,
        message: '值不能大于100',
      },
    },
    {
      description: '验证数值在指定范围内',
      example: {
        adapter: true,
        min: 10,
        max: 100,
        message: '值必须在10-100之间',
      },
    },
    {
      description: '验证必须为正数（>0）',
      example: {
        adapter: true,
        positive: true,
        message: '必须为正数',
      },
    },
    {
      description: '验证必须为负数（<0）',
      example: {
        adapter: true,
        negative: true,
        message: '必须为负数',
      },
    },
    {
      description: '验证必须为整数',
      example: {
        adapter: true,
        integer: true,
        message: '必须为整数',
      },
    },
    {
      description: '验证必须为有效数字（非NaN）',
      example: {
        adapter: true,
        number: true,
        message: '必须为有效数字',
      },
    },
    {
      description: '验证值必须等于指定值（严格匹配）',
      example: {
        adapter: true,
        equal: 'abc',
        message: '值必须为abc',
      },
    },
    {
      description: '验证值必须在指定数组中',
      example: {
        adapter: true,
        enum: [1, 2, 3],
        message: '值必须在1、2、3中选择',
      },
    },
    {
      description: '验证对象必须包含指定键名',
      example: {
        adapter: true,
        hasKeys: ['id', 'name'],
        message: '对象必须包含id和name字段',
      },
    },
    {
      description: '使用自定义验证逻辑',
      example: {
        adapter: true,
        validator: 'function(value, callback) { if(value.length >= 3 && value.length <= 5) { callback(); } else { callback("长度必须在3-5位之间"); } }',
        message: '自定义验证失败',
      },
    },
    {
      description: '结合多个验证条件',
      example: {
        adapter: true,
        required: true,
        minLen: 6,
        maxLen: 20,
        pattern: '^[A-Za-z0-9]+$',
        message: {
          required: '此字段为必填项',
          minLen: '长度不能少于6位',
          maxLen: '长度不能超过20位',
          pattern: '只能包含字母和数字',
        },
      },
    },
    {
      description: '验证与其他字段的关系',
      example: {
        adapter: true,
        validator: 'function(value, callback) { if(this.api.getValue("password") === value) { callback(); } else { callback("两次密码输入不一致"); } }',
        message: '密码不一致',
      },
    },
  ],
};
