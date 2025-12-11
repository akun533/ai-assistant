const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 清理目录
function cleanDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

// 复制文件
function copyFile(src, dest) {
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
}

// 递归复制目录
function copyDir(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFile(srcPath, destPath);
    }
  }
}

// 主构建函数
function buildPackage() {
  console.log('开始构建 AiPanel npm 包...');

  // 定义路径
  const rootDir = path.resolve(__dirname, '..');
  const srcDir = path.join(rootDir, 'src');
  const distDir = path.join(rootDir, 'dist');
  const packageJsonPath = path.join(rootDir, 'package.json');

  // 清理 dist 目录
  cleanDir(distDir);
  console.log('已清理 dist 目录');

  // 构建 Vue 组件 (使用 Vite)
  console.log('正在使用 Vite 构建组件...');
  try {
    execSync('vite build', { cwd: rootDir, stdio: 'inherit' });
  } catch (error) {
    console.warn('Vite 构建失败，继续执行其他步骤...');
  }

  // 复制组件源文件以便提供未编译版本
  const distSrcDir = path.join(distDir, 'src');
  copyDir(path.join(srcDir, 'components'), path.join(distSrcDir, 'components'));
  copyDir(path.join(srcDir, 'utils'), path.join(distSrcDir, 'utils'));

  // 复制必要的文件
  copyFile(packageJsonPath, path.join(distDir, 'package.json'));
  if (fs.existsSync(path.join(rootDir, 'README.md'))) {
    copyFile(path.join(rootDir, 'README.md'), path.join(distDir, 'README.md'));
  }
  if (fs.existsSync(path.join(rootDir, 'LICENSE'))) {
    copyFile(path.join(rootDir, 'LICENSE'), path.join(distDir, 'LICENSE'));
  }

  // 修改 dist/package.json
  const pkg = JSON.parse(fs.readFileSync(path.join(distDir, 'package.json'), 'utf-8'));
  pkg.name = '@akun/ai-panel';
  pkg.main = 'src/components/AiPanel.vue';
  pkg.module = 'src/components/AiPanel.vue';
  pkg.exports = {
    '.': {
      import: './src/components/AiPanel.vue',
      require: './src/components/AiPanel.vue'
    },
    './src/*': './src/*',
    './dist/*': './dist/*',
    './package.json': './package.json'
  };
  pkg.files = [
    "dist",
    "src",
    "README.md",
    "LICENSE"
  ];

  fs.writeFileSync(path.join(distDir, 'package.json'), JSON.stringify(pkg, null, 2));

  console.log('构建完成!');
  console.log('包已生成在 dist/ 目录中');

  // 执行 npm pack 命令生成 .tgz 文件
  console.log('正在执行 npm pack...');
  try {
    execSync('npm pack', { cwd: distDir, stdio: 'inherit' });
    console.log('npm pack 执行完成!');
  } catch (error) {
    console.error('npm pack 执行失败:', error);
    process.exit(1);
  }
}

// 运行构建
try {
  buildPackage();
} catch (error) {
  console.error('构建失败:', error);
  process.exit(1);
}
