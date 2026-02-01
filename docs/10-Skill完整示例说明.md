# Skill 示例：AI 表单生成器

本文档通过一个完整的 Skill 示例，详细展示 Skill 的目录结构、各文件作用，以及与单个 MD 文件的本质区别。

---

## 目录结构

```
ai-form-generator/
├── SKILL.md                         # 【必需】Skill 入口文件
├── scripts/
│   ├── generate-form.ts             # 表单生成脚本
│   └── validate-form.ts             # 表单验证脚本
├── references/
│   ├── core-principles.md           # 核心原则
│   ├── workflows.md                 # 工作流程
│   ├── component-types.md           # 组件类型定义
│   ├── element-plus.md              # Element Plus 专用规则
│   ├── ant-design-vue.md            # Ant Design Vue 专用规则
│   └── examples.md                  # 使用示例
└── assets/
    ├── component-examples.json      # 组件示例模板
    └── form-template.json           # 表单模板
```

---

## SKILL.md（核心入口文件）

### 文件作用

SKILL.md 是 Skill 的**唯一入口文件**，包含两部分：

1. **YAML Frontmatter**：元数据，决定何时触发 Skill
2. **Body**：核心流程指导，Skill 触发后加载

### 完整内容

```yaml
---
name: ai-form-generator
description: "AI-powered form generation and modification system for FormCreate. 
  Use when: (1) User wants to generate form rules from natural language descriptions
  (2) User wants to modify existing forms (add/remove/update fields)
  (3) Target UI frameworks: Element Plus, Element UI, Ant Design Vue, Vant, TA404-UI
  (4) Vue versions: Vue2 or Vue3 applications"
---

# AI Form Generator

Generate and modify FormCreate form rules using AI.

## Core Workflow

### Form Creation
1. Analyze user requirements
2. Retrieve component details via MCP tools
3. Generate complete form rules
4. Validate rules
5. Push rules to client

### Form Modification
1. Analyze modification requirements
2. Retrieve current form and component details
3. Apply JSONPatch modifications
4. Validate modified rules
5. Push rules to client

## Quick Reference

| Topic | Reference |
|-------|-----------|
| Core Principles | [core-principles.md](references/core-principles.md) |
| Workflows | [workflows.md](references/workflows.md) |
| Component Types | [component-types.md](references/component-types.md) |
| Element Plus | [element-plus.md](references/element-plus.md) |
| Examples | [examples.md](references/examples.md) |

## Available MCP Tools

- `get_components_detail` - Query component configuration and examples
- `validate_form_rule` - Validate form rule correctness
- `apply_patch_form_rule` - Apply JSONPatch modifications
- `push_current_rule` - Push final rules to client
- `get_feature_template` - Get feature templates (validation, computed, etc.)

## Output Format

Return form rules in FormCreate JSON format:
```json
{
  "rule": [...],
  "option": {...}
}
```
```

### Frontmatter 详解

```yaml
---
name: ai-form-generator              # 1. Skill 名称（小写、中划线）
description: |                       # 2. 描述（最重要！）
  "AI-powered form generation...     # - 说明 Skill 做什么
  Use when: (1)... (2)... (3)..."   # - 列出所有触发场景
---
```

| 字段 | 要求 | 示例 |
|------|------|------|
| `name` | 小写、中划线、不超过 64 字符 | `ai-form-generator` |
| `description` | 清晰、全面，包含所有触发场景 | 见上方示例 |

**description 的重要性**：这是 AI 判断是否触发该 Skill 的唯一依据，必须包含所有使用场景。

---

## scripts/ 目录

### 目录作用

存放**可执行脚本**，用于需要确定性执行或重复使用的代码。AI 可以调用这些脚本，无需将代码加载到上下文。

### scripts/generate-form.ts

