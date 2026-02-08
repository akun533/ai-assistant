---
name: form-builder
description: Build form rules using component library, supporting create and modify modes
---

# Form Builder Skill

Build form rules based on user requirements using the component library.

## Usage

```bash
# Create new form
<skill:form-builder>create|创建就诊满意度问卷</skill>

# Modify existing form
<skill:form-builder>modify|在现有表单中添加投诉建议字段</skill>
```

## Input Format

```
<skill:form-builder>operation|requirement
```

### Operations

| Operation | Description |
|-----------|-------------|
| create | Create new form |
| modify | Modify existing form (needs current_rule) |

### Examples

```bash
<skill:form-builder>create|生成一个客户信息登记表，包含姓名、手机号、邮箱、地址</skill>
<skill:form-builder>modify|将邮箱字段改为必填，添加备注字段</skill>
```

## Output Format

Returns form rule JSON. The skill internally handles:
- Component selection based on requirements
- Configuration validation
- Form structure generation
- Rule compliance checking

## Features

- Support 50+ form components
- Automatic field configuration
- Validation rule generation
- Responsive layout support

## Related Skills

- `get_components_detail` - Get component specifications
- `get_feature_template` - Get feature templates
