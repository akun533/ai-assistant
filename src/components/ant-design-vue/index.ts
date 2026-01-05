import sections from './common/sections';
import usage from './common/usage';
import category from './common/category';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import { ComponentCategory } from '../../core/component-registry';

/**
 * 读取 Ant Design Vue 的系统提示词
 */
function getAntDesignVuePrompt(): string {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const promptPath = join(__dirname, '..', 'common' ,'prompts', 'common-prompt.md');
    return readFileSync(promptPath, 'utf-8');
  } catch (error) {
    console.error('❌ 读取 Ant Design Vue 提示词失败:', error);
    return '';
  }
}

/**
 * Ant Design Vue 组件分组展示配置
 */
function getAntDesignVueSections() {
  return sections;
}

/**
 * Ant Design Vue  组件分类规则
 */
function getAntDesignVueCategory(componentType: string): ComponentCategory | undefined {
  const categoryMap: Record<string, ComponentCategory> = category;
  return categoryMap[componentType];
}

/**
 * Ant Design Vue 组件使用说明
 */
function getAntDesignVueUsages(): Record<string, string> {
  return usage;
}

export {
  antDesignVueComponents,
} from './vue3.js';
export {
  antDesignVue2Components,
} from './vue2.js';

export { getAntDesignVueSections, getAntDesignVueUsages, getAntDesignVueCategory, getAntDesignVuePrompt };
