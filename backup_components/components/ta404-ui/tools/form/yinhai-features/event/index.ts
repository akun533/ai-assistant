import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';


function getEventPrompt(): string {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const promptPath = join(__dirname,'./', 'event-prompt.md');
    return readFileSync(promptPath, 'utf-8');
  } catch (error) {
    console.error('❌ 读取 Vant 提示词失败:', error);
    return '';
  }
}

export const description = getEventPrompt();

export default {
  name: 'event',
  label: '事件交互',
  info: '用于配置组件的各种事件处理逻辑，包括全局方法、组件事件等。',
  description,
  templates: [
    {
      description: '输入框点击时显示成功消息',
      example: [
        {
          type: 'single-input',
          label: '输入框',
          span: 8,
          display: 'true',
          autoShow: false,
          tools: {},
          fieldDecoratorId: 'ICSHCBCE',
          renderId: 'L37N2N015K3S',
          labelStyle: '{}',
          events: {},
          eventList: [
            {
              eventType: 'click',
              methodType: '1',
              textarea: "this_.$message.success('输入框被点击了！')",
            },
          ],
        },
      ],
    },
    {
      description: '根据用户性别控制俯卧撑个数组件的显示',
      example: [
        {
          type: 'select',
          label: '性别',
          autoShow: false,
          allowDataMapping: true,
          dataType: 'static',
          staticData: [
            {
              label: '男',
              value: '0',
            },
            {
              label: '女',
              value: '1',
            },
          ],
          span: 8,
          mode: 'default',
          display: 'true',
          allowClear: true,
          tools: {},
          fieldDecoratorId: 'sex',
          renderId: 'T3CM5JBI5TVK',
          labelStyle: '{}',
          collectionType: '',
          collectionFilter: '',
          reverseFilter: false,
          events: {},
          eventList: [
            {
              eventType: 'change',
              methodType: '1',
              textarea: "if(value === '1') {\n  this_.hideObj('BFGCRDIR');\n} else {\n   this_.showObj('BFGCRDIR')\n}\n",
            },
          ],
        },
        {
          type: 'number',
          label: '俯卧撑个数',
          autoShow: false,
          span: 8,
          display: false,
          decimalSeparator: '.',
          tools: {},
          fieldDecoratorId: 'BFGCRDIR',
          renderId: 'DRJ6HPIUS00C',
          labelStyle: '{}',
        },
      ],
    },
    {
      description: '提交时先验证再发送请求',
      example: [
        {
          type: 'single-input',
          label: '输入框',
          span: 8,
          display: 'true',
          autoShow: false,
          tools: {},
          fieldDecoratorId: 'username',
          renderId: 'M98FQO2M655U',
          labelStyle: '{}',
        },
        {
          type: 'button',
          span: 4,
          label: '提交',
          slotName: '',
          size: 'default',
          buttonType: 'primary',
          display: 'true',
          tools: {},
          fieldDecoratorId: 'LL50F26T',
          renderId: 'H6KRCS7K60M8',
          events: {},
          eventList: [
            {
              eventType: 'click',
              methodType: '1',
              textarea:
                "\n// ------函数开始------\nlet successCallBack = function(result) {\nconsole.log(result)\n}\nlet formData = this_.getValuesWithValid(); // 表单数据 \nlet value = this_.getParam('role'); // 页面变量\nformData.role = value\nformData.username = this_.getValue('username')\nthis_.submit('back-api/todo',formData,successCallBack)\n// ------函数结束------\n",
            },
          ],
        },
      ],
    },
    {
      description: '全局事件定义与初始化执行',
      example: [
        {
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
            labelWidth: 120,
            functions:
              "this_.getFullString = function (ids) {\n  if(!ids) { return }\n  const idArr = ids.split(',')\n  return idArr.map(e => {\n    return this_.getValue(e)\n  }).join('')\n}",
            initMethod: 'this.$nextTick(() => {\n  this_.setValues( {\n  "Q6Q9C6V9": "Yang",\n  "YOMFIND9": "hua"\n} )\n})\n',
          },
          formColumns: [
            {
              type: 'single-input',
              label: '姓',
              span: 8,
              display: 'true',
              autoShow: false,
              tools: {},
              fieldDecoratorId: 'Q6Q9C6V9',
              renderId: 'R18AV59AIFKT',
              labelStyle: '{}',
            },
            {
              type: 'single-input',
              label: '名',
              span: 8,
              display: 'true',
              autoShow: false,
              tools: {},
              fieldDecoratorId: 'YOMFIND9',
              renderId: 'VO3UNEE3CFPA',
              labelStyle: '{}',
            },
            {
              type: 'button',
              span: 4,
              label: '获取全名',
              slotName: '',
              size: 'default',
              buttonType: 'primary',
              display: 'true',
              tools: {},
              fieldDecoratorId: 'H927C2AG',
              renderId: '1U44LRUJ9J5O',
              events: {},
              eventList: [
                {
                  eventType: 'click',
                  methodType: '1',
                  textarea: "const fullName = this_.getFullString('Q6Q9C6V9,YOMFIND9')\n\nthis_.setValue('R56L89PS', fullName)",
                },
              ],
            },
            {
              type: 'single-input',
              label: '全名',
              span: 8,
              display: 'true',
              autoShow: false,
              tools: {},
              fieldDecoratorId: 'R56L89PS',
              renderId: 'QVR6BIUJAHO9',
              labelStyle: '{}',
            },
          ],
          formHeader: [],
          formLeft: [],
          formRight: [],
          formFooter: [],
          version: {
            updateTime: 1767662623538,
          },
        },
      ],
    },
    {
      description: '打开和关闭弹窗',
      example: [
        {
          type: 'modal',
          label: '弹窗',
          title: '标题',
          width: 800,
          height: 500,
          display: false,
          okText: '确定',
          cancelText: '取消',
          okType: 'primary',
          maskClosable: true,
          keyboard: true,
          destroyOnClose: true,
          closeModalAfterOk: true,
          children: {
            align: 'center',
            headerAlign: 'center',
            addBtn: true,
            delBtn: true,
            column: [
              {
                type: 'single-input',
                label: '输入框',
                span: 8,
                display: 'true',
                autoShow: false,
                tools: {},
                fieldDecoratorId: 'AB6RNNB0',
                renderId: 'PMBGJLI1M1R6',
                labelStyle: '{}',
              },
            ],
          },
          tools: {
            showClear: true,
          },
          fieldDecoratorId: 'IV3VMVIT',
          renderId: 'FEAKPFJGACJM',
          span: 24,
        },
        {
          type: 'button',
          span: 4,
          label: '打开弹框',
          slotName: '',
          size: 'default',
          buttonType: 'primary',
          display: 'true',
          tools: {},
          fieldDecoratorId: 'FEED8D45',
          renderId: 'VUFJJNR4SP3I',
          events: {},
          eventList: [
            {
              eventType: 'click',
              methodType: '1',
              textarea: "\r\n// ------组件展示-函数开始------\r\n this_.showObj('IV3VMVIT')\r\n// ------组件展示-函数结束------\r\n",
            },
          ],
        },
      ],
    }
  ],
};
