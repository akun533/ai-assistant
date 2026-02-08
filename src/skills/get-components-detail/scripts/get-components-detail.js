#!/usr/bin/env node
/**
 * Get Components Detail Skill
 * Get component properties information based on type
 */

import fs from 'fs';
import path from 'path';

const REFERENCES_PATH = path.join(process.cwd(), 'src/skills/get-components-detail/references/fieldsProps.ts');

/**
 * 解析 fieldsProps.ts 文件，提取组件信息
 */
function parseFieldsProps() {
  if (!fs.existsSync(REFERENCES_PATH)) {
    return {};
  }

  const content = fs.readFileSync(REFERENCES_PATH, 'utf-8');
  
  // 提取 CommonProps
  const commonPropsMatch = content.match(/export const CommonProps:\s*\{[^}]*\}=/s);
  
  // 提取 ComponentsProps
  const componentsMatch = content.match(/const ComponentsProps:Record<string, ComponentProp>=\s*\{/s);
  
  if (!componentsMatch) {
    return { commonProps: {}, components: {} };
  }

  // 找到 ComponentsProps 的结束位置（匹配最后一个 }）
  const startIndex = componentsMatch.index + componentsMatch[0].length;
  let braceCount = 1;
  let endIndex = startIndex;
  
  for (let i = startIndex; i < content.length; i++) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') braceCount--;
    if (braceCount === 0) {
      endIndex = i + 1;
      break;
    }
  }

  const componentsContent = content.substring(startIndex, endIndex);
  
  // 解析每个组件
  const components = {};
  const componentRegex = /(\w+):\s*\{([^}]*)\}/g;
  let match;
  
  while ((match = componentRegex.exec(componentsContent)) !== null) {
    const componentName = match[1];
    const componentBody = match[2];
    
    // 提取 type
    const typeMatch = componentBody.match(/type:\s*['"]([^'"]+)['"]/);
    
    // 提取 props
    const props = [];
    const propsMatch = componentBody.match(/props:\s*\[([\s\S]*?)\]/);
    
    if (propsMatch) {
      const propsContent = propsMatch[1];
      
      // 解析 CommonProps 引用
      const commonPropRegex = /CommonProps\.(\w+)/g;
      let commonMatch;
      
      while ((commonMatch = commonPropRegex.exec(propsContent)) !== null) {
        const propName = commonMatch[1];
        // 这里简化处理，返回 CommonProps 引用信息
        props.push({
          _ref: propName,
          _type: 'common'
        });
      }
      
      // 解析内联属性定义
      const inlinePropRegex = /\{[\s\S]*?name:\s*['"]([^'"]+)['"][\s\S]*?label:\s*['"]([^'"]*)['"][\s\S]*?type:\s*['"]([^'"]*)['"]([\s\S]*?)\}/g;
      let inlineMatch;
      
      while ((inlineMatch = inlinePropRegex.exec(propsContent)) !== null) {
        const propDef = {
          name: inlineMatch[1],
          label: inlineMatch[2],
          type: inlineMatch[3],
        };
        
        // 提取可选字段
        const descMatch = inlineMatch[4].match(/description:\s*['"]([^'"]*)['"]/);
        const requiredMatch = inlineMatch[4].match(/required:\s*(true|false)/);
        const defaultMatch = inlineMatch[4].match(/defaultValue:\s*(\{[^}]*\}|[^,]+)/);
        const optionsMatch = inlineMatch[4].match(/options:\s*(\[[\s\S]*?\])/);
        
        if (descMatch) propDef.description = descMatch[1];
        if (requiredMatch) propDef.required = requiredMatch[1] === 'true';
        if (defaultMatch) {
          try {
            propDef.defaultValue = JSON.parse(defaultMatch[1]);
          } catch (e) {
            propDef.defaultValue = defaultMatch[1];
          }
        }
        if (optionsMatch) {
          try {
            propDef.options = JSON.parse(optionsMatch[1].replace(/(\w+):/g, '"$1":'));
          } catch (e) {}
        }
        
        props.push(propDef);
      }
    }
    
    components[componentName] = {
      type: typeMatch ? typeMatch[1] : componentName,
      props: props,
    };
  }

  return { components };
}

/**
 * 获取组件详细信息
 */
function getComponentDetail(components, type) {
  const component = components[type];
  
  if (!component) {
    return null;
  }

  const result = {
    type: component.type,
    props: [],
  };

  // 处理属性列表
  for (const prop of component.props) {
    if (prop._type === 'common') {
      // CommonProps 简化处理
      result.props.push({
        name: prop._ref,
        type: 'common',
        description: `Common property: ${prop._ref}`,
      });
    } else {
      result.props.push(prop);
    }
  }

  return result;
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

  const { components } = parseFieldsProps();
  
  if (Object.keys(components).length === 0) {
    console.error('Error: Failed to parse components data');
    process.exit(1);
  }

  console.log(`Found ${Object.keys(components).length} components\n`);

  // 获取所有组件信息
  const results = {};
  
  for (const type of types) {
    const detail = getComponentDetail(components, type);
    
    if (detail) {
      results[type] = detail;
    } else {
      results[type] = {
        type: type,
        error: 'Component not found',
      };
    }
  }

  // 输出结果
  for (const [type, detail] of Object.entries(results)) {
    console.log(`\n=== ${type} ===`);
    
    if (detail.error) {
      console.log(`Error: ${detail.error}`);
      continue;
    }
    
    console.log(`Type: ${detail.type}`);
    console.log(`Props (${detail.props.length}):`);
    
    for (const prop of detail.props) {
      if (prop._type === 'common') {
        console.log(`  - ${prop.name} (common property)`);
      } else {
        console.log(`  - ${prop.name}: ${prop.type}`);
        if (prop.label) console.log(`    Label: ${prop.label}`);
        if (prop.description) console.log(`    Description: ${prop.description}`);
        if (prop.required) console.log(`    Required: ${prop.required}`);
        if (prop.defaultValue !== undefined) console.log(`    Default: ${JSON.stringify(prop.defaultValue)}`);
        if (prop.options) console.log(`    Options: ${prop.options.map(o => o.label || o).join(', ')}`);
      }
    }
  }
}

main();
