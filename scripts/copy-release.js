#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📁 复制构建产物到release目录...\n');

// 获取路径
const projectRoot = path.resolve(__dirname, '..');
const releaseDir = path.join(projectRoot, 'release');

// 复制函数
function copyDirectory(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`⚠️  源目录不存在: ${src}`);
    return;
  }
  
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyFile(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`⚠️  源文件不存在: ${src}`);
    return;
  }
  
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  fs.copyFileSync(src, dest);
}

try {
  // 1. 复制 vod-ai-outline-logic 构建产物
  const logicDistSrc = path.join(projectRoot, 'packages/vod-ai-outline-logic/dist');
  const logicDistDest = path.join(releaseDir, 'vod-ai-outline-logic/dist');
  
  console.log('📦 复制 vod-ai-outline-logic 构建产物...');
  copyDirectory(logicDistSrc, logicDistDest);
  
  // 复制 logic package.json
  copyFile(
    path.join(projectRoot, 'packages/vod-ai-outline-logic/package.json'),
    path.join(releaseDir, 'vod-ai-outline-logic/package.json')
  );
  
  // 复制 logic README
  copyFile(
    path.join(projectRoot, 'packages/vod-ai-outline-logic/README.md'),
    path.join(releaseDir, 'vod-ai-outline-logic/README.md')
  );
  
  console.log('✅ vod-ai-outline-logic 复制完成');

  // 2. 复制 vod-ai-outline-ui 构建产物
  const uiDistSrc = path.join(projectRoot, 'packages/vod-ai-outline-ui/dist');
  const uiDistDest = path.join(releaseDir, 'vod-ai-outline-ui/dist');
  
  console.log('📦 复制 vod-ai-outline-ui 构建产物...');
  copyDirectory(uiDistSrc, uiDistDest);
  
  // 复制 ui package.json
  copyFile(
    path.join(projectRoot, 'packages/vod-ai-outline-ui/package.json'),
    path.join(releaseDir, 'vod-ai-outline-ui/package.json')
  );
  
  // 复制 ui README
  copyFile(
    path.join(projectRoot, 'packages/vod-ai-outline-ui/README.md'),
    path.join(releaseDir, 'vod-ai-outline-ui/README.md')
  );
  
  console.log('✅ vod-ai-outline-ui 复制完成');

  // 3. 复制 demo 项目
  const demoSrc = path.join(projectRoot, 'packages/vod-ai-outline-demo');
  const demoDest = path.join(releaseDir, 'vod-ai-outline-demo');
  
  console.log('📦 复制 demo 项目...');
  
  // 复制demo的主要文件（排除node_modules）
  const demoFiles = fs.readdirSync(demoSrc, { withFileTypes: true });
  
  for (const file of demoFiles) {
    if (file.name === 'node_modules') continue;
    
    const srcPath = path.join(demoSrc, file.name);
    const destPath = path.join(demoDest, file.name);
    
    if (file.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      copyFile(srcPath, destPath);
    }
  }
  
  console.log('✅ demo 项目复制完成');

  // 4. 复制根目录重要文件
  console.log('📦 复制项目文档...');
  
  copyFile(
    path.join(projectRoot, 'README.md'),
    path.join(releaseDir, 'README.md')
  );
  
  copyFile(
    path.join(projectRoot, 'package.json'),
    path.join(releaseDir, 'package.json')
  );
  
  copyFile(
    path.join(projectRoot, 'pnpm-workspace.yaml'),
    path.join(releaseDir, 'pnpm-workspace.yaml')
  );
  
  console.log('✅ 项目文档复制完成');

  // 5. 创建release说明文件
  const releaseNotes = `# VOD AI Outline Release v${require('../package.json').version}

## 📦 构建产物说明

### vod-ai-outline-logic/
- 纯JavaScript逻辑库构建产物
- 包含 UMD 和 ES Module 格式

### vod-ai-outline-ui/
- Vue UI组件库构建产物  
- 包含 UMD 格式的JavaScript文件和样式文件

### vod-ai-outline-demo/
- 完整的演示项目
- 可直接部署使用

## 🚀 使用方式

1. **直接使用构建产物**
   \`\`\`html
   <link rel="stylesheet" href="./vod-ai-outline-ui/style.css">
   <script src="./vod-ai-outline-ui/index.umd.js"></script>
   \`\`\`

2. **运行演示项目**
   \`\`\`bash
   cd vod-ai-outline-demo
   npm install
   npm start
   \`\`\`

构建时间: ${new Date().toISOString()}
`;

  fs.writeFileSync(path.join(releaseDir, 'RELEASE_NOTES.md'), releaseNotes);
  
  console.log('\n🎉 所有构建产物复制完成!');

} catch (error) {
  console.error('❌ 复制失败:', error.message);
  process.exit(1);
} 