import { change, click, blur, } from './events'

export default [
  {
    title: '容器布局组件',
    type: 'layout',
    list: [
      {
        type: 'div',
        icon: 'icon-card',
        label: 'Div容器',
        span: 24,
        display: 'true', // 是否展示
        tools: {
          showClone: true, // 显示克隆组件功能按钮
          showDelete: true, // 显示删除组件功能按钮
          showClear: true, // 显示清空组件功能按钮
        },
        children: {
          column: [],
        },
        eventsDefinitions: {},
      },
      {
        type: 'tabs',
        span: 24,
        icon: 'icon-tabs',
        label: '标签页',
        labelText: true,
        slotName: '',
        tabPosition: 'left',
        display: 'true',
        tabType: 'line',
        tools: {
          showClear: true,

        },
        staticData: [
          {
            tab: 'tab-1',
            key: '1',
            children: {
              column: [],
            },
          }
        ],
        eventsDefinitions: {
          change: {
            label: '面板切换时触发该事件',
            arguments: [
              {
                name: 'key',
                label: '当前选中面板的值',
              }
            ],
          },
          edit: {
            visible: 'return widget.tabType === "editable-card"',
            label: '面板切换时触发该事件',
            arguments: [
              {
                name: 'targetKey',
                label: '当前选中面板的key',
              },
              {
                name: 'action',
                label: '需要调用的方法',
              }
            ],
          },
        },
      },
      {
        type: 'collapse',
        span: 24,
        icon: 'icon-cascader',
        label: '折叠面板',
        labelText: true,
        slotName: '',
        display: 'true',
        tools: {
          showClear: true,
        },
        bordered: true,
        staticData: [
          {
            header: 'pane-1',
            key: '1',
            column: [],
          }
        ],
        eventsDefinitions: {
          change: {
            label: '切换面板事件',
            arguments: [{
              name: 'key',
              label: 'key',
            }],
          },
        },
      },
      {
        type: 'card',
        label: '卡片容器',
        icon: 'icon-card',
        span: 24,
        display: 'true',
        formCardStyleFit: false,
        formCardStyle: {
          height: '450px',
        },
        children: {
          align: 'left',
          headerAlign: 'left',
          addBtn: true,
          delBtn: true,
          column: [],
        },
        tools: {
          showClear: true,

        },
        eventsDefinitions: {},
      },
      {
        type: 'drawer',
        label: '抽屉',
        icon: 'icon-drawer',
        placement: 'right',
        title: '抽屉标题',
        width: 800,
        footerHeight: '55px',
        maskClosable: true,
        closable: true,
        span: 24,
        display: false,
        children: {
          align: 'center',
          headerAlign: 'center',
          addBtn: true,
          delBtn: true,
          column: [],
        },
        tools: {
          showClear: true,

        },
        eventsDefinitions: {
          close: {
            label: '点击遮罩层或右上角叉或取消按钮的回调',
            arguments: [],
          },
        },
      },
      {
        type: 'modal',
        label: '弹窗',
        icon: 'icon-model',
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
          column: [],
        },
        tools: {
          showClear: true,

        },
        eventsDefinitions: {
          ok: {
            label: '确认事件',
            arguments: [
              {
                name: 'e',
                label: '$event',
              }
            ],
          },
          cancel: {
            label: '取消事件',
            arguments: [
              {
                name: 'e',
                label: '$event',
              }
            ],
          },
        },
      },
      {
        type: 'border-layout',
        label: 'Border布局',
        formParams: [{
          key: '',
          id: '',
        }],
        fitHeight: '100%',
        layout: {
          header: '0',
          right: '0',
          left: '0',
          footer: '0',
        },
        showBorder: true,
        showPadding: true,
        headerCfg: {
          title: '',
          showBar: false,
          expand: false,
          expandText: '收起',
          FoldText: '展开',
          barHeight: '0',
          showBorder: false,
        },
        leftCfg: {
          title: '',
          expand: false,
          expandText: '收起',
          FoldText: '展开',
          barHeight: '0',
          showBorder: false,
        },
        rightCfg: {
          title: '',
          expand: false,
          expandText: '收起',
          FoldText: '展开',
          barHeight: '0',
          showBorder: false,
        },
        footerCfg: {
          title: '',
          expand: false,
          expandText: '收起',
          FoldText: '展开',
          barHeight: '0',
          showBorder: false,
        },
        centerCfg: {
          title: '',
          barHeight: '0',
          footerHeight: '0',
        },
        children: {
          centers: [],
          headers: [],
          headerExtra: [],
          footers: [],
          footerExtra: [],
          lefts: [],
          leftExtra: [],
          rights: [],
          rightExtra: [],
          centerExtra: [],
          centerFooter: [],
        },
        icon: 'icon-border-layout',
        span: 24,
        display: 'true',
        scroll: {
          x: '100%',
          y: 100,
        },
        tools: {
          showClear: true,

        },
        eventsDefinitions: {},
      },
      {
        type: 'search',
        label: '搜索栏容器',
        icon: 'icon-card',
        span: 24,
        display: 'true',
        children: {
          align: 'center',
          headerAlign: 'center',
          addBtn: true,
          delBtn: true,
          column: [],
        },
        tools: {
          showClear: true,

        },
        eventsDefinitions: {},
      }
    ],
  },
  {
    title: '输入组件',
    type: 'input',
    list: [
      {
        type: 'single-input',
        label: '输入框',
        icon: 'icon-input',
        span: 8,
        display: 'true',
        autoShow: false,
        tools: {},
        eventsDefinitions: {
          blur,
          focus: {
            label: '聚焦时触发的事件',
            arguments: [],
          },
          click,
          change: {
            label: '输入的值变化时，调用此函数',
            arguments: [
              {
                name: 'value',
                label: '修改后的值, value是浏览器Event对象，读取输入的值用法为 value.target.value',
              }
            ],
          },
        },
        comp: {
          defaultEvent: 'change',
        },
      },
      {
        type: 'input-group',
        label: '组合输入框',
        icon: 'icon-input-group',
        span: 8,
        display: 'true',
        tools: {},
        compact: false,
        size: 'default',
        autoShow: false,
        takeOverMode: true,
        staticData: [
          { type: 'input', },
          { type: 'input', }
        ],
        eventsDefinitions: {},
      }, {
        type: 'input-search',
        label: '带搜索文本',
        icon: 'icon-search',
        span: 8,
        display: 'true',
        haveEnterButton: false,
        autoShow: false,
        tools: {},
        eventsDefinitions: {
          onSearch: {
            label: '点击搜索或按下回车键时的回调',
            arguments: [{
              name: 'value',
              label: '当前文本值, value即为输入的值',
            }],
          },
        },
      }, {
        type: 'password',
        label: '密码输入框',
        autoShow: false,
        icon: 'icon-password',
        span: 8,
        display: 'true',
        tools: {},
        eventsDefinitions: {
          blur,
          click,
          change,
        },
      }, {
        type: 'multi-input',
        label: '多行输入框',
        autoShow: false,
        autoSize: true,
        icon: 'icon-textarea',
        span: 8,
        display: 'true',
        tools: {},
        eventsDefinitions: {
          blur,
          click,
          change,
        },
      }, {
        type: 'number',
        label: '数字输入框',
        autoShow: false,
        icon: 'icon-number',
        span: 8,
        display: 'true',
        decimalSeparator: '.',
        tools: {},
        eventsDefinitions: {
          blur,
          click: {
            label: '点击事件',
            arguments: [],
          },
          change: {
            label: '变化回调',
            arguments: [{
              name: 'value',
              label: '变化后的值, value即为输入的值',
            }],
          },
        },
      },
      {
        type: 'rpc',
        label: 'RPC查询',
        autoShow: false,
        icon: 'icon-suggest',
        span: 8,
        dataType: 'static',
        display: 'true',
        allowClear: true,
        dropdownTrigger: 'delay',
        dropdownMatchSelectWidth: false,
        dropdownMatchSelectWidthValue: '500px',
        searchDelay: 600,
        titleList: [
          {
            key: 'id',
            value: '编号',
          },
          {
            key: 'name',
            value: '名称',
          }
        ],
        formParams: [],
        optionConfig: {
          value: 'id',
          label: 'name',
        },
        data: JSON.stringify([
          {
            name: '张三',
            id: '10010',
          }
        ]),
        tools: {},
        eventsDefinitions: {
          search: {
            label: '搜索时调用，【静态数据】模式下可使用staticData进行数据赋值，例如:staticData = [{id:"1",name:"李四"}]; 【远程数据】模式下下相当于请求远程数据前的执行函数',
            arguments: [
              {
                name: 'value',
                label: '搜索值',
              }
            ],
          },
          callBack: {
            label: '被选中时调用',
            arguments: [
              {
                name: 'value',
                label: 'value选中数据的id',
              },
              {
                name: 'item',
                label: 'value选中数据对象',
              }
            ],
          },
          change: {
            label: '选中值改变的时候调用',
            arguments: [
              {
                name: 'value',
                label: 'value选中数据的key',
              }
            ],
          },
          focus: {
            label: '获得焦点时的回调',
            arguments: [
            ],
          },
        },
      }
    ],
  },
  {
    title: '选择组件',
    type: 'select',
    list: [
      {
        type: 'switch',
        label: '开关',
        icon: 'icon-switcher',
        span: 8,
        autoShow: false,
        display: 'true',
        valueDefault: 0,
        tools: {},
        eventsDefinitions: {
          click: {
            label: '点击时回调函数',
            arguments: [{
              name: 'checked',
              label: '当前值',
            }],
          },
          change: {
            label: '变化时回调函数',
            arguments: [{
              name: 'checked',
              label: '改变后的值',
            }],
          },
        },
      },
      {
        type: 'radio',
        label: '单选框组',
        autoShow: false,
        icon: 'icon-radio',
        dataType: 'static',
        allowDataMapping: true,
        collectionType: '',
        collectionFilter: '',
        radioButton: false,
        buttonStyle: false,
        radioStyle: '',
        reverseFilter: false,
        tools: {},
        staticData: [
          {
            label: '选项一',
            value: '0',
          },
          {
            label: '选项二',
            value: '1',
          },
          {
            label: '选项三',
            value: '2',
          }
        ],
        span: 8,
        display: 'true',
        eventsDefinitions: {
          change: {
            label: '选项变化时的回调函数',
            arguments: [
              {
                name: 'e',
                label: 'e是浏览器Event对象，读取输入的值用法为 e.target.value',
              }
            ],
          },
        },
      },
      {
        type: 'checkbox',
        label: '多选框组',
        autoShow: false,
        icon: 'icon-checkbox',
        allowDataMapping: true,
        dataType: 'static',
        initialValuePlaceholder: '默认值示例：["1"]',
        staticData: [
          {
            label: '选项一',
            value: '0',
          },
          {
            label: '选项二',
            value: '1',
          },
          {
            label: '选项三',
            value: '2',
          }
        ],
        span: 8,
        display: 'true',
        tools: {},
        eventsDefinitions: {
          change: {
            label: '选中选项或输入的值变化时，调用此函数',
            arguments: [
              {
                name: 'value',
                label: '修改后的值，value即为实际值',
              }
            ],
          },
        },
      },
      {
        type: 'select',
        label: '下拉选择器',
        autoShow: false,
        allowDataMapping: true,
        icon: 'icon-select',
        dataType: 'static',
        staticData: [
          {
            label: '选项一',
            value: '0',
          },
          {
            label: '选项二',
            value: '1',
          },
          {
            label: '选项三',
            value: '2',
          }
        ],
        span: 8,
        mode: 'default',
        display: 'true',
        allowClear: true,
        tools: {},
        eventsDefinitions: {
          change: {
            label: '选中选项或输入的值变化时，调用此函数',
            arguments: [
              {
                name: 'value',
                label: '修改后的值，value即为实际值',
              }
            ],
          },
          select: {
            label: '选中选项时，调用此函数',
            arguments: [
              {
                name: 'value',
                label: '选择的值，value即为实际值',
              }
            ],
          },
        },
      },
      {
        type: 'cascader',
        label: '级联选择器',
        autoShow: false,
        icon: 'icon-cascader',
        span: 8,
        dataType: 'static',
        allowClear: true,
        changeOnSelect: true,
        display: 'true',
        expandTrigger: 'click',
        tools: {},
        skipCall: false,
        staticData: [
          {
            label: '选项一',
            value: '1',
            id: '1',
            children: [{
              label: '选项1-1',
              value: '1-1',
              id: '1-1',
            }, {
              label: '选项1-2',
              value: '1-2',
              id: '1-2',
            }],
          },
          {
            label: '选项二',
            value: '2',
            id: '2',
          },
          {
            label: '选项三',
            value: '3',
            id: '3',
          }
        ],
        eventRunInNextTick: true,
        eventsDefinitions: {
          click: {
            label: '点击事件',
            arguments: [],
          },
          change: {
            label: '选中选项或输入的值变化时，调用此函数',
            arguments: [
              {
                name: 'value',
                label: '修改后的值，value即为实际值',
              },
              {
                name: 'selectedOptions',
                label: '该行的行数据，selectedOptions即为实际值',
              }
            ],
          },
        },
      },
      {
        type: 'tree',
        allowDataMapping: true,
        label: '树形选择器',
        autoShow: false,
        icon: 'icon-treeselect',
        span: 8,
        dataType: 'static',
        allowClear: true,
        display: 'true',
        staticData: [
          {
            label: '选项一',
            value: '1',
            id: '1',
            children: [{
              label: '选项1-1',
              value: '1-1',
              id: '1-1',
            }, {
              label: '选项1-2',
              value: '1-2',
              id: '1-2',
            }],
          },
          {
            label: '选项二',
            value: '2',
            id: '2',
          },
          {
            label: '选项三',
            value: '3',
            id: '3',
          }
        ],
        eventRunInNextTick: true,
        tools: {},
        eventsDefinitions: {
          click: {
            label: '点击事件',
            arguments: [],
          },
          change: {
            label: '选中选项或输入的值变化时，调用此函数',
            arguments: [
              {
                name: 'value',
                label: '修改后的值，value即为实际值',
              }
            ],
          },
        },
      },
      {
        type: 'rate',
        label: '评价',
        icon: 'icon-rate',
        span: 8,
        display: 'true',
        allowClear: true,
        autoShow: false,
        tools: {},
        eventsDefinitions: {
          change: {
            label: '选择时的回调',
            arguments: [{
              name: 'value',
              label: '修改后的值，value即为实际值',
            }],
          },
        },
      },
      {
        type: 'slider',
        label: '滑块',
        icon: 'icon-slider',
        span: 8,
        display: 'true',
        autoShow: false,
        range: false,
        step: 1,
        min: 0,
        max: 10,
        tools: {},
        eventsDefinitions: {
          change: {
            label: '值发生改变时触发change事件',
            arguments: [{
              name: 'value',
              label: '修改后的值，value即为实际值',
            }],
          },
        },
      },
      {
        type: 'color',
        label: '颜色选择器',
        icon: 'icon-color-picker',
        span: 8,
        autoShow: false,
        display: 'true',
        panelPosition: 'left',
        verticalPosition: 'bottom',
        initialValue: '#000000',
        tools: {},
        eventsDefinitions: {},
      },
      {
        type: 'photo',
        label: '图片上传',
        labelText: true,
        icon: 'icon-img',
        span: 8,
        display: 'true',
        itemStyle: 'float: right;margin-right: 30px; height: 230px;width:205px',
        imgStyle: 'width:192px;height: 162px;',
        uploadUrl: 'http://127.0.0.1:10186/formcenter/demo/uploadFile',
        imageUrl: '',
        autoShow: false,
        desc: '点击此处，选择上传',
        isView: false,
        maxType: '1',
        tools: {},
        eventsDefinitions: {
          callBack: {
            label: '回调事件',
            arguments: [{
              name: 'value',
              label: '上传后的图片信息',
            }],
          },
        },
      },
      {
        type: 'upload',
        icon: 'icon-upload',
        span: 8,
        label: '文件上传',
        display: 'true',
        autoShow: false,
        isAuto: true,
        fileList: [],
        uploadUrl: '',
        delUrl: '',
        host: '',
        tools: {},
        eventsDefinitions: {
          change: {
            label: '上传文件状态改变时调用',
            arguments: [],
          },
        },
      },
      {
        type: 'transfer',
        icon: 'icon-transfer',
        span: 10,
        label: '穿梭框',
        autoShow: false,
        display: 'true',
        rowKey: 'id',
        currentMode: 'normal',
        dataType: 'static',
        staticData: '[\n' +
            ' { "id": "1101", "title": "content1" , "description": "description of content" , "disabled": false }, \n' +
            ' { "id": "1102", "title": "content3" , "description": "description of content" , "disabled": false }, \n' +
            ' { "id": "1103", "title": "content3" , "description": "description of content" , "disabled": true } \n' +
            ']',
        bigTableProps: {
          rowId: 'id',
          column: [{
            display: 'true',
            title: '列1',
            field: 'column1',
            align: 'left',
            headerAlign: 'left',
          }, {
            display: 'true',
            title: '列2',
            field: 'column2',
            align: 'left',
            headerAlign: 'left',
          }],
        },
        treeProps: {
          checkable: true,
          defaultExpandAll: true,
          checkStrictly: true,
        },
        tools: {},
        eventsDefinitions: {
          change: {
            label: '选项在两栏之间转移时的回调函数',
            arguments: [{
              name: 'targetKeys',
              label: '显示到右侧框中的数据值',
            }, {
              name: 'direction',
              label: 'left | right',
            }, {
              name: 'moveKeys',
              label: '移动的数据值',
            }],
          },
          selectChange: {
            label: '选中项发生改变时的回调函数',
            arguments: [{
              name: 'sourceSelectedKeys',
              label: '左侧框中勾选的数据值',
            }, {
              name: 'targetSelectedKeys',
              label: '右侧框中勾选的数据值',
            }],
          },
          search: {
            label: '搜索框内容时改变时的回调函数',
            arguments: [{
              name: 'direction',
              label: 'left | right',
            }, {
              name: 'value',
              label: '搜索值',
            }],
          },
          scroll: {
            label: '选项列表滚动时的回调函数',
            arguments: [{
              name: 'direction',
              label: 'left | right',
            }, {
              name: 'event',
              label: '',
            }],
          },
        },
      }
    ],
  },
  {
    title: '日期时间组件',
    type: 'date',
    list: [{
      type: 'year',
      label: '年',
      icon: 'icon-date-picker',
      span: 8,
      display: 'true',
      allowClear: true,
      validNowTime: '-1',
      format: 'YYYY',
      eventRunInNextTick: true,
      tools: {},
      autoShow: false,
      eventsDefinitions: {
        change: {
          label: '选中选项或输入的值变化时，调用此函数',
          arguments: [
            {
              name: 'value',
              label: '修改后的值，value即为实际值',
            }
          ],
        },
      },
    }, {
      type: 'quarter',
      label: '季度',
      icon: 'icon-date-picker',
      span: 8,
      display: 'true',
      allowClear: true,
      format: 'YYYY-第Q季度',
      validNowTime: '-1',
      eventRunInNextTick: true,
      tools: {},
      autoShow: false,
      eventsDefinitions: {
        change: {
          label: '选中选项或输入的值变化时，调用此函数',
          arguments: [
            {
              name: 'value',
              label: '修改后的值，value即为实际值',
            }
          ],
        },
      },
    }, {
      type: 'month',
      label: '月',
      icon: 'icon-date-picker',
      span: 8,
      display: 'true',
      allowClear: true,
      format: 'YYYY-MM',
      validNowTime: '-1',
      eventRunInNextTick: true,
      tools: {},
      autoShow: false,
      eventsDefinitions: {
        change: {
          label: '选中选项或输入的值变化时，调用此函数',
          arguments: [
            {
              name: 'value',
              label: '修改后的值，value即为实际值',
            }
          ],
        },
      },
    }, {
      type: 'week',
      label: '周',
      icon: 'icon-date-picker',
      span: 8,
      autoShow: false,
      display: 'true',
      allowClear: true,
      format: 'YYYY-第ww周',
      validNowTime: '-1',
      eventRunInNextTick: true,
      tools: {},
      eventsDefinitions: {
        change: {
          label: '选中选项或输入的值变化时，调用此函数',
          arguments: [
            {
              name: 'value',
              label: '修改后的值，value即为实际值',
            }
          ],
        },
      },
    }, {
      type: 'date',
      label: '日期',
      icon: 'icon-date-picker',
      span: 8,
      display: 'true',
      autoShow: false,
      allowClear: true,
      format: 'YYYY-MM-DD',
      showToday: true,
      validNowTime: '-1',
      eventRunInNextTick: true,
      tools: {},
      eventsDefinitions: {
        change: {
          label: '选中选项或输入的值变化时，调用此函数',
          arguments: [
            {
              name: 'value',
              label: '修改后的值，value即为实际值',
            }
          ],
        },
      },
    }, {
      type: 'time',
      label: '时间',
      autoShow: false,
      icon: 'icon-date-picker',
      span: 8,
      display: 'true',
      allowClear: true,
      format: 'HH:mm:ss',
      validNowTime: '-1',
      eventRunInNextTick: true,
      tools: {},
      eventsDefinitions: {
        change: {
          label: '选中选项或输入的值变化时，调用此函数',
          arguments: [
            {
              name: 'value',
              label: '修改后的值，value即为实际值',
            }
          ],
        },
      },
    }, {
      type: 'datetime',
      label: '日期时间',
      icon: 'icon-date-picker',
      span: 8,
      display: 'true',
      autoShow: false,
      allowClear: true,
      format: 'YYYY-MM-DD HH:mm:ss',
      validNowTime: '-1',
      eventRunInNextTick: true,
      tools: {},
      eventsDefinitions: {
        change: {
          label: '选中选项或输入的值变化时，调用此函数',
          arguments: [
            {
              name: 'value',
              label: '修改后的值，value即为实际值',
            }
          ],
        },
      },
    }, {
      type: 'daterange',
      label: '日期范围',
      icon: 'icon-date-picker',
      span: 8,
      autoShow: false,
      allowClear: true,
      display: 'true',
      format: 'YYYY-MM-DD',
      validNowTime: '-1',
      eventRunInNextTick: true,
      tools: {},
      eventsDefinitions: {
        change: {
          label: '选中选项或输入的值变化时，调用此函数',
          arguments: [
            {
              name: 'value',
              label: '修改后的值，value即为实际值',
            }
          ],
        },
      },
    }, {
      type: 'datetimerange',
      label: '日期时间范围',
      icon: 'icon-date-picker',
      span: 8,
      autoShow: false,
      allowClear: true,
      display: 'true',
      format: 'YYYY-MM-DD HH:mm:ss',
      validNowTime: '-1',
      eventRunInNextTick: true,
      tools: {},
      eventsDefinitions: {
        change: {
          label: '选中选项或输入的值变化时，调用此函数',
          arguments: [
            {
              name: 'value',
              label: '修改后的值，value即为实际值',
            }
          ],
        },
      },
    }],
  },
  {
    title: '数据展示组件',
    type: 'display',
    list: [
      {
        type: 'richText',
        label: '富文本',
        icon: 'icon-rich',
        span: 24,
        display: 'true',
        content: '富文本内容',
        eventsDefinitions: {
        },
      },
      {
        type: 'echarts',
        echarsType: 'bar',
        icon: 'icon-char-bar',
        name: '名称',
        span: 24,
        display: 'true',
        optionConfigType: 'grap',
        optionJsCode:
            'const option = {\n' +
            '  title: {\n' +
            '    text: "echarts示例"\n' +
            '  },\n' +
            '  xAxis: {\n' +
            '    type: "category",\n' +
            '    data: [ "衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子" ]\n' +
            '  },\n' +
            '  yAxis: {\n' +
            '    type: "value"\n' +
            '  },\n' +
            '  series: [\n' +
            '    {\n' +
            '      data: data,\n' +
            '      type: "bar"\n' +
            '    }\n' +
            '  ]\n' +
            '};\n' +
            'resolve(option)\n',
        showType: 'xAxis',
        showData: '衬衫,羊毛衫,雪纺衫,裤子,高跟鞋,袜子',
        localData: '10,20,10,10,14,15',
        label: 'echarts图表',
        seriesLabelPosition: 'outside',
        loading: {
          show: false,
          text: 'loading',
          color: '#c23531',
          textColor: '#000',
          maskColor: 'rgba(255, 255, 255, 0.8)',
          // 字体大小。从 `v4.8.0` 开始支持。
          fontSize: 12,
          // 是否显示旋转动画（spinner）。从 `v4.8.0` 开始支持。
          showSpinner: true,
          // 旋转动画（spinner）的半径。从 `v4.8.0` 开始支持。
          spinnerRadius: 10,
          // 旋转动画（spinner）的线宽。从 `v4.8.0` 开始支持。
          lineWidth: 5,
          // 字体粗细。从 `v5.0.1` 开始支持。
          fontWeight: 'normal',
        },
        title: {
          show: true,
          text: 'echarts示例',
        },
        dataType: 'static',
        formParams: [],
        style: 'width: 100%;height:300px;',
        colorConfigType: 'text',
        legend: {
          show: false,
          orient: 'horizontal',
          formatterType: 'text',
          formatter: '',
          top: 'auto',
          bottom: 'auto',
          left: 'auto',
          right: 'auto',
        },
        tools: {},
        tooltip: {
          show: true,
          formatter: '',
        },
        xAsis: {
          show: true,
        },
        yAsis: {
          show: true,
        },
        visualMap: {},
        eventsDefinitions: {
          onload: {
            label: '加载完成事件',
            arguments: [],
          },
        },
        toolbox: {
          restore: {
            show: false,
          },
          my_refresh: {
            show: false,
          },
        },
        echartsEventList: [],
      },
      {
        type: 'dynamic',
        label: '表格',
        formParams: [{
          key: '',
          id: '',
        }],
        operateMenu: [],
        haveSn: true,
        icon: 'icon-table',
        span: 24,
        display: 'true',
        dataType: 'remote',
        scroll: {
          x: '100%',
          y: 100,
        },
        children: {
          align: 'center',
          headerAlign: 'center',
          addBtn: true,
          delBtn: true,
          column: [{
            display: 'true',
            title: '列1',
            width: 110,
            dataType: 'dict',
            align: 'center',
            type: 'column',
            staticData: [],
            icon: 'icon-input',
            fieldDecoratorId: '1640855395486_48104',
            dataIndex: 'column1',
          }],
        },
        tools: {
          showClear: true,

        },
        eventsDefinitions: {
          change: {
            label: '选中选项或输入的值变化时，调用此函数',
            arguments: [
              {
                name: 'newData',
                label: '改变的值',
              },
              {
                name: 'record',
                label: '该行的行数据',
              },
              {
                name: 'columnKey',
                label: '该行的columnKey值',
              },
              {
                name: 'rowKey',
                label: '该行的rowKey值',
              }
            ],
          },
        },
      },
      {
        type: 'bigTable',
        label: '大表格',
        labelText: true,
        icon: 'icon-table',
        itemStyle: {},
        formParams: [{
          key: '',
          id: '',
        }],
        size: 'medium',
        border: 'default',
        height: '400px',
        span: 24,
        operateMenu: [],
        display: 'true',
        dataType: 'remote',
        inputSearchWidth: '256px',
        inputSearchPlaceholder: '输入内容搜索',
        inputSearchVarName: 'query',
        queryFieldsVarName: 'queryFields',
        rowSelectionTrigger: 'default',
        data: [],
        column: [{
          display: 'true',
          title: '列1',
          field: 'column1',
          align: 'left',
          columnFilterProps: {},
          headerAlign: 'left',
        }],
        tools: {
          showClear: true,

        },
        hasTopBar: false,
        eventsDefinitions: {},
      },
      {
        type: 'span',
        label: '文本',
        labelText: true,
        icon: 'icon-span',
        span: 8,
        display: 'true',
        tools: {},
        text: '文本文本',
        eventsDefinitions: {
          click: {
            label: '点击事件',
            arguments: [],
          },
        },
      },
      {
        type: 'p',
        label: '段落',
        labelText: true,
        icon: 'icon-p',
        span: 24,
        display: 'true',
        tools: {},
        children: {
          align: 'left',
          headerAlign: 'left',
          column: [],
        },
        pText: '这是一个p标签',
        eventsDefinitions: {
          click: {
            label: '点击事件',
            arguments: [],
          },
        },
      },
      {
        type: 'steps',
        icon: 'icon-steps',
        span: 24,
        label: '步骤条',
        display: 'true',
        direction: 'horizontal',
        current: 0,
        size: 'default',
        stepType: 'default',
        staticData: '[\n' +
            ' { "title": "Started", "description": "This is a description.", "icon": "user", "status": "finish" }, \n' +
            ' { "title": "In Progress", "description": "This is a description.", "icon": "loading", "status": "process"}, \n' +
            ' { "title": "Finished", "description": "This is a description.", "icon": "smile-o", "status": "wait"} \n' +
            ']',
        dataType: 'static',
        titleField: 'title',
        descriptionField: 'description',
        tools: {},
      },
      {
        type: 'timeline',
        icon: 'icon-timeline',
        span: 8,
        label: '时间轴',
        display: 'true',
        autoShow: false,
        mode: 'left',
        color: 'blue',
        staticData: '[\n' +
            ' { "time": "2024.07.31", "state": "已发货" }, \n' +
            ' { "time": "2024.07.30", "state": "待取件" }\n' +
            ']',
        dataType: 'static',
        nameField: 'time',
        style: 'padding: 8px 0;',
        tools: {},
      },
      {
        type: 'e-tree',
        label: '树形数据',
        autoShow: false,
        labelText: true,
        icon: 'icon-tree',
        title: '弹窗标题',
        span: 8,
        display: 'true',
        height: 120,
        itemStyle: 'height:160px',
        dataType: 'static',
        inputDisplay: true,
        staticData: [{
          id: '1',
          label: '一级 1',
          children: [{
            id: '2',
            label: '二级 1-1',
            children: [{
              id: '3',
              label: '三级 1-1-1',
            }],
          }],
        }, {
          label: '一级 2',
          id: '4',
          children: [{
            label: '二级 2-1',
            id: '5',
            children: [{
              id: '6',
              label: '三级 2-1-1',
            }],
          }, {
            id: '7',
            label: '二级 2-2',
            children: [{
              id: '8',
              label: '三级 2-2-1',
            }],
          }],
        }, {
          label: '一级 3',
          id: '9',
          children: [{
            label: '二级 3-1',
            id: '10',
            children: [{
              id: '11',
              label: '三级 3-1-1',
            }],
          }, {
            id: '12',
            label: '二级 3-2',
            children: [{
              id: '13',
              label: '三级 3-2-1',
            }],
          }],
        }],
        tools: {},
        eventsDefinitions: {
          click: {
            label: '点击事件',
            arguments: [],
          },
        },
      },
      {
        type: 'iframe',
        span: 24,
        icon: 'icon-iframe',
        display: 'true',
        label: 'iframe',
        labelText: true,
        src: '',
        itemStyle: 'width:100%;height:400px',
        tools: {},
        eventsDefinitions: {
          onload: {
            label: '加载完成事件',
            arguments: [],
          },
        },
      },
      {
        type: 'tree-modal',
        label: '弹窗树形数据',
        icon: 'icon-tree',
        title: '弹窗标题',
        span: 24,
        width: 800,
        height: 500,
        display: false,
        okText: '保存',
        cancelText: '关闭',
        okType: 'primary',
        maskClosable: true,
        keyboard: true,
        destroyOnClose: true,
        dataType: 'static',
        allowClear: true,
        inputDisplay: true,
        staticData: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 2,
            label: '二级 1-1',
            children: [{
              id: 3,
              label: '三级 1-1-1',
            }],
          }],
        }, {
          label: '一级 2',
          id: 4,
          children: [{
            label: '二级 2-1',
            id: 5,
            children: [{
              id: 6,
              label: '三级 2-1-1',
            }],
          }, {
            id: 7,
            label: '二级 2-2',
            children: [{
              id: 8,
              label: '三级 2-2-1',
            }],
          }],
        }, {
          label: '一级 3',
          id: 9,
          children: [{
            label: '二级 3-1',
            id: 10,
            children: [{
              id: 11,
              label: '三级 3-1-1',
            }],
          }, {
            id: 12,
            label: '二级 3-2',
            children: [{
              id: 13,
              label: '三级 3-2-1',
            }],
          }],
        }],
        tools: {},
        eventsDefinitions: {
          ok: {
            label: '确认事件',
            arguments: [
              {
                name: 'value',
                label: 'value',
              }
            ],
          },
          cancel: {
            label: '取消事件',
            arguments: [
              {
                name: 'e',
                label: '$event',
              }
            ],
          },
        },
      }
    ],
  },
  {
    title: '辅助组件',
    type: 'assist',
    list: [
      {
        type: 'space',
        span: 24,
        icon: 'icon-space',
        label: '占位',
        labelText: true,
        display: 'true',
        tools: {},
        eventsDefinitions: {},
      },
      {
        type: 'divider',
        span: 24,
        icon: 'icon-divider',
        height: '60px',
        label: '换行',
        display: 'true',
        itemStyle: 'height:60px',
        tools: {},
        eventsDefinitions: {},
      },
      {
        type: 'label-con',
        label: '标签容器',
        icon: 'icon-labelcon',
        span: 4,
        labelCol: { span: 24, },
        display: 'true',
        colon: true,
        tools: {},
        eventsDefinitions: {},
      },
      {
        type: 'button',
        icon: 'icon-button',
        span: 4,
        label: '按钮',
        slotName: '',
        size: 'default',
        buttonType: 'primary',
        display: 'true',
        tools: {},
        eventsDefinitions: {
          click: {
            label: '点击事件',
            arguments: [],
          },
        },
      },
      {
        type: 'button-label',
        span: 8,
        icon: 'icon-button',
        label: '带label按钮',
        buttonLabel: '按钮',
        slotName: '',
        size: 'default',
        buttonType: 'primary',
        display: 'true',
        tools: {},
        eventsDefinitions: {
          click: {
            label: '点击事件',
            arguments: [],
          },
        },
      },
      {
        type: 'button-group',
        icon: 'icon-button-group',
        span: 8,
        label: '按钮组',
        slotName: '',
        dataType: 'static',
        display: 'true',
        staticData: [
          {
            tab: '按钮1',
            key: 1,
            type: 'default',
            icon: '',
            confirm: false,
            css: '',
            onclick: '',
            fieldDecoratorId: '1724208672994_71354_1',
          },
          {
            tab: '按钮2',
            key: 2,
            type: 'default',
            icon: '',
            confirm: false,
            css: '',
            onclick: '',
            fieldDecoratorId: '1724208672994_71354_2',
          }
        ],
        tools: {},
        eventsDefinitions: {},
      },
      {
        type: 'report',
        icon: 'icon-report',
        span: 24,
        display: 'true',
        label: 'report报表',
        labelText: true,
        tdSelectSourceType: 'collection',
        thead: {
          type: 'head',
          colspan: 24,
          rowHeight: '37px',
          value: '报表名',
          headStyle: 'text-align: center;border: none;font-size: 25px;margin-bottom: 30px;font-weight: bold;padding-bottom: 8px;',
        },
        tbody: [
          {
            type: 'tr',
            children: [
              {
                type: 'td',
                colspan: 24,
                rowspan: 1,
                fieldDecoratorId: '1',
                eventsDefinitions: {
                  click: {
                    label: '单元格点击回调',
                    arguments: [{
                      name: 'rowIndex',
                      label: '行号',
                    }, {
                      name: 'colIndex',
                      label: '列号',
                    }, {
                      name: 'col',
                      label: '当前单元格信息',
                    }, {
                      name: 'value',
                      label: '当前单元格值',
                    }],
                  },
                  change: {
                    label: '编辑项值改变回调',
                    arguments: [{
                      name: 'rowIndex',
                      label: '行号',
                    }, {
                      name: 'colIndex',
                      label: '列号',
                    }, {
                      name: 'col',
                      label: '当前单元格信息',
                    }, {
                      name: 'value',
                      label: '改变后的值',
                    }],
                  },
                },
              }
            ],
            fieldDecoratorId: '0',
          }
        ],
        tfooter: {
          type: 'footer',
          value: '表脚',
          rowHeight: '37px',
        },
        tools: {

        },
        eventsDefinitions: {},
      }
    ],
  }
]
