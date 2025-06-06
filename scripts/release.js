#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 开始执行 Release 构建...\n');

// 获取项目根目录
const projectRoot = path.resolve(__dirname, '..');
const releaseDir = path.join(projectRoot, 'release');

// 创建release目录
if (fs.existsSync(releaseDir)) {
  console.log('🗑️  清理旧的release目录...');
  fs.rmSync(releaseDir, { recursive: true, force: true });
}
fs.mkdirSync(releaseDir, { recursive: true });

try {
  // 1. 构建项目
  console.log('📦 开始构建项目...');
  execSync('pnpm run release:build', { 
    stdio: 'inherit', 
    cwd: projectRoot 
  });
  console.log('✅ 项目构建完成!\n');

  // 2. 复制构建产物
  console.log('📁 开始复制构建产物...');
  execSync('pnpm run release:copy', { 
    stdio: 'inherit', 
    cwd: projectRoot 
  });
  console.log('✅ 构建产物复制完成!\n');

  // 3. 创建版本信息文件
  const packageJson = require('../package.json');
  const versionInfo = {
    version: packageJson.version,
    buildTime: new Date().toISOString(),
    packages: {
      'vod-ai-outline-logic': require('../packages/vod-ai-outline-logic/package.json').version,
      'vod-ai-outline-ui': require('../packages/vod-ai-outline-ui/package.json').version
    }
  };
  
  fs.writeFileSync(
    path.join(releaseDir, 'version.json'), 
    JSON.stringify(versionInfo, null, 2)
  );

  console.log('🎉 Release 构建完成!');
  console.log(`📂 构建产物位置: ${releaseDir}`);
  console.log(`📋 版本信息: v${packageJson.version}`);

} catch (error) {
  console.error('❌ Release 构建失败:', error.message);
  process.exit(1);
} 