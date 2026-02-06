---
name: form-pusher
description: |
  推送当前会话的当前表单规则，完成表单规则的生成任务。
author: ai-assistant
version: 1.0.0
---

# Form Pusher Skill

## 功能

- 推送当前表单规则到会话
- 验证表单规则的完整性
- 标记表单任务是否完成

## 使用

```json
{
  "action": "push",
  "sessionId": "session_xxx",
  "rule": [...],
  "summarize": "## 表单说明...",
  "isComplete": true
}
```

## 参数

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `sessionId` | string | 是 | 会话标识符 |
| `rule` | array | 是 | 表单完整规则 |
| `summarize` | string | 是 | 任务总结(Markdown) |
| `isComplete` | boolean | 否 | 是否完成任务 |
| `operationType` | string | 否 | create/modify |
| `uiFramework` | string | 否 | UI框架类型 |
