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
  "label": "联系电话",
  "placeholder": "请输入手机号码"
  "rules": "[{ pattern: '(^\\d{15}$)|(^\\d{17}(\\d|X|x)$)', message: '需要输入身份证号'}]",
}]
\`\`\`
`;

export default {
  name: 'rules',
  label: '验证规则',
  info: '表单验证规则(仅表单组件可用)，用于验证用户输入的数据是否符合要求。支持必填、格式、长度、范围等多种验证类型',
  description,
  templates: [],
};
