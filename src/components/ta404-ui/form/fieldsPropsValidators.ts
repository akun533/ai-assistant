/**
 * 组件属性验证函数集合
 * 为每个组件类型提供统一的验证函数 aiValidFun
 * 该文件由系统自动生成，请勿手动修改
 */

import fieldsConfig from './fieldsConfig.js';
import ComponentsProps from './fieldsProps.js';

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

// 缓存生成的验证器映射表
let cachedValidatorMap: Record<string, (componentProps: ComponentProps | null | undefined) => ValidationResult> | null = null;

// 从 fieldsConfig 和 fieldsProps 动态生成验证器映射表
const generateValidatorMap = () => {
  // 如果已经生成过，则直接返回缓存的结果
  if (cachedValidatorMap) {
    return cachedValidatorMap;
  }
  
  const map: Record<string, (componentProps: ComponentProps | null | undefined) => ValidationResult> = {};
  
  // 遍历 fieldsConfig 中的所有组件类型
  fieldsConfig.forEach(category => {
    category.list.forEach(component => {
      const type = component.type;
      const required: string[] = [];
      const types: Record<string, string> = {};
      const enums: Record<string, any[]> = {};
      // 获取组件对应的属性定义
      const componentPropsDefinition = ComponentsProps[type];
      if (componentPropsDefinition) {
        // 根据组件属性定义设置必需字段和类型
        componentPropsDefinition.props.forEach(prop => {
          // 添加必需字段
          if (prop.required && !required.includes(prop.name)) {
            required.push(prop.name);
          }
          
          // 添加类型信息
          if (prop.type) {
            const propType = prop.type.toLowerCase();
            
            // 转换类型以匹配验证器期望的格式
            switch (propType) {
              case 'string':
                types[prop.name] = 'string';
                break;
              case 'number':
                types[prop.name] = 'number';
                break;
              case 'boolean':
                types[prop.name] = 'boolean';
                break;
              case 'array':
                types[prop.name] = 'array';
                break;
              case 'object':
                types[prop.name] = 'object';
                break;
              default:
                types[prop.name] = propType;
            }
          }
          
          // 添加枚举值（如果有）
          if (prop.options) {
            enums[prop.name] = prop.options;
          }
        });
      }

      // 创建验证器并添加到映射表
      const schema: ValidationSchema = { required, types };
      if (Object.keys(enums).length > 0) {
        schema.enums = enums;
      }
      
      map[type] = createValidator(schema);
    });
  });

  // 缓存结果
  cachedValidatorMap = map;
  return map;
};

// 生成验证器映射表
export const validatorMap = generateValidatorMap();

// 导出默认模块
export default validatorMap;