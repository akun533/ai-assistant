# @akun/ai-panel 组件

一个基于 Vue 3 的 AI 助手聊天面板组件，可以轻松集成到你的项目中。

当前版本: v1.0.8

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

### 配置请求选项和界面文本

组件默认会使用内置的配置，但你可以通过 props 传递自定义配置：

```vue
<template>
  <div style="height: 600px;">
    <AiPanel 
      :request-option="requestOption"
      :config="config"
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
      requestOption: {
        ui: 'element-plus',
        basic: true,
        form: {
          rule: '[]',
        },
        messages: [],
      },
      config: {
        title: 'AI助理',
        clearChat: '清空对话',
        welcomeTitle: '欢迎',
        welcomeMessage: '使用我生成表单',
        suggestionsTitle: '热门示例',
        refreshSuggestions: '换一批',
        copyMessage: '复制',
        inputPlaceholder: '请输入您的问题...',
      }
    }
  }
}
</script>
```

## 组件 Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| requestOption | Object | `{ ui: 'ta404-ui@vue2', basic: true, form: { rule: '[]' }, messages: [] }` | 请求选项，用于配置AI助手的上下文信息 |
| config | Object | 见下方说明 | 配置选项，支持国际化和自定义文本 |

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

此命令将会：
- 检查并安装依赖（如果尚未安装）
- 构建组件到 dist 目录
- 生成 .tgz 包文件用于发布或本地安装

## 浏览器兼容性

- Chrome >= 80
- Firefox >= 70
- Safari >= 13
- Edge >= 80

## 许可证

MIT License
