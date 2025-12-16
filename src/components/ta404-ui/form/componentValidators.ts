/**
 * 组件属性验证函数集合
 * 为每个组件类型提供统一的验证函数 aiValidFun
 */

// 类型定义
interface ValidationSchema {
  required?: string[];
  types?: Record<string, string>;
  enums?: Record<string, any[]>;
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

interface ComponentProps {
  [key: string]: any;
}

/**
 * 通用验证函数工厂
 * @param schema - 组件属性结构定义
 * @returns 验证函数
 */
function createValidator(schema: ValidationSchema): (componentProps: ComponentProps | null | undefined) => ValidationResult {
  return function aiValidFun(componentProps: ComponentProps | null | undefined): ValidationResult {
    if (!componentProps || typeof componentProps !== 'object') {
      return {
        isValid: false,
        errors: ['组件属性必须是一个对象'],
      }
    }

    const errors: string[] = []

    // 验证必需字段
    if (schema.required) {
      for (const field of schema.required) {
        if (!(field in componentProps)) {
          errors.push(`缺少必需字段: ${field}`)
        }
      }
    }

    // 验证字段类型
    if (schema.types) {
      for (const [field, expectedType] of Object.entries(schema.types)) {
        if (field in componentProps) {
          const actualType = typeof componentProps[field]
          // 特殊处理 null 值
          if (componentProps[field] === null && expectedType.includes('null')) {
            continue
          }

          // 处理联合类型，如 'string|boolean'
          const typeMatches = expectedType.split('|').some(type => {
            const trimmedType = type.trim()
            if (trimmedType === 'array') {
              return Array.isArray(componentProps[field])
            }
            if (trimmedType === 'object') {
              return actualType === 'object' && componentProps[field] !== null && !Array.isArray(componentProps[field])
            }
            return actualType === trimmedType
          })

          if (!typeMatches) {
            errors.push(`字段 ${field} 类型应为 ${expectedType}，实际为 ${actualType}`)
          }
        }
      }
    }
    console.log('componentProps', componentProps);
    // 验证字段值范围
    if (schema.enums) {
      for (const [field, allowedValues] of Object.entries(schema.enums)) {
        if (field in componentProps && !allowedValues.includes(componentProps[field])) {
          errors.push(`字段 ${field} 的值应为 ${allowedValues.join(', ')} 之一`)
        }
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
    }
  }
}

// 容器布局组件验证函数
export const divValidator = createValidator({
  required: ['type', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    placement: 'string',
    span: 'number',
    display: 'string|boolean',
  },
  enums: {
    type: ['Div'],
    display: ['true', 'false', true, false],
  },
})

export const tabsValidator = createValidator({
  required: ['type', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    tabPosition: 'string',
    tabType: 'string',
  },
  enums: {
    type: ['tabs'],
    tabPosition: ['top', 'right', 'bottom', 'left'],
    tabType: ['line', 'card', 'editable-card'],
    display: ['true', 'false', true, false],
  },
})

export const collapseValidator = createValidator({
  required: ['type', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    bordered: 'boolean',
  },
  enums: {
    type: ['collapse'],
    display: ['true', 'false', true, false],
  },
})

export const cardValidator = createValidator({
  required: ['type', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    formCardStyleFit: 'boolean',
  },
  enums: {
    type: ['card'],
    display: ['true', 'false', true, false],
  },
})

export const drawerValidator = createValidator({
  required: ['type', 'placement', 'title', 'width', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    placement: 'string',
    title: 'string',
    width: 'number',
    span: 'number',
    display: 'string|boolean',
    maskClosable: 'boolean',
    closable: 'boolean',
  },
  enums: {
    type: ['drawer'],
    placement: ['top', 'right', 'bottom', 'left'],
    display: ['true', 'false', true, false],
  },
})

export const modalValidator = createValidator({
  required: ['type', 'title', 'width', 'height', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    title: 'string',
    width: 'number',
    height: 'number',
    display: 'string|boolean',
    maskClosable: 'boolean',
    keyboard: 'boolean',
    destroyOnClose: 'boolean',
  },
  enums: {
    type: ['modal'],
    display: ['true', 'false', true, false],
  },
})

export const borderLayoutValidator = createValidator({
  required: ['type', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    showBorder: 'boolean',
    showPadding: 'boolean',
  },
  enums: {
    type: ['border-layout'],
    display: ['true', 'false', true, false],
  },
})

export const searchValidator = createValidator({
  required: ['type', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
  },
  enums: {
    type: ['search'],
    display: ['true', 'false', true, false],
  },
})

// 输入组件验证函数
export const singleInputValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
  },
  enums: {
    type: ['single-input'],
    display: ['true', 'false', true, false],
  },
})

