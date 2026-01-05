import sections from './common/sections';
import usage from './common/usage';
import category from './common/category';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import { ComponentCategory } from '../../core/component-registry';

/**
 * 读取 Vant 的系统提示词
 */
function getVantPrompt(): string {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const promptPath = join(__dirname, '..', 'common', 'prompts', 'common-prompt.md');
    return readFileSync(promptPath, 'utf-8');
  } catch (error) {
    console.error('❌ 读取 Vant 提示词失败:', error);
    return '';
  }
}

/**
 * Vant 组件分组展示配置
 */
function getVantSections() {
  return sections;
}

/**
 * Vant 组件分类规则
 */
function getVantCategory(componentType: string): ComponentCategory | undefined {
  const categoryMap: Record<string, ComponentCategory> = category;
  return categoryMap[componentType];
}

/**
 * Vant 组件使用说明
 */
function getVantUsages(): Record<string, string> {
  return usage;
}

export {
  vantComponents,
} from './vue3.js';
export {
  vantVue2Components,
} from './vue2.js';

export { getVantSections, getVantUsages, getVantCategory, getVantPrompt };
