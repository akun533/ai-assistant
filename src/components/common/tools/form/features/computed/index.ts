export const description = `
## TypeScript 类型定义

\`\`\`typescript
// 计算配置条件类型
type ComputedConditionType = 'field' | 'variable';

// 计算配置条件操作符
type ComputedConditionOperator = '==' | '!=' | '>' | '>=' | '<' | '<=' | 'empty' | 'notEmpty' | 'pattern' | 'on' | 'notOn';

// 计算配置条件项
interface ComputedConditionItem {
    // 条件类型
    type?: ComputedConditionType;
    // 字段名
    field?: string;
    // 条件操作符
    condition?: ComputedConditionOperator;
    // 比较值
    value?: any;
    // 比较字段（当使用字段比较时）
    compare?: string;
    // 是否使用字段比较
    var?: boolean;
    // 子条件组（嵌套条件）
    mode?: 'AND' | 'OR';
    group?: ComputedConditionItem[];
}

// 计算配置条件组
interface ComputedConditionGroup {
    // 逻辑操作符
    mode: 'AND' | 'OR';
    // 条件列表
    group: ComputedConditionItem[];
    // 是否反向逻辑
    invert?: boolean;
    // 联动触发字段（仅联动类型使用）
    linkage?: string;
}

type ComputedConfig = 
        // 公式模式：字符串类型的公式表达式
        | string
        // 条件模式：条件对象
        | ComputedConditionGroup

// 计算组件规则
type Computed = {
    //是否隐藏
    hidden: ComputedConfig
    //是否禁用
    'props.disabled': ComputedConfig
    //是否必填
    $required: ComputedConfig
    //默认值
    value: ComputedConfig
}
\`\`\`


## 配置模式

- 条件模式 (condition): 使用条件组，支持 AND/OR、字段比较、正则、空值检查、嵌套分组。

- 公式模式 (computed): 使用表达式或内置函数，支持字段引用、数学/字符串/日期/集合等计算。

## 条件类型详解

### 比较条件
- **\`==\`**: 等于
- **\`!=\`**: 不等于
- **\`>\`**: 大于
- **\`>=\`**: 大于等于
- **\`<\`**: 小于
- **\`<=\`**: 小于等于

### 特殊条件
- **\`empty\`**: 字段值为空
- **\`notEmpty\`**: 字段值不为空
- **\`pattern\`**: 正则表达式匹配
- **\`on\`**: 值在指定列表中
- **\`notOn\`**: 值不在指定列表中

### 条件值类型
- **直接值**: 字符串、数字、布尔值等
- **字段引用**: 通过 \`var\` 复选框选择其他字段进行比较
- **变量**: 通过 \`variable\` 类型使用全局变量

## 内置公式函数

### 数学函数
\`\`\`javascript
// 基础运算
ADD(1, 2)           // 加法: 3
SUB(10, 5)          // 减法: 5
MUL(2, 3)           // 乘法: 6
DIV(10, 2)          // 除法: 5
MOD(10, 3)          // 取模: 1

// 统计函数
SUM(1, 2, 3)        // 求和: 6
SUM([5, 6, 7])      // 数组求和: 18
MAX(1, 5, 10)       // 最大值: 10
MIN(1, 5, 10)       // 最小值: 1
AVG(2, 4, 6, 8)     // 平均值: 5

// 数学函数
ABS(-10)            // 绝对值: 10
POWER(2, 4)         // 幂运算: 16
SQRT(9)             // 平方根: 3
PI()                // 圆周率: 3.141592653589793
RAND()              // 随机数: 0.75348173001531

// 舍入函数
ROUND(3.149, 2)     // 四舍五入: 3.15
ROUND(3.149)        // 四舍五入: 3
FLOOR(1.93)         // 向下取整: 1
CEIL(1.93)          // 向上取整: 2
FIXED(1.93, 1)      // 截断小数: 1.9

// 类型转换
TONUMBER("1.5")     // 转数字: 1.5
TONUMBER("2.4e")    // 转数字: 2.4
TONUMBER("ABC")     // 转数字: 0
ISNUMBER("2.34")    // 是否数字: true
ISNUMBER("2.4e")    // 是否数字: false

// 特殊函数
TOCHINSESAMOUNT(32.14)  // 中文金额: "叁拾贰元壹角肆分"
\`\`\`

### 字符串函数
\`\`\`javascript
// 字符串拼接
CONCAT("Hello", " ", "World")  // 字符串拼接: "Hello World"

// 大小写转换
TOLOWER("HELLO")               // 转小写: "hello"
TOUPPER("abcd")                // 转大写: "ABCD"

// 字符串处理
TRIM("\\t\\n A BC \\t\\n")         // 去除空格: "A BC"
REPLACE("AbAc", "A", "1")      // 替换: "1bAc"
REPLACEALL("AbAc", "A", "1")   // 全部替换: "1b1c"

// 字符串检查
STARTSWITH("ABCDEF", "ABC")    // 开始检查: true
STARTSWITH("ABCDEF", "AD")     // 开始检查: false
INCLUDES("ABCD", "BC")         // 包含检查: 1
INCLUDES("ABCD", "E")          // 包含检查: -1

// 字符串截取
SLICELEFT("ABCDE", 3)          // 左截取: "ABC"
SLICERIGHT("ABCDE", 3)         // 右截取: "CDE"
\`\`\`

### 日期函数
\`\`\`javascript
// 当前时间
NOW()                          // 当前时间: "2024-03-15 12:08:31"
TODAY()                        // 今天日期: "2024-03-15"

// 时间提取
YEAR("2024-03-15 12:08:31")   // 提取年份: 2024
MONTH("2024-03-15 12:08:31")  // 提取月份: 3
DAY("2024-03-15 12:08:31")    // 提取日期: 15
HOUR("2024-03-15 12:08:31")   // 提取小时: 12
MINUTE("2024-03-15 12:08:31") // 提取分钟: 8
SECOND("2024-03-15 12:08:31") // 提取秒数: 31

// 时间添加
ADDYEAR("2024-03-15", 2)      // 添加年: "2026-03-15 12:08:31"
ADDYEAR("2024-03-15", 3, "YYYY-MM-DD") // 添加年并格式化: "2027-03-15"
ADDMONTH("2024-03-15", 2)     // 添加月: "2024-05-15 12:08:31"
ADDDAY("2024-03-15", 10)      // 添加天: "2024-03-25 12:08:31"
ADDHOUR("2024-03-15", 10)     // 添加小时: "2024-03-15 22:08:31"
ADDMINUTE("2024-03-15", 30)   // 添加分钟: "2024-03-15 12:38:31"
ADDSECOND("2024-03-15", 20)   // 添加秒: "2024-03-15 12:08:51"
ADDWEEK("2024-03-15", 2)      // 添加周: "2024-03-29 12:08:31"

// 时间减少
SUBYEAR("2024-03-15", 2)      // 减少年: "2022-03-15 12:08:31"
SUBMONTH("2024-03-15", 2)     // 减少月: "2024-01-15 12:08:31"
SUBDAY("2024-03-15", 10)      // 减少天: "2024-03-05 12:08:31"
SUBHOUR("2024-03-15", 10)     // 减少小时: "2024-03-15 02:08:31"
SUBMINUTE("2024-03-15", 30)   // 减少分钟: "2024-03-15 11:38:31"
SUBSECOND("2024-03-15", 20)   // 减少秒: "2024-03-15 12:08:11"
SUBWEEK("2024-03-15", 2)      // 减少周: "2024-03-01 12:08:31"

// 时间差计算
DIFFDAYS("2024-01-15", "2024-03-15")        // 天数差: 60
DIFFHOURS("2024-01-15 12:00:00", "2024-01-16 15:00:00")  // 小时差: 27
DIFFMINUTES("2024-01-15 12:00:00", "2024-01-15 12:30:00") // 分钟差: 30

// 时间戳
TIMESTAMP("2024-03-15 12:08:31")  // 时间戳: 1710475711000
\`\`\`

### 条件函数
\`\`\`javascript
// 逻辑运算
AND(true, true)                          // 逻辑与: true
AND(true, false)                         // 逻辑与: false
OR(false, false)                         // 逻辑或: false
OR(false, true)                          // 逻辑或: true
NOT(true)                                // 逻辑非: false
NOT(false)                               // 逻辑非: true

// 条件判断
IF(false, 1, 0)                          // 条件判断: 0
IF(true, 1, 0)                           // 条件判断: 1
CASE(IN([1,2,3,4], 5), 1, IN([1,2,3,4], 2), 2)  // 多条件判断: 2

// 比较运算
EQ(100, 100)                             // 等于: true
EQ(100, 90)                              // 等于: false
EQ(100, "100")                           // 等于: false
NE(100, 90)                              // 不等于: true
NE(100, 100)                             // 不等于: false
NE(100, "100")                           // 不等于: true

// 大小比较
GT(100, 90)                              // 大于: true
GT(100, 100)                             // 大于: false
GT(100, 110)                             // 大于: false
GE(100, 90)                              // 大于等于: true
GE(100, 100)                             // 大于等于: true
GE(100, 110)                             // 大于等于: false
LT(100, 90)                              // 小于: false
LT(100, 100)                             // 小于: false
LT(100, 110)                             // 小于: true
LE(100, 90)                              // 小于等于: false
LE(100, 100)                             // 小于等于: true
LE(100, 110)                             // 小于等于: true

// 空值检查
EMPTY("")                                // 空值检查: true
EMPTY([])                                // 空值检查: true
EMPTY("0")                               // 空值检查: false
NOTEMPTY("")                             // 非空检查: false
NOTEMPTY([])                             // 非空检查: false
NOTEMPTY("0")                            // 非空检查: true

// 常量
TRUE()                                   // 真值: true
FALSE()                                  // 假值: false

// 默认值
DEFAULT("#FF7271", "#000")               // 默认值: "#FF7271"
DEFAULT("", "#000")                      // 默认值: ""
DEFAULT(null, "#000")                    // 默认值: "#000"
\`\`\`

### 集合函数
\`\`\`javascript
// 数组操作
LEN([1, 2, 3])                // 数组长度: 3
IN([1,2,3,4], 4)              // 包含检查: true
IN([1,2,3,4], 5)              // 包含检查: false

// 数组集合运算
UNION(1, 3, 5, 1, 4, 3)       // 并集去重: [1, 3, 5, 4]
UNION([1, 2, 3, 1, 2, 3])     // 数组去重: [1, 2, 3]
INTERSECTIONSET([1, 3, 5], [1, 4, 3])  // 交集: [1, 3]

// 数组创建
LIST(1, 2, 3)                 // 创建列表: [1, 2, 3]
LIST([1, 3, 5], [1, 4, 3])    // 创建嵌套列表: [[1, 3, 5], [1, 4, 3]]

// 对象操作
VALUE({key: 1}, "key", 2)     // 获取对象值: 1
VALUE({key: 1}, "value", 2)   // 获取对象值: 2
VALUE({list: {key: 1}}, "list.key")  // 获取嵌套对象值: 1

// 数组列提取
COLUMN([{key: 1}, {key: 2}, {key: 3}], "key")  // 提取列: [1, 2, 3]
COLUMN([[{key: 1}, {key: 2}], [{key: 3}, {key: 4}]], "key")  // 嵌套数组提取: [1, 2, 3, 4]
\`\`\`

### 特殊函数
\`\`\`javascript
DEFAULT_VALUE("默认值")        // 获取字段默认值
GET_DATA("token")             // 获取全局数据
GET_VARIABLE("var_name")      // 获取全局变量
CURRENT_RULE("title")         // 获取当前规则属性
VALUE(obj, "key", "default")  // 获取对象属性值
T("translation_key")          // 获取翻译文本
CALLBACK(() => 100 * 0.8)     // 执行回调函数
\`\`\`

## 字段引用规则

### 简单字段引用
\`\`\`javascript
// 直接引用字段值
fieldName

// 引用嵌套字段
parentField.childField

// 引用子表单字段
subformField.itemField
\`\`\`

### 字段 ID 引用
\`\`\`javascript
// 使用字段 ID (带引号)
"field_id"

// 嵌套字段 ID
"parent_id.child_id"
\`\`\`

### 数组字段处理
\`\`\`javascript
// 对数组字段进行列操作
COLUMN(arrayField, "propertyName")

// 数组长度
LEN(arrayField)

// 数组求和
SUM(arrayField)
\`\`\`

## 最佳实践

1. 简单逻辑 → 用条件模式；复杂逻辑 → 用公式模式。
2. 避免复杂计算循环依赖，必要时用 CALLBACK。
3. 使用 IF 做错误与边界处理。
4. 删除或修改时，只改目标 path（如 $required），不要删除整个 computed。

## 注意事项

1. 字段引用: 字段名必须是合法 JS 标识符或带引号的字符串。
2. 数据类型: 注意比较时的类型匹配，避免数字与字符串混淆。
3. 条件取反: 使用 invert: true 实现逻辑取反。
4. 精确修改: 修改仅限目标 path（如 $required），其他配置需保留，除非用户明确要求删除整个 computed。
`;

