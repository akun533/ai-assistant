import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import { quickMethodCodeList } from './formEvent.js';
import { generateEventDocsTable } from './generateEventDocs.js';

const readEventPrompt = function (): string {
  console.log('开始读取函数提示词文件...');
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const systemPromptPath = join(__dirname, 'EVENT_PROMPT.md');
    const systemPrompt = readFileSync(systemPromptPath, 'utf-8');
    console.log('✅ 开始读取函数提示词文件');
    return systemPrompt;
  } catch (error) {
    console.error('❌ 读取函数提示词失败:', error);
    // 返回默认提示词作为后备
    return '';
  }
};

const eventPrompt = readEventPrompt();
const eventDocsTable = generateEventDocsTable(quickMethodCodeList);
export default {
  name: 'event',
  label: '事件交互',
  info: '用于配置组件的各种事件处理逻辑，包括基础事件、自定义事件等',
  description: eventPrompt + eventDocsTable,
  templates: [
  ],
};
