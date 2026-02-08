#!/usr/bin/env node
/**
 * Form Builder Skill
 * Build form rules using component library
 */

import { pathToFileURL } from 'url';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import components data
const REFERENCES_PATH = pathToFileURL(path.join(__dirname, '../references/fieldsProps.ts')).href;

/**
 * Common field generators
 */
const FieldGenerators = {
  // Text fields
  name: (label = '姓名', required = true) => ({
    type: 'single-input',
    label,
    span: 12,
    display: 'true',
    fieldDecoratorId: generateId(),
    renderId: generateId(),
    required,
    placeholder: `请输入${label}`,
  }),

  phone: (label = '手机号', required = true) => ({
    type: 'single-input',
    label,
    span: 12,
    display: 'true',
    fieldDecoratorId: generateId(),
    renderId: generateId(),
    required,
    placeholder: `请输入${label}`,
  }),

  email: (label = '邮箱', required = true) => ({
    type: 'single-input',
    label,
    span: 12,
    display: 'true',
    fieldDecoratorId: generateId(),
    renderId: generateId(),
    required,
    placeholder: `请输入${label}`,
  }),

  // Select fields
  gender: (label = '性别', required = true) => ({
    type: 'radio',
    label,
    span: 12,
    display: 'true',
    dataType: 'static',
    staticData: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' },
      { label: '保密', value: 'secret' },
    ],
    fieldDecoratorId: generateId(),
    renderId: generateId(),
    required,
  }),

  // Date fields
  date: (label = '日期', required = true) => ({
    type: 'date',
    label,
    span: 12,
    display: 'true',
    allowClear: true,
    format: 'YYYY-MM-DD',
    fieldDecoratorId: generateId(),
    renderId: generateId(),
    required,
    placeholder: `请选择${label}`,
  }),
};

/**
 * Generate unique ID (32进制，8位随机码)
 */
