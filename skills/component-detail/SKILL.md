---
name: component-detail
description: |
  获取组件的配置项，包括使用方法、示例代码、属性说明等详细信息。
author: ai-assistant
version: 1.0.0
---

# Component Detail Skill

## 功能

- 获取指定组件的详细信息
- 查看组件的配置项
- 获取组件使用示例代码
- 支持多组件批量查询

## 使用

```json
{
  "action": "detail",
  "componentNames": ["el-input", "el-select"],
  "uiFramework": "element-plus",
  "vueVersion": "vue3"
}
```

## 参数

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `sessionId` | string | 否 | 会话标识符 |
| `componentNames` | array | 是 | 组件名称列表 |
| `uiFramework` | string | 否 | UI框架类型 |
| `vueVersion` | string | 否 | Vue版本 |
