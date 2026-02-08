#!/usr/bin/env node
/**
 * Get Components Detail Skill
 * Get component properties information based on type
 */

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 直接 import 编译后的数据文件
const REFERENCES_PATH = path.join(__dirname, '../references/fieldsProps.ts');

/**
 * 解析组件属性为可序列化格式
 */
function parsePropDefinition(prop) {
  const result = {
    name: prop.name,
    type: prop.type || 'string',
    label: prop.label || '-',
    description: prop.description || '-',
  };

  // 处理 defaultValue
  if (prop.defaultValue !== undefined) {
    try {
      result.default = typeof prop.defaultValue === 'object' 
        ? JSON.stringify(prop.defaultValue) 
        : prop.defaultValue;
    } catch (e) {
      result.default = String(prop.defaultValue);
    }
  }

  // 处理 options
  if (prop.options && Array.isArray(prop.options)) {
    result.options = prop.options.map(opt => {
      if (typeof opt === 'object' && opt !== null) {
        return opt.label || opt.value || String(opt);
      }
      return String(opt);
    });
  }

  return result;
}

/**
 * 获取组件详细信息
 */
function getComponentDetail(ComponentsProps, type) {
  const component = ComponentsProps[type];
  
  if (!component) {
    return null;
  }

  const props = [];
  
  for (const prop of component.props || []) {
    // CommonProps 引用
    if (typeof prop === 'object' && prop._ref) {
      props.push({
        name: prop._ref,
        type: 'common',
        label: '-',
        description: `Common property: ${prop._ref}`,
      });
    } else if (typeof prop === 'object') {
      props.push(parsePropDefinition(prop));
    }
  }

  return {
    type: component.type || type,
    props: props,
  };
}

/**
 * 生成 Markdown 表格
 */
function generatePropsTable(props) {
  if (props.length === 0) return 'No props available.';
  
  const rows = props.map(prop => {
    if (prop.type === 'common') {
      return [prop.name, 'common', '-', prop.description, '-'];
    }
    const optionsOrDefault = prop.options 
      ? prop.options.join(', ')
      : (prop.default || '-');
    return [
      prop.name,
      prop.type || '-',
      prop.label || '-',
      prop.description || '-',
      optionsOrDefault,
    ];
  });
  
  return `| Name | Type | Label | Description | Default/Options |
|------|------|-------|-------------|------------------|
${rows.map(row => `| ${row.join(' | ')} |`).join('\n')}`;
}

/**
 * 主函数
 */
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
    console.log(`
Get Components Detail Skill - Get component properties information

Usage:
  get-components-detail <type1> [type2] [type3] ...

Examples:
  get-components-detail div
  get-components-detail tabs input select
  get-components-detail form formItem
`);
    process.exit(0);
  }

  const types = args.filter(arg => !arg.startsWith('-'));
  
  if (types.length === 0) {
    console.error('Error: At least one component type is required');
    process.exit(1);
  }

  // 直接 import TypeScript 文件
  let ComponentsProps;
  try {
    const mod = await import(REFERENCES_PATH);
    ComponentsProps = mod.default || mod.ComponentsProps;
  } catch (error) {
    console.error('Error: Failed to import components data:', error.message);
    process.exit(1);
  }
  
  if (!ComponentsProps || Object.keys(ComponentsProps).length === 0) {
    console.error('Error: Components data is empty');
    process.exit(1);
  }

  console.log(`Found ${Object.keys(ComponentsProps).length} components\n`);

  let output = '';
  
  for (const type of types) {
    const component = getComponentDetail(ComponentsProps, type);
    
    if (!component) {
      output += `\n## ${type}\n\n**Error: Component not found**\n`;
      continue;
    }
    
    output += `\n## ${type}\n\n`;
    output += `- **Type**: ${component.type}\n`;
    output += `- **Props Count**: ${component.props.length}\n\n`;
    output += generatePropsTable(component.props);
  }

  console.log(output);
}

main();
