# 后端服务部署指南

## 概述

本文档介绍如何将 AI 助手后端服务打包为 Docker 镜像并进行部署。

## 环境要求

- Node.js >= 18.0.0
- Docker
- pnpm

## 构建后端镜像

### 方法一：使用构建脚本

```bash
# 执行后端构建脚本
npm run build:backend
# 或者
pnpm run build:backend
```

### 方法二：手动构建

```bash
# 1. 安装依赖
pnpm install

# 2. 构建 TypeScript 项目
pnpm run build

# 3. 构建 Docker 镜像
docker build -f Dockerfile.backend -t @form-create/ai-assistant-backend:1.0.0 .
```

## 运行容器

### 基本运行

```bash
# 运行容器并映射端口
docker run -p 3001:3001 @form-create/ai-assistant-backend:1.0.0
```

### 带环境变量运行

```bash
# 使用环境变量配置后端服务
docker run -p 3001:3001 \
  -e DEFAULT_AGENT=deepseek \
  -e DEFAULT_MODEL=deepseek-chat \
  -e AGENT_API=https://api.deepseek.com/chat/completions \
  -e AGENT_TIMEOUT=30000 \
  @form-create/ai-assistant-backend:1.0.0
```

### 后台运行

```bash
# 在后台运行容器
docker run -d -p 3001:3001 \
  -e DEFAULT_AGENT=deepseek \
  @form-create/ai-assistant-backend:1.0.0
```

## 配置选项

### 环境变量

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| PORT | 3001 | 服务端口 |
| DEFAULT_AGENT | deepseek | 默认 AI 服务提供商 |
| DEFAULT_MODEL | deepseek-chat | 默认模型名称 |
| DEFAULT_AGENT_KEY_TYPE | openai | Agent 消息类型 |
| DEFAULT_TOKEN |  | 默认访问令牌 |
| AGENT_API |  | Agent API 地址 |
| AGENT_TIMEOUT | 60000 | 请求超时时间（毫秒） |

### 使用 .env 文件

您可以创建一个 `.env` 文件并挂载到容器中：

```bash
docker run -p 3001:3001 \
  -v /path/to/your/.env:/app/.env \
  @form-create/ai-assistant-backend:1.0.0
```

## 验证部署

### 健康检查

```bash
curl http://localhost:3001/api/health
```

预期响应：
```json
{
  "success": true,
  "message": "AI 助手 聊天服务正常运行",
  "timestamp": "2023-12-24T00:00:00.000Z"
}
```

### 测试聊天接口

```bash
curl -X POST http://localhost:3001/api/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "messages": [
      {
        "role": "user",
        "content": "Hello"
      }
    ]
  }'
```

## 部署到云平台

### Docker Compose 示例

```yaml
version: '3.8'
services:
  ai-assistant-backend:
    image: @form-create/ai-assistant-backend:1.0.0
    ports:
      - "3001:3001"
    environment:
      - DEFAULT_AGENT=deepseek
      - DEFAULT_MODEL=deepseek-chat
      - PORT=3001
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3001/api/health"]
      interval: 30s
      timeout: 10s
      retries: 3
```

### Kubernetes 部署示例

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ai-assistant-backend
spec:
  replicas: 1
  selector:
    matchLabels:
      app: ai-assistant-backend
  template:
    metadata:
      labels:
        app: ai-assistant-backend
    spec:
      containers:
      - name: ai-assistant-backend
        image: @form-create/ai-assistant-backend:1.0.0
        ports:
        - containerPort: 3001
        env:
        - name: PORT
          value: "3001"
        - name: DEFAULT_AGENT
          value: "deepseek"
        - name: DEFAULT_MODEL
          value: "deepseek-chat"
        livenessProbe:
          httpGet:
            path: /api/health
            port: 3001
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /api/health
            port: 3001
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: ai-assistant-backend-service
spec:
  selector:
    app: ai-assistant-backend
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3001
  type: LoadBalancer
```

## 故障排除

### 查看容器日志

```bash
docker logs <container-id>
```

### 进入容器调试

```bash
docker exec -it <container-id> /bin/sh
```

### 构建问题

如果构建失败，请检查：

1. 确保 Node.js 版本 >= 18.0.0
2. 确保 TypeScript 编译成功
3. 检查依赖安装是否完整

## 版本管理

### 标签管理

```bash
# 为镜像添加新标签
docker tag @form-create/ai-assistant-backend:1.0.0 @form-create/ai-assistant-backend:latest

# 推送到私有仓库
docker tag @form-create/ai-assistant-backend:1.0.0 your-registry.com/ai-assistant:1.0.0
docker push your-registry.com/ai-assistant:1.0.0
```