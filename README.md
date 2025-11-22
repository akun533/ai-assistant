<p align="center">
    <a href="https://www.form-create.com">
        <img width="300" alt="FormCreate" src="https://static.form-create.com/file/img/info-logo2.png">
    </a>
</p>

<p align="center">
    <a href="https://www.form-create.com/" target="_blank">官网</a>
    <span>&nbsp;|&nbsp;</span>
    <a href="https://view.form-create.com/" target="_blank">帮助文档</a>
    <span>&nbsp;|&nbsp;</span>
    <a href="https://form-create.com/v3/designer/" target="_blank">在线演示</a>
    <span>&nbsp;|&nbsp;</span>
    <a href="https://form-create.com/v3/mobile/" target="_blank">移动端在线演示</a>
    <span>&nbsp;|&nbsp;</span>
    <a href="https://form-create.com/v3/" target="_blank">FormCreate 文档</a>
</p>

<p align="center">
  <a href="https://github.com/xaboy/form-create" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="TIM" /></a>
  <a href="https://github.com/xaboy/form-create" target="_blank"><img src="https://img.shields.io/npm/dt/@form-create/designer.svg" alt="dt" /></a>
</p>

## FormCreate AI 表单助理

FormCreate AI 表单助理，用于根据自然语言描述自动生成和修改 FormCreate 表单规则。


