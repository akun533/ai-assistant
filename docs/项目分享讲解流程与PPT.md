# AI表单助理 - 智能表单生成平台

## 项目分享讲解流程

### 📋 讲解流程概览

**总时长建议**: 45-60分钟

**一、开场导入（5分钟）**
- 自我介绍与项目背景
- 表单开发的痛点分析
- 项目定位与核心价值

**二、技术架构总览（10分钟）**
- 系统整体架构设计
- 核心模块划分
- 技术栈选型说明

**三、AI Agent系统深度解析（10分钟）**
- 多模型支持架构
- Agent实现原理
- API密钥管理策略

**四、组件库与MCP工具系统（10分钟）**
- 多UI框架支持机制
- MCP工具设计原理
- 核心工具功能演示

**五、表单生成流程（8分钟）**
- 自然语言到规则的转换
- 验证与修复机制
- 增量更新策略

**六、前端面板与部署（5分钟）**
- AI面板组件功能
- Docker部署方案
- 配置管理说明

**七、演示与互动（10-15分钟）**
- 现场表单生成演示
- 常见问题解答
- 技术讨论交流

---

## PPT文档内容

### Slide 1: 封面
---

# AI表单助理
## 智能表单生成平台

### 基于AI的自然语言表单生成解决方案

**汇报人**: Matrix Agent  
**日期**: 2026年2月

---

### Slide 2: 目录
---

## 目录

01. 项目概述与核心价值
02. 系统架构设计
03. AI Agent系统详解
04. 组件库架构设计
05. MCP工具系统
06. 表单生成流程
07. 前端面板组件
08. 部署与配置
09. 演示与案例
10. 总结与展望

---

### Slide 3: 项目背景
---

## 01 项目背景与核心价值

### 行业痛点

- **效率低下**: 表单开发依赖人工编写大量重复代码
- **维护困难**: 表单规则修改需要开发人员介入
- **框架隔离**: 不同UI框架的表单代码无法复用
- **验证复杂**: 表单验证逻辑分散，难以统一管理

### 我们的解决方案

AI表单助理通过**AI自然语言理解**和**标准化表单规则**实现：

- 快速生成符合规范的表单代码
- 支持多种主流UI框架
- 智能验证与自动修复
- 增量更新，无需全量重建

---

### Slide 4: 项目定位
---

## 项目定位

### 🤖 AI表单助理

**定位**: 基于MCP协议的智能表单生成助手

**核心能力**:

| 能力维度 | 描述 |
|---------|------|
| 自然语言生成 | 用户描述需求，AI自动生成表单规则 |
| 多框架支持 | Element Plus、Ant Design Vue、Vant、TA404-UI |
| 智能验证 | 自动检查规则正确性，提供修复建议 |
| 增量更新 | 基于JSON Patch的精确修改机制 |

**技术特点**:

- 遵循OpenAI Chat Completions API规范
- 支持多模型无缝切换
- 流式响应，实时展示生成过程
- 完善的MCP工具系统

---

### Slide 5: 功能特性
---

## 功能特性

### ✨ 核心功能

#### 多AI服务支持
- DeepSeek（默认）
- 智谱AI（ZhipuAI）
- 通义千问（Qwen）
- 自定义OpenAI兼容接口

#### 多UI框架支持
- Element Plus / Element UI（Vue2/3）
- Ant Design Vue（Vue2/3）
- Vant（移动端Vue2/3）
- 银海TA404-UI（Vue2）

#### 智能表单能力
- 自然语言生成表单规则
- 自动验证与错误修复
- JSON Patch增量更新
- 表单功能模板生成

#### 开发体验
- SSE流式响应
- AI面板聊天组件
- 完整的API接口
- Docker容器化部署

---

### Slide 6: 技术架构
---

## 02 系统架构设计

### 整体架构图