export const inputGroupValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    compact: 'boolean',
    takeOverMode: 'boolean',
  },
  enums: {
    type: ['input-group'],
    display: ['true', 'false', true, false],
  },
})

export const inputSearchValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    haveEnterButton: 'boolean',
    autoShow: 'boolean',
  },
  enums: {
    type: ['input-search'],
    display: ['true', 'false', true, false],
  },
})

export const passwordValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
  },
  enums: {
    type: ['password'],
    display: ['true', 'false', true, false],
  },
})

export const multiInputValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    autoSize: 'boolean',
  },
  enums: {
    type: ['multi-input'],
    display: ['true', 'false', true, false],
  },
})

export const numberValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    decimalSeparator: 'string',
  },
  enums: {
    type: ['number'],
    display: ['true', 'false', true, false],
  },
})

export const rpcValidator = createValidator({
  required: ['type', 'label', 'span', 'display', 'dataType'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    dataType: 'string',
    allowClear: 'boolean',
    dropdownTrigger: 'string',
  },
  enums: {
    type: ['rpc'],
    dataType: ['static', 'remote'],
    display: ['true', 'false', true, false],
  },
})

// 选择组件验证函数
export const switchValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    valueDefault: 'number',
  },
  enums: {
    type: ['switch'],
    display: ['true', 'false', true, false],
  },
})

export const radioValidator = createValidator({
  required: ['type', 'label', 'span', 'display', 'dataType'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    dataType: 'string',
    allowDataMapping: 'boolean',
    radioButton: 'boolean',
    buttonStyle: 'boolean',
  },
  enums: {
    type: ['radio'],
    dataType: ['static', 'remote'],
    display: ['true', 'false', true, false],
  },
})

export const checkboxValidator = createValidator({
  required: ['type', 'label', 'span', 'display', 'dataType'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    dataType: 'string',
    allowDataMapping: 'boolean',
  },
  enums: {
    type: ['checkbox'],
    dataType: ['static', 'remote'],
    display: ['true', 'false', true, false],
  },
})

export const selectValidator = createValidator({
  required: ['type', 'label', 'span', 'display', 'dataType'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    dataType: 'string',
    allowDataMapping: 'boolean',
    allowClear: 'boolean',
    mode: 'string',
  },
  enums: {
    type: ['select'],
    dataType: ['static', 'remote'],
    mode: ['default', 'multiple', 'tags'],
    display: ['true', 'false', true, false],
  },
})

export const cascaderValidator = createValidator({
  required: ['type', 'label', 'span', 'display', 'dataType'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    dataType: 'string',
    allowClear: 'boolean',
    changeOnSelect: 'boolean',
    expandTrigger: 'string',
  },
  enums: {
    type: ['cascader'],
    dataType: ['static', 'remote'],
    expandTrigger: ['click', 'hover'],
    display: ['true', 'false', true, false],
  },
})

export const treeValidator = createValidator({
  required: ['type', 'label', 'span', 'display', 'dataType'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    dataType: 'string',
    allowDataMapping: 'boolean',
    allowClear: 'boolean',
  },
  enums: {
    type: ['tree'],
    dataType: ['static', 'remote'],
    display: ['true', 'false', true, false],
  },
})

export const rateValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    allowClear: 'boolean',
    autoShow: 'boolean',
  },
  enums: {
    type: ['rate'],
    display: ['true', 'false', true, false],
  },
})

export const sliderValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    range: 'boolean',
    step: 'number',
    min: 'number',
    max: 'number',
  },
  enums: {
    type: ['slider'],
    display: ['true', 'false', true, false],
  },
})

export const colorValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    panelPosition: 'string',
    verticalPosition: 'string',
    initialValue: 'string',
  },
  enums: {
    type: ['color'],
    panelPosition: ['left', 'right', 'top', 'bottom'],
    verticalPosition: ['top', 'bottom'],
    display: ['true', 'false', true, false],
  },
})

export const photoValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    labelText: 'boolean',
    isView: 'boolean',
    maxType: 'string',
  },
  enums: {
    type: ['photo'],
    maxType: ['1', '2'],
    display: ['true', 'false', true, false],
  },
})

export const uploadValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    isAuto: 'boolean',
  },
  enums: {
    type: ['upload'],
    display: ['true', 'false', true, false],
  },
})

export const transferValidator = createValidator({
  required: ['type', 'label', 'span', 'display', 'dataType'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    dataType: 'string',
    rowKey: 'string',
    currentMode: 'string',
  },
  enums: {
    type: ['transfer'],
    dataType: ['static', 'remote'],
    currentMode: ['normal', 'table', 'tree'],
    display: ['true', 'false', true, false],
  },
})

