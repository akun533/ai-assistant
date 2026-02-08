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

  const componentsMatch = content.match(/const ComponentsProps:Record<string, ComponentProp>=\s*\{/s);
  
  if (!componentsMatch) {
    return { components: {} };
  }

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
  const components = {};
  
  let i = 0;
  while (i < componentsContent.length) {
    const nameMatch = componentsContent.matchAt(i, /(\w+):\s*\{/);
    if (!nameMatch) break;
    
    const componentName = nameMatch[1];
    const nameEndIndex = nameMatch.index + nameMatch[0].length;
    
    braceCount = 1;
    let componentEndIndex = nameEndIndex;
    
    for (let j = nameEndIndex; j < componentsContent.length; j++) {
      if (componentsContent[j] === '{') braceCount++;
      if (componentsContent[j] === '}') braceCount--;
      if (braceCount === 0) {
        componentEndIndex = j + 1;
        i = j + 1;
        break;
      }
    }
    
    const componentBody = componentsContent.substring(nameEndIndex, componentEndIndex - 1);
    
    const typeMatch = componentBody.match(/type:\s*['"]([^'"]+)['"]/);
    const props = [];
    const propsMatch = componentBody.match(/props:\s*\[([\s\S]*?)\]/);
    
    if (propsMatch) {
      const propsContent = propsMatch[1];
      
      const commonPropRegex = /CommonProps\.(\w+)/g;
      let match;
      
      while ((match = commonPropRegex.exec(propsContent)) !== null) {
        props.push({
          _ref: match[1],
          _type: 'common',
        });
      }
      
      const inlineRegex = /\{[\s\S]*?name:\s*['"]([^'"]+)['"][\s\S]*?label:\s*['"]([^'"]*)['"][\s\S]*?type:\s*['"]([^'"]*)['"]([\s\S]*?)\}/g;
      let inlineMatch;
      
      while ((inlineMatch = inlineRegex.exec(propsContent)) !== null) {
        const propDef = {
          name: inlineMatch[1],
          label: inlineMatch[2],
          type: inlineMatch[3],
        };
        
        const extra = inlineMatch[4];
        const descMatch = extra.match(/description:\s*['"]([^'"]*)['"]/);
        const requiredMatch = extra.match(/required:\s*(true|false)/);
        const defaultMatch = extra.match(/defaultValue:\s*(\{[^}]*\}|[^,}]+)/);
        const optionsMatch = extra.match(/options:\s*(\[[\s\S]*?\])/);
        
        if (descMatch) propDef.description = descMatch[1];
        if (requiredMatch) propDef.required = requiredMatch[1] === 'true';
        if (defaultMatch) {
          try {
            propDef.default = JSON.parse(defaultMatch[1]);
          } catch (e) {
            propDef.default = defaultMatch[1].trim();
          }
        }
        if (optionsMatch) {
          try {
            const opts = JSON.parse(optionsMatch[1].replace(/(\w+):/g, '"$1":'));
            propDef.options = opts.map(o => o.label || o.value || o);
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
 * 生成 Markdown 表格
 */
function generatePropsTable(props) {
  if (props.length === 0) return 'No props available.';
  
  const rows = [];
  
  for (const prop of props) {
    if (prop._type === 'common') {
      rows.push([prop._ref, 'common', '-', `Common property: ${prop._ref}`, '-']);
    } else {
      const defaultStr = prop.default !== undefined 
        ? JSON.stringify(prop.default).slice(0, 30) 
        : '-';
      const optionsStr = prop.options 
        ? prop.options.join(', ').slice(0, 50) 
        : '-';
      
      rows.push([
        prop.name,
        prop.type || '-',
        prop.label || '-',
        prop.description || '-',
        optionsStr !== '-' ? optionsStr : defaultStr,
      ]);
    }
  }
  
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

  const { components } = parseFieldsProps();
  
  if (Object.keys(components).length === 0) {
    console.error('Error: Failed to parse components data');
    process.exit(1);
  }

  let output = '';
  
  for (const type of types) {
    const component = components[type];
    
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