```
┌─────────────────────────────────────────────────────────────────┐
│                        前端客户端                                 │
│  ┌─────────────┐    ┌─────────────────┐                         │
│  │form-create  │    │   AI面板组件     │                         │
│  │   设计器    │    │   @akun15623/   │                         │
│  │             │    │    ai-panel     │                         │
│  └─────────────┘    └─────────────────┘                         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     AI Assistant 服务                            │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                    Express HTTP 服务                       │ │
│  └───────────────────────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                      Chat 聊天核心                         │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐    │ │
│  │  │Message      │  │Prompt       │  │Agent            │    │ │
│  │  │Processor    │  │Builder      │  │Manager          │    │ │
│  │  └─────────────┘  └─────────────┘  └─────────────────┘    │ │
│  └───────────────────────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                    MCP 工具系统                            │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐    │ │
│  │  │ToolRegistry │  │表单工具      │  │组件工具          │    │ │
│  │  └─────────────┘  └─────────────┘  └─────────────────┘    │ │
│  └───────────────────────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │                    核心模块                                │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐    │ │
│  │  │Component    │  │FormRule     │  │JSON Patch       │    │ │
│  │  │Registry     │  │Generator    │  │Validator        │    │ │
│  │  └─────────────┘  └─────────────┘  └─────────────────┘    │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      外部服务                                    │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐          │
│  │大语言模型   │  │  Dify API   │  │  自定义API      │          │
│  │  API        │  │             │  │  端点           │          │
│  └─────────────┘  └─────────────┘  └─────────────────┘          │
└─────────────────────────────────────────────────────────────────┘
```

---

### Slide 7: 技术栈
---

## 技术栈概览

### 运行时与环境

| 层级 | 技术选型 | 用途 |
|------|---------|------|
| 运行时 | Node.js 18+ | 服务端运行环境 |
| 框架 | Express 5.x | Web服务框架 |
| 类型系统 | TypeScript 5.x | 类型安全与可维护性 |
| AI协议 | MCP SDK | 模型上下文协议实现 |
| JSON处理 | fast-json-patch | JSON Patch操作支持 |
| 表单验证 | Zod | Schema验证 |
| UI框架 | Vue 2/3 | 多版本兼容 |
| 部署 | Docker | 容器化部署 |

### 架构设计原则

- **分层架构**: 表现层 → 服务层 → 核心层 → 外部服务
- **模块化设计**: 各模块职责清晰，便于维护和扩展
- **多框架支持**: 通过ComponentRegistry实现统一管理
- **流式处理**: 全程采用SSE流式响应
- **工具驱动**: 基于MCP协议实现可扩展工具系统

---

### Slide 8: 模块划分
---

## 核心模块划分

### 模块职责说明

| 模块 | 文件路径 | 核心职责 |
|------|---------|---------|
| Chat | `src/service/chat.ts` | 对外提供聊天接口，生成OpenAI兼容响应 |
| MessageProcessor | `src/service/message-processor.ts` | 处理消息流，递归调用Agent，支持工具调用 |
| AgentManager | `src/service/agent-manager.ts` | 管理Agent实例缓存，支持多模型切换 |
| ComponentRegistry | `src/core/component-registry.ts` | 组件注册与查询，管理多UI框架组件 |
| FormRuleGenerator | `src/core/form-rule-generator.ts` | 表单规则验证与改进 |
| PromptBuilder | `src/service/prompt-builder.ts` | 构建系统提示词，组装组件列表 |
| ToolRegistry | `src/service/tools.ts` | MCP工具注册与管理 |

### 文件目录结构

```
ai-assistant/
├── src/
│   ├── service/                    # 服务层
│   │   ├── index.ts               # Express入口
│   │   ├── chat.ts                # 聊天核心
│   │   ├── agent-manager.ts       # Agent管理
│   │   ├── message-processor.ts   # 消息处理
│   │   ├── prompt-builder.ts      # 提示词构建
│   │   ├── tools.ts               # 工具注册
│   │   └── agent/                 # Agent实现
│   ├── core/                       # 核心模块
│   │   ├── component-registry.ts  # 组件注册
│   │   └── form-rule-generator.ts # 表单规则生成
│   ├── components/                 # 组件定义
│   │   ├── element-plus/
│   │   ├── ant-design-vue/
│   │   ├── vant/
│   │   ├── ta404-ui/
│   │   └── common/
│   └── types/                      # 类型定义
├── dist/                           # 构建输出
├── docs/                           # 文档
└── package.json
```

