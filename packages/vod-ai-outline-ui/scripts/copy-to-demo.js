const { copyFile, mkdir } = require('fs/promises')
const { existsSync } = require('fs')
const { resolve } = require('path')

async function copyToDemo() {
  try {
    const sourceDir = resolve(__dirname, '../dist')
    const demoDistPath = resolve(__dirname, '../../vod-ai-outline-demo/dist')
    
    // 确保demo的dist目录存在
    if (!existsSync(demoDistPath)) {
      await mkdir(demoDistPath, { recursive: true })
      console.log('📁 创建了 demo/dist 目录')
    }
    
    // 要复制的文件列表
    const filesToCopy = [
      'index.js',
      'index.es.js', 
      'index.umd.js',
      'style.css',
      'index.d.ts'
    ]
    
    let copiedCount = 0
    
    for (const file of filesToCopy) {
      const srcPath = resolve(sourceDir, file)
      const destPath = resolve(demoDistPath, file)
      
      if (existsSync(srcPath)) {
        await copyFile(srcPath, destPath)
        console.log(`📄 已复制 ${file}`)
        copiedCount++
      } else {
        console.warn(`⚠️  文件不存在: ${file}`)
      }
    }
    
    console.log(`✅ 成功复制 ${copiedCount} 个文件到 vod-ai-outline-demo/dist/`)
    
  } catch (error) {
    console.error('❌ 复制失败:', error)
    process.exit(1)
  }
}

copyToDemo() 