---
name: form-patch
description: |
  应用 JSON Patch 补丁调整表单规则。
  基于 RFC 6902 JSON Patch 标准，支持 add/remove/replace/move/copy/test 操作。
author: ai-assistant
version: 1.0.0
---

# Form Patch Skill

## 功能

- 应用 JSON Patch 补丁
- 支持标准的 JSON Patch 操作
- 自动验证修改后的规则
- 返回优化后的规则

## 使用

```json
{
  "action": "patch",
  "jsonPatch": [
    { "op": "add", "path": "/1", "value": {...} },
    { "op": "remove", "path": "/0/props/placeholder" }
  ]
}
```

## 参数

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `sessionId` | string | 否 | 会话标识符 |
| `jsonPatch` | array | 是 | JSON Patch 补丁数组 |
| `summarize` | string | 否 | 任务总结 |
| `uiFramework` | string | 否 | UI框架类型 |

## JSON Patch 操作

| 操作 | 说明 |
|------|------|
| `add` | 添加元素 |
| `remove` | 删除元素 |
| `replace` | 替换元素 |
| `move` | 移动元素 |
| `copy` | 复制元素 |
| `test` | 测试值 |
