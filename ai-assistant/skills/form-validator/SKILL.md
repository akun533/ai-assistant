---
name: form-validator
description: |
  校验表单规则的有效性，支持增量校验和全量校验。
  根据规范校验表单规则，输出包含错误、警告、修复建议与优化后的规则。
author: ai-assistant
version: 1.0.0
---

# Form Validator Skill

## 功能

- 校验表单规则是否符合规范
- 支持全量校验和增量校验
- 输出错误、警告、修复建议
- 返回优化后的规则

## 使用

```json
{
  "action": "validate",
  "rule": [...],
  "operationType": "create"
}
```

## 参数

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `sessionId` | string | 否 | 会话标识符 |
| `rule` | array | 是 | 要校验的组件规则数组 |
| `operationType` | string | 否 | create/modify |
| `uiFramework` | string | 否 | UI框架类型 |
| `option` | object | 否 | 表单选项配置 |