---

### Slide 9: AI Agent系统
---

## 03 AI Agent系统详解

### Agent模式概述

AI Assistant采用**Agent模式**实现与各大语言模型的对接：

```
┌─────────────────────────────────────────────────────────┐
│                    Agent 管理架构                         │
│                                                         │
│  ┌─────────────┐                                        │
│  │AgentManager │  ← 实例缓存与生命周期管理               │
│  │             │                                        │
│  │  ┌───────┐ │    ┌───────┐    ┌───────┐              │
│  │  │DeepSeek│    │ Dify  │    │ Qwen  │              │
│  │  │ Agent │    │ Agent │    │ Agent │              │
│  │  └───────┘ │    └───────┘    └───────┘              │
│  │  ┌───────┐ │    ┌───────┐    ┌───────┐              │
│  │  │Zhipu  │    │ Other │    │ ...   │              │
│  │  │ Agent │    │ Agent │    │       │              │
│  │  └───────┘ │    └───────┘    └───────┘              │
│  └─────────────┘                                        │
└─────────────────────────────────────────────────────────┘
```

### Agent核心职责

- **请求转发**: 将用户请求转换为模型可理解的格式
- **响应处理**: 解析模型返回的流式响应
- **工具调用管理**: 协调模型发起的工具调用
- **状态维护**: 管理对话上下文和会话状态

---

### Slide 10: 多模型支持
---

## 多模型支持架构

### 支持的AI服务

#### DeepSeek（默认）
- **Agent类型**: `deepseek`
- **API端点**: `https://api.deepseek.com/v1/chat/completions`

#### 智谱AI (ZhipuAI)
- **Agent类型**: `zhipu`
- **API端点**: `https://open.bigmodel.cn/api/paas/v4/chat/completions`

#### 通义千问 (Qwen)
- **Agent类型**: `qwen`
- **API端点**: `https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions`

#### Other（自定义OpenAI兼容接口）
- **Agent类型**: `other`
- **API端点**: 通过`AGENT_API`环境变量配置

### OpenAI兼容设计

所有Agent实现都遵循OpenAI Chat Completions API规范：

```typescript
interface ChatRequest {
    model: string;           // 模型名称
    ui: string;              // UI框架类型
    messages: OpenAIMessage[]; // 对话消息
    agent?: AgentType;       // Agent类型
    context: Record<string, any>; // 上下文
    conversation_id: string; // 会话ID
}
```

---

### Slide 11: API密钥管理
---

## API密钥管理策略

### 密钥获取流程

```
请求到达
    │
    ▼
┌───────────────────┐
│ Authorization     │  优先使用请求头
│ Header 存在?      │
└───────────────────┘
     │是          │否
     ▼            ▼
┌───────────┐  ┌───────────────────┐
│提取Bearer │  │DEFAULT_TOKEN      │
│Token      │  │环境变量存在?      │
└───────────┘  └───────────────────┘
     │            │是         │否
     ▼            ▼           ▼
┌───────────┐  ┌─────────┐  ┌─────────┐
│使用Header │  │使用环境 │  │使用默认 │
│Token      │  │变量     │  │Token    │
└───────────┘  └─────────┘  └─────────┘
     │            │           │
     └─────┬──────┴───────────┘
           ▼
     ┌───────────┐
     │验证并调用 │
     │Agent      │
     └───────────┘
```

### 配置示例

```bash
# .env 文件配置
DEFAULT_TOKEN=sk-your-deepseek-api-key
AGENT_API=https://api.example.com/v1/chat/completions
AGENT_TIMEOUT=180000
```

---

### Slide 12: 组件库架构
---

## 04 组件库架构设计

### 多UI框架支持架构

