export const description = `
`;

export default {
  name: 'event',
  label: '事件交互',
  info: '用于配置组件的各种事件处理逻辑，包括普通事件、钩子函数、行为流等。支持三种事件处理模式：流程模式、自定义函数模式和全局事件模式',
  description,
  templates: [
    {
      description: '输入框点击时显示成功消息',
      example: [
        {
          'type': 'input',
          'field': 'input',
          'title': '输入框',
          'on': {
            'click': "$FNX:$inject.api.message({message: '按钮被点击了',type: 'success'});",
          },
        },
      ],
    },
    {
      description: '根据用户类型控制折扣字段的显示',
      example: [
        {
          'type': 'select',
          'field': 'userType',
          'title': '用户类型',
          'options': [
            { 'label': '普通用户', 'value': 'normal' },
            { 'label': 'VIP用户', 'value': 'vip' },
          ],
          'on': {
            'change': "$FNX:const status = $inject.api.getValue('userType') !== 'vip'\nif(status) {\n\t$inject.api.hidden('discount', false);\n} else {\n\t$inject.api.hidden('discount', true);\n} ",
          },
        },
        {
          'type': 'inputNumber',
          'field': 'discount',
          'title': '折扣',
          'hidden': true,
        },
      ],
    },
    {
      description: '提交时先验证再发送请求',
      example: [
        {
          'type': 'input',
          'field': 'name',
          'title': '姓名',
          'validate': [
            { 'required': true, 'message': '请输入姓名' },
          ],
        },
        {
          'type': 'button',
          '$behavior': {
            'click': [
              {
                'method': 'validate',
                'config': {},
              },
              {
                'method': 'fetch',
                'config': {
                  'action': '/api/submit',
                  'method': 'POST',
                  'success': "[[FORM-CREATE-PREFIX-function(res, api) { this.api.message({message: '请求成功',type: 'success'}); }-FORM-CREATE-SUFFIX]]",
                  'error': "[[FORM-CREATE-PREFIX-function(err) { console.log('提交失败', 'error'); }-FORM-CREATE-SUFFIX]]",
                },
              },
            ],
          },
          'children': ['提交'],
        },
      ],
    },
    {
      description: '组件生命周期事件处理',
      example: [
        {
          'type': 'input',
          'field': 'dynamicField',
          'title': '动态字段',
          'hook': {
            'load': "$FNX:console.log('组件加载完成');",
            'mounted': "$FNX:$inject.api.setValue('loaded', true);",
            'watch': "$FNX:console.log('值发生变化');",
          },
        },
      ],
    },
    {
      description: '根据年龄条件执行不同操作',
      example: [
        {
          'type': 'inputNumber',
          'field': 'age',
          'title': '年龄',
        },
        {
          'type': 'button',
          '$behavior': {
            'click': [
              {
                'method': 'condition',
                'children': [
                  {
                    'method': 'conditionItem',
                    'config': {
                      'mode': 'AND',
                      'group': [
                        {
                          'field': 'age',
                          'condition': '>=',
                          'value': 18,
                        },
                      ],
                    },
                    'children': [
                      {
                        'method': 'message',
                        'config': {
                          'message': '成年人可以提交',
                          'type': 'success',
                        },
                      },
                      {
                        'method': 'submit',
                        'config': {},
                      },
                    ],
                  },
                  {
                    'method': 'conditionItem',
                    'config': {
                      'mode': 'AND',
                      'group': [
                        {
                          'field': 'age',
                          'condition': '<',
                          'value': 18,
                        },
                      ],
                    },
                    'children': [
                      {
                        'method': 'message',
                        'config': {
                          'message': '未成年人不能提交',
                          'type': 'error',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          'children': ['检查年龄'],
        },
      ],
    },
    {
      description: '点击按钮跳转到指定页面',
      example: [
        {
          'type': 'button',
          '$behavior': {
            'click': [
              {
                'method': 'redirectPage',
                'config': {
                  'type': 'location',
                  'break': false,
                  'url': '/target-page',
                },
              },
            ],
          },
          'children': ['跳转页面'],
        },
      ],
    },
    {
      description: '打开和关闭弹窗',
      example: [
        {
          'type': 'button',
          '$behavior': {
            'click': [
              {
                'method': 'openModel',
                'config': {
                  'id': 'modalId',
                },
              },
            ],
          },
          'children': ['打开弹窗'],
        },
        {
          'type': 'button',
          '$behavior': {
            'click': [
              {
                'method': 'closeModel',
                'config': {
                  'id': 'modalId',
                },
              },
            ],
          },
          'children': ['关闭弹窗'],
        },
      ],
    },
    {
      description: '批量操作表单字段',
      example: [
        {
          'type': 'input',
          'field': 'field1',
          'title': '字段1',
        },
        {
          'type': 'input',
          'field': 'field2',
          'title': '字段2',
        },
        {
          'type': 'button',
          '$behavior': {
            'click': [
              {
                'method': 'resetFields',
                'config': {
                  'id': ['field1', 'field2'],
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
          'type': 'input',
          'field': 'searchKeyword',
          'title': '搜索关键词',
        },
        {
          'type': 'button',
          '$behavior': {
            'click': [
              {
                'method': 'fetch',
                'config': {
                  'action': '/api/search',
                  'method': 'POST',
                  'data': {
                    'keyword': '{{$form.searchKeyword}}',
                  },
                  'success': "[[FORM-CREATE-PREFIX-function(res) { console.log('搜索结果:', res); }-FORM-CREATE-SUFFIX]]",
                  'error': "[[FORM-CREATE-PREFIX-function(err) { console.error('搜索失败:', err); }-FORM-CREATE-SUFFIX]]",
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
          'type': 'button',
          'on': {
            'click': '$GLOBAL:globalClickHandler',
          },
          children: ['全局事件'],
        },
      ],
    },
  ],
};
