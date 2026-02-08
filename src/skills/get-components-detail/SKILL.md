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
<skill:get-components-detail>form formItem formList</skill>
```

## Supported Components

### Layout
- div - Container component
- tabs - Tab component
- row/col - Grid layout
- collapse - Collapsible panel

### Form Components
- input - Text input
- textarea - Multi-line text
- number - Number input
- select - Dropdown select
- radio - Radio group
- checkbox - Checkbox
- switch - Toggle switch
- date - Date picker
- upload - File upload
- cascader - Cascading select
- treeSelect - Tree select

### Display Components
- text - Display text
- rate - Rating component
- progress - Progress bar
- table - Table display
- img - Image display

### Special Components
- form - Form container
- formItem - Form field
- formList - Dynamic form list
- subForm - Sub form

## Output Format

```
=== div ===
Type: div
Props (14):
  - type (common property)
  - fieldDecoratorId (common property)
  - renderId (common property)
  - css: string
    Label: CSS样式
    Description: CSS样式
  - style: string
    Label: 组件样式
    Description: 组件样式
  - display: boolean
    Label: 是否显示组件
    Description: 是否显示组件
  ...
```