```typescript
/**
 * 表单生成脚本
 * 
 * 功能：根据 JSON 描述生成表单规则
 * 
 * 使用方式：
 * tsx scripts/generate-form.ts --input description.json --output form.json
 */

interface FormDescription {
  fields: Array<{
    type: string;
    label: string;
    field: string;
    required?: boolean;
    placeholder?: string;
  }>;
  layout?: 'horizontal' | 'vertical';
}

function generateForm(desc: FormDescription): any[] {
  const rule = desc.fields.map(f => ({
    type: f.type,
    field: f.field,
    title: f.label,
    props: {
      placeholder: f.placeholder || `请输入${f.label}`,
    },
    validate: f.required ? [{ required: true, message: `请输入${f.label}`, trigger: 'blur' }] : [],
  }));
  
  return rule;
}

// CLI 入口
const args = process.argv.slice(2);
const inputIdx = args.indexOf('--input');
const outputIdx = args.indexOf('--output');

if (inputIdx === -1 || outputIdx === -1) {
  console.error('Usage: tsx generate-form.ts --input <file> --output <file>');
  process.exit(1);
}

const inputFile = args[inputIdx + 1];
const outputFile = args[outputIdx + 1];

const desc = JSON.parse(await Deno.readTextFile(inputFile));
const formRule = generateForm(desc);

await Deno.writeTextFile(outputFile, JSON.stringify(formRule, null, 2));
console.log(`✅ Form generated: ${outputFile}`);
```

### scripts/validate-form.ts

```typescript
/**
 * 表单验证脚本
 * 
 * 功能：验证表单规则的正确性
 */

interface ValidationResult {
  valid: boolean;
  errors: string[];
}

function validateForm(rule: any[]): ValidationResult {
  const errors: string[] = [];
  
  rule.forEach((component, index) => {
    // 检查必需字段
    if (!component.type) {
      errors.push(`Component ${index}: missing 'type'`);
    }
    if (!component._fc_drag_tag) {
      errors.push(`Component ${index}: missing '_fc_drag_tag'`);
    }
    // 表单组件必须包含 field 和 title
    if (component.field && !component.title) {
      errors.push(`Component ${index}: has field but missing title`);
    }
  });
  
  return {
    valid: errors.length === 0,
    errors,
  };
}

// ... CLI 入口代码同上
```

### scripts/ 目录的作用说明

| 特点 | 说明 |
|------|------|
| **确定性** | 脚本执行结果一致，不受 AI 随机性影响 |
| **可复用** | 重复任务只需调用脚本，无需重写代码 |
| **省 Token** | 执行脚本时不加载代码到上下文 |
| **可测试** | 可以独立运行测试脚本 |

---

## references/ 目录

### 目录作用

存放**详细参考文档**，仅在需要时加载到上下文。实现渐进式披露，控制 Token 消耗。

### references/core-principles.md

```markdown
# Core Principles

## 核心规则

<core_principle>
- workflow_sequences 拥有最高优先级，一旦匹配必须立即执行
- 获取工具结果后 → 先反思质量 → 再决定下一步
- 更新时仅改动必要部分，其余保持不变
- 不要依赖历史记忆，每次都重新获取信息
- 确保只使用可用的组件，不基于假设
</core_principle>

## 沟通风格

<communication_style>
- 保持自然、友好、简洁
- 避免机械化或堆砌技术术语
- 总结时必须简要回复
- 避免使用 emoji
</communication_style>
```

### references/workflows.md

```markdown
# Workflow Sequences

## Form Creation Workflow

1. **需求分析**
   - 理解用户需求
   - 制定操作计划

2. **获取组件详情**（并行）
   - 调用 `get_components_detail`
   - 调用 `get_feature_template`（如需）

3. **规则生成**（原子操作）
   - 根据计划和组件示例一次性生成完整规则

4. **自检 & 修复**
   - 核对组件配置项位置
   - 审查规则是否符合要求
   - 失败则回退到步骤 3

5. **推送规则**
   - 调用 `push_current_rule`

## Form Modification Workflow

1. 需求分析
2. 获取当前表单和组件详情
3. 精确修改
4. 检查
5. 推送规则
```

### references/component-types.md

```markdown
# Component Type Definitions

```typescript
type ComponentRule = {
  type: string;           // 组件类型（必需）
  title?: string;         // 标签
  field?: string;         // 字段ID
  _fc_drag_tag?: string;  // 组件业务类型
  props?: object;         // 组件属性
  validate?: ValidateRule[]; // 验证规则
  children?: ComponentRule[]; // 子组件
  col?: { span: number }; // 宽度
  [key: string]: any;
};

type ValidateRule = {
  required?: boolean;
  message?: string;
  trigger?: 'blur' | 'change';
  pattern?: RegExp;
  min?: number;
  max?: number;
};
```
```

### references/element-plus.md

