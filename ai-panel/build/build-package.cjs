#!/usr/bin/env node

const { execSync } = require('child_process');
const { existsSync, mkdirSync, readFileSync, readdirSync } = require('fs');
const { resolve } = require('path');

// 获取项目根目录
const projectRoot = resolve(__dirname, '..');

// 读取 package.json 获取包信息
const packageJson = JSON.parse(readFileSync(resolve(projectRoot, 'package.json'), 'utf-8'));
const packageName = packageJson.name;
const packageVersion = packageJson.version;

console.log(`📦 开始打包 ${packageName}@${packageVersion} 组件...`);

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
  const packageFiles = files.filter(file => file.endsWith('.tgz'));
  
  packageFiles.forEach(file => {
    console.log(`   删除: ${file}`);
  });
}

try {
  // 清理旧的打包文件
  cleanOldPackages();
  
  // 检查是否已经安装依赖
  console.log('🔍 检查依赖...');
  if (!existsSync(resolve(projectRoot, 'node_modules'))) {
    console.log('📥 安装依赖...');
    execCommand('npm install');
  }

  // 确保 dist 目录存在
  const distPath = resolve(projectRoot, 'dist');
  if (!existsSync(distPath)) {
    mkdirSync(distPath, { recursive: true });
    console.log('📁 创建 dist 目录');
  }

  // 运行 Vite 构建
  console.log('🔨 构建组件...');
  execCommand('npm run build');

  // 运行 npm pack
  console.log('📦 打包组件...');
  const output = execCommand('npm pack', { encoding: 'utf-8' });
  const outputFile = output ? output.toString().trim() : '';

  console.log('✅ 打包完成!');
  if (outputFile) {
    console.log('📎 生成的包文件:', outputFile);
  }
  
  // 提供使用说明
  console.log('\n💡 使用方式:');
  console.log('   1. 发布到 npm registry: npm publish');
  if (outputFile) {
    console.log('   2. 本地安装: npm install ./' + outputFile);
    console.log('   3. 在项目中使用:');
    console.log('      import AiPanel from "@akun/ai-panel";');
  }
  
} catch (error) {
  console.error('❌ 打包过程中出现错误:');
  console.error(error.message);
  process.exit(1);
}