```
┌─────────────────────────────────────────────────────────┐
│                   核心层                                 │
│  ┌─────────────┐  ┌─────────────┐                      │
│  │Component    │  │Prompt       │                      │
│  │Registry     │  │Builder      │                      │
│  └─────────────┘  └─────────────┘                      │
└─────────────────────────────────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────────┐
│                  UI框架适配层                            │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌─────────┐ │
│  │Element    │ │Ant Design │ │   Vant    │ │ta404-ui │ │
│  │Plus/UI    │ │   Vue     │ │           │ │         │ │
│  │Vue2/Vue3  │ │Vue2/Vue3  │ │Vue2/Vue3  │ │  Vue2   │ │
│  └───────────┘ └───────────┘ └───────────┘ └─────────┘ │
└─────────────────────────────────────────────────────────┘
```

### 组件信息模型

```typescript
interface ComponentInfo {
    type: string;              // 组件类型标识
    label?: string;            // 组件显示名称
    uiFramework: string;       // UI框架标识
    vueVersion: 'vue2' | 'vue3' | 'common';  // Vue版本
    isField?: boolean;         // 是否为表单字段
    isContainer?: boolean;     // 是否为容器组件
    isAssist?: boolean;        // 是否为辅助组件
    props?: PropDefinition[];  // 属性定义
    events?: EventDefinition[]; // 事件定义
}
```

---

### Slide 13: 组件分类
---

## 组件分类体系

### 分类维度

| 分类 | 标识 | 说明 | 示例 |
|------|------|------|------|
| 表单组件 | isField: true | 用于数据输入和收集 | input, select, textarea |
| 容器组件 | isContainer: true | 用于页面布局和结构组织 | fcRow, col, group, card |
| 辅助组件 | isAssist: true | 提供其他功能的辅助组件 | divider, text, html |

### 分类使用示例

```typescript
// 表单组件
{
    type: 'input',
    isField: true,
    field: 'username',
    title: '用户名'
}

// 容器组件
{
    type: 'fcRow',
    isContainer: true,
    childrenPath: 'children',
    children: []
}

// 辅助组件
{
    type: 'divider',
    isAssist: true
}
```

### 组件分类列表

| 分类 | 名称 | 说明 | 示例组件 |
|------|------|------|---------|
| formComponents | 表单组件 | 用于数据输入、收集和验证 | input, select, radio |
| layoutComponents | 容器布局组件 | 用于页面布局和结构组织 | fcRow, col, group |
| inputComponents | 输入组件 | 用于用户录入文本类型信息 | input, textarea |
| selectComponents | 选择组件 | 用户选择预定义选择项 | select, checkbox |
| dateComponents | 日期时间组件 | 用户录入时间类型字段 | date-picker, time-picker |
| displayComponents | 数据展示组件 | 主要用于展示数据 | text, html |
| assistComponents | 辅助组件 | 提供其他功能的辅助组件 | divider, card |

---

### Slide 14: 支持的UI框架
---

## 支持的UI框架

### Element Plus / Element UI
- **Vue3**: `ui: "element-plus"`
- **Vue2**: `ui: "element-ui"`

### Ant Design Vue
- **Vue3**: `ui: "ant-design-vue"`
- **Vue2**: `ui: "ant-design-vue@vue2"`

### Vant（移动端）
- **Vue3**: `ui: "vant"`
- **Vue2**: `ui: "vant@vue2"`

### 银海TA404-UI
- **Vue2**: `ui: "ta404-ui@vue2"`

### Vue2/Vue3兼容性策略

1. **优先完全匹配**: 查找完全匹配的框架和版本
2. **兼容版本**: 查找通用版本组件
3. **回退机制**: 框架不匹配时使用通用组件

---

### Slide 15: MCP工具系统
---

## 05 MCP工具系统

### MCP协议概述

MCP (Model Context Protocol) 是一个用于大语言模型与外部工具交互的标准化协议。

