import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { copyFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'

// 复制文件到demo目录的插件
function copyToDemoPlugin() {
  return {
    name: 'copy-to-demo',
    async writeBundle() {
      try {
        const demoDistPath = resolve(__dirname, '../vod-ai-outline-demo/dist')
        
        // 确保demo的dist目录存在
        if (!existsSync(demoDistPath)) {
          await mkdir(demoDistPath, { recursive: true })
        }
        
        // 复制构建产物
        const filesToCopy = [
          'index.js',
          'index.es.js', 
          'index.umd.js',
          'style.css'
        ]
        
        for (const file of filesToCopy) {
          const srcPath = resolve(__dirname, 'dist', file)
          const destPath = resolve(demoDistPath, file)
          
          if (existsSync(srcPath)) {
            await copyFile(srcPath, destPath)
            console.log(`📄 已复制 ${file} 到 demo 目录`)
          }
        }
        
        console.log('✅ 所有文件已复制到 vod-ai-outline-demo/dist/')
        
      } catch (error) {
        console.error('❌ 复制文件到demo目录失败:', error)
      }
    }
  }
}

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'
  
  const config = {
    plugins: [
      vue(),
      ...(isLib ? [
        dts({ include: ['src'] }),
        copyToDemoPlugin()
      ] : [])
    ],
    
    define: {
      // 为浏览器环境定义process.env
      'process.env': JSON.stringify(process.env),
      'process': JSON.stringify({
        env: {
          NODE_ENV: isLib ? 'production' : 'development'
        }
      })
    },
    
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    }
  }
  
  if (isLib) {
    // 库模式配置
    config.build = {
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        name: 'VodAiOutlineUI',
        fileName: (format) => {
          if (format === 'es') return 'index.es.js'
          if (format === 'umd') return 'index.umd.js'
          return 'index.js'
        },
        formats: ['es', 'umd']
      },
      rollupOptions: {
        output: {
          // 确保CSS文件名固定
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === 'style.css') return 'style.css'
            return assetInfo.name
          }
        }
      },
      // 生成source map便于调试
      sourcemap: true,
    }
  } else {
    // 开发模式配置
    config.server = {
      port: 3000,
      host: true,
      open: true,
    }
    
    config.build = {
      outDir: 'dist'
    }
  }
  
  return config
}) 