import section from './common/section';
import usage from './common/usage';
import category from './common/category';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import { ComponentCategory } from '../../core/component-registry';

/**
 * 读取 Element Plus 的系统提示词
 */
function getElementPlusPrompt(): string {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const promptPath = join(__dirname, '..', 'common', 'prompts', 'common-prompt.md');
    return readFileSync(promptPath, 'utf-8');
  } catch (error) {
    console.error('❌ 读取 Element Plus 提示词失败:', error);
    return '';
  }
}

/**
 * Element Plus 组件分组展示配置
 */
function getElementPlusSections() {
  return section;
}

/**
 * Element Plus 组件分类规则
 */
function getElementPlusCategory(componentType: string): ComponentCategory | undefined {
  const categoryMap: Record<string, ComponentCategory> = category;
  return categoryMap[componentType];
}

/**
 * Element Plus 组件使用说明
 */
function getElementPlusUsages(): Record<string, string> {
  return usage;
}

/**
 * 读取 Element UI 的系统提示词
 */
function getElementUIPrompt(): string {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const promptPath = join(__dirname, '..', 'common', 'prompts', 'common-prompt.md');
    return readFileSync(promptPath, 'utf-8');
  } catch (error) {
    console.error('❌ 读取 Element UI 提示词失败:', error);
    return '';
  }
}

/**
 * Element UI 组件分组展示配置
 */
function getElementUISections() {
  return section;
}

/**
 * Element UI 组件分类规则
 */
function getElementUICategory(componentType: string): ComponentCategory | undefined {
  const categoryMap: Record<string, ComponentCategory> = category;
  return categoryMap[componentType];
}

/**
 * Element UI 组件使用说明
 */
function getElementUIUsages(): Record<string, string> {
  return usage;
}

export {
  elementPlusComponents,
} from './vue3.js';
export {
  elementUIComponents,
} from './vue2.js';

export { 
  getElementPlusSections, 
  getElementPlusUsages, 
  getElementPlusCategory, 
  getElementPlusPrompt,
  getElementUISections,
  getElementUIUsages,
  getElementUICategory,
  getElementUIPrompt
};