export default {
  name: 'computed',
  label: '联动',
  business: true,
  info: '用于配置组件的动态行为，包括数据联动、隐藏条件、必填条件和禁用条件等。支持两种配置模式：条件配置和公式配置',
  description,
  templates: [
    {
      description: '通过单选框控制输入框的禁用状态',
      example: [
        {
          'type': 'radio',
          'field': 'F7b1mfphkk1gbzc',
          'title': '单选框',
          'options': [{
            'label': '禁用',
            'value': '1',
          }, {
            'label': '可输入',
            'value': '2',
          }],
        },
        {
          'type': 'input',
          'field': 'Fd2gmfphkk1gc0c',
          'title': '输入框',
          'computed': {
            'props.disabled': "F7b1mfphkk1gbzc === '1'",
          },
        },
      ],
    },
    {
      description: '通过单选框控制输入框的显示/隐藏状态',
      example: [
        {
          'type': 'radio',
          'field': 'F7b1mfphkk1gbzc',
          'title': '单选框',
          'options': [{
            'label': '隐藏',
            'value': '1',
          }, {
            'label': '显示',
            'value': '2',
          }],
        },
        {
          'type': 'input',
          'field': 'Fd2gmfphkk1gc0c',
          'title': '输入框',
          'computed': {
            'hidden': "F7b1mfphkk1gbzc === '1'",
          },
        },
      ],
    },
    {
      description: '根据数字金额自动计算并显示中文大写金额',
      example: [
        {
          'type': 'inputNumber',
          'field': 'F7ddmfqbkkmdf6c',
          'title': '金额',
        },
        {
          'type': 'fcValue',
          'field': 'Fsrgmfqbkkmdf7c',
          'title': '中文大写',
          'computed': {
            'value': "'大写: ' + TOCHINSESAMOUNT(F7ddmfqbkkmdf6c || 0)",
          },
        },
      ],
    },
    {
      description: '根据年龄条件控制字段的显示状态',
      example: [
        {
          'type': 'inputNumber',
          'field': 'age',
          'title': '年龄',
        },
        {
          'type': 'input',
          'field': 'adultField',
          'title': '成人信息',
          'computed': {
            'hidden': {
              'mode': 'AND',
              'group': [
                {
                  'field': 'age',
                  'condition': '<',
                  'value': 18,
                  'invert': true,
                },
              ],
            },
          },
        },
      ],
    },
    {
      description: '根据用户类型控制字段的必填状态',
      example: [
        {
          'type': 'select',
          'field': 'userType',
          'title': '用户类型',
          'options': [
            { 'label': '普通用户', 'value': 'user' },
            { 'label': '管理员', 'value': 'admin' },
          ],
        },
        {
          'type': 'input',
          'field': 'adminCode',
          'title': '管理员代码',
          'computed': {
            '$required': {
              'mode': 'AND',
              'group': [
                {
                  'field': 'userType',
                  'condition': '==',
                  'value': 'admin',
                },
              ],
            },
          },
        },
      ],
    },
    {
      description: '根据状态字段控制其他字段的禁用状态',
      example: [
        {
          'type': 'select',
          'field': 'status',
          'title': '状态',
          'options': [
            { 'label': '正常', 'value': 'normal' },
            { 'label': '锁定', 'value': 'locked' },
          ],
        },
        {
          'type': 'input',
          'field': 'editField',
          'title': '可编辑字段',
          'computed': {
            'props.disabled': {
              'mode': 'AND',
              'group': [
                {
                  'field': 'status',
                  'condition': '==',
                  'value': 'locked',
                },
              ],
            },
          },
        },
      ],
    },
    {
      description: '使用复合条件控制字段的必填状态',
      example: [
        {
          'type': 'inputNumber',
          'field': 'age',
          'title': '年龄',
        },
        {
          'type': 'select',
          'field': 'status',
          'title': '状态',
          'options': [
            { 'label': '活跃', 'value': 'active' },
            { 'label': '非活跃', 'value': 'inactive' },
          ],
        },
        {
          'type': 'input',
          'field': 'requiredField',
          'title': '必填字段',
          'computed': {
            '$required': {
              'mode': 'AND',
              'group': [
                {
                  'field': 'age',
                  'condition': '>=',
                  'value': 18,
                },
                {
                  'field': 'status',
                  'condition': '==',
                  'value': 'active',
                },
              ],
            },
          },
        },
      ],
    },
    {
      description: '根据分类和数量计算总价',
      example: [
        {
          'type': 'select',
          'field': 'category',
          'title': '分类',
          'options': [
            { 'label': '电子产品', 'value': 'electronics' },
            { 'label': '服装', 'value': 'clothing' },
          ],
        },
        {
          'type': 'inputNumber',
          'field': 'price',
          'title': '单价',
        },
        {
          'type': 'inputNumber',
          'field': 'quantity',
          'title': '数量',
        },
        {
          'type': 'fcValue',
          'field': 'totalPrice',
          'title': '总价',
          'computed': {
            'value': "IF(category == 'electronics', MUL(price, quantity, 1.2), MUL(price, quantity, 1.1))",
          },
        },
      ],
    },
    {
      description: '根据用户等级计算折扣价格',
      example: [
        {
          'type': 'select',
          'field': 'userLevel',
          'title': '用户等级',
          'options': [
            { 'label': '普通', 'value': 'normal' },
            { 'label': '黄金', 'value': 'gold' },
            { 'label': 'VIP', 'value': 'vip' },
          ],
        },
        {
          'type': 'inputNumber',
          'field': 'originalPrice',
          'title': '原价',
        },
        {
          'type': 'fcValue',
          'field': 'finalPrice',
          'title': '最终价格',
          'computed': {
            'value': "IF(userLevel == 'vip', MUL(originalPrice, 0.8), IF(userLevel == 'gold', MUL(originalPrice, 0.9), originalPrice))",
          },
        },
      ],
    },
    {
      description: '使用嵌套条件控制复杂显示逻辑',
      example: [
        {
          'type': 'select',
          'field': 'userType',
          'title': '用户类型',
          'options': [
            { 'label': '管理员', 'value': 'admin' },
            { 'label': '普通用户', 'value': 'user' },
          ],
        },
        {
          'type': 'inputNumber',
          'field': 'age',
          'title': '年龄',
        },
        {
          'type': 'switch',
          'field': 'verified',
          'title': '已验证',
        },
        {
          'type': 'input',
          'field': 'specialField',
          'title': '特殊字段',
          'computed': {
            'hidden': {
              'mode': 'OR',
              'group': [
                {
                  'field': 'userType',
                  'condition': '==',
                  'value': 'admin',
                },
                {
                  'mode': 'AND',
                  'group': [
                    {
                      'field': 'age',
                      'condition': '>=',
                      'value': 18,
                    },
                    {
                      'field': 'verified',
                      'condition': '==',
                      'value': true,
                    },
                  ],
                },
              ],
              'invert': true,
            },
          },
        },
      ],
    },
    {
      description: '使用联动配置实现字段间的动态关联',
      example: [
        {
          'type': 'select',
          'field': 'category',
          'title': '分类',
          'options': [
            { 'label': '电子产品', 'value': 'electronics' },
            { 'label': '服装', 'value': 'clothing' },
          ],
        },
        {
          'type': 'input',
          'field': 'description',
          'title': '描述',
          'computed': {
            'value': {
              'mode': 'AND',
              'group': [
                {
                  'field': 'category',
                  'condition': '==',
                  'value': 'electronics',
                },
              ],
              'linkage': 'category',
            },
          },
        },
      ],
    },
  ],
};