```
┌─────────────────────────────────────────────────────────┐
│                  MCP 工具调用流程                         │
│                                                         │
│  ┌──────────┐    ┌──────────┐    ┌──────────────────┐  │
│  │大语言模型│ →  │ToolRegistry│ → │工具处理器        │  │
│  │          │    │          │    │                  │  │
│  │  •思考   │    │  •注册   │    │  •验证参数       │  │
│  │  •生成   │    │  •查询   │    │  •执行逻辑       │  │
│  │  •调用   │    │  •管理   │    │  •返回结果       │  │
│  └──────────┘    └──────────┘    └──────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### 核心工具列表

| 工具名称 | 功能描述 | 用途 |
|---------|---------|------|
| validate_form_rule | 验证表单规则有效性 | 检查规则正确性，提供修复建议 |
| apply_patch_form_rule | 应用JSONPatch补丁 | 增量修改表单规则 |
| get_components_detail | 获取组件详情 | 查询组件属性、事件、使用示例 |
| get_feature_template | 获取功能模板 | 生成验证、计算、控制等模板代码 |
| push_current_rule | 推送当前表单规则 | 完成表单生成/修改后推送结果 |

---

### Slide 16: 工具定义
---

## 工具定义模型

### ToolDefinition结构

```typescript
interface ToolDefinition {
    name: string;           // 工具唯一标识
    title?: string;         // 工具显示名称
    description: string;    // 工具功能描述
    inputSchema: {          // 输入参数Schema
        type: 'object';
        properties: Record<string, SchemaProperty>;
        required?: string[];
    };
    private?: boolean;      // 是否为私有工具
}

interface SchemaProperty {
    type: 'string' | 'number' | 'boolean' | 'array' | 'object';
    description?: string;
    enum?: string[];
    defaultValue?: any;
}
```

### 工具注册示例

```typescript
export const validateFormRuleTool: ToolRegistration = {
    definition: {
        name: 'validate_form_rule',
        title: '检查表单规则有效性',
        description: '根据规范校验表单规则，支持全量与增量校验',
        inputSchema: {
            type: 'object',
            properties: {
                sessionId: { type: 'string', description: '会话标识符' },
                rule: { type: 'array', description: '要校验的组件规则' },
                operationType: { type: 'string', enum: ['create', 'modify'] },
                uiFramework: { type: 'string', description: 'UI框架类型' }
            },
            required: ['rule']
        }
    },
    handler: async (args, request) => {
        // 工具处理逻辑
        return result;
    }
};
```

---

### Slide 17: 表单验证工具
---

## 核心工具详解

### 表单验证工具 (validate_form_rule)

**功能**: 验证表单规则的正确性，检查必填字段、组件配置等

**参数说明**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|-----|------|
| sessionId | string | 否 | 会话标识符 |
| rule | array | 是 | 表单规则数组 |
| operationType | string | 否 | 操作类型：create/modify |
| uiFramework | string | 否 | UI框架类型 |

**执行流程**:

```
接收规则 → 结构验证 → 组件验证 → 递归验证子组件 → 生成验证报告
```

**返回结果**:

```json
{
    "isValid": true,
    "errors": [],
    "suggestions": [],
    "improvedRule": { /* 优化后的规则 */ }
}
```

---

### Slide 18: JSON Patch工具
---

## JSON Patch工具 (apply_patch_form_rule)

### 功能描述

应用RFC 6902 JSON Patch标准进行增量更新

### 操作类型

| 操作 | 说明 | 示例 |
|------|------|------|
| add | 添加元素 | `{ "op": "add", "path": "/rule/-", "value": {...} }` |
| remove | 删除元素 | `{ "op": "remove", "path": "/rule/0" }` |
| replace | 替换元素 | `{ "op": "replace", "path": "/rule/0/title", "value": "新标题" }` |
| move | 移动元素 | `{ "op": "move", "from": "/rule/0", "path": "/rule/1" }` |
| copy | 复制元素 | `{ "op": "copy", "from": "/rule/0", "path": "/rule/1" }` |
| test | 测试值 | `{ "op": "test", "path": "/rule/0/type", "value": "input" }` |

### 增量更新优势

- **精确修改**: 只修改需要变更的部分
- **高效传输**: 减少数据传输量
- **版本兼容**: 支持复杂的版本合并
- **可追溯性**: 操作记录清晰可查

---

### Slide 19: 表单生成流程
---

## 06 表单生成流程

### 整体流程

```
┌──────────────────────────────────────────────────────────────┐
│                    表单生成流程                               │
│                                                              │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐              │
│  │用户输入  │ →  │AI理解    │ →  │组件选择  │              │
│  │自然语言 │    │需求      │    │          │              │
│  └──────────┘    └──────────┘    └──────────┘              │
│                                      │                      │
│                                      ▼                      │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐              │
│  │返回优化  │ ←  │验证修复  │ ←  │生成规则  │              │
│  │后规则    │    │          │    │          │              │
│  └──────────┘    └──────────┘    └──────────┘              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### 请求示例

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
    ]
  }'
