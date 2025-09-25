# @polyv/vod-ai-outline-ui

基于 Vue 2.7 + Vite 的 VOD AI 大纲 UI 组件库

## 📦 安装

```bash
npm install @polyv/vod-ai-outline-ui
```

## ⚙️ 配置

### 环境变量配置

在项目根目录创建 `.env` 文件来配置应用参数：

```bash
# 复制示例配置文件
cp .env.example .env
```

### 核心配置项

#### 必需配置

```bash
# 应用 ID（必填）
VITE_APP_ID=your_app_id_here

# 应用密钥（必填）
VITE_APP_SECRET=your_app_secret_here

# 默认测试视频 ID（可选）
VITE_DEFAULT_VID=your_test_video_id
```

#### 可选配置

```bash
# API 基础URL（默认：https://api.polyv.net/ai-public）
VITE_API_BASE_URL=https://api.polyv.net/ai-public

# 请求超时时间（默认：30000毫秒）
VITE_API_TIMEOUT=30000

# 签名方法（默认：MD5）
VITE_SIGNATURE_METHOD=MD5

# 是否启用调试模式（默认：false）
VITE_DEBUG_MODE=false

# 是否启用本地签名（默认：false）
VITE_USE_LOCAL_SIGNATURE=true
```

### 快速配置示例

最简配置，只需要配置这三个核心参数：

```bash
# .env
VITE_APP_ID=xxx
VITE_APP_SECRET=xxx
VITE_DEFAULT_VID=xxx
```


## 🚀 快速开始

### 全量引入

```javascript
import Vue from 'vue'
import VodAiOutlineUI from '@polyv/vod-ai-outline-ui'
import '@polyv/vod-ai-outline-ui/dist/style.css'

Vue.use(VodAiOutlineUI)
```

### 按需引入

```javascript
import { AIOutlinePanel } from '@polyv/vod-ai-outline-ui'
import '@polyv/vod-ai-outline-ui/dist/style.css'

Vue.component('AIOutlinePanel', AIOutlinePanel)
```

### 基本使用

```vue
<template>
  <AIOutlinePanel
    :outline-data="outlineData"
    :suggest-questions="questions"
    :video-title="videoTitle"
    @time-click="handleTimeClick"
  />
</template>

<script>
import { AIOutlinePanel } from '@polyv/vod-ai-outline-ui'

export default {
  components: {
    AIOutlinePanel
  },
  data() {
    return {
      outlineData: [],
      questions: [],
      videoTitle: '视频标题'
    }
  },
  methods: {
    handleTimeClick(time) {
      // 处理时间点击事件
      console.log('跳转到时间:', time)
    }
  }
}
</script>
```

### Integrator API 使用（推荐）

更简单的集成方式，无需手动管理Vue组件：

```javascript
// 1. 引入
import { VodAiOutline } from '@polyv/vod-ai-outline-ui'
// 或使用全局变量（UMD版本）
// const { VodAiOutline } = window

// 2. 初始化
const outlineInstance = await VodAiOutline.init({
  // 容器配置（二选一）
  containerId: 'outline-container', // 使用元素ID
  // containerClass: 'outline-wrapper', // 使用CSS类名

  // API配置
  api: {
    appId: 'your_app_id',
    appSecret: 'your_app_secret' // 生产环境建议使用getSignature
  },

  // 签名函数（推荐生产环境使用）
  getSignature: async (params) => {
    // 调用后端接口获取签名
    const response = await fetch('/api/sign', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ params })
    })
    const result = await response.json()
    return result.signature
  },

  // 选项配置
  options: {
    defaultActiveTab: 'outline', // 'outline' | 'qa'
    showIntroduction: true
  },

  // 事件回调
  callbacks: {
    onTimeClick: (time) => {
      console.log('跳转到时间:', time)
      // 控制播放器跳转
      player.seek(parseTimeToSeconds(time))
    },
    onTabChange: (tab) => {
      console.log('切换标签:', tab)
    },
    onStatusChange: (type, status, message, pollCount) => {
      console.log(`${type}状态变更:`, status, message)
    }
  }
})

// 3. 加载视频数据
await outlineInstance.loadVideoData('your_vid', {
  questionsSize: 5, // 推荐问题数量
  useCache: false   // 是否使用缓存
})

// 4. 状态访问
console.log('是否加载中:', outlineInstance.isLoading)
console.log('是否有数据:', outlineInstance.hasData)
console.log('错误信息:', outlineInstance.error)
```

### HTML + UMD 使用方式

适合不使用构建工具的项目：

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="path/to/vod-ai-outline-ui/dist/style.css">
</head>
<body>
  <div id="outline-container"></div>

  <script src="path/to/vod-ai-outline-ui/dist/index.umd.js"></script>
  <script>
    async function initOutline() {
      const instance = await VodAiOutline.init({
        containerId: 'outline-container',
        api: {
          appId: 'your_app_id',
          // 生产环境不要直接暴露appSecret
          appSecret: 'your_app_secret'
        },
        callbacks: {
          onTimeClick: (time) => {
            // 控制播放器跳转逻辑
          }
        }
      })

      await instance.loadVideoData('your_video_id')
    }

    initOutline().catch(console.error)
  </script>
