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
      description: '根据年龄条件执行不同操作',
      example: [
        {
          type: 'inputNumber',
          field: 'age',
          title: '年龄',
        },
        {
          type: 'button',
          $behavior: {
            click: [
              {
                method: 'condition',
                children: [
                  {
                    method: 'conditionItem',
                    config: {
                      mode: 'AND',
                      group: [
                        {
                          field: 'age',
                          condition: '>=',
                          value: 18,
                        },
                      ],
                    },
                    children: [
                      {
                        method: 'message',
                        config: {
                          message: '成年人可以提交',
                          type: 'success',
                        },
                      },
                      {
                        method: 'submit',
                        config: {},
                      },
                    ],
                  },
                  {
                    method: 'conditionItem',
                    config: {
                      mode: 'AND',
                      group: [
                        {
                          field: 'age',
                          condition: '<',
                          value: 18,
                        },
                      ],
                    },
                    children: [
                      {
                        method: 'message',
                        config: {
                          message: '未成年人不能提交',
                          type: 'error',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          children: ['检查年龄'],
        },
      ],
    },
    {
      description: '打开和关闭弹窗',
      example: [
        {
          type: 'button',
          $behavior: {
            click: [
              {
                method: 'openModel',
                config: {
                  id: 'modalId',
                },
              },
            ],
          },
          children: ['打开弹窗'],
        },
        {
          type: 'button',
          $behavior: {
            click: [
              {
                method: 'closeModel',
                config: {
                  id: 'modalId',
                },
              },
            ],
          },
          children: ['关闭弹窗'],
        },
      ],
    },
    {
      description: '批量操作表单字段',
      example: [
        {
          type: 'input',
          field: 'field1',
          title: '字段1',
        },
        {
          type: 'input',
          field: 'field2',
          title: '字段2',
        },
        {
          type: 'button',
          $behavior: {
            click: [
              {
                method: 'resetFields',
                config: {
                  id: ['field1', 'field2'],
                },
              },
            ],
            children: ['重置字段'],
          },
        },
      ],
    },
    {
      description: '发送HTTP请求并处理响应',
      example: [
        {
          type: 'input',
          field: 'searchKeyword',
          title: '搜索关键词',
        },
        {
          type: 'button',
          $behavior: {
            click: [
              {
                method: 'fetch',
                config: {
                  action: '/api/search',
                  method: 'POST',
                  data: {
                    keyword: '{{$form.searchKeyword}}',
                  },
                  success: "[[FORM-CREATE-PREFIX-function(res) { console.log('搜索结果:', res); }-FORM-CREATE-SUFFIX]]",
                  error: "[[FORM-CREATE-PREFIX-function(err) { console.error('搜索失败:', err); }-FORM-CREATE-SUFFIX]]",
                },
              },
            ],
          },
          children: ['搜索'],
        },
      ],
    },
    {
      description: '引用预定义的全局事件',
      example: [
        {
          type: 'button',
          on: {
            click: '$GLOBAL:globalClickHandler',
          },
          children: ['全局事件'],
        },
      ],
    },
  ],
};
