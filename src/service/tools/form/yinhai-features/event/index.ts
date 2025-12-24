import { quickMethodCodeList } from './formEvent.js';
import { generateEventDocsTable } from './generateEventDocs.js';
import { eventPromptDoc } from './event-prompt.js'

const eventPrompt:string = eventPromptDoc;
const eventDocsTable = generateEventDocsTable(quickMethodCodeList);
export default {
  name: 'event',
  label: '事件交互',
  info: '用于配置组件的各种事件处理逻辑，包括基础事件、自定义事件等',
  description: eventPrompt + eventDocsTable,
  templates: [
  ],
};
