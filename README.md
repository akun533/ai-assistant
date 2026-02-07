# AI Assistant

通用 AI 助手服务，支持多 AI 服务、流式响应 (SSE)、MCP 工具注册系统和会话能力。

## ✨ 功能特性

- 🤖 **多 AI 服务支持** - 支持 DeepSeek、智谱AI、通义千问及自定义 OpenAI 兼容接口
- 🚀 **流式响应** - 支持 Server-Sent Events (SSE) 实时流式响应
- 🧩 **MCP 工具集成** - 集成 Model Context Protocol 工具，提供通用工具调用能力
- 💬 **会话管理** - 支持会话 ID 生成和上下文管理
- 🔌 **OpenAI 兼容** - 完全兼容 OpenAI Chat Completions API 格式

## 📦 安装

```bash
# 克隆项目
git clone https://github.com/your-repo/ai-assistant
cd ai-assistant

# 安装依赖
pnpm install
```

## 🚀 快速开始

```bash
# 使用 tsx 直接运行
pnpm start
```

服务启动后，默认监听 `http://localhost:3001`

### Docker 部署

```bash
# 构建镜像
docker build -t ai-assistant .

# 运行容器
docker run -d -p 3001:3001 --env-file .env ai-assistant
```

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
DEFAULT_TOKEN=your-api-key

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

## 📡 API 接口

### 健康检查

```bash
GET /api/health
```

响应：
```json
{
  "success": true,
  "message": "AI 助手 聊天服务正常运行",
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
  "messages": [
    {
      "role": "user",
      "content": "你好，请介绍一下你自己"
    }
  ]
}
```

**请求参数说明**：

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `messages` | array | 是 | 对话消息数组（OpenAI 格式） |
| `model` | string | 否 | AI 模型名称 |
| `agent` | string | 否 | AI 服务提供商：`deepseek`、`zhipu`、`qwen`、`other`、`dify`（默认: `deepseek`） |
| `ui` | string | 否 | UI 框架标识（用于框架特定工具） |

**响应格式**（Server-Sent Events）：

```
data: {"id":"chatcmpl-xxx","object":"chat.completion.chunk","created":1234567890,"choices":[{"index":0,"delta":{"role":"assistant","content":"..."},"finish_reason":null}]}

data: {"id":"chatcmpl-xxx","object":"chat.completion.chunk","created":1234567890,"choices":[{"index":0,"delta":{"content":"..."},"finish_reason":null}]}

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

系统提供 MCP 工具注册框架，支持自定义工具集成。

### 注册自定义工具

```typescript
import { ToolRegistry } from './src/service/tools.js';

const toolRegistry = new ToolRegistry();

// 注册工具
toolRegistry.registerTool({
  definition: {
    name: 'my_custom_tool',
    title: '我的自定义工具',
    description: '执行自定义任务的工具',
    inputSchema: {
      type: 'object',
      properties: {
        param1: {
          type: 'string',
          description: '参数1',
        },
        param2: {
          type: 'number',
          description: '参数2',
        },
      },
      required: ['param1'],
    },
  },
  handler: async (args, context) => {
    // 工具处理逻辑
    return { result: 'success', data: args };
  },
});
```

### 框架特定工具

可以为特定 UI 框架注册自定义工具：

```typescript
toolRegistry.registerFrameworkTools('my-framework', [
  {
    definition: {
      name: 'framework_specific_tool',
      description: '特定框架的工具',
      inputSchema: {
        type: 'object',
        properties: {},
      },
    },
    handler: async (args, context) => {
      // 处理逻辑
      return {};
    },
  },
]);
```

## 🏗️ 项目结构

```
ai-assistant/
├── src/
│   ├── core/                  # 核心功能
│   │   └── component-registry.ts    # 工具注册表
│   ├── service/               # 服务层
│   │   ├── agent/             # AI Agent 实现
│   │   ├── tools.ts           # MCP 工具注册
│   │   ├── chat.ts            # 聊天服务核心
│   │   ├── message-processor.ts    # 消息处理器
│   │   ├── prompt-builder.ts  # 提示词构建器
│   │   └── index.ts           # Express 服务器入口
│   ├── types/                 # 类型定义
│   │   └── index.ts
│   └── utils/                 # 工具函数
│       └── index.ts
├── backup_components/         # 备份的表单组件（可删除）
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 使用示例

### 示例 1: 基础对话

```bash
curl -X POST http://localhost:3001/api/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-api-key>" \
  -d '{
    "model": "deepseek-chat",
    "agent": "deepseek",
    "messages": [
      {
        "role": "user",
        "content": "你好，请介绍一下你自己"
      }
    ]
  }'
```

### 示例 2: 使用 JavaScript/TypeScript

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
    messages: [
      {
        role: 'user',
        content: '你好，请介绍一下你自己',
      },
    ],
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

## 🐛 故障排除

### 服务无法启动

1. 检查端口是否被占用：`lsof -i :3001`
2. 检查 Node.js 版本：`node --version`（建议 v18+）
3. 检查依赖是否安装：`pnpm install`

### API 请求失败

1. 检查 API 密钥是否正确
2. 检查 Agent 类型和模型是否匹配
3. 查看日志文件：`./log/` 目录

## License

[MIT](http://opensource.org/licenses/MIT)