```

---

### Slide 20: 规则数据结构
---

## 表单规则数据结构

### FormRule接口

```typescript
interface FormRule {
    rule: FormField[];      // 表单字段规则
    option?: Record<string, any>; // 表单配置选项
}

interface FormField {
    type: string;           // 组件类型
    field?: string;         // 字段名
    title?: string;         // 字段标题
    name?: string;          // 显示名称
    props?: Record<string, any>;     // 组件属性
    validate?: ValidateRule[];        // 验证规则
    children?: FormField[] | string[]; // 子组件
}
```

### 规则示例

```json
{
  "rule": [
    {
      "type": "input",
      "field": "username",
      "title": "用户名",
      "props": {
        "placeholder": "请输入用户名"
      },
      "validate": [
        { "required": true, "message": "用户名不能为空", "trigger": "blur" }
      ]
    },
    {
      "type": "input",
      "field": "email",
      "title": "邮箱",
      "props": {
        "placeholder": "请输入邮箱"
      }
    }
  ],
  "option": {}
}
```

---

### Slide 21: 验证与修复机制
---

## 验证与修复机制

### 多层验证体系

```
┌─────────────────────────────────────────────────────────┐
│                    验证层级                               │
│  ┌───────────────────────────────────────────────────┐ │
│  │  1. 基础结构验证                                   │ │
│  │     - 检查rule数组是否存在                         │ │
│  │     - 验证字段类型                                 │ │
│  └───────────────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────────────┐ │
│  │  2. 组件属性验证                                   │ │
│  │     - 检查必需属性                                 │ │
│  │     - 验证属性类型                                 │ │
│  └───────────────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────────────┐ │
│  │  3. 业务逻辑验证                                   │ │
│  │     - 验证规则检查                                 │ │
│  │     - 关联字段验证                                 │ │
│  └───────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
```

### 自动修复策略

- **属性迁移**: 自动将`formCreate`前缀的属性迁移到正确位置
- **默认值填充**: 为缺少必需属性的组件填充默认值
- **组件类型推断**: 根据上下文推断缺失的组件类型
- **层级修复**: 自动补全容器组件的子组件

---

### Slide 22: 前端面板组件
---

## 07 前端面板组件

### @akun15623/ai-panel

一个基于Vue 3的AI助手聊天面板组件，可轻松集成到项目中。

### 功能特性

- 实时聊天界面，支持用户与AI助手对话
- Markdown渲染，支持代码高亮和语法着色
- JSON差异对比显示功能
- 响应式设计，适配不同屏幕尺寸
- 代码块一键复制功能
- 流式数据处理，实时显示AI回复
- AI思考链可视化，展示工具调用过程
- 支持多种UI框架
- 支持表单规则生成和可视化

### 安装使用

```bash
npm install @akun15623/ai-panel
```

```vue
<template>
  <div style="height: 600px;">
    <AiPanel 
      :request-option="requestOption"
      :config="config"
    />
  </div>
</template>

<script>
import AiPanel from '@akun15623/ai-panel';