// 日期时间组件验证函数
export const yearValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    allowClear: 'boolean',
    validNowTime: 'string',
    format: 'string',
    autoShow: 'boolean',
  },
  enums: {
    type: ['year'],
    display: ['true', 'false', true, false],
  },
})

export const quarterValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    allowClear: 'boolean',
    validNowTime: 'string',
    format: 'string',
    autoShow: 'boolean',
  },
  enums: {
    type: ['quarter'],
    display: ['true', 'false', true, false],
  },
})

export const monthValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    allowClear: 'boolean',
    validNowTime: 'string',
    format: 'string',
    autoShow: 'boolean',
  },
  enums: {
    type: ['month'],
    display: ['true', 'false', true, false],
  },
})

export const weekValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    allowClear: 'boolean',
    validNowTime: 'string',
    format: 'string',
    autoShow: 'boolean',
  },
  enums: {
    type: ['week'],
    display: ['true', 'false', true, false],
  },
})

export const dateValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    allowClear: 'boolean',
    validNowTime: 'string',
    format: 'string',
    showToday: 'boolean',
  },
  enums: {
    type: ['date'],
    display: ['true', 'false', true, false],
  },
})

export const timeValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    allowClear: 'boolean',
    validNowTime: 'string',
    format: 'string',
  },
  enums: {
    type: ['time'],
    display: ['true', 'false', true, false],
  },
})

export const datetimeValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    allowClear: 'boolean',
    validNowTime: 'string',
    format: 'string',
  },
  enums: {
    type: ['datetime'],
    display: ['true', 'false', true, false],
  },
})

export const daterangeValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    allowClear: 'boolean',
    validNowTime: 'string',
    format: 'string',
  },
  enums: {
    type: ['daterange'],
    display: ['true', 'false', true, false],
  },
})

export const datetimerangeValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    allowClear: 'boolean',
    validNowTime: 'string',
    format: 'string',
  },
  enums: {
    type: ['datetimerange'],
    display: ['true', 'false', true, false],
  },
})

// 数据展示组件验证函数
export const richTextValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    content: 'string',
  },
  enums: {
    type: ['richText'],
    display: ['true', 'false', true, false],
  },
})

export const echartsValidator = createValidator({
  required: ['type', 'label', 'span', 'display', 'echarsType'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    echarsType: 'string',
    optionConfigType: 'string',
  },
  enums: {
    type: ['echarts'],
    echarsType: ['bar', 'line', 'pie', 'scatter', 'map', 'radar', 'tree', 'treemap', 'sunburst', 'boxplot', 'candlestick', 'heatmap', 'graph', 'lines', 'sankey', 'funnel', 'gauge', 'pictorialBar', 'themeRiver', 'custom'],
    display: ['true', 'false', true, false],
  },
})

export const dynamicValidator = createValidator({
  required: ['type', 'label', 'span', 'display', 'dataType'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    dataType: 'string',
    haveSn: 'boolean',
  },
  enums: {
    type: ['dynamic'],
    dataType: ['static', 'remote'],
    display: ['true', 'false', true, false],
  },
})

export const bigTableValidator = createValidator({
  required: ['type', 'label', 'span', 'display', 'dataType'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    dataType: 'string',
    size: 'string',
    border: 'string',
  },
  enums: {
    type: ['bigTable'],
    dataType: ['static', 'remote'],
    size: ['small', 'medium', 'large'],
    border: ['default', 'none', 'full'],
    display: ['true', 'false', true, false],
  },
})

export const spanValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    labelText: 'boolean',
    text: 'string',
  },
  enums: {
    type: ['span'],
    display: ['true', 'false', true, false],
  },
})

export const pValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    labelText: 'boolean',
    pText: 'string',
  },
  enums: {
    type: ['p'],
    display: ['true', 'false', true, false],
  },
})

export const stepsValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    direction: 'string',
    current: 'number',
    size: 'string',
    stepType: 'string',
  },
  enums: {
    type: ['steps'],
    direction: ['horizontal', 'vertical'],
    size: ['default', 'small'],
    stepType: ['default', 'navigation', 'dot'],
    display: ['true', 'false', true, false],
  },
})

export const timelineValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    mode: 'string',
    color: 'string',
  },
  enums: {
    type: ['timeline'],
    mode: ['left', 'alternate', 'right'],
    display: ['true', 'false', true, false],
  },
})

export const eTreeValidator = createValidator({
  required: ['type', 'label', 'span', 'display', 'dataType'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    autoShow: 'boolean',
    labelText: 'boolean',
    dataType: 'string',
    inputDisplay: 'boolean',
  },
  enums: {
    type: ['e-tree'],
    dataType: ['static', 'remote'],
    display: ['true', 'false', true, false],
  },
})

