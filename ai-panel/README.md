# @akun/ai-panel 组件

一个基于 Vue 3 的 AI 助手聊天面板组件，可以轻松集成到你的项目中。

当前版本: v1.0.3

## 功能特性

- 实时聊天界面，支持用户与 AI 助手对话
- Markdown 渲染，支持代码高亮和语法着色
- JSON 差异对比显示功能
- 响应式设计，适配不同屏幕尺寸
- 代码块一键复制功能
- 流式数据处理，实时显示 AI 回复

## 安装

通过 npm 安装：

```bash
npm install @akun/ai-panel
```

通过 yarn 安装：

```bash
yarn add @akun/ai-panel
```

通过 pnpm 安装：

```bash
pnpm add @akun/ai-panel
```

## 使用方法

### 基础使用

```vue
<template>
  <div style="height: 600px;">
    <AiPanel />
  </div>
</template>

<script>
import AiPanel from '@akun/ai-panel';

export default {
  components: {
    AiPanel
  }
}
</script>
```

### 配置 API 地址和 Token

组件默认会读取环境变量中的配置：

```bash
VITE_AI_API_TOKEN=your_api_token_here
VUE_APP_API_URL=your_api_url_here
```

你也可以通过 props 传递配置：

```vue
<template>
  <div style="height: 600px;">
    <AiPanel 
      api="https://your-api-endpoint.com/chat"
      :token="yourToken"
    />
  </div>
</template>

<script>
import AiPanel from '@akun/ai-panel';

export default {
  components: {
    AiPanel
  },
  data() {
    return {
      yourToken: 'Bearer your-token-here'
    }
  }
}
</script>
```

## 组件 Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| api | String | 从 `VUE_APP_API_URL` 环境变量读取或使用默认值 | AI API 的地址 |
| token | String | 从 `VUE_APP_AI_API_TOKEN` 环境变量读取 | API 访问令牌 |

## 构建

如果你想自己构建这个组件：

1. 克隆项目：
```bash
git clone [repository-url]
```

2. 安装依赖：
```bash
npm install
```

3. 启动开发服务器：
```bash
npm run dev
```

4. 构建生产版本：
```bash
npm run build
```

5. 构建 npm 包：
```bash
npm run build:package
```

## 浏览器兼容性

- Chrome >= 80
- Firefox >= 70
- Safari >= 13
- Edge >= 80

## 许可证

MIT License
