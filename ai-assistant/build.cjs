#!/usr/bin/env node

const { execSync } = require('child_process');
const { existsSync, mkdirSync, readFileSync, readdirSync, rmSync } = require('fs');
const { resolve } = require('path');

// 获取项目根目录
const projectRoot = resolve(__dirname);

// 读取 package.json 获取包信息
const packageJson = JSON.parse(readFileSync(resolve(projectRoot, 'package.json'), 'utf-8'));
const packageName = packageJson.name;
const packageVersion = packageJson.version;

console.log(`📦 开始打包后端服务 ${packageName}@${packageVersion}...`);

// 执行命令的函数
function execCommand(command, options = {}) {
  try {
    // 如果需要捕获输出，则不使用 stdio: 'inherit'
    const useInherit = options.encoding !== 'utf-8';
    return execSync(command, {
      cwd: projectRoot,
      stdio: useInherit ? 'inherit' : 'pipe',
      ...options
    });
  } catch (error) {
    throw new Error(`执行命令失败: ${command}\n${error.message}`);
  }
}

// 清理旧的打包文件
function cleanOldPackages() {
  console.log('🧹 清理旧的打包文件...');
  const files = readdirSync(projectRoot);
  const packageFiles = files.filter(file => file.endsWith('.tgz') || file.endsWith('.tar.gz'));

  packageFiles.forEach(file => {
    console.log(`   删除: ${file}`);
    rmSync(resolve(projectRoot, file), { force: true });
  });
}

try {
  // 清理旧的打包文件
  cleanOldPackages();

  // 检查是否已经安装依赖
  console.log('🔍 检查依赖...');
  if (!existsSync(resolve(projectRoot, 'node_modules'))) {
    console.log('📥 安装依赖...');
    execCommand('pnpm install');
  }

  // 构建 TypeScript 项目
  console.log('🔨 构建后端服务...');
  execCommand('pnpm run build');

  // 构建 Docker 镜像
  console.log('🐳 构建 Docker 镜像...');
  const imageName = `${packageName.replace('@', '').replace('/', '-')}-backend:${packageVersion}`;
  execCommand(`docker build -f Dockerfile -t ${imageName} .`);

  console.log('✅ 后端服务打包完成!');
  console.log(`🐳 Docker 镜像已创建: ${imageName}`);

  // 提供使用说明
  console.log('\n💡 使用方式:');
  console.log(`   1. 运行容器: docker run -p 3001:3001 ${imageName}`);
  console.log(`   2. 后台运行: docker run -d -p 3001:3001 ${imageName}`);
  console.log(`   3. 带环境变量运行: docker run -p 3001:3001 -e DEFAULT_AGENT=deepseek ${imageName}`);
  console.log(`   4. 查看运行状态: curl http://localhost:3001/api/health`);
  console.log(`   5. 发送聊天请求: curl -X POST http://localhost:3001/api/chat/completions -H "Content-Type: application/json" -d '{"messages": [{"role": "user", "content": "Hello"}]}'`);

} catch (error) {
  console.error('❌ 打包过程中出现错误:');
  console.error(error.message);
  process.exit(1);
}