function generateId() {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Generate renderId
 */
function generateRenderId(id) {
  return `${id}_render`;
}

/**
 * Parse user requirement
 */
function parseRequirement(input) {
  // Remove operation prefix
  const content = input.replace(/^(create|modify|创建|修改)\s*[|:]/i, '').trim();
  
  return content;
}

/**
 * Generate form container
 */
function createFormContainer() {
  return {
    type: 'form-container',
    formConfig: {
      layout: 'horizontal',
      layoutCol: 'auto',
      labelCol: 6,
      wrapperCol: 18,
      header: '0px',
      footer: '0px',
      left: '0px',
      right: '0px',
      gutter: 0,
      previewDrawerWidth: '95%',
      previewDrawerMinWidth: '',
      showButton: true,
      buttons: [],
      backgroundColor: 'white',
      isLabelWidth: true,
      labelWidth: 100,
    },
    formColumns: [],
    formHeader: [],
    formLeft: [],
    formRight: [],
    formFooter: [],
    version: {
      updateTime: Date.now(),
    },
  };
}

/**
 * Create card container
 */
function createCard(label = '表单') {
  return {
    type: 'card',
    label,
    span: 24,
    display: 'true',
    formCardStyleFit: false,
    formCardStyle: {
      height: 'auto',
    },
    children: {
      align: 'left',
      headerAlign: 'left',
      addBtn: false,
      delBtn: false,
      column: [],
    },
    tools: {
      showClear: false,
    },
    fieldDecoratorId: generateId(),
    renderId: generateRenderId(generateId()),
  };
}

/**
 * Create divider
 */
function createDivider(label = '换行') {
  return {
    type: 'divider',
    span: 24,
    icon: 'icon-divider',
    height: '30px',
    label,
    display: 'true',
    itemStyle: 'height:30px',
    tools: {},
    fieldDecoratorId: generateId(),
    renderId: generateRenderId(generateId()),
  };
}

/**
 * Simple text input
 */
function createInput(label, options = {}) {
  const id = generateId();
  return {
    type: 'single-input',
    label,
    span: options.span || 12,
    display: 'true',
    autoShow: false,
    tools: {},
    fieldDecoratorId: id,
    renderId: generateRenderId(id),
    labelStyle: '{}',
    disabled: false,
    required: options.required || false,
    placeholder: options.placeholder || `请输入${label}`,
  };
}

/**
 * Multi-line text input
 */
function createTextarea(label, options = {}) {
  const id = generateId();
  return {
    type: 'multi-input',
    label,
    span: options.span || 24,
    display: 'true',
    autoShow: false,
    autoSize: true,
    icon: 'icon-textarea',
    tools: {},
    fieldDecoratorId: id,
    renderId: generateRenderId(id),
    labelStyle: '{}',
    disabled: false,
    required: options.required || false,
    placeholder: options.placeholder || `请输入${label}`,
  };
}

/**
 * Select component
 */
function createSelect(label, options = {}) {
  const id = generateId();
  return {
    type: 'select',
    label,
    span: options.span || 12,
    display: 'true',
    autoShow: false,
    allowDataMapping: true,
    icon: 'icon-select',
    dataType: 'static',
    staticData: options.data || [
      { label: '选项一', value: 'option1' },
      { label: '选项二', value: 'option2' },
      { label: '选项三', value: 'option3' },
    ],
    fieldDecoratorId: id,
    renderId: generateRenderId(id),
    labelStyle: '{}',
    disabled: false,
    required: options.required || false,
    placeholder: options.placeholder || `请选择${label}`,
  };
}

/**
 * Radio component
 */
function createRadio(label, options = {}) {
  const id = generateId();
  return {
    type: 'radio',
    label,
    span: options.span || 24,
    display: 'true',
    autoShow: false,
    icon: 'icon-radio',
    dataType: 'static',
    allowDataMapping: true,
    radioButton: false,
    buttonStyle: false,
    radioStyle: '',
    reverseFilter: false,
    tools: {},
    staticData: options.data || [
      { label: '选项一', value: 'option1' },
      { label: '选项二', value: 'option2' },
    ],
    fieldDecoratorId: id,
    renderId: generateRenderId(id),
    labelStyle: '{}',
    disabled: false,
    required: options.required || false,
  };
}

/**
 * Date picker
 */
function createDate(label, options = {}) {
  const id = generateId();
  return {
    type: 'date',
    label,
    span: options.span || 12,
    display: 'true',
    allowClear: true,
    format: options.format || 'YYYY-MM-DD',
    showToday: true,
    validNowTime: '-1',
    eventRunInNextTick: true,
    tools: {},
    fieldDecoratorId: id,
    renderId: generateRenderId(id),
    labelStyle: '{}',
    disabled: false,
    required: options.required || false,
    placeholder: options.placeholder || `请选择${label}`,
  };
}

/**
 * Rate component
 */
function createRate(label, options = {}) {
  const id = generateId();
  return {
    type: 'rate',
    label,
    span: options.span || 12,
    display: 'true',
    allowClear: true,
    autoShow: false,
    tools: {},
    fieldDecoratorId: id,
    renderId: generateRenderId(id),
    labelStyle: '{}',
    disabled: false,
    required: options.required || false,
  };
}

/**
 * Generate form from requirement
 */
function generateForm(requirement) {
  const form = createFormContainer();
  
  // Detect form type from requirement
  const lowerReq = requirement.toLowerCase();
  
  let fields = [];
  
  // Basic info
  if (lowerReq.includes('姓名') || lowerReq.includes('名字')) {
    fields.push(createInput('姓名', { required: true }));
  }
  
  if (lowerReq.includes('手机') || lowerReq.includes('电话')) {
    fields.push(createInput('手机号', { required: true, placeholder: '请输入手机号' }));
  }
  
  if (lowerReq.includes('邮箱') || lowerReq.includes('邮件')) {
    fields.push(createInput('邮箱', { required: true }));
  }
  
  if (lowerReq.includes('地址')) {
    fields.push(createTextarea('地址', { required: false }));
  }
  
  if (lowerReq.includes('性别')) {
    fields.push(createRadio('性别', { required: true }));
  }
  
  if (lowerReq.includes('日期') || lowerReq.includes('时间')) {
    fields.push(createDate('日期', { required: true }));
  }
  
  if (lowerReq.includes('评分') || lowerReq.includes('满意度')) {
    fields.push(createRate('评分', { required: true }));
    fields.push(createRate('满意度', { required: true }));
  }
  
  if (lowerReq.includes('建议') || lowerReq.includes('意见')) {
    fields.push(createTextarea('建议/意见', { required: false, span: 24 }));
  }
  
  if (lowerReq.includes('分类') || lowerReq.includes('类型')) {
    fields.push(createSelect('分类', { 
      required: true, 
      data: [
        { label: '产品建议', value: 'product' },
        { label: '服务建议', value: 'service' },
        { label: '其他', value: 'other' },
      ]
    }));
  }
  
  // If no specific fields detected, create a basic form
  if (fields.length === 0) {
    fields = [
      createInput('姓名', { required: true }),
      createInput('手机号', { required: true }),
      createInput('邮箱', { required: true }),
      createTextarea('备注', { required: false }),
    ];
  }
  
  // Create main card with all fields
  const card = createCard('信息登记');
  card.children.column = fields;
  
  form.formColumns.push(card);
  
  return form;
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    console.log(`
Form Builder Skill - Build form rules

Usage:
  form-builder <operation>|<requirement>

Operations:
  create - Create new form
  modify - Modify existing form

Examples:
  form-builder create|生成客户信息登记表
  form-builder modify|添加邮箱字段

Output:
  Returns form rule JSON
`);
    process.exit(0);
  }

  const input = args.join(' ');
  const requirement = parseRequirement(input);
  
  console.log(`Generating form for: ${requirement}\n`);
  
  const formRule = generateForm(requirement);
  
  console.log(JSON.stringify(formRule, null, 2));
}

main();
