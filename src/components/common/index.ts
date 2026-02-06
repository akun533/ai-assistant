import { ComponentInfo } from '../../core/component-registry.js';

export const commonComponents: ComponentInfo[] = [
  {
    type: 'fcId',
    label: '唯一值',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '确保生成的某个值（如ID）在系统中是唯一的',
    examples: [
      {
        type: 'fcId',
        field: 'Fnekmfb40oooazc',
        title: '唯一值',
        props: {},
      },
    ],
    props: [
      {
        name: 'prefix',
        type: 'string',
        description: '前缀',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'signaturePad',
    label: '手写签名',
    uiFramework: 'common',
    vueVersion: 'common',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '提供画布区域供用户使用鼠标或触摸屏进行手写签名',
    examples: [
      {
        type: 'signaturePad',
        field: 'F1lomfb40ooob0c',
        title: '手写签名',
        props: {},
      },
    ],
    props: [
      {
        name: 'penColor',
        type: 'string',
        description: '线条的颜色',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '禁用',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'remove',
        description: '删除时触发',
      },
    ],
  },
  {
    type: 'fcValue',
    label: '计算公式',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '根据预设的公式和字段变量，自动计算并返回结果',
    examples: [
      {
        type: 'fcValue',
        field: 'Ff8omfb40ooob1c',
        title: '计算公式',
        props: {},
      },
    ],
    props: [],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
    ],
  },
  {
    type: 'fcSlot',
    label: '插槽区域',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '提供一个占位区域，允许开发者插入自定义的内容或组件',
    examples: [
      {
        type: 'fcSlot',
        field: 'Fv2qmfb40ooobbc',
        readMode: 'custom',
        props: {
          name: 'block_Fcyymfb40ooobcc',
        },
      },
    ],
    props: [
      {
        name: 'name',
        type: 'string',
        description: '插槽名称',
        required: true,
      },
    ],
    events: [],
  },
  {
    type: 'fcTitle',
    label: '标题',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '用于展示不同层级的标题文字，增强页面结构层次感',
    examples: [
      {
        type: 'fcTitle',
        props: {
          title: '标题',
        },
      },
    ],
    props: [
      {
        name: 'title',
        type: 'string',
        description: '标题',
        required: true,
      },
      {
        name: 'size',
        type: 'string',
        description: '尺寸',
        required: false,
        defaultValue: 'H2',
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
        ],
      },
      {
        name: 'align',
        type: 'string',
        description: '对齐方式',
        required: false,
        options: [
          'left',
          'center',
          'right',
        ],
      },
    ],
    events: [],
  },
  {
    type: 'space',
    label: '间距',
    uiFramework: 'common',
    vueVersion: 'common',
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '用于设置元素之间的空白间隔，调整布局的紧凑度',
    examples: [
      {
        type: 'div',
        wrap: {
          show: false,
        },
        native: true,
        style: {
          width: '100%',
          height: '20px',
        },
      },
    ],
    props: [],
    events: [],
  },
  {
    type: 'audioBox',
    label: '音频播放器',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '用于在网页上播放音频文件的控件',
    examples: [
      {
        type: 'audioBox',
        props: {
          src: 'https://static.form-create.com/res/demo.mp3',
          type: 'audio/mpeg',
        },
      },
    ],
    props: [
      {
        name: 'src',
        type: 'string',
        description: '音频地址',
        required: true,
      },
      {
        name: 'type',
        type: 'string',
        description: '音频类型',
        required: false,
        options: [
          'audio/mpeg',
          'audio/ogg',
          'audio/aac',
          'audio/wav',
          'audio/x-ms-wma',
          'audio/webm',
          'audio/flac',
          'audio/x-alac',
          'audio/amr',
          'audio/midi',
        ],
      },
      {
        name: 'autoplay',
        type: 'boolean',
        description: '是否自动播放',
        required: false,
      },
      {
        name: 'loop',
        type: 'boolean',
        description: '是否循环播放',
        required: false,
      },
      {
        name: 'muted',
        type: 'boolean',
        description: '是否静音',
        required: false,
      },
      {
        name: 'controls',
        type: 'boolean',
        description: '是否显示控制条',
        required: false,
      },
      {
        name: 'preload',
        type: 'string',
        description: '预加载',
        required: false,
        options: [
          'auto',
          'metadata',
          'none',
        ],
      },
    ],
    events: [
      {
        name: 'pause',
        description: '音频播放暂停时触发',
      },
      {
        name: 'play',
        description: '音频开始播放时触发',
      },
      {
        name: 'ended',
        description: '音频播放结束后触发',
      },
    ],
  },
  {
    type: 'videoBox',
    label: '视频播放器',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '用于在网页上嵌入和播放视频内容的控件',
    examples: [
      {
        type: 'videoBox',
        props: {
          src: '',
          type: 'mp4',
        },
      },
    ],
    props: [
      {
        name: 'src',
        type: 'string',
        description: '视频地址',
        required: true,
      },
      {
        name: 'type',
        type: 'string',
        description: '视频类型',
        required: false,
        options: [
          'mp4',
          'mpegts',
          'm2ts',
          'flv',
          'mse',
        ],
      },
      {
        name: 'autoplay',
        type: 'boolean',
        description: '是否自动播放',
        required: false,
      },
      {
        name: 'controls',
        type: 'boolean',
        description: '是否显示控制条',
        required: false,
        defaultValue: true,
      },
      {
        name: 'isLive',
        type: 'boolean',
        description: '是否是直播',
        required: false,
      },
      {
        name: 'loop',
        type: 'boolean',
        description: '是否循环播放',
        required: false,
      },
      {
        name: 'withCredentials',
        type: 'boolean',
        description: '是否携带凭证',
        required: false,
        defaultValue: true,
      },
    ],
    events: [
      {
        name: 'pause',
        description: '视频播放暂停时触发',
      },
      {
        name: 'play',
        description: '视频开始播放时触发',
      },
      {
        name: 'ended',
        description: '视频播放结束后触发',
      },
      {
        name: 'error',
        description: '视频加载失败时触发',
      },
    ],
  },
  {
    type: 'barCodeBox',
    label: '条形码',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '根据输入数据生成并显示条形码图像',
    examples: [
      {
        type: 'barCodeBox',
        props: {
          value: '12345670',
          format: 'CODE128',
        },
      },
    ],
    props: [
      {
        name: 'value',
        type: 'string',
        description: '内容',
        required: true,
      },
      {
        name: 'format',
        type: 'string',
        description: '条形码的类型',
        required: false,
        options: [
          'CODE39',
          'CODE128',
          'CODE128A',
          'CODE128B',
          'CODE128C',
          'EAN13',
          'UPC',
          'CODABAR',
        ],
      },
      {
        name: 'width',
        type: 'number',
        description: '单个条形的宽度',
        required: false,
        defaultValue: 2,
      },
      {
        name: 'height',
        type: 'number',
        description: '条形码的高度',
        required: false,
        defaultValue: 50,
      },
      {
        name: 'displayValue',
        type: 'boolean',
        description: '是否显示内容',
        required: false,
        defaultValue: true,
      },
      {
        name: 'fontSize',
        type: 'number',
        description: '设置文字的大小',
        required: false,
        defaultValue: 12,
      },
      {
        name: 'textPosition',
        type: 'string',
        description: '设置文字的位置',
        required: false,
        options: [
          'top',
          'bottom',
        ],
      },
      {
        name: 'textAlign',
        type: 'string',
        description: '设置文字的对齐方式',
        required: false,
        options: [
          'left',
          'center',
          'right',
        ],
      },
      {
        name: 'textMargin',
        type: 'number',
        description: '设置文字的边距',
        required: false,
        defaultValue: 2,
      },
      {
        name: 'background',
        type: 'string',
        description: '条形码的背景色',
        required: false,
      },
      {
        name: 'lineColor',
        type: 'string',
        description: '线条的颜色',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'iframeBox',
    label: '内嵌网页',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '在页面中嵌入并显示另一个网页（iframe）',
    examples: [
      {
        type: 'iframeBox',
        props: {
          src: 'https://github.com/xaboy/form-create',
        },
      },
    ],
    props: [
      {
        name: 'src',
        type: 'string',
        description: '页面链接',
        required: true,
      },
      {
        name: 'loading',
        type: 'string',
        description: '加载方式',
        required: false,
        defaultValue: 'eager',
        options: [
          'eager',
          'lazy',
        ],
      },
    ],
    events: [
      {
        name: 'load',
        description: '页面加载完成后触发',
      },
    ],
  },
  {
    type: 'qrCodeBox',
    label: '二维码',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '根据输入数据（如链接）生成并显示二维码图像',
    examples: [
      {
        type: 'qrCodeBox',
        props: {
          data: '1234567890',
          width: 150,
          height: 150,
        },
      },
    ],
    props: [
      {
        name: 'data',
        type: 'string',
        description: '内容',
        required: true,
      },
      {
        name: 'image',
        type: 'string',
        description: '中心的图片链接',
        required: false,
      },
      {
        name: 'width',
        type: 'number',
        description: '二维码的宽度',
        required: false,
      },
      {
        name: 'height',
        type: 'number',
        description: '二维码的高度',
        required: false,
      },
      {
        name: 'circleType',
        type: 'string',
        description: '点的类型',
        required: false,
        options: [
          'square',
          'dots',
          'rounded',
          'classy',
        ],
      },
      {
        name: 'circleColor',
        type: 'string',
        description: '点的颜色',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'text',
    label: '文字',
    uiFramework: 'common',
    vueVersion: 'common',
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '用于显示普通的说明性或描述性文本内容',
    examples: [
      {
        type: 'div',
        style: {
          whiteSpace: 'pre-line',
        },
        children: [
          '文字',
        ],
      },
    ],
    props: [
      {
        name: 'formCreateChild',
        type: 'string',
        description: '内容',
        required: true,
      },
    ],
    events: [],
  },
  {
    type: 'FcTdtMapPicker',
    label: '位置选择器',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    examples: [
      {
        type: 'FcTdtMapPicker',
        field: 'F2nxmguk6nrodrc',
        title: '位置选择器',
        _fc_id: 'id_Fiwnmguk6nrodsc',
        name: 'ref_Ff5xmguk6nrodtc',
        _fc_drag_tag: 'FcTdtMapPicker',
      },
    ],
    props: [
      {
        name: 'apiKey',
        type: 'string',
        description: '天地图 API Key',
        required: false,
      },
      {
        name: 'zoom',
        type: 'number',
        description: '地图缩放级别',
        required: false,
        defaultValue: 12,
      },
      {
        name: 'placeholder',
        type: 'string',
        description: '输入框占位文本',
        required: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当选择位置改变时触发',
      },
      {
        name: 'loaded',
        description: '地图加载完成后触发',
      },
    ],
  },
  {
    type: 'markdown',
    label: 'Markdown',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '用于实时渲染和显示Markdown格式的文本内容',
    examples: [
      {
        type: 'FcMarkdown',
        native: true,
        props: {
          content: '### 标题\n\n使用 # 号创建标题\n\n```\n# 一级标题\n## 二级标题\n### 三级标题\n',
        },
      },
    ],
    props: [
      {
        name: 'content',
        type: 'string',
        description: '内容',
        required: true,
      },
    ],
    events: [],
  },
  {
    type: 'fcCity',
    label: '省市区选择器',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '专门用于选择中国省、市、区三级联动的数据',
    examples: [
      {
        type: 'fcCity',
        field: 'F1vumfb40oonaxc',
        title: '省市区选择器',
        props: {},
      },
    ],
    props: [
      {
        name: 'level',
        type: 'string',
        description: '类型(几级联动)',
        required: false,
        defaultValue: 3,
        options: [
          1,
          2,
          3,
        ],
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'clearable',
        type: 'boolean',
        description: '是否显示清除按钮',
        required: false,
      },
      {
        name: 'filter',
        type: 'string',
        description: '数据过滤,返回可选择数据',
        required: false,
      },
      {
        name: 'api',
        type: 'string',
        description: '数据链接 URI',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
    ],
  },
  {
    type: 'fcEditor',
    label: '富文本框',
    uiFramework: 'common',
    vueVersion: 'common',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '提供丰富的文本编辑功能，如加粗、斜体、插入图片等',
    examples: [
      {
        type: 'fcEditor',
        field: 'F40gmfb40oonayc',
        title: '富文本框',
        props: {},
      },
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
    ],
  },
  {
    type: 'tableForm',
    label: '表格表单',
    uiFramework: 'common',
    vueVersion: 'common',
    isField: true,
    isContainer: false,
    isAssist: false,
    usage: '以表格行和列的布局方式来组织和排列表单字段',
    examples: [
      {
        type: 'tableForm',
        field: 'Fb3mmfb7293tchc',
        title: '表格表单',
        props: {
          columns: [{
            label: '自定义名称',
            style: {
              width: 'auto',
            },
            rule: [{
              type: 'input',
              field: 'Fizzmfb72b43cmc',
              title: '输入框',
            }],
          },
          {
            label: '自定义名称',
            style: {
              width: 'auto',
            },
            rule: [{
              type: 'input',
              field: 'Fnuomfb72e26csc',
              title: '输入框',
            }],
          },
          ],
        },
      },
    ],
    props: [
      {
        name: 'columns',
        type: 'Array',
        description: '列',
        required: true,
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'addable',
        type: 'boolean',
        description: '允许新增',
        required: false,
        defaultValue: true,
      },
      {
        name: 'deletable',
        type: 'boolean',
        description: '允许删除',
        required: false,
        defaultValue: true,
      },
      {
        name: 'filterEmptyColumn',
        type: 'boolean',
        description: '是否过滤空行的数据',
        required: false,
        defaultValue: true,
      },
      {
        name: 'min',
        type: 'number',
        description: '最少添加几行',
        required: false,
      },
      {
        name: 'max',
        type: 'number',
        description: '最多添加几行，为 0 则不限制',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
      {
        name: 'add',
        description: '增加时触发',
      },
      {
        name: 'delete',
        description: '删除时触发',
      },
    ],
  },
  {
    type: 'html',
    label: 'HTML',
    uiFramework: 'common',
    vueVersion: 'common',
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '用于直接渲染和显示HTML代码片段或内容',
    examples: [
      {
        type: 'html',
        style: {
          display: 'block',
          width: '100%',
        },
        children: [
          '<div style="color:#2E73FF;display:flex;align-items:center;">HTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTMLHTML</div>',
        ],
      },
    ],
    props: [
      {
        name: 'formCreateChild',
        type: 'string',
        description: '内容',
        required: true,
      },
    ],
    events: [],
  },
  {
    type: 'fcTable',
    label: '表格布局',
    uiFramework: 'common',
    vueVersion: 'common',
    isField: false,
    isContainer: true,
    isAssist: true,
    usage: '使用表格（Table）的样式进行页面区域的划分和布局',
    examples: [
      [{
        type: 'fcTable',
        props: {
          rule: {
            row: 3,
            col: 4,
            style: {},
            'class': {},
            layout: [{
              top: 0,
              left: 1,
              row: 1,
              col: 2,
            },
            {
              top: 1,
              left: 0,
              row: 1,
              col: 4,
            },
            ],
          },
        },
        children: [{
          type: 'div',
          style: {
            whiteSpace: 'pre-line',
          },
          children: [
            '第一行第1列',
          ],
          slot: '0:0',
        },
        {
          type: 'div',
          style: {
            whiteSpace: 'pre-line',
          },
          children: [
            '第一行第2-3列',
          ],
          slot: '0:1',
        },
        {
          type: 'div',
          style: {
            whiteSpace: 'pre-line',
          },
          children: [
            '第一行第4列',
          ],
          slot: '0:3',
        },
        {
          type: 'div',
          style: {
            whiteSpace: 'pre-line',
          },
          children: [
            '第二行第1-4列',
          ],
          slot: '1:0',
        },
        {
          type: 'div',
          style: {
            whiteSpace: 'pre-line',
          },
          children: [
            '第三行第1列',
          ],
          slot: '2:0',
        },
        {
          type: 'div',
          style: {
            whiteSpace: 'pre-line',
          },
          children: [
            '第三行第1列',
          ],
          slot: '2:1',
        },
        {
          type: 'div',
          style: {
            whiteSpace: 'pre-line',
          },
          children: [
            '第三行第3列',
          ],
          slot: '2:2',
        },
        {
          type: 'div',
          style: {
            whiteSpace: 'pre-line',
          },
          children: [
            '第三行第4列',
          ],
          slot: '2:3',
        },
        ],
      }],
    ],
    props: [
      {
        name: 'rule',
        type: 'object',
        description: '表格尺寸和合并规则等信息',
        required: true,
      },
      {
        name: 'border',
        type: 'boolean',
        description: '是否显示边框',
        required: false,
        defaultValue: true,
      },
      {
        name: 'mini',
        type: 'boolean',
        description: '紧凑模式',
        required: false,
      },
      {
        name: 'borderColor',
        type: 'string',
        description: '边框颜色',
        required: false,
      },
      {
        name: 'borderWidth',
        type: 'string',
        description: '边框宽度',
        required: false,
      },
    ],
    events: [],
  },
  {
    type: 'group',
    label: '子表单',
    uiFramework: 'common',
    vueVersion: 'common',
    isField: true,
    isContainer: true,
    childrenPath: 'props.rule',
    defaultChildren: ['input'],
    isAssist: false,
    usage: '在主表单中嵌套的一个完整表单，用于处理重复结构数据',
    examples: [
      {
        type: 'group',
        field: 'F7symfb6x388btc',
        title: '子表单',
        props: {
          rule: [{
            type: 'input',
            field: 'F10lmfb6x4hdbxc',
            title: '输入框',
          }],
        },
      },
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
      {
        name: 'button',
        type: 'boolean',
        description: '是否显示操作按钮',
        required: false,
        defaultValue: true,
      },
      {
        name: 'sortBtn',
        type: 'boolean',
        description: '是否显示排序按钮',
        required: false,
        defaultValue: true,
      },
      {
        name: 'expand',
        type: 'number',
        description: '设置默认展开几项',
        required: false,
      },
      {
        name: 'min',
        type: 'number',
        description: '设置最小添加几项',
        required: false,
      },
      {
        name: 'max',
        type: 'number',
        description: '设置最多添加几项',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
    ],
  },
  {
    type: 'subForm',
    label: '分组',
    uiFramework: 'common',
    vueVersion: 'common',
    isField: true,
    isContainer: true,
    isAssist: false,
    childrenPath: 'props.rule',
    defaultChildren: ['input'],
    usage: '将多个表单项或组件组合在一起，实现视觉和逻辑上的划分',
    examples: [
      {
        type: 'subForm',
        field: 'F7symfb6x388btc',
        title: '分组',
        props: {
          rule: [{
            type: 'input',
            field: 'F10lmfb6x4hdbxc',
            title: '输入框',
          }],
        },
      },
    ],
    props: [
      {
        name: 'disabled',
        type: 'boolean',
        description: '是否禁用',
        required: false,
      },
    ],
    events: [
      {
        name: 'change',
        description: '当绑定值变化时触发',
      },
    ],
  },
  {
    type: 'lineChart',
    label: '折线图',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '用折线连接数据点，展示数据随时间或类别的趋势变化(Echarts 组件)',
    examples: [
      {
        type: 'fcEcharts',
        props: {
          type: 'line',
          config: {
            category: [
              'Mon',
              'Tue',
              'Wed',
              'Thu',
              'Fri',
              'Sat',
              'Sun',
            ],
            series: [
              {
                name: 'Email',
                data: [
                  120,
                  132,
                  101,
                  134,
                  90,
                  230,
                  210,
                ],
              },
              {
                name: 'Union Ads',
                data: [
                  220,
                  182,
                  191,
                  234,
                  290,
                  330,
                  310,
                ],
              },
              {
                name: 'Video Ads',
                data: [
                  150,
                  232,
                  201,
                  154,
                  190,
                  330,
                  410,
                ],
              },
              {
                name: 'Direct',
                data: [
                  320,
                  332,
                  301,
                  334,
                  390,
                  330,
                  320,
                ],
              },
              {
                name: 'Search Engine',
                data: [
                  820,
                  932,
                  901,
                  934,
                  1290,
                  1330,
                  1320,
                ],
              },
            ],
          },
        },
      },
    ],
    props: [
      {
        name: 'config',
        type: 'object',
        description: '图表数据',
        required: true,
      },
      {
        name: 'title',
        type: 'string',
        description: '图表的名称',
        required: false,
      },
      {
        name: 'subtitle',
        type: 'string',
        description: '图表的简介',
        required: false,
      },
      {
        name: 'valueFormat',
        type: 'string',
        description: '格式化数值显示',
        required: false,
        defaultValue: '{value}',
      },
      {
        name: 'stack',
        type: 'boolean',
        description: '多列数据时是否堆叠',
        required: false,
      },
      {
        name: 'smooth',
        type: 'boolean',
        description: '线条是否平滑过渡',
        required: false,
      },
      {
        name: 'showLegend',
        type: 'boolean',
        description: '是否显示标记',
        required: false,
        defaultValue: true,
      },
      {
        name: 'showSeriesLabel',
        type: 'boolean',
        description: '是否显示数值',
        required: false,
      },
    ],
    events: [
      {
        name: 'beforeLoad',
        description: '初始化之前触发',
      },
      {
        name: 'loaded',
        description: '初始化完成之后触发',
      },
      {
        name: 'click',
        description: '点击组件时触发',
      },
    ],
  },
  {
    type: 'areaChart',
    label: '体积图',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '用于比较多个数据系列在不同维度上的体积大小(Echarts 组件)',
    examples: [
      {
        type: 'fcEcharts',
        props: {
          type: 'area',
          config: {
            category: [
              'Mon',
              'Tue',
              'Wed',
              'Thu',
              'Fri',
              'Sat',
              'Sun',
            ],
            series: [
              {
                name: 'Email',
                data: [
                  120,
                  132,
                  101,
                  134,
                  90,
                  230,
                  210,
                ],
              },
              {
                name: 'Union Ads',
                data: [
                  220,
                  182,
                  191,
                  234,
                  290,
                  330,
                  310,
                ],
              },
              {
                name: 'Video Ads',
                data: [
                  150,
                  232,
                  201,
                  154,
                  190,
                  330,
                  410,
                ],
              },
              {
                name: 'Direct',
                data: [
                  320,
                  332,
                  301,
                  334,
                  390,
                  330,
                  320,
                ],
              },
              {
                name: 'Search Engine',
                data: [
                  820,
                  932,
                  901,
                  934,
                  1290,
                  1330,
                  1320,
                ],
              },
            ],
          },
        },
      },
    ],
    props: [
      {
        name: 'config',
        type: 'object',
        description: '图表数据',
        required: true,
      },
      {
        name: 'title',
        type: 'string',
        description: '图表的名称',
        required: false,
      },
      {
        name: 'subtitle',
        type: 'string',
        description: '图表的简介',
        required: false,
      },
      {
        name: 'valueFormat',
        type: 'string',
        description: '格式化数值显示',
        required: false,
        defaultValue: '{value}',
      },
      {
        name: 'stack',
        type: 'boolean',
        description: '多列数据时是否堆叠',
        required: false,
      },
      {
        name: 'smooth',
        type: 'boolean',
        description: '线条是否平滑过渡',
        required: false,
      },
      {
        name: 'showLegend',
        type: 'boolean',
        description: '是否显示标记',
        required: false,
        defaultValue: true,
      },
      {
        name: 'showSeriesLabel',
        type: 'boolean',
        description: '是否显示数值',
        required: false,
      },
    ],
    events: [
      {
        name: 'beforeLoad',
        description: '初始化之前触发',
      },
      {
        name: 'loaded',
        description: '初始化完成之后触发',
      },
      {
        name: 'click',
        description: '点击组件时触发',
      },
    ],
  },
  {
    type: 'barChart',
    label: '柱状图',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '使用垂直柱子的高度来比较不同类别的数据大小(Echarts 组件)',
    examples: [
      {
        type: 'fcEcharts',
        props: {
          type: 'bar',
          config: {
            category: [
              'Mon',
              'Tue',
              'Wed',
              'Thu',
              'Fri',
              'Sat',
              'Sun',
            ],
            series: [
              {
                name: 'Direct',
                data: [
                  320,
                  332,
                  301,
                  334,
                  390,
                  330,
                  320,
                ],
              },
            ],
          },
        },
      },
    ],
    props: [
      {
        name: 'config',
        type: 'object',
        description: '图表数据',
        required: true,
      },
      {
        name: 'title',
        type: 'string',
        description: '图表的名称',
        required: false,
      },
      {
        name: 'subtitle',
        type: 'string',
        description: '图表的简介',
        required: false,
      },
      {
        name: 'valueFormat',
        type: 'string',
        description: '格式化数值显示',
        required: false,
        defaultValue: '{value}',
      },
      {
        name: 'barBackgroundColor',
        type: 'string',
        description: '柱状的背景色',
        required: false,
      },
      {
        name: 'stack',
        type: 'boolean',
        description: '多列数据时是否堆叠',
        required: false,
      },
      {
        name: 'showLegend',
        type: 'boolean',
        description: '是否显示标记',
        required: false,
        defaultValue: true,
      },
      {
        name: 'showSeriesLabel',
        type: 'boolean',
        description: '是否显示数值',
        required: false,
      },
    ],
    events: [
      {
        name: 'beforeLoad',
        description: '初始化之前触发',
      },
      {
        name: 'loaded',
        description: '初始化完成之后触发',
      },
      {
        name: 'click',
        description: '点击组件时触发',
      },
    ],
  },
  {
    type: 'stripeChart',
    label: '条形图',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '使用水平条的长度来比较不同类别的数据大小(Echarts 组件)',
    examples: [
      {
        type: 'fcEcharts',
        props: {
          type: 'bar',
          stripe: true,
          config: {
            category: [
              'Mon',
              'Tue',
              'Wed',
              'Thu',
              'Fri',
              'Sat',
              'Sun',
            ],
            series: [
              {
                name: 'Direct',
                data: [
                  320,
                  332,
                  301,
                  334,
                  390,
                  330,
                  320,
                ],
              },
              {
                name: 'Direct2',
                data: [
                  320,
                  332,
                  301,
                  334,
                  390,
                  330,
                  320,
                ],
              },
            ],
          },
        },
      },
    ],
    props: [
      {
        name: 'config',
        type: 'object',
        description: '图表数据',
        required: true,
      },
      {
        name: 'title',
        type: 'string',
        description: '图表的名称',
        required: false,
      },
      {
        name: 'subtitle',
        type: 'string',
        description: '图表的简介',
        required: false,
      },
      {
        name: 'valueFormat',
        type: 'string',
        description: '格式化数值显示',
        required: false,
        defaultValue: '{value}',
      },
      {
        name: 'barBackgroundColor',
        type: 'string',
        description: '柱状的背景色',
        required: false,
      },
      {
        name: 'stack',
        type: 'boolean',
        description: '多列数据时是否堆叠',
        required: false,
      },
      {
        name: 'showLegend',
        type: 'boolean',
        description: '是否显示标记',
        required: false,
        defaultValue: true,
      },
      {
        name: 'showSeriesLabel',
        type: 'boolean',
        description: '是否显示数值',
        required: false,
      },
    ],
    events: [
      {
        name: 'beforeLoad',
        description: '初始化之前触发',
      },
      {
        name: 'loaded',
        description: '初始化完成之后触发',
      },
      {
        name: 'click',
        description: '点击组件时触发',
      },
    ],
  },
  {
    type: 'pieChart',
    label: '饼图',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '用扇形面积表示比例，显示各部分与整体的关系(Echarts 组件)',
    examples: [
      {
        type: 'fcEcharts',
        props: {
          type: 'pie',
          data: [
            {
              value: 1048,
              name: 'Search Engine',
            },
            {
              value: 735,
              name: 'Direct',
            },
            {
              value: 580,
              name: 'Email',
            },
            {
              value: 484,
              name: 'Union Num',
            },
            {
              value: 300,
              name: 'Video Num',
            },
          ],
        },
      },
    ],
    props: [
      {
        name: 'data',
        type: 'Array',
        description: '图表数据',
        required: true,
      },
      {
        name: 'title',
        type: 'string',
        description: '图表的名称',
        required: false,
      },
      {
        name: 'subtitle',
        type: 'string',
        description: '图表的简介',
        required: false,
      },
      {
        name: 'pieType',
        type: 'string',
        description: '形状',
        required: false,
        options: [
          'pie',
          'doughnut',
          'half-doughnut',
        ],
      },
      {
        name: 'showLegend',
        type: 'boolean',
        description: '是否显示标记',
        required: false,
        defaultValue: true,
      },
    ],
    events: [
      {
        name: 'beforeLoad',
        description: '初始化之前触发',
      },
      {
        name: 'loaded',
        description: '初始化完成之后触发',
      },
      {
        name: 'click',
        description: '点击组件时触发',
      },
    ],
  },
  {
    type: 'funnelChart',
    label: '漏斗图',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '直观展示流程中各阶段的转化率和数据量变化(Echarts 组件)',
    examples: [
      {
        type: 'fcEcharts',
        props: {
          type: 'funnel',
          data: [
            {
              value: 60,
              name: 'Visit',
            },
            {
              value: 40,
              name: 'Inquiry',
            },
            {
              value: 20,
              name: 'Order',
            },
            {
              value: 80,
              name: 'Click',
            },
            {
              value: 100,
              name: 'Show',
            },
          ],
        },
      },
    ],
    props: [
      {
        name: 'data',
        type: 'Array',
        description: '图表数据',
        required: true,
      },
      {
        name: 'title',
        type: 'string',
        description: '图表的名称',
        required: false,
      },
      {
        name: 'subtitle',
        type: 'string',
        description: '图表的简介',
        required: false,
      },
      {
        name: 'funnelSort',
        type: 'string',
        description: '排序方式',
        required: false,
        defaultValue: 'descending',
        options: [
          'descending',
          'ascending',
        ],
      },
      {
        name: 'showLegend',
        type: 'boolean',
        description: '是否显示标记',
        required: false,
        defaultValue: true,
      },
    ],
    events: [
      {
        name: 'beforeLoad',
        description: '初始化之前触发',
      },
      {
        name: 'loaded',
        description: '初始化完成之后触发',
      },
      {
        name: 'click',
        description: '点击组件时触发',
      },
    ],
  },
  {
    type: 'gaugeChart',
    label: '仪表盘',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '类似汽车仪表盘，展示一个度量值在设定范围内的位置(Echarts 组件)',
    examples: [
      {
        type: 'fcEcharts',
        props: {
          type: 'gauge',
          value: 50,
        },
      },
    ],
    props: [
      {
        name: 'value',
        type: 'number',
        description: '数值',
        required: true,
      },
      {
        name: 'title',
        type: 'string',
        description: '图表的名称',
        required: false,
      },
      {
        name: 'subtitle',
        type: 'string',
        description: '图表的简介',
        required: false,
      },
      {
        name: 'min',
        type: 'number',
        description: '最小值',
        required: false,
      },
      {
        name: 'max',
        type: 'number',
        description: '最大值',
        required: false,
      },
    ],
    events: [
      {
        name: 'beforeLoad',
        description: '初始化之前触发',
      },
      {
        name: 'loaded',
        description: '初始化完成之后触发',
      },
      {
        name: 'click',
        description: '点击组件时触发',
      },
    ],
  },
  {
    type: 'radarChart',
    label: '雷达图',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '从多个维度对比不同系列的数据，形成蜘蛛网状图(Echarts 组件)',
    examples: [
      {
        type: 'fcEcharts',
        props: {
          type: 'radar',
          indicator: [
            {
              name: 'Sales',
              max: 6500,
            },
            {
              name: 'Administration',
              max: 16000,
            },
            {
              name: 'Information Technology',
              max: 30000,
            },
            {
              name: 'Customer Support',
              max: 38000,
            },
            {
              name: 'Development',
              max: 52000,
            },
            {
              name: 'Marketing',
              max: 25000,
            },
          ],
          data: [
            {
              value: [
                4200,
                3000,
                20000,
                35000,
                50000,
                18000,
              ],
              name: 'Allocated Budget',
            },
            {
              value: [
                5000,
                14000,
                28000,
                26000,
                42000,
                21000,
              ],
              name: 'Actual Spending',
            },
          ],
        },
      },
    ],
    props: [
      {
        name: 'indicator',
        type: 'Array',
        description: '雷达配置',
        required: true,
      },
      {
        name: 'data',
        type: 'Array',
        description: '图表数据',
        required: true,
      },
      {
        name: 'indicator',
        type: 'string',
        description: '指示器',
        required: false,
      },
      {
        name: 'title',
        type: 'string',
        description: '图表的名称',
        required: false,
      },
      {
        name: 'subtitle',
        type: 'string',
        description: '图表的简介',
        required: false,
      },
      {
        name: 'showLegend',
        type: 'boolean',
        description: '是否显示标记',
        required: false,
        defaultValue: true,
      },
      {
        name: 'showSeriesLabel',
        type: 'boolean',
        description: '是否显示数值',
        required: false,
      },
    ],
    events: [
      {
        name: 'beforeLoad',
        description: '初始化之前触发',
      },
      {
        name: 'loaded',
        description: '初始化完成之后触发',
      },
      {
        name: 'click',
        description: '点击组件时触发',
      },
    ],
  },
  {
    type: 'scatterChart',
    label: '散点图',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '用点的分布展示两个变量之间的关系，发现相关性(Echarts 组件)',
    examples: [
      {
        type: 'fcEcharts',
        props: {
          type: 'scatter',
          data: [
            [
              [
                161.2,
                51.6,
              ],
              [
                167.5,
                59,
              ],
              [
                159.5,
                49.2,
              ],
              [
                157,
                63,
              ],
              [
                155.8,
                53.6,
              ],
              [
                170,
                59,
              ],
              [
                159.1,
                47.6,
              ],
              [
                166,
                69.8,
              ],
              [
                176.2,
                66.8,
              ],
              [
                160.2,
                75.2,
              ],
            ],
            [
              [
                172.5,
                55.2,
              ],
              [
                170.9,
                54.2,
              ],
              [
                172.9,
                62.5,
              ],
              [
                153.4,
                42,
              ],
              [
                160,
                50,
              ],
              [
                147.2,
                49.8,
              ],
              [
                168.2,
                49.2,
              ],
              [
                175,
                73.2,
              ],
              [
                157,
                47.8,
              ],
              [
                167.6,
                68.8,
              ],
            ],
          ],
        },
      },
    ],
    props: [
      {
        name: 'data',
        type: 'Array',
        description: '图表数据',
        required: true,
      },
      {
        name: 'title',
        type: 'string',
        description: '图表的名称',
        required: false,
      },
      {
        name: 'subtitle',
        type: 'string',
        description: '图表的简介',
        required: false,
      },
    ],
    events: [
      {
        name: 'beforeLoad',
        description: '初始化之前触发',
      },
      {
        name: 'loaded',
        description: '初始化完成之后触发',
      },
      {
        name: 'click',
        description: '点击组件时触发',
      },
    ],
  },
  {
    type: 'customChart',
    label: '自定义图表',
    uiFramework: 'common',
    vueVersion: 'common',
    business: true,
    isField: false,
    isContainer: false,
    isAssist: true,
    usage: '提供高度自由化配置，允许创建多种类型的图表(Echarts 组件)',
    examples: [
      {
        type: 'fcEcharts',
        style: {
          height: '500px',
        },
        props: {
          type: 'custom',
          config: {
            builderJson: {
              all: 10887,
              charts: {
                map: 3237,
                lines: 2164,
                bar: 7561,
                line: 7778,
                pie: 7355,
                scatter: 2405,
                candlestick: 1842,
                radar: 2090,
                heatmap: 1762,
                treemap: 1593,
                graph: 2060,
                boxplot: 1537,
                parallel: 1908,
                gauge: 2107,
                funnel: 1692,
                sankey: 1568,
              },
              components: {
                geo: 2788,
                title: 9575,
                legend: 9400,
                tooltip: 9466,
                grid: 9266,
                markPoint: 3419,
                markLine: 2984,
                timeline: 2739,
                dataZoom: 2744,
                visualMap: 2466,
                toolbox: 3034,
                polar: 1945,
              },
              ie: 9743,
            },
            downloadJson: {
              'echarts.min.js': 17365,
              'echarts.simple.min.js': 4079,
              'echarts.common.min.js': 6929,
              'echarts.js': 14890,
            },
            themeJson: {
              'dark.js': 1594,
              'infographic.js': 925,
              'shine.js': 1608,
              'roma.js': 721,
              'macarons.js': 2179,
              'vintage.js': 1982,
            },
          },
          loadOptions: "$FNX:const builderJson = $inject.args[0]?.builderJson;\nconst downloadJson = $inject.args[0]?.downloadJson;\nconst themeJson = $inject.args[0]?.themeJson;\nconst waterMarkText = 'ECHARTS';\nconst canvas = document.createElement('canvas');\nconst ctx = canvas.getContext('2d');\ncanvas.width = canvas.height = 100;\nctx.textAlign = 'center';\nctx.textBaseline = 'middle';\nctx.globalAlpha = 0.08;\nctx.font = '20px';\nctx.translate(50, 50);\nctx.rotate(-Math.PI / 4);\nctx.fillText(waterMarkText, 0, 0);\n\nreturn {\n    backgroundColor: {\n        type: 'pattern',\n        image: canvas,\n        repeat: 'repeat'\n    },\n    tooltip: {},\n    title: [\n        {\n            text: '在线构建',\n            subtext: '总计 ' + builderJson.all,\n            left: '25%',\n            textAlign: 'center'\n        },\n        {\n            text: '各版本下载',\n            subtext:\n                '总计 ' +\n                Object.keys(downloadJson).reduce(function (all, key) {\n                    return all + downloadJson[key];\n                }, 0),\n            left: '75%',\n            textAlign: 'center'\n        },\n        {\n            text: '主题下载',\n            subtext:\n                '总计 ' +\n                Object.keys(themeJson).reduce(function (all, key) {\n                    return all + themeJson[key];\n                }, 0),\n            left: '75%',\n            top: '50%',\n            textAlign: 'center'\n        }\n    ],\n    grid: [\n        {\n            top: 50,\n            width: '50%',\n            bottom: '45%',\n            left: 10,\n            containLabel: true\n        },\n        {\n            top: '55%',\n            width: '50%',\n            bottom: 0,\n            left: 10,\n            containLabel: true\n        }\n    ],\n    xAxis: [\n        {\n            type: 'value',\n            max: builderJson.all,\n            splitLine: {\n                show: false\n            }\n        },\n        {\n            type: 'value',\n            max: builderJson.all,\n            gridIndex: 1,\n            splitLine: {\n                show: false\n            }\n        }\n    ],\n    yAxis: [\n        {\n            type: 'category',\n            data: Object.keys(builderJson.charts),\n            axisLabel: {\n                interval: 0,\n                rotate: 30\n            },\n            splitLine: {\n                show: false\n            }\n        },\n        {\n            gridIndex: 1,\n            type: 'category',\n            data: Object.keys(builderJson.components),\n            axisLabel: {\n                interval: 0,\n                rotate: 30\n            },\n            splitLine: {\n                show: false\n            }\n        }\n    ],\n    series: [\n        {\n            type: 'bar',\n            stack: 'chart',\n            z: 3,\n            label: {\n                position: 'right',\n                show: true\n            },\n            data: Object.keys(builderJson.charts).map(function (key) {\n                return builderJson.charts[key];\n            })\n        },\n        {\n            type: 'bar',\n            stack: 'chart',\n            silent: true,\n            itemStyle: {\n                color: '#eee'\n            },\n            data: Object.keys(builderJson.charts).map(function (key) {\n                return builderJson.all - builderJson.charts[key];\n            })\n        },\n        {\n            type: 'bar',\n            stack: 'component',\n            xAxisIndex: 1,\n            yAxisIndex: 1,\n            z: 3,\n            label: {\n                position: 'right',\n                show: true\n            },\n            data: Object.keys(builderJson.components).map(function (key) {\n                return builderJson.components[key];\n            })\n        },\n        {\n            type: 'bar',\n            stack: 'component',\n            silent: true,\n            xAxisIndex: 1,\n            yAxisIndex: 1,\n            itemStyle: {\n                color: '#eee'\n            },\n            data: Object.keys(builderJson.components).map(function (key) {\n                return builderJson.all - builderJson.components[key];\n            })\n        },\n        {\n            type: 'pie',\n            radius: [0, '30%'],\n            center: ['75%', '25%'],\n            data: Object.keys(downloadJson).map(function (key) {\n                return {\n                    name: key.replace('.js', ''),\n                    value: downloadJson[key]\n                };\n            })\n        },\n        {\n            type: 'pie',\n            radius: [0, '30%'],\n            center: ['75%', '75%'],\n            data: Object.keys(themeJson).map(function (key) {\n                return {\n                    name: key.replace('.js', ''),\n                    value: themeJson[key]\n                };\n            })\n        }\n    ]\n};",
        },
      },
    ],
    props: [
      {
        name: 'config',
        type: 'object',
        description: 'echarts配置项',
        required: true,
      },
      {
        name: 'loadOptions',
        type: 'string',
        description: '初始化',
        required: false,
      },
    ],
    events: [
      {
        name: 'beforeLoad',
        description: '初始化之前触发',
      },
      {
        name: 'loaded',
        description: '初始化完成之后触发',
      },
      {
        name: 'click',
        description: '点击组件时触发',
      },
    ],
  },

];