</body>
</html>
```

## 🛠️ 开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建组件库

```bash
npm run build:lib
```

### 构建演示项目

```bash
npm run build:demo
```

## 📁 目录结构

```text
src/
├── components/       # Vue 组件
│   ├── AIOutlinePanel.vue      # 主面板组件
│   ├── OutlineContent.vue      # 大纲内容组件
│   ├── QaContent.vue          # 问答内容组件
│   ├── MindMapDialog.vue      # 思维导图弹窗
│   └── StateWrapper.vue       # 状态包装组件
├── config/          # 配置管理
│   ├── env.js       # 环境变量配置
│   └── api.js       # API 配置
├── services/        # 服务层
│   └── signService.js  # 签名服务
├── composables/     # 组合式函数
│   ├── useTab.js    # Tab 状态管理
│   └── useOutlineState.js  # 大纲状态管理
├── integrator.js    # 集成器（简化接入）
└── index.js        # 入口文件
```

## 🔧 API 参考

### AIOutlinePanel 组件属性

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| outlineData | Array | [] | 大纲数据 |
| suggestQuestions | Array | [] | 推荐问题数据 |
| introduction | String | '' | 视频介绍 |
| videoTitle | String | '' | 视频标题 |
| defaultActiveTab | String | 'outline' | 默认激活的标签页（'outline' \| 'qa'） |
| isSummaryLoading | Boolean | false | 大纲是否加载中 |
| summaryLoadingMessage | String | '智能大纲生成中...' | 大纲加载提示信息 |
| isQuestionsLoading | Boolean | false | 问题是否加载中 |
| questionsLoadingMessage | String | '推荐问题生成中...' | 问题加载提示信息 |
| outlineError | String | null | 大纲加载错误信息 |
| qaError | String | null | 问答加载错误信息 |

### 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| tab-change | (tab: string) | 标签页切换 |
| time-click | (time: string) | 时间点击 |
| outline-retry | - | 重试加载大纲 |
| qa-retry | - | 重试加载问答 |

### Integrator API 完整参考

```javascript
// 初始化配置选项
const config = {
  // 容器选择器（必需，二选一）
  containerId: 'string',      // 元素ID
  containerClass: 'string',   // CSS类名

  // API配置（必需）
  api: {
    appId: 'string',         // 应用ID（必需）
    appSecret: 'string',     // 应用密钥（可选，与getSignature二选一）
    baseURL: 'string',       // API基础URL（可选）
    timeout: 'number'        // 请求超时时间（可选）
  },

  // 签名函数（可选，推荐生产环境使用）
  getSignature: async (params) => {
    // 返回签名字符串
    return 'signature_string'
  },

  // 选项配置（可选）
  options: {
    defaultActiveTab: 'outline',  // 默认标签页
    showIntroduction: true,       // 是否显示介绍
    playerHeight: 400            // 播放器高度
  },

  // 事件回调（可选）
  callbacks: {
    onTimeClick: (time) => {},           // 时间点击
    onTabChange: (tab) => {},            // 标签切换
    onSegmentClick: (segment) => {},     // 片段点击
    onStatusChange: (type, status, message, pollCount) => {}, // 状态变更
    onError: (error) => {}               // 错误处理
  }
}

// 实例方法
const instance = await VodAiOutline.init(config)

// 加载视频数据
await instance.loadVideoData(videoId, {
  questionsSize: 5,    // 推荐问题数量
  useCache: false      // 是否使用缓存
})

// 状态访问
instance.isLoading    // 是否加载中
instance.hasData      // 是否有数据
instance.error        // 全局错误
instance.outlineError // 大纲错误
instance.qaError      // 问答错误

// 配置更新
instance.updateConfig({ defaultActiveTab: 'qa' })

// 销毁实例
instance.destroy()
```

## 🚨 注意事项

1. **安全性**:
   - 生产环境请使用 `getSignature` 函数，避免直接暴露 `appSecret`
   - 签名计算应在后端完成，前端只传递参数

2. **兼容性**:
   - 组件基于 Vue 2.7，确保项目 Vue 版本兼容
   - 支持现代浏览器，IE11 需要 polyfill

3. **性能优化**:
   - 建议使用动态导入支持代码分割
   - 缓存机制可以减少重复请求
   - 大纲和问答数据独立加载，互不影响

4. **样式**:
   - 组件使用 BEM 命名规范，避免样式冲突
   - 可通过 CSS 变量自定义主题颜色

5. **错误处理**:
   - 各个功能模块独立的错误状态
   - 支持重试机制，提升用户体验
   - 详细的错误信息便于调试

## 📋 更新日志

### v1.1.0 (Latest)
- ✨ 支持异步数据加载和轮询状态管理
- ✨ 新增独立的错误处理和重试机制
- ✨ 支持 loading 和 error 状态的独立显示
- 🐛 修复多个 API 并发调用的状态管理问题
- 🔧 优化渲染逻辑，提升用户体验
- ✨ AIOutlinePanel 结构优化

### v1.0.0
- 🎉 初始版本发布
- ✨ 基本的智能大纲和推荐问题功能
- ✨ Vue 组件支持
- ✨ 基础的状态管理

## 📞 技术支持

- 📚 [在线文档](https://docs.polyv.net)
- 🐛 [问题反馈](https://github.com/polyv/vod-ai-outline-ui/issues)
- 💬 [社区讨论](https://github.com/polyv/vod-ai-outline-ui/discussions)

## 📄 许可证

[MIT License](LICENSE)
