import cors from 'cors';
import dotenv from 'dotenv';
import express, { type Express, Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import Chat from './chat.js';

// 加载 .env 文件
const dotenvResult = dotenv.config({ override: true });

// 显示 .env 文件加载状态
if (dotenvResult.error) {
  console.log('⚠️ .env 文件加载失败，将使用默认配置');
} else {
  console.log('✅ .env 文件已加载');

  // 显示配置项
  const config = [
    process.env.PORT && `端口: ${process.env.PORT}`,
    process.env.AGENT_API && `Other Agent: ${process.env.AGENT_API}`,
    process.env.AGENT_TIMEOUT && `超时: ${parseInt(process.env.AGENT_TIMEOUT) / 1000}秒`,
  ].filter(Boolean);

  if (config.length > 0) {
    console.log(`🔧 配置项: ${config.join(', ')}`);
  }
}

const app: Express = express();
const port = process.env.PORT || 3001;

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 中间件 - 配置 CORS 允许跨域
app.use(
  cors({
    origin: true, // 允许所有来源
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
    credentials: true, // 允许携带凭据
    maxAge: 86400, // 预检请求缓存时间（24小时）
  }),
);
app.use(express.json());

// 静态文件服务 - 指向项目根目录
app.use(express.static(__dirname));

// 初始化聊天服务
const service = new Chat();

// 启动时初始化服务
service.initialize().catch(console.error);

// 健康检查
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'FormCreate 聊天服务正常运行',
    timestamp: new Date().toISOString(),
  });
});

// OpenAI Chat Completions API 接口
app.post('/api/chat/completions', async (req: Request, res: Response) => {
  // 流式响应
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-Requested-With, Accept, Origin, Cache-Control',
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  const controller = new AbortController();

  // 监听连接关闭事件
  const onConnectionClose = () => {
    controller.abort('客户端连接已断开');
    console.log('客户端连接已断开');
  };

  res.on('close', onConnectionClose);

  const params = { ...req.body };

  try {
    // 从 Authorization header 获取 API 密钥
    const authHeader = req.headers.authorization;
    const apiKey =
      authHeader && (authHeader.startsWith('Bearer ') ? authHeader.substring(7) : authHeader);

    if (!params.agent) {
      params.agent = process.env.DEFAULT_AGENT || 'deepseek';
    }

    if (!params.model) {
      params.model = process.env.DEFAULT_MODEL || 'deepseek-chat';
    }

    if (params.form && params.form.rule) {
      params.context = { form: { rule: JSON.parse(params.form.rule) } };
    }

    console.log(`📥 请求 Agent: ${params.agent}, 模型: ${params.model}`);

    // 处理请求
    let isFirst = true;

    try {
      for await (const chunk of service.chatStream(params, `${apiKey || process.env.DEFAULT_TOKEN}`, controller.signal)) {
        // 兼容处理：chunk 可能是字符串或 {content, usage} 对象
        let content: string;
        let usage = null;
        if (typeof chunk === 'object' && chunk !== null && 'content' in chunk) {
          content = chunk.content;
          if (chunk.usage) {
            usage = chunk.usage;
          }
        } else {
          content = chunk as string;
        }
        const streamChunk = service.generateStreamChunk(
          content,
          isFirst,
          false,
          params.model,
          usage,
        );
        res.write(streamChunk);
        isFirst = false;
      }

      const endChunk = service.generateStreamChunk('', false, true, params.model);
      res.write(endChunk);
      res.write('data: [DONE]\n\n');
      res.end();
    } catch (error) {
      console.error('❌ 流式响应错误:', error instanceof Error ? error.message : String(error));
      try {
        const errorChunk = {
          error: {
            message: error instanceof Error ? error.message : String(error),
            type: 'server_error',
            code: 'internal_server_error',
          },
        };
        res.write(`data: ${JSON.stringify(errorChunk)}\n\n`);
      } catch (jsonError) {
        // 如果JSON序列化失败，发送简单的错误消息
        res.write(
          `data: {"error":{"message":"Internal server error","type":"server_error","code":"internal_server_error"}}\n\n`,
        );
      }
      res.end();
    }
  } catch (error) {
    console.error('❌ 请求处理错误:', error instanceof Error ? error.message : String(error));
    try {
      res.status(500).json({
        error: {
          message: error instanceof Error ? error.message : String(error),
          type: 'server_error',
          code: 'internal_server_error',
        },
      });
    } catch (jsonError) {
      // 如果JSON序列化失败，发送简单的错误响应
      res.status(500).send('Internal server error');
    }
  } finally {
    // 清理事件监听器
    res.removeListener('close', onConnectionClose);
  }
});

// 处理 OPTIONS 预检请求
app.options('/api/chat/completions', (req: Request, res: Response) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, X-Requested-With, Accept, Origin',
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Max-Age', '86400');
  res.status(200).end();
});

// 关闭
const gracefulShutdown = async (signal: string) => {
  console.log(`\n接收到 ${signal} 信号，正在关闭服务器...`);
  await service.shutdown();
  process.exit(0);
};

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));

// 启动服务器
app.listen(port, () => {
  console.log('🚀 FormCreate 表单助理已启动');
  console.log(`📡 服务器地址: http://localhost:${port}`);
  console.log(`❤️ 健康检查: http://localhost:${port}/api/health`);
  console.log(`🤖 对话接口: http://localhost:${port}/api/chat/completions`);
  console.log('📙 渲染器文档: https://form-create.com/v3/guide/');
  console.log(`📙 设计器文档: ${process.env.FORM_CREATE_BUSINESS  === 'true' ? 'https://pro.form-create.com/doc/' : 'https://view.form-create.com/'}`);
  console.log(`🔧 支持的 Agent: deepseek, zhipu, qwen, other`);
  console.log(`💡 提示: 在请求中使用 "agent" 参数指定 AI 服务提供商 (默认: deepseek)`);
  console.log(`🔗 Other Agent 配置: 通过 .env 文件`);
});

export default app;
