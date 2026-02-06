---
name: feature-template
description: |
  获取表单功能说明，包括各种功能类型定义、使用示例和最佳实践。
  支持不同 UI 框架的功能模板查询。
author: ai-assistant
version: 1.0.0
---

# Feature Template Skill

## 功能

- 获取表单功能说明
- 查看功能类型定义
- 获取使用示例代码
- 支持不同 UI 框架

## 使用

```json
{
  "action": "features",
  "uiFramework": "element-plus"
}
```

## 参数

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `sessionId` | string | 否 | 会话标识符 |
| `uiFramework` | string | 否 | UI框架类型 |

## 支持的功能类型

- 表单验证规则
- 动态表单字段
- 级联选择
- 异步数据加载
- 自定义组件
