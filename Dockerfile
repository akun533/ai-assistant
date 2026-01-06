# 使用官方 Node.js 运行时作为基础镜像
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 安装 pnpm
RUN npm config set registry https://registry.npmmirror.com && \
    npm install -g pnpm && \
    pnpm config set fetch-timeout 300000 && \
    pnpm config set fetch-retries 5

# 复制 package.json 和 pnpm-lock.yaml
COPY package.json pnpm-lock.yaml* ./

# 安装所有依赖（包括 devDependencies，用于构建）
RUN pnpm install

# 复制源代码
COPY src ./src
COPY tsconfig.json ./

# 构建项目
RUN npm run build

# 删除 devDependencies，只保留生产依赖
RUN pnpm prune --prod

# 检查 dist 目录内容
RUN ls -la dist/

# 创建 .env 文件并设置环境变量
RUN echo "AGENT_API=http://192.168.20.91:8022/v1/chat/completions" > .env

# 暴露端口
EXPOSE 3001

# 创建非 root 用户
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# 更改文件所有权
RUN chown -R nodejs:nodejs /app
USER nodejs

# 启动应用
CMD ["node", "dist/service/index.js"]