```markdown
# Element Plus Specific Rules

## 可用组件

| 组件 | 类型 | 说明 |
|------|------|------|
| 输入框 | input | 文本输入 |
| 选择器 | select | 下拉选择 |
| 日期选择 | datePicker | 日期选择 |
| 评分 | rate | 星级评分 |

## 组件示例

### 输入框
```json
{
  "type": "input",
  "field": "username",
  "title": "用户名",
  "props": {
    "placeholder": "请输入用户名",
    "clearable": true
  }
}
```

### 评分组件
```json
{
  "type": "rate",
  "field": "satisfaction",
  "title": "满意度",
  "props": {
    "max": 5,
    "showScore": true
  }
}
```

## 验证规则示例

```json
"validate": [
  { "required": true, "message": "此项必填", "trigger": "blur" }
]
```
```

### references/examples.md

```markdown
# Usage Examples

## 创建用户注册表单

**User Request:**
> 生成一个用户注册表单，包含用户名、密码、确认密码、手机号

**AI Response:**
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
      "field": "password",
      "title": "密码",
      "props": { 
        "placeholder": "请输入密码",
        "showPassword": true 
      }
    }
  ]
}
```

## 添加字段

**User Request:**
> 在表单中添加手机号字段

**AI Response:**
```json
{
  "rule": [
    // ... existing fields
    {
      "type": "input",
      "field": "phone",
      "title": "手机号",
      "props": { "placeholder": "请输入手机号" }
    }
  ]
}
```
```

### references/ 目录的作用说明

| 文件 | 何时加载 | 作用 |
|------|----------|------|
| `core-principles.md` | 始终加载 | 基础规则（短小） |
| `workflows.md` | 始终加载 | 核心流程（短小） |
| `component-types.md` | 按需加载 | 类型定义（参考用） |
| `element-plus.md` | 使用 Element Plus 时加载 | 框架专用规则 |
| `examples.md` | 按需加载 | 使用示例（长文档） |

---

## assets/ 目录

### 目录作用

存放**不加载到上下文的资源文件**，用于最终输出时引用。

### assets/component-examples.json

```json
{
  "element-plus": {
    "input": {
      "type": "input",
      "field": "fieldName",
      "title": "标签名",
      "props": {
        "placeholder": "请输入",
        "clearable": true
      },
      "validate": [
        { "required": true, "message": "此项必填", "trigger": "blur" }
      ]
    },
    "select": {
      "type": "select",
      "field": "fieldName",
      "title": "选择器",
      "props": {
        "placeholder": "请选择",
        "options": [
          { "label": "选项一", "value": "option1" },
          { "label": "选项二", "value": "option2" }
        ]
      }
    }
  },
  "ant-design-vue": {
    "input": {
      "type": "a-input",
      "field": "fieldName",
      "title": "标签名"
    }
  }
}
```

### assets/form-template.json

```json
{
  "basicTemplate": {
    "rule": [],
    "option": {
      "form": {
        "labelPosition": "right",
        "labelWidth": "120px"
      },
      "submitBtn": true,
      "resetBtn": true
    }
  }
}
```

### assets/ 目录的作用说明

| 特点 | 说明 |
|------|------|
| **不占上下文** | 文件内容不加载到 AI 上下文 |
| **直接使用** | AI 生成输出时直接引用 |
| **模板复用** | 保持输出格式一致性 |
| **可编辑** | 用户可自定义模板 |

---

## 渐进式披露流程图

```
┌─────────────────────────────────────────────────────────────────┐
│  Level 1: SKILL.md Frontmatter (~100 字)                        │
│  name: ai-form-generator                                        │
│  description: AI-powered form generation...                     │
│                                                                 │
│  → AI 决定是否触发此 Skill                                      │
├─────────────────────────────────────────────────────────────────┤
│  Level 2: SKILL.md Body (~50 行)                                │
│  - Core Workflow                                                │
│  - Quick Reference 链接                                         │
│  - MCP Tools 列表                                               │
│                                                                 │
│  → Skill 触发后加载                                             │
├─────────────────────────────────────────────────────────────────┤
│  Level 3: references/ 目录（按需加载）                          │
│                                                                 │
│  用户选择 Element Plus → 加载 element-plus.md (~100 行)         │
│  用户需要示例 → 加载 examples.md (~200 行)                      │
│                                                                 │
│  → 只加载需要的文档                                             │
├─────────────────────────────────────────────────────────────────┤
│  Level 4: scripts/ & assets/                                    │
│                                                                 │
│  执行脚本：tsx scripts/generate-form.ts                          │
│  引用模板：assets/component-examples.json                       │
│                                                                 │
│  → 执行时加载，不占上下文                                       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 与单个 MD 文件的对比