export default {
  components: {
    AiPanel
  },
  data() {
    return {
      requestOption: {
        ui: 'ta404-ui@vue2',
        basic: true,
        form: { rule: '[]' },
        messages: [],
      },
      config: {
        title: 'AI助理',
        clearChat: '清空对话',
        welcomeTitle: '欢迎使用',
        welcomeMessage: '我可以帮您生成表单',
        inputPlaceholder: '请输入您的问题...',
      }
    }
  }
}
</script>
```

---

### Slide 23: 部署配置
---

## 08 部署与配置

### Docker部署

```bash
# 构建镜像
docker build -t ai-assistant .

# 运行容器
docker run -d -p 3001:3001 --env-file .env ai-assistant
```

### 环境变量配置

| 变量 | 默认值 | 说明 |
|------|-------|------|
| PORT | 3001 | 服务端口 |
| DEFAULT_AGENT | deepseek | 默认Agent类型 |
| DEFAULT_MODEL | deepseek-chat | 默认模型 |
| DEFAULT_TOKEN | - | 默认API密钥 |
| AGENT_API | - | 自定义API端点 |
| AGENT_TIMEOUT | 180000 | 请求超时时间(ms) |

### 服务启动

```bash
# 使用tsx直接运行
pnpm start

# 服务启动后监听 http://localhost:3001
```

### API接口

| 接口 | 方法 | 说明 |
|------|------|------|
| /api/health | GET | 健康检查 |
| /api/chat/completions | POST | 聊天请求(流式) |

---

### Slide 24: API接口说明
---

## API接口详解

### Chat Completions接口

**请求格式**:

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
  "form": {
    "rule": []
  }
}
```

**请求参数说明**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|-----|------|
| ui | string | 是 | UI框架类型 |
| messages | array | 是 | 对话消息数组 |
| form | object | 否 | 当前表单规则 |
| model | string | 否 | AI模型名称 |
| agent | string | 否 | AI服务提供商 |

**响应格式** (SSE):

```
data: {"id":"chatcmpl-xxx","object":"formCreateAgent","created":1234567890,"choices":[{"index":0,"delta":{"role":"assistant","content":"..."},"finish_reason":null}]}

data: [DONE]
```

---

### Slide 25: 演示案例
---

## 09 演示与案例

### 示例1: 生成新表单

**用户输入**:
```
生成一个用户注册表单，包含用户名、邮箱、密码和确认密码字段
```

**生成结果**:
```json
{
  "rule": [
    {
      "type": "input",
      "field": "username",
      "title": "用户名",
      "props": { "placeholder": "请输入用户名" }
    },
    {
      "type": "input",
      "field": "email",
      "title": "邮箱",
      "props": { "placeholder": "请输入邮箱" }
    },
    {
      "type": "password",
      "field": "password",
      "title": "密码",
      "props": { "placeholder": "请输入密码" }
    },
    {
      "type": "password",
      "field": "confirmPassword",
      "title": "确认密码",
      "props": { "placeholder": "请再次输入密码" }
    }
  ]
}
```

### 示例2: 修改现有表单

**用户输入**:
```
在表单中添加一个手机号字段
```

**系统操作**:
- 接收当前表单规则
- 生成JSON Patch添加新字段
- 验证新规则正确性
- 返回修改后的完整规则

---

### Slide 26: 扩展新组件
---

## 如何扩展新组件

### 添加新组件步骤

#### 1. 确定组件位置

| UI框架 | Vue版本 | 文件路径 |
|--------|--------|---------|
| Element Plus | Vue3 | `src/components/element-plus/vue3/index.ts` |
| Element UI | Vue2 | `src/components/element-plus/vue2/index.ts` |
| Ant Design Vue | Vue3 | `src/components/ant-design-vue/vue3/index.ts` |
| Vant | Vue3 | `src/components/vant/vue3/index.ts` |
| 通用组件 | - | `src/components/common/index.ts` |

#### 2. 定义组件信息

```typescript
{
    type: 'myCustomInput',        // 组件类型（唯一标识）
    label: '自定义输入框',          // 显示名称
    uiFramework: 'element-plus',  // UI框架
    vueVersion: 'vue3',           // Vue版本
    isField: true,                // 表单组件
    props: [
        {
            name: 'placeholder',
            type: 'string',
            description: '输入框占位文本',
            required: false
        }
    ],
    examples: [
        {
            type: 'myCustomInput',
            field: 'customField',
            title: '自定义输入'
        }
    ]
}
```

