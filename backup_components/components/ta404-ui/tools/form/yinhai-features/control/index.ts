import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

function getEventPrompt(): string {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const promptPath = join(__dirname, './', 'control-prompt.md');
    return readFileSync(promptPath, 'utf-8');
  } catch (error) {
    console.error('❌ 读取 Vant 提示词失败:', error);
    return '';
  }
}

export const description = getEventPrompt();

export default {
  name: 'computed',
  label: '联动',
  info: '表单联动控制，用于实现字段之间的动态交互和依赖关系。支持条件显示、隐藏、启用、禁用等操作。',
  business: false,
  description,
  templates: [
    {
      description: '根据人员类型显示不同的信息录入组件',
      example: [
        {
          type: 'select',
          label: '人员类型',
          autoShow: false,
          allowDataMapping: true,
          dataType: 'static',
          staticData: [
            {
              label: '学生',
              value: '0',
            },
            {
              label: '老师',
              value: '1',
            },
          ],
          span: 8,
          mode: 'default',
          display: 'true',
          allowClear: true,
          tools: {},
          fieldDecoratorId: 'role',
          renderId: 'UJ7IJ1LMKKC6',
          labelStyle: '{}',
        },
        {
          type: 'select',
          label: '教学科目',
          autoShow: false,
          allowDataMapping: true,
          dataType: 'static',
          staticData: [
            {
              label: '语文',
              value: '0',
            },
            {
              label: '数学',
              value: '1',
            },
            {
              label: '英语',
              value: '2',
            },
          ],
          span: 8,
          mode: 'default',
          display: {
            items: [
              {
                field: 'role',
                operator: 'equal',
                value: '0',
              },
            ],
            conjunction: 'some',
            value: true,
          },
          allowClear: true,
          tools: {},
          fieldDecoratorId: 'classType',
          renderId: 'SAG43JU968SH',
          labelStyle: '{}',
        },
        {
          type: 'single-input',
          label: '学生班级',
          span: 8,
          display: {
            items: [
              {
                field: 'role',
                operator: 'equal',
                value: '1',
              },
            ],
            conjunction: 'some',
            value: true,
          },
          autoShow: false,
          tools: {},
          fieldDecoratorId: 'made',
          renderId: 'K6PNTSK6TIPB',
          labelStyle: '{}',
        },
      ],
    },
    {
      description: '当值为1时显示指定字段',
      example: [
        {
          type: 'select',
          label: '状态',
          fieldDecoratorId: 'status',
          renderId: 'STATUS001',
          staticData: [
            { label: '正常', value: '0' },
            { label: '激活', value: '1' },
          ],
          display: {
            items: [
              {
                field: 'status',
                operator: 'equal',
                value: '1',
              },
            ],
            conjunction: 'some',
            value: true,
          },
          span: 8,
        },
        {
          type: 'input',
          label: '额外信息',
          fieldDecoratorId: 'field1',
          renderId: 'FIELD001',
          display: {
            items: [
              {
                field: 'status',
                operator: 'equal',
                value: '1',
              },
            ],
            conjunction: 'some',
            value: true,
          },
          span: 8,
        },
        {
          type: 'input',
          label: '其他信息',
          fieldDecoratorId: 'name2',
          renderId: 'NAME002',
          display: {
            items: [
              {
                field: 'status',
                operator: 'equal',
                value: '1',
              },
            ],
            conjunction: 'some',
            value: true,
          },
          span: 8,
        },
      ],
    },
    // {
    //   description: '当值大于等于1时显示指定字段',
    //   example: [
    //     {
    //       type: 'input-number',
    //       label: '数量',
    //       fieldDecoratorId: 'quantity',
    //       renderId: 'QTY001',
    //       display: true,
    //       span: 8,
    //     },
    //     {
    //       type: 'input',
    //       label: '额外信息',
    //       fieldDecoratorId: 'field1',
    //       renderId: 'FIELD001',
    //       display: {
    //         items: [
    //           {
    //             field: 'quantity',
    //             operator: 'greaterThanOrEqual',
    //             value: 1,
    //           },
    //         ],
    //         conjunction: 'some',
    //         value: true,
    //       },
    //       span: 8,
    //     },
    //     {
    //       type: 'input',
    //       label: '其他信息',
    //       fieldDecoratorId: 'name2',
    //       renderId: 'NAME002',
    //       display: {
    //         items: [
    //           {
    //             field: 'quantity',
    //             operator: 'greaterThanOrEqual',
    //             value: 1,
    //           },
    //         ],
    //         conjunction: 'some',
    //         value: true,
    //       },
    //       span: 8,
    //     },
    //   ],
    // },
    {
      description: '当值为1时禁用指定字段',
      example: [
        {
          type: 'select',
          label: '状态',
          fieldDecoratorId: 'status',
          renderId: 'STATUS001',
          staticData: [
            { label: '正常', value: '0' },
            { label: '激活', value: '1' },
          ],
          display: true,
          span: 8,
        },
        {
          type: 'input',
          label: '字段1',
          fieldDecoratorId: 'field1',
          renderId: 'FIELD001',
          display: true,
          disabled: {
            items: [
              {
                field: 'status',
                operator: 'equal',
                value: '1',
              },
            ],
            conjunction: 'some',
            value: true,
          },
          span: 8,
        },
        {
          type: 'input',
          label: '字段2',
          fieldDecoratorId: 'name2',
          renderId: 'NAME002',
          display: true,
          disabled: {
            items: [
              {
                field: 'status',
                operator: 'equal',
                value: '1',
              },
            ],
            conjunction: 'some',
            value: true,
          },
          span: 8,
        },
      ],
    },
    // {
    //   description: '当值为1时设置指定字段为必填',
    //   example: [
    //     {
    //       type: 'select',
    //       label: '状态',
    //       fieldDecoratorId: 'status',
    //       renderId: 'STATUS001',
    //       staticData: [
    //         { label: '正常', value: '0' },
    //         { label: '激活', value: '1' },
    //       ],
    //       display: true,
    //       span: 8,
    //     },
    //     {
    //       type: 'input',
    //       label: '字段1',
    //       fieldDecoratorId: 'field1',
    //       renderId: 'FIELD001',
    //       display: true,
    //       required: {
    //         items: [
    //           {
    //             field: 'status',
    //             operator: 'equal',
    //             value: '1',
    //           },
    //         ],
    //         conjunction: 'some',
    //         value: true,
    //       },
    //       span: 8,
    //     },
    //     {
    //       type: 'input',
    //       label: '字段2',
    //       fieldDecoratorId: 'name2',
    //       renderId: 'NAME002',
    //       display: true,
    //       required: {
    //         items: [
    //           {
    //             field: 'status',
    //             operator: 'equal',
    //             value: '1',
    //           },
    //         ],
    //         conjunction: 'some',
    //         value: true,
    //       },
    //       span: 8,
    //     },
    //   ],
    // },
    {
      description: '当值完全等于指定值时显示字段',
      example: [
        {
          type: 'input',
          label: '用户角色',
          fieldDecoratorId: 'userRole',
          renderId: 'ROLE001',
          display: true,
          span: 8,
        },
        {
          type: 'input',
          label: '管理员字段',
          fieldDecoratorId: 'adminFields',
          renderId: 'ADMIN001',
          display: {
            items: [
              {
                field: 'userRole',
                operator: 'equal',
                value: 'admin',
              },
            ],
            conjunction: 'some',
            value: true,
          },
          span: 8,
        },
      ],
    },
    {
      description: '当值不等于指定值时显示字段',
      example: [
        {
          type: 'input',
          label: '用户类型',
          fieldDecoratorId: 'userType',
          renderId: 'TYPE001',
          display: true,
          span: 8,
        },
        {
          type: 'input',
          label: '普通用户字段',
          fieldDecoratorId: 'userFields',
          renderId: 'USER001',
          display: {
            items: [
              {
                field: 'userType',
                operator: 'notEqual',
                value: 'guest',
              },
            ],
            conjunction: 'some',
            value: true,
          },
          span: 8,
        },
      ],
    },
    // {
    //   description: '当值大于指定数值时显示字段',
    //   example: [
    //     {
    //       type: 'input-number',
    //       label: '年龄',
    //       fieldDecoratorId: 'age',
    //       renderId: 'AGE001',
    //       display: true,
    //       span: 8,
    //     },
    //     {
    //       type: 'input',
    //       label: '成人字段',
    //       fieldDecoratorId: 'adultFields',
    //       renderId: 'ADULT001',
    //       display: {
    //         items: [
    //           {
    //             field: 'age',
    //             operator: 'greaterThan',
    //             value: 18,
    //           },
    //         ],
    //         conjunction: 'some',
    //         value: true,
    //       },
    //       span: 8,
    //     },
    //   ],
    // },
    // {
    //   description: '当值在指定范围内时显示字段',
    //   example: [
    //     {
    //       type: 'input-number',
    //       label: '年龄',
    //       fieldDecoratorId: 'age',
    //       renderId: 'AGE001',
    //       display: true,
    //       span: 8,
    //     },
    //     {
    //       type: 'input',
    //       label: '工作年龄字段',
    //       fieldDecoratorId: 'workingAgeFields',
    //       renderId: 'WORK001',
    //       display: {
    //         items: [
    //           {
    //             field: 'age',
    //             operator: 'greaterThanOrEqual',
    //             value: 18,
    //           },
    //           {
    //             field: 'age',
    //             operator: 'lessThanOrEqual',
    //             value: 65,
    //           },
    //         ],
    //         conjunction: 'all',
    //         value: true,
    //       },
    //       span: 8,
    //     },
    //   ],
    // },
    {
      description: '当值在指定数组中时显示字段',
      example: [
        {
          type: 'select',
          label: '用户角色',
          fieldDecoratorId: 'userRole',
          renderId: 'ROLE001',
          staticData: [
            { label: '访客', value: 'guest' },
            { label: '用户', value: 'user' },
            { label: '管理员', value: 'admin' },
            { label: '经理', value: 'manager' },
          ],
          display: true,
          span: 8,
        },
        {
          type: 'input',
          label: '特权字段',
          fieldDecoratorId: 'privilegeFields',
          renderId: 'PRIV001',
          display: {
            items: [
              {
                field: 'userRole',
                operator: 'equal',
                value: 'admin',
              },
              {
                field: 'userRole',
                operator: 'equal',
                value: 'manager',
              },
            ],
            conjunction: 'some',
            value: true,
          },
          span: 8,
        },
      ],
    },
    {
      description: '当值不在指定数组中时显示字段',
      example: [
        {
          type: 'select',
          label: '用户类型',
          fieldDecoratorId: 'userType',
          renderId: 'TYPE001',
          staticData: [
            { label: '会员', value: 'member' },
            { label: '访客', value: 'guest' },
            { label: '访客2', value: 'visitor' },
          ],
          display: true,
          span: 8,
        },
        {
          type: 'input',
          label: '会员字段',
          fieldDecoratorId: 'memberFields',
          renderId: 'MEMBER001',
          display: {
            items: [
              {
                field: 'userType',
                operator: 'notEqual',
                value: 'guest',
              },
              {
                field: 'userType',
                operator: 'notEqual',
                value: 'visitor',
              },
            ],
            conjunction: 'all',
            value: true,
          },
          span: 8,
        },
      ],
    },
    {
      description: '当值为空时显示字段',
      example: [
        {
          type: 'input',
          label: '搜索内容',
          fieldDecoratorId: 'searchContent',
          renderId: 'SEARCH001',
          display: true,
          span: 8,
        },
        {
          type: 'input',
          label: '默认字段',
          fieldDecoratorId: 'defaultFields',
          renderId: 'DEFAULT001',
          display: {
            items: [
              {
                field: 'searchContent',
                operator: 'null',
              },
            ],
            conjunction: 'some',
            value: true,
          },
          span: 8,
        },
      ],
    },
    {
      description: '当值不为空时显示字段',
      example: [
        {
          type: 'input',
          label: '搜索内容',
          fieldDecoratorId: 'searchContent',
          renderId: 'SEARCH001',
          display: true,
          span: 8,
        },
        {
          type: 'input',
          label: '动态字段',
          fieldDecoratorId: 'dynamicFields',
          renderId: 'DYNAMIC001',
          display: {
            items: [
              {
                field: 'searchContent',
                operator: 'notNull',
              },
            ],
            conjunction: 'some',
            value: true,
          },
          span: 8,
        },
      ],
    },
    // {
    //   description: '当值匹配正则时显示字段',
    //   example: [
    //     {
    //       type: 'input',
    //       label: '手机号',
    //       fieldDecoratorId: 'phone',
    //       renderId: 'PHONE001',
    //       display: true,
    //       span: 8,
    //     },
    //     {
    //       type: 'input',
    //       label: '手机相关字段',
    //       fieldDecoratorId: 'phoneFields',
    //       renderId: 'PHONEFIELDS001',
    //       display: {
    //         items: [
    //           {
    //             field: 'phone',
    //             operator: 'pattern',
    //             value: '^1\\\\d{10}$',
    //           },
    //         ],
    //         conjunction: 'some',
    //         value: true,
    //       },
    //       span: 8,
    //     },
    //   ],
    // },
    // {
    //   description: '使用函数控制字段显示',
    //   example: [
    //     {
    //       type: 'input-number',
    //       label: '数量',
    //       fieldDecoratorId: 'quantity',
    //       renderId: 'QTY001',
    //       display: true,
    //       span: 8,
    //     },
    //     {
    //       type: 'select',
    //       label: '状态',
    //       fieldDecoratorId: 'status',
    //       renderId: 'STATUS001',
    //       staticData: [
    //         { label: '未激活', value: 'inactive' },
    //         { label: '激活', value: 'active' },
    //       ],
    //       display: true,
    //       span: 8,
    //     },
    //     {
    //       type: 'input',
    //       label: '条件字段',
    //       fieldDecoratorId: 'conditionalFields',
    //       renderId: 'CONDITIONAL001',
    //       display: {
    //         items: [
    //           {
    //             field: 'quantity',
    //             operator: 'greaterThan',
    //             value: 0,
    //           },
    //           {
    //             field: 'status',
    //             operator: 'equal',
    //             value: 'active',
    //           },
    //         ],
    //         conjunction: 'all',
    //         value: true,
    //       },
    //       span: 8,
    //     },
    //   ],
    // },
    {
      description: '一个条件控制多个字段的显示',
      example: [
        {
          type: 'select',
          label: '公司类型',
          fieldDecoratorId: 'companyType',
          renderId: 'COMPANYTYPE001',
          staticData: [
            { label: '个人', value: 'personal' },
            { label: '企业', value: 'enterprise' },
          ],
          display: true,
          span: 8,
        },
        {
          type: 'input',
          label: '公司名称',
          fieldDecoratorId: 'companyName',
          renderId: 'COMPANY001',
          display: {
            items: [
              {
                field: 'companyType',
                operator: 'equal',
                value: 'enterprise',
              },
            ],
            conjunction: 'some',
            value: true,
          },
          span: 8,
        },
        {
          type: 'input',
          label: '税号',
          fieldDecoratorId: 'taxNumber',
          renderId: 'TAX001',
          display: {
            items: [
              {
                field: 'companyType',
                operator: 'equal',
                value: 'enterprise',
              },
            ],
            conjunction: 'some',
            value: true,
          },
          span: 8,
        },
        {
          type: 'input',
          label: '营业执照',
          fieldDecoratorId: 'businessLicense',
          renderId: 'LICENSE001',
          display: {
            items: [
              {
                field: 'companyType',
                operator: 'equal',
                value: 'enterprise',
              },
            ],
            conjunction: 'some',
            value: true,
          },
          span: 8,
        },
      ],
    },
    // {
    //   description: '结合多个控制条件',
    //   example: [
    //     {
    //       type: 'input-number',
    //       label: '年龄',
    //       fieldDecoratorId: 'age',
    //       renderId: 'AGE001',
    //       display: true,
    //       span: 8,
    //     },
    //     {
    //       type: 'select',
    //       label: '会员类型',
    //       fieldDecoratorId: 'memberType',
    //       renderId: 'MEMBERTYPE001',
    //       staticData: [
    //         { label: '普通', value: 'normal' },
    //         { label: '高级', value: 'premium' },
    //       ],
    //       display: true,
    //       span: 8,
    //     },
    //     {
    //       type: 'input',
    //       label: '成人字段',
    //       fieldDecoratorId: 'adultFields',
    //       renderId: 'ADULT001',
    //       display: {
    //         items: [
    //           {
    //             field: 'age',
    //             operator: 'greaterThanOrEqual',
    //             value: 18,
    //           },
    //         ],
    //         conjunction: 'some',
    //         value: true,
    //       },
    //       span: 8,
    //     },
    //     {
    //       type: 'input',
    //       label: '高级会员字段',
    //       fieldDecoratorId: 'premiumFields',
    //       renderId: 'PREMIUM001',
    //       required: {
    //         items: [
    //           {
    //             field: 'memberType',
    //             operator: 'equal',
    //             value: 'premium',
    //           },
    //         ],
    //         conjunction: 'some',
    //         value: true,
    //       },
    //       span: 8,
    //     },
    //   ],
    // },
  ],
};