[![FcDesigner](https://static.form-create.com/file/img/banner-m2.jpg?20251027)](https://pro.form-create.com/view)

## ✨ 功能特性

- 🤖 **多 AI 服务支持** - 支持 DeepSeek、智谱AI、通义千问及自定义 OpenAI 兼容接口
- 🎨 **多 UI 框架** - 支持 Element Plus/UI、Ant Design Vue、Vant
- 📝 **智能表单生成** - 根据自然语言描述自动生成完整的表单规则
- 🔧 **表单验证与修复** - 自动验证表单规则并提供修复建议
- 🔄 **增量更新** - 支持基于 JSONPatch 的精确表单规则修改
- 📱 **移动端支持** - 支持 Vant 移动端表单生成
- 🔌 **OpenAI 兼容** - 完全兼容 OpenAI Chat Completions API 格式

## 📦 安装

```bash
# 克隆项目
git clone https://github.com/xaboy/form-create-assistant/
cd form-create-assistant

# 安装依赖
pnpm install
```

## 🚀 快速开始

```bash
# 使用 tsx 直接运行
pnpm start
```
服务启动后，默认监听 `http://localhost:3001`

## ⚙️ 配置

### 环境变量

创建 `.env` 文件（可选）：

```bash
# 服务端口（默认: 3001）
PORT=3001

# 默认 Agent 类型（默认: deepseek）
DEFAULT_AGENT=deepseek

# 默认模型（默认: deepseek-chat）
DEFAULT_MODEL=deepseek-chat

# 默认 API 密钥（可选，当请求中未提供 Authorization header 时使用）
DEFAULT_TOKEN=your-api-key-here

# Other Agent 的自定义 API 端点（用于自定义 OpenAI 兼容接口）
AGENT_API=https://api.example.com/v1/chat/completions

# Agent 请求超时时间（毫秒，默认: 180000，即 3 分钟）
AGENT_TIMEOUT=180000
```

### API 密钥

API 密钥可以通过以下方式提供：

1. **请求头传递**（推荐）：
```bash
Authorization: Bearer <your-api-key>
```

2. **环境变量配置**（可选）：
如果请求中未提供 API 密钥，系统会使用 `DEFAULT_TOKEN` 环境变量中的值。

**注意**：优先使用请求头中的 API 密钥，如果请求头中未提供，才会使用环境变量中的 `DEFAULT_TOKEN`。

## 📡 API 接口

### 健康检查

```bash
GET /api/health
```

响应：
```json
{
  "success": true,
  "message": "FormCreate 聊天服务正常运行",
  "timestamp": "2025-01-20T10:00:00.000Z"
}
```

### Chat Completions（流式）

```bash
POST /api/chat/completions
Content-Type: application/json
Authorization: Bearer <your-api-key>
```

**请求格式**：

```json
{
  "model": "deepseek-chat",
  "agent": "deepseek",
  "ui": "element-plus",
  "messages": [
    {
      "role": "user",
      "content": "生成一个用户注册表单"
    }
  ],
}
```

**请求参数说明**：

| 参数         | 类型 | 必填 | 说明                                                                                          |
|------------|------|----|---------------------------------------------------------------------------------------------|
| `ui`       | string | 是  | UI 框架：`element-plus`、`element-ui`、`ant-design-vue`、`vant`、`vant@vue2`、`ant-design-vue@vue2` |
| `messages` | array | 是  | 对话消息数组（OpenAI 格式）                                                                           |
| `form`     | string | 是  | 当前表单规则                                                                                      |
| `model`    | string | 否  | AI 模型名称                                                                                     |
| `agent`    | string | 否  | AI 服务提供商：`deepseek`、`zhipu`、`qwen`、`other`（默认: `deepseek`）                                  |

**响应格式**（Server-Sent Events）：

```
data: {"id":"chatcmpl-xxx","object":"formCreateAgent","created":1234567890,"choices":[{"index":0,"delta":{"role":"assistant","content":"..."},"finish_reason":null}]}

data: {"id":"chatcmpl-xxx","object":"formCreateAgent","created":1234567890,"choices":[{"index":0,"delta":{"content":"..."},"finish_reason":null}]}

data: [DONE]
```

## 🤖 AI Agent 配置

### 支持的 AI 服务

#### DeepSeek（默认）

- **Agent 类型**: `deepseek`
- **API 端点**: `https://api.deepseek.com/v1/chat/completions`

#### 智谱 AI (ZhipuAI)

- **Agent 类型**: `zhipu`
- **API 端点**: `https://open.bigmodel.cn/api/paas/v4/chat/completions`

#### 通义千问 (Qwen)

- **Agent 类型**: `qwen`
- **API 端点**: `https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions`

#### Other（自定义 OpenAI 兼容接口）

- **Agent 类型**: `other`
- **API 端点**: 通过 `AGENT_API` 环境变量配置

**配置示例**：

```bash
# .env
AGENT_API=https://api.example.com/v1/chat/completions
```

## 🛠️ MCP 工具

系统提供以下 MCP 工具供 AI 调用：

### 1. `get_components_detail`

获取组件的详细配置信息，包括属性、事件、使用示例等。

**参数**：
- `componentNames` (array, 必填) - 组件名称数组
- `uiFramework` (string, 可选) - UI 框架类型
- `vueVersion` (string, 可选) - Vue 版本：`vue2`、`vue3`、`auto`

### 2. `validate_form_rule`

验证表单规则的正确性，检查必填字段、组件配置等。

**参数**：
- `rule` (array, 必填) - 表单规则数组
- `uiFramework` (string, 可选) - UI 框架类型

### 3. `apply_patch_form_rule`

应用 JSONPatch 补丁来修改表单规则。

### 4. `get_feature_template`

获取表单功能的模板代码，如验证规则、计算属性、事件处理等。

**参数**：
- `featureType` (string, 必填) - 功能类型：`validate`、`computed`、`control`、`event`
- `uiFramework` (string, 可选) - UI 框架类型

### 5. `push_current_rule`

推送当前表单规则到客户端（完成表单生成/修改后调用）。

**参数**：
- `rule` (array, 必填) - 表单规则数组
- `summarize` (string, 可选) - 操作总结（Markdown 格式）
- `uiFramework` (string, 可选) - UI 框架类型

## 🎨 支持的 UI 框架

### Element Plus / Element UI

- **Element Plus** (Vue3): `ui: "element-plus"`
- **Element UI** (Vue2): `ui: "element-ui"`

### Ant Design Vue

- **Vue3**: `ui: "ant-design-vue"`
- **Vue2**: `ui: "ant-design-vue@vue2"`

### Vant（移动端）

- **Vue3**: `ui: "vant"`
- **Vue2**: `ui: "vant@vue2"`

### 组件架构

系统采用模块化的组件架构：

- **`src/components/element-plus/`** - Element Plus 组件定义（Vue2/Vue3）
- **`src/components/ant-design-vue/`** - Ant Design Vue 组件定义（Vue2/Vue3）
- **`src/components/vant/`** - Vant 组件定义（Vue2/Vue3）
- **`src/components/common/`** - 通用组件定义（所有框架支持）

### 组件分类

根据组件用途设置正确的分类标识：

**表单组件 (isField: true)**
- 用于数据输入和收集
- 必须包含 `field` 和 `title` 属性
- 示例：input, select, textarea, date-picker

```typescript
{
  type: 'input',
  isField: true,
  // ... 其他属性
}
```

**容器组件 (isContainer: true)**
- 用于页面布局和结构组织
- 必须包含 `children` 或指定路径的子组件
- 需要设置 `childrenPath`（默认为 'children'）
- 示例：fcRow, col, group, card

```typescript
{
  type: 'fcRow',
  isContainer: true,
  childrenPath: 'children',  // 子组件存储路径
  defaultChildren: ['col'],  // 默认子组件类型
  // ... 其他属性
}
```

**辅助组件 (isAssist: true)**
- 提供其他功能的辅助组件
- 不需要 `field` 和 `title` 属性
- 示例：divider, text, html

```typescript
{
  type: 'divider',
  isAssist: true,
  // ... 其他属性
}
```

## 🔧 扩展新组件

### ComponentInfo 类型说明

`ComponentInfo` 是组件定义的核心接口，用于描述组件的所有信息：

```typescript
interface ComponentInfo {
  // 基础信息
  type: string;                    // 组件类型（必需，唯一标识）
  label: string;                   // 组件标签（显示名称）
  uiFramework: string;             // UI 框架名称
  vueVersion: 'vue2' | 'vue3' | 'common'; // Vue 版本

  // 组件分类标识
  isAssist?: boolean;              // 是否为辅助组件（不需要 field 和 title）
  isContainer?: boolean;           // 是否为容器组件（必须包含 children）
  isField?: boolean;               // 是否为表单组件（必须有 field 和 title）

  // 容器组件配置
  childrenPath?: string;           // 子组件存储路径，如 'props.rule' 或 'children'
  defaultChildren?: string[];      // 默认子组件类型列表

  // 文档和示例
  usage?: string;                  // 使用说明
  examples?: any[];                // 使用示例（FormCreate 规则格式）

  // 组件属性定义
  props?: Array<{
    name: string;                  // 属性名称
    type: 'boolean' | 'string' | 'number' | 'object' | 'Function' | 'Array';
    defaultValue?: any;            // 默认值
    description?: string;          // 属性说明
    options?: Array<Boolean | string | number>; // 可选值列表
    required?: boolean;            // 是否必需
    fields?: ComponentInfo['props']; // 嵌套属性（用于对象类型）
  }>;

  // 组件事件定义
  events?: Array<{
    name: string;                  // 事件名称
    description?: string;          // 事件说明
  }>;
}
```

### 添加新组件步骤

#### 1. 确定组件位置

根据 UI 框架和 Vue 版本，选择对应的组件文件：

- **Element Plus (Vue3)**: `src/components/element-plus/vue3.ts`
- **Element UI (Vue2)**: `src/components/element-plus/vue2.ts`
- **Ant Design Vue (Vue3)**: `src/components/ant-design-vue/vue3.ts`
- **Ant Design Vue (Vue2)**: `src/components/ant-design-vue/vue2.ts`
- **Vant (Vue3)**: `src/components/vant/vue3.ts`
- **Vant (Vue2)**: `src/components/vant/vue2.ts`
- **通用组件**: `src/components/common/index.ts`（所有框架支持）

#### 2. 定义组件信息

在对应的组件文件中添加组件定义：

```typescript
import { ComponentInfo } from '../../core/component-registry.js';

export const elementPlusComponents: ComponentInfo[] = [
  // ... 现有组件
  {
    type: 'myCustomInput',           // 组件类型（唯一标识）
    label: '自定义输入框',            // 显示名称
    uiFramework: 'element-plus',     // UI 框架
    vueVersion: 'vue3',              // Vue 版本
    isField: true,                   // 表单组件
    isContainer: false,
    isAssist: false,
    usage: '用于输入自定义格式的文本', // 使用说明
    
    // 组件属性
    props: [
      {
        name: 'placeholder',
        type: 'string',
        description: '输入框占位文本',
        required: false,
      },
      {
        name: 'maxlength',
        type: 'number',
        description: '最大输入长度',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: false,
        description: '是否禁用',
        required: false,
      },
    ],
    
    // 组件事件
    events: [
      {
        name: 'input',
        description: '输入时触发',
      },
      {
        name: 'change',
        description: '值改变时触发',
      },
    ],
    
    // 使用示例
    examples: [
      {
        type: 'myCustomInput',
        field: 'customField',
        title: '自定义输入',
        props: {
          placeholder: '请输入内容',
          maxlength: 100,
        },
        _fc_drag_tag: 'myCustomInput',
      },
    ],
  },
];
```

### 添加新 UI 框架

如果需要添加全新的 UI 框架支持：

1. **创建组件目录**：`src/components/new-framework/`
2. **创建组件文件**：`vue2.ts` 和/或 `vue3.ts`
3. **导出组件**：在 `src/components/index.ts` 中导出
4. **注册组件**：在 `src/core/component-registry.ts` 的 `initializeComponents()` 中注册
5. **更新框架检测**：在 `src/service/chat.ts` 的 `getUiVersion()` 方法中添加框架别名

## 📝 使用示例

### 示例 1: 生成新表单

```bash
curl -X POST http://localhost:3001/api/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-api-key>" \
  -d '{
    "model": "deepseek-chat",
    "agent": "deepseek",
    "ui": "element-plus",
    "messages": [
      {
        "role": "user",
        "content": "生成一个用户注册表单，包含用户名、邮箱、密码和确认密码字段"
      }
    ],
    "form": {
      "rule": []
    }
  }'
```

### 示例 2: 修改现有表单

```bash
curl -X POST http://localhost:3001/api/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-api-key>" \
  -d '{
    "model": "deepseek-chat",
    "agent": "deepseek",
    "ui": "element-plus",
    "messages": [
      {
        "role": "user",
        "content": "在表单中添加一个手机号字段"
      }
    ],
    "form": {
      "rule": [
        {
          "type": "input",
          "field": "username",
          "title": "用户名",
          "props": {
            "placeholder": "请输入用户名"
          }
        }
      ]
    }
  }'
```

### 示例 3: 使用 JavaScript/TypeScript

```typescript
const response = await fetch('http://localhost:3001/api/chat/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <your-api-key>',
  },
  body: JSON.stringify({
    model: 'deepseek-chat',
    agent: 'deepseek',
    ui: 'element-plus',
    messages: [
      {
        role: 'user',
        content: '生成一个登录表单',
      },
    ],
    context: {
      form: {
        rule: [],
      },
    },
  }),
});

const reader = response.body?.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader!.read();
  if (done) break;

  const chunk = decoder.decode(value);
  const lines = chunk.split('\n');

  for (const line of lines) {
    if (line.startsWith('data: ')) {
      const data = line.slice(6);
      if (data === '[DONE]') {
        console.log('Stream completed');
        break;
      }
      try {
        const json = JSON.parse(data);
        const content = json.choices?.[0]?.delta?.content;
        if (content) {
          process.stdout.write(content);
        }
      } catch (e) {
        // 忽略解析错误
      }
    }
  }
}
```

## 🏗️ 项目结构

```
form-create-assistant/
├── src/
│   ├── components/          # UI 组件定义
│   │   ├── element-plus/    # Element Plus 组件
│   │   ├── ant-design-vue/  # Ant Design Vue 组件
│   │   ├── vant/            # Vant 组件
│   │   └── common/          # 通用组件
│   ├── core/                # 核心功能
│   │   ├── component-registry.ts      # 组件注册表
│   │   ├── form-rule-generator.ts     # 表单规则生成器
│   │   └── json-patch-validator.ts    # JSONPatch 验证器
│   ├── service/             # 服务层
│   │   ├── agent/           # AI Agent 实现
│   │   ├── tools/           # MCP 工具定义
│   │   ├── chat.ts          # 聊天服务核心
│   │   ├── index.ts         # Express 服务器入口
│   │   └── SYSTEM_PROMPT.md # 系统提示词
│   └── utils/               # 工具函数
├── dist/                    # 编译输出
├── log/                     # 日志文件
├── package.json
├── tsconfig.json
└── README.md
```

## 🐛 故障排除

### 服务无法启动

1. 检查端口是否被占用：`lsof -i :3001`
2. 检查 Node.js 版本：`node --version`（建议 v18+）
3. 检查依赖是否安装：`pnpm install`

### API 请求失败

1. 检查 API 密钥是否正确
2. 检查 Agent 类型和模型是否匹配
3. 查看日志文件：`./log/` 目录

## 联系

![http://static.form-create.com/file/img/support.jpg](http://static.form-create.com/file/img/support.jpg)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2021-present xaboy
