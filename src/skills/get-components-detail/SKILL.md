---
name: get-components-detail
description: Get component properties information from component library
---

# Get Components Detail Skill

Get component properties information for form builder components.

## Usage

```bash
# Get single component
<skill:get-components-detail>div</skill>

# Get multiple components
<skill:get-components-detail>tabs input select</skill>

# Get form related components
<skill:get-components-detail>form formItem</skill>
```

## Output Format

```markdown
## tabs

- **Type**: tabs
- **Props Count**: 15

| Name | Type | Label | Description | Default/Options |
|------|------|-------|-------------|------------------|
| type | common | - | Common property: type | - |
| fieldDecoratorId | common | - | Common property: fieldDecoratorId | - |
| label | string | 组件显示名称 | 组件显示名称 | - |
| tabPosition | string | 标签位置 | 标签位置 | top, left, right, bottom |
| ... |
```

## Supported Components

### Layout
- div, tabs, row, col, collapse

### Form Components
- input, textarea, number, select, radio, checkbox, switch, date, upload, cascader, treeSelect

### Display Components
- text, rate, progress, table, img

### Special Components
- form, formItem, formList, subForm
