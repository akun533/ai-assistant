# AI 助手 UI 组件库

这是一个基于 Vue 3 的 AI 助手 UI 组件库，包含聊天界面、Markdown 渲染器和相关工具函数。

## 功能特性

- 实时聊天界面，支持用户与 AI 助手对话
- Markdown 渲染，支持代码高亮和语法着色
- JSON 差异对比显示功能
- 响应式设计，适配不同屏幕尺寸
- 代码块一键复制功能
- 流式数据处理，实时显示 AI 回复

## 安装和使用

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 构建生产版本：
```bash
npm run build
```

4. 预览生产构建：
```bash
npm run serve
```

## 项目结构

```
ai-assistant-ui/
├── src/
│   ├── components/          # Vue 组件
│   │   ├── AiPanel.vue      # AI 聊天面板组件
│   │   └── MarkdownRenderer.vue  # Markdown 渲染组件
│   ├── utils/               # 工具函数
│   │   ├── jsonDiff.js      # JSON 差异比较工具
│   │   └── utils.js         # 通用工具函数
│   ├── assets/              # 静态资源
│   ├── App.vue              # 根组件
│   └── main.js              # 应用入口文件
├── index.html               # HTML 模板
├── vite.config.js           # Vite 配置文件
├── package.json             # 项目配置和依赖
├── .env.example             # 环境变量示例文件
├── .gitignore               # Git 忽略文件配置
├── jsconfig.json            # JavaScript 配置文件
├── LICENSE                  # 许可证文件
└── README.md                # 项目说明文档
```

## 环境变量配置

为了正常使用 AI API，需要配置以下环境变量：

- `VITE_AI_API_TOKEN`: AI API 访问令牌

在项目根目录创建 `.env` 文件并添加：
```
VITE_AI_API_TOKEN=your_api_token_here
```

或者复制示例配置文件：
```bash
cp .env.example .env
```

然后替换其中的 `your_api_token_here` 为实际的 API 令牌。

## 自定义配置

可以通过修改组件的样式来自定义外观，所有样式都使用 BEM 命名规范，便于维护和扩展。

## 浏览器兼容性

- Chrome >= 80
- Firefox >= 70
- Safari >= 13
- Edge >= 80

## 许可证

MIT License