---

### Slide 27: 扩展新框架
---

## 添加新UI框架支持

### 步骤概述

1. **创建组件目录**: `src/components/new-framework/`
2. **创建组件文件**: `vue2/index.ts` 和/或 `vue3/index.ts`
3. **导出组件**: 在 `src/components/index.ts` 中导出
4. **注册组件**: 在 `src/core/component-registry.ts` 中注册
5. **更新框架检测**: 在 `src/service/chat.ts` 的 `getUiVersion()` 中添加别名

### 框架注册示例

```typescript
// src/core/component-registry.ts
constructor() {
    this.initializeComponents();
    
    // 添加新框架组件
    newFrameworkComponents.forEach((c) => {
        this.registerComponent(c.type, c);
    });
}

// 注册框架自定义工具
this.registerFrameworkTools('new-framework@vue3', newFrameworkFormTools);
```

### 工具扩展

每个框架可以注册特有的工具实现：

```typescript
// 为新框架注册自定义工具
this.registerFrameworkTools('new-framework@vue3', [
    newFrameworkSpecialTool,
    // 其他工具...
]);
```

---

### Slide 28: 总结
---

## 10 总结与展望

### 项目总结

**AI表单助理**是一个基于MCP协议的智能表单生成平台，实现了：

- ✅ **自然语言生成**: 用户描述需求，AI自动生成表单规则
- ✅ **多框架支持**: Element Plus、Ant Design Vue、Vant、TA404-UI
- ✅ **智能验证**: 自动检查规则正确性，提供修复建议
- ✅ **增量更新**: 基于JSON Patch的精确修改机制
- ✅ **流式响应**: 实时展示生成过程，用户体验良好
- ✅ **易于扩展**: 完善的组件和工具扩展机制

### 技术亮点

1. **架构设计**: 分层架构+模块化设计，职责清晰
2. **AI集成**: 多模型支持，OpenAI兼容接口
3. **工具系统**: 基于MCP的可扩展工具框架
4. **用户体验**: 流式响应+实时反馈
5. **部署便捷**: Docker容器化，开箱即用

---

### Slide 29: 未来展望
---

## 未来展望

### 短期规划

- [ ] 支持更多UI框架（Bootstrap, Vuetify等）
- [ ] 增强表单验证规则库
- [ ] 添加更多表单功能模板
- [ ] 优化AI提示词，提升生成质量

### 中期规划

- [ ] 多语言支持
- [ ] 表单模板市场
- [ ] 团队协作功能
- [ ] 性能优化与监控

### 长期愿景

- [ ] 智能表单设计助手
- [ ] 低代码表单构建平台
- [ ] 企业级表单管理系统
- [ ] AI驱动的表单智能化解决方案

---

### Slide 30: 结束页
---

## 感谢聆听

### 联系方式

- **项目地址**: https://github.com/akun/ai-assistant
- **文档**: /docs 目录下有详细的技术文档
- **问题反馈**: 欢迎提交Issue

### Q&A

欢迎提问与讨论！

---

## 📝 讲解技巧建议

### 时间控制

- **开场**: 5分钟 - 用痛点引入，引起共鸣
- **架构**: 10分钟 - 图表辅助，清晰直观
- **技术细节**: 15分钟 - 深入核心，展示深度
- **演示**: 10分钟 - 现场操作，增强说服力
- **Q&A**: 预留时间回应疑问

### 演示建议

1. **准备充分**: 提前准备好演示环境和数据
2. **循序渐进**: 从简单案例开始，逐步复杂化
3. **对比展示**: 展示使用前后的效率提升
4. **互动引导**: 邀请听众参与演示

### 常见问题应对

- **技术深度**: 准备2-3个深入问题的答案
- **竞品对比**: 准备好与竞品的差异化说明
- **落地难度**: 强调部署简便性和文档完善度