export const iframeValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    labelText: 'boolean',
    src: 'string',
  },
  enums: {
    type: ['iframe'],
    display: ['true', 'false', true, false],
  },
})

export const treeModalValidator = createValidator({
  required: ['type', 'label', 'span', 'display', 'dataType'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    dataType: 'string',
    width: 'number',
    height: 'number',
    allowClear: 'boolean',
    inputDisplay: 'boolean',
  },
  enums: {
    type: ['tree-modal'],
    dataType: ['static', 'remote'],
    display: ['true', 'false', true, false],
  },
})

// 辅助组件验证函数
export const spaceValidator = createValidator({
  required: ['type', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    labelText: 'boolean',
  },
  enums: {
    type: ['space'],
    display: ['true', 'false', true, false],
  },
})

export const dividerValidator = createValidator({
  required: ['type', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    height: 'string',
  },
  enums: {
    type: ['divider'],
    display: ['true', 'false', true, false],
  },
})

export const labelConValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    labelCol: 'object',
    colon: 'boolean',
  },
  enums: {
    type: ['label-con'],
    display: ['true', 'false', true, false],
  },
})

export const buttonValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    size: 'string',
    buttonType: 'string',
  },
  enums: {
    type: ['button'],
    size: ['large', 'default', 'small'],
    buttonType: ['primary', 'ghost', 'dashed', 'link', 'text', 'default'],
    display: ['true', 'false', true, false],
  },
})

export const buttonLabelValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    buttonLabel: 'string',
    size: 'string',
    buttonType: 'string',
  },
  enums: {
    type: ['button-label'],
    size: ['large', 'default', 'small'],
    buttonType: ['primary', 'ghost', 'dashed', 'link', 'text', 'default'],
    display: ['true', 'false', true, false],
  },
})

export const buttonGroupValidator = createValidator({
  required: ['type', 'label', 'span', 'display', 'dataType'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    dataType: 'string',
  },
  enums: {
    type: ['button-group'],
    dataType: ['static', 'remote'],
    display: ['true', 'false', true, false],
  },
})

export const reportValidator = createValidator({
  required: ['type', 'label', 'span', 'display'],
  types: {
    type: 'string',
    icon: 'string',
    label: 'string',
    span: 'number',
    display: 'string|boolean',
    labelText: 'boolean',
    tdSelectSourceType: 'string',
  },
  enums: {
    type: ['report'],
    tdSelectSourceType: ['collection', 'custom'],
    display: ['true', 'false', true, false],
  },
})

// 验证器映射表
export const validatorMap: Record<string, (componentProps: ComponentProps | null | undefined) => ValidationResult> = {
  // 容器布局组件
  Div: divValidator,
  tabs: tabsValidator,
  collapse: collapseValidator,
  card: cardValidator,
  drawer: drawerValidator,
  modal: modalValidator,
  'border-layout': borderLayoutValidator,
  search: searchValidator,

  // 输入组件
  'single-input': singleInputValidator,
  'input-group': inputGroupValidator,
  'input-search': inputSearchValidator,
  password: passwordValidator,
  'multi-input': multiInputValidator,
  number: numberValidator,
  rpc: rpcValidator,

  // 选择组件
  switch: switchValidator,
  radio: radioValidator,
  checkbox: checkboxValidator,
  select: selectValidator,
  cascader: cascaderValidator,
  tree: treeValidator,
  rate: rateValidator,
  slider: sliderValidator,
  color: colorValidator,
  photo: photoValidator,
  upload: uploadValidator,
  transfer: transferValidator,

  // 日期时间组件
  year: yearValidator,
  quarter: quarterValidator,
  month: monthValidator,
  week: weekValidator,
  date: dateValidator,
  time: timeValidator,
  datetime: datetimeValidator,
  daterange: daterangeValidator,
  datetimerange: datetimerangeValidator,

  // 数据展示组件
  richText: richTextValidator,
  echarts: echartsValidator,
  dynamic: dynamicValidator,
  bigTable: bigTableValidator,
  span: spanValidator,
  p: pValidator,
  steps: stepsValidator,
  timeline: timelineValidator,
  'e-tree': eTreeValidator,
  iframe: iframeValidator,
  'tree-modal': treeModalValidator,

  // 辅助组件
  space: spaceValidator,
  divider: dividerValidator,
  'label-con': labelConValidator,
  button: buttonValidator,
  'button-label': buttonLabelValidator,
  'button-group': buttonGroupValidator,
  report: reportValidator,
}

export default validatorMap