### 当前项目方式（单个 MD）

```
common-prompt.md （800 行）
├── 核心原则
├── 工作流程
├── 组件类型
├── Element Plus 规则
├── Ant Design Vue 规则
├── Vant 规则
└── 所有示例

问题：
❌ 每次请求加载全部 800 行
❌ 即使只用 Element Plus，也要读取所有框架规则
❌ 扩展新框架需要修改主文件
```

### Skill 方式（推荐结构）

```
ai-form-generator/
├── SKILL.md （50 行）
│   ├── Frontmatter（触发条件）
│   └── 核心流程 + 参考链接
│
├── references/
│   ├── core-principles.md （20 行）← 始终加载
│   ├── workflows.md （30 行）← 始终加载
│   ├── element-plus.md （80 行）← 仅使用 Element Plus 时加载
│   ├── ant-design-vue.md （80 行）← 仅使用 Ant Design Vue 时加载
│   └── examples.md （150 行）← 仅需要示例时加载
│
└── assets/
    └── templates.json ← 仅生成输出时引用

优势：
✅ 渐进式披露，减少 Token 消耗
✅ 按需加载，不相关框架规则不加载
✅ 扩展新框架只需添加文件，不修改主文件
✅ 明确触发机制
```

---

## 对比总结表

| 维度 | 单个 MD 文件 | 完整 Skill 结构 |
|------|-------------|-----------------|
| **文件数量** | 1 个大文件 | 多个小文件 |
| **触发机制** | 无，按参数选择 | 根据 description 自动匹配 |
| **渐进式披露** | ❌ 不支持 | ✅ 支持 |
| **框架扩展** | 修改主文件 | 新增文件 |
| **脚本支持** | ❌ 无 | ✅ scripts/ 目录 |
| **模板支持** | ❌ 无 | ✅ assets/ 目录 |
| **打包分发** | 散文件 | 打包成 .skill 文件 |
| **复用性** | 低 | 高，可跨项目分享 |
| **维护成本** | 高 | 低 |
| **Token 消耗** | 高 | 低（按需加载） |

---

## 何时使用 Skill 结构

### 推荐使用 Skill 的场景

| 场景 | 原因 |
|------|------|
| 需要打包分发 | .skill 文件便于分享 |
| 文档量大 | 渐进式披露节省 Token |
| 多框架/多变体 | 按需加载相关部分 |
| 复用性高 | 跨项目使用 |

### 可以不用 Skill 的场景

| 场景 | 原因 |
|------|------|
| 内部项目 | 维护成本可能高于收益 |
| 文档量小 | < 200 行无需拆分 |
| 框架单一 | 无需按需加载 |
| 快速迭代 | 简单文件更易修改 |

---

## 完整 Skill 示例结构图

```
┌─────────────────────────────────────────────────────────────┐
│                    ai-form-generator/                       │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐    │
│  │ SKILL.md                                             │    │
│  │ ├── YAML Frontmatter                                │    │
│  │ │   ├── name: ai-form-generator                     │    │
│  │ │   └── description: 触发条件、使用场景              │    │
│  │ └── Markdown Body                                   │    │
│  │     ├── Core Workflow                               │    │
│  │     ├── Quick Reference 链接                        │    │
│  │     └── MCP Tools 列表                              │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  scripts/    │  │ references/  │  │   assets/    │      │
│  ├──────────────┤  ├──────────────┤  ├──────────────┤      │
│  │ generate.ts  │  │ core.md      │  │ templates/   │      │
│  │ validate.ts  │  │ workflows.md │  │ examples.json│      │
│  │              │  │ element.md   │  │              │      │
│  │              │  │ examples.md  │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                              │
│  加载顺序：                                                  │
│  1. Frontmatter (触发判断)                                  │
│  2. SKILL.md Body (Skill 触发后)                            │
│  3. references/*.md (按需)                                  │
│  4. scripts/*.ts (执行时)                                   │
└─────────────────────────────────────────────────────────────┘
```
