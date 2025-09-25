# VOD AI Outline Monorepo

polyv 点播web端AI大纲功能demo，包含三个子项目：

## 项目结构

```
vod-ai-outline/
├── packages/
│   ├── vod-ai-outline-ui/     # Vue 2.7 + Vite UI组件
│   ├── vod-ai-outline-logic/  # 纯JS逻辑包
│   └── vod-ai-outline-demo/   # 演示项目
├── package.json
├── pnpm-workspace.yaml
└── README.md
```

## 子项目

### @polyv/vod-ai-outline-ui

- 基于 Vue 2.7 + Vite 的前端UI组件库
- 位置: `packages/vod-ai-outline-ui/`

### @polyv/vod-ai-outline-logic  

- 纯JavaScript逻辑库，使用 Vite 构建和打包
- 位置: `packages/vod-ai-outline-logic/`

### vod-ai-outline-demo

- 演示项目，展示如何集成和使用智能大纲组件
- 位置: `packages/vod-ai-outline-demo/`

## 开发指令

```bash
# 安装所有依赖
pnpm install

# 启动所有开发服务器
pnpm dev

# 构建所有项目
pnpm build

# 清理所有构建产物
pnpm clean

# 代码检查
pnpm lint

# 🚀 Release构建（推荐）
pnpm run release          # 执行完整的release构建
pnpm run release:build    # 仅构建项目
pnpm run release:copy     # 仅复制构建产物
```

## 工作流程

1. 在根目录运行 `pnpm install` 安装所有依赖
2. 使用 `pnpm dev` 启动开发环境
3. 在各个子项目目录中进行开发
4. 使用 `pnpm build` 构建所有项目

## 要求

- Node.js >= 16.0.0
- pnpm >= 8.0.0

---

## 在线demo

[传送门](https://demo.ipolyv.cn/zhouzhanhong/vod-ai-outline-demo/)

# 🚀 接入指南

VOD AI Outline 提供两种接入方式，您可以根据项目需求选择合适的方案：

## 📖 方式一：通过构建产物接入（推荐）

### 快速开始

参考 `vod-ai-outline-demo` 项目，通过引入构建产物快速集成智能大纲功能。

#### 1. 获取构建文件

首先构建UI组件库：

```bash
cd packages/vod-ai-outline-ui
pnpm run build:lib
```

构建完成后，将在 `dist/` 目录下生成以下文件：

- `index.umd.js` - UMD格式的JavaScript文件
- `style.css` - 组件样式文件

#### 2. 引入文件

在您的HTML页面中引入构建文件：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>VOD AI Outline</title>
    <!-- 引入样式文件 -->
    <link rel="stylesheet" href="./dist/style.css">
</head>
<body>
    <!-- 智能大纲容器 -->
    <div id="vod-ai-outline-container"></div>
    
    <!-- 引入JavaScript文件 -->
    <script src="./dist/index.umd.js"></script>
    
    <script>
        // 您的初始化代码
    </script>
</body>
</html>
```

#### 3. 初始化智能大纲

```javascript
// 签名函数（生产环境必须通过接口获取）
async function createSignature(params) {
    const response = await fetch('/api/getSign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ params })
    });
    
    const result = await response.json();
    return result.data.signature;
}

// 初始化配置
const config = {
    containerId: "vod-ai-outline-container", // 容器ID
    api: {
        appId: "your-app-id",                // 您的应用ID
        getSignature: createSignature        // 签名函数
    },
    options: {
        defaultActiveTab: "outline",         // 默认显示标签: outline | qa
        showIntroduction: true               // 是否显示视频介绍
    },
    callbacks: {
        onError: (error) => {
            console.error("组件错误:", error);
        },
        onTabChange: (tab) => {
            console.log("切换到标签:", tab);
        },
        onTimeClick: (time) => {
            console.log("点击时间:", time);
            // 在此处实现视频跳转逻辑
            // player.seekTo(timeStringToSeconds(time));
        }
    }
};

// 初始化智能大纲
async function initOutline() {
    try {
        const outlineInstance = await VodAiOutline.init(config);
        
        // 加载视频数据
        await outlineInstance.loadVideoData("your-video-id", {
            useCache: false,
            questionsSize: 5
        });
        
        console.log("智能大纲初始化成功");
    } catch (error) {
        console.error("初始化失败:", error);
    }
}

// 页面加载完成后初始化
window.addEventListener('load', initOutline);
```

#### 4. 快捷API

组件还提供了一些快捷API方法：

```javascript
// 通过ID选择器快速创建
VodAiOutline.createById("container-id", apiConfig, getSignature, options);

// 通过Class选择器快速创建
VodAiOutline.createByClass("container-class", apiConfig, getSignature, options);

// 销毁实例
VodAiOutline.destroy(instanceId);

// 销毁所有实例
VodAiOutline.destroyAll();
```

#### 5. 完整示例

参考 `packages/vod-ai-outline-demo/` 目录下的完整示例：

```bash
# 启动demo
cd packages/vod-ai-outline-demo
npm start

# 访问 http://localhost:8083 查看效果
```

---

## 🔧 方式二：Vue 2.7 项目组件集成

### 适用场景

如果您的项目基于 Vue 2.7，可以通过手动集成的方式直接使用 VOD AI Outline 组件。

### 集成步骤

#### 1. 获取组件源码

由于组件库暂未发布到 npm，您需要手动将组件集成到项目中：

```bash
# 克隆或下载本项目
git clone [项目地址]

# 进入 UI 组件库目录
cd packages/vod-ai-outline-ui
```

#### 2. 复制组件文件

将以下必要文件复制到您的项目中：

**方式A：复制源码文件**

```
您的项目/
├── src/
│   ├── components/
│   │   └── vod-ai-outline/              # 创建组件目录
│   │       ├── AIOutlinePanel.vue       # 主组件
│   │       ├── Dialog.vue               # 弹窗组件
│   │       ├── MindMap.vue              # 思维导图组件
│   │       ├── MindMapDialog.vue        # 思维导图弹窗
│   │       └── index.js                 # 组件导出文件
│   └── utils/
│       └── vod-ai-outline-logic.js      # 逻辑库文件
```

**方式B：使用构建产物**

```bash
# 构建组件库
cd packages/vod-ai-outline-ui
npm run build:lib

# 复制构建产物到您的项目
cp dist/index.umd.js 您的项目/src/assets/js/
cp dist/style.css 您的项目/src/assets/css/
```

#### 3. 安装依赖

确保您的项目已安装必要依赖：

```bash
npm install vue@^2.7.14 simple-mind-map@^0.14.0
```

#### 4. 集成逻辑库

首先集成数据逻辑层：

```bash
# 复制逻辑库文件
cp packages/vod-ai-outline-logic/dist/index.es.js 您的项目/src/utils/vod-ai-outline-logic.js
```

或者直接在项目中使用构建好的逻辑库：

```javascript
// 如果您使用的是模块化构建工具，可以直接引用
import * as VodAiOutlineLogic from './utils/vod-ai-outline-logic.js'
```

#### 5. 组件注册和使用

**全局注册方式：**

在您的 `main.js` 中：

```javascript
import Vue from 'vue'
// 引入组件
import AIOutlinePanel from './components/vod-ai-outline/AIOutlinePanel.vue'
import './components/vod-ai-outline/style.css' // 如果使用构建产物

// 全局注册组件
Vue.component('AIOutlinePanel', AIOutlinePanel)

new Vue({
  // ...your app config
})
```

**局部引入方式：**

在需要使用组件的页面中：

```javascript
// YourPage.vue
<template>
  <div class="your-page">
    <AIOutlinePanel 
      :outline-data="outlineData"
      :suggest-questions="suggestQuestions"
      :introduction="introduction"
      :video-title="videoTitle"
      :default-active-tab="'outline'"
      @time-click="handleTimeClick"
      @tab-change="handleTabChange"
      @segment-click="handleSegmentClick"
    />
  </div>
</template>

<script>
import AIOutlinePanel from '@/components/vod-ai-outline/AIOutlinePanel.vue'
import { createVideoService } from '@/utils/vod-ai-outline-logic.js'

export default {
  name: 'YourPage',
  components: {
    AIOutlinePanel
  },
  data() {
    return {
      outlineData: [],
      suggestQuestions: [],
      introduction: '',
      videoTitle: '',
      videoService: null
    }
  },
  async created() {
    await this.initVideoService()
  },
  methods: {
    async initVideoService() {
      try {
        // 初始化视频服务
        this.videoService = createVideoService({
          appId: 'your-app-id',
          getSignature: this.createSignature
        })
        
        // 加载视频数据
        const videoData = await this.videoService.getVideoData('your-video-id', {
          useCache: false,
          questionsSize: 5
        })
        
        this.outlineData = videoData.outline || []
        this.suggestQuestions = videoData.suggestQuestions || []
        this.introduction = videoData.introduction || ''
        this.videoTitle = videoData.title || ''
      } catch (error) {
        console.error('初始化失败:', error)
      }
    },
    
    async createSignature(params) {
      // 调用您的后端接口获取签名
      const response = await fetch('/api/getSign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ params })
      })
      const result = await response.json()
      return result.data.signature
    },
    
    handleTimeClick(time) {
      console.log('点击时间:', time)
      // 实现视频跳转逻辑
      // this.player.seekTo(this.timeStringToSeconds(time))
    },
    
    handleTabChange(tab) {
      console.log('切换标签:', tab)
    },
    
    handleSegmentClick(segment) {
      console.log('点击片段:', segment)
    }
  }
}
</script>
```

#### 6. 样式配置

如果您复制了源码文件，样式已包含在 Vue 组件中。如果使用构建产物，需要引入样式文件：

```javascript
// 在 main.js 或组件中引入
import './assets/css/vod-ai-outline-style.css'
```

或在 HTML 中引入：

```html
<link rel="stylesheet" href="./assets/css/vod-ai-outline-style.css">
```

### 组件API说明

#### AIOutlinePanel 组件属性

| 属性名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| `outline-data` | Array | 否 | `[]` | 智能大纲数据数组 |
| `suggest-questions` | Array | 否 | `[]` | AI推荐问题数组 |
| `introduction` | String | 否 | `''` | 视频介绍文本 |
| `video-title` | String | 否 | `''` | 视频标题 |
| `default-active-tab` | String | 否 | `'outline'` | 默认激活标签：`'outline'` \| `'qa'` |

#### 组件事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| `time-click` | `time: string` | 用户点击时间点时触发，用于视频跳转 |
| `tab-change` | `tab: string` | 切换标签时触发 |
| `segment-click` | `segment: object` | 点击大纲片段时触发 |

### 完整集成示例

参考 `packages/vod-ai-outline-ui/src/App.vue` 文件，查看完整的集成示例代码。

### 注意事项

1. **Vue版本要求**：确保使用 Vue 2.7.x 版本
2. **依赖管理**：手动集成时需要确保所有依赖项正确安装
3. **样式冲突**：如果您的项目有全局样式，可能需要调整组件样式以避免冲突
4. **构建配置**：确保您的构建工具能正确处理 `.vue` 文件和相关依赖

### 自定义样式

组件使用了 CSS 变量和内联样式，您可以通过以下方式自定义样式：

```css
/* 在您的全局样式文件中覆盖 */
.c-outline-panel {
  /* 自定义面板背景色 */
  --panel-bg: #your-color;
  /* 自定义文字颜色 */
  --text-color: #your-color;
}
```

或者直接修改组件源码中的样式变量。

### 故障排除

1. **组件无法显示**：检查组件路径和导入语句是否正确
2. **样式异常**：确认样式文件已正确引入
3. **数据为空**：检查逻辑库集成和API配置是否正确
4. **构建错误**：确认所有依赖已正确安装

如需更多帮助，请参考 `packages/vod-ai-outline-demo/` 中的完整示例项目。

## 🔐 签名验证

### 重要说明

⚠️ **生产环境必须使用服务端签名！** 前端签名仅用于开发测试。

### 服务端签名实现

```php
<?php
// PHP示例
function generateSignature($params, $appSecret) {
    // 过滤空值并排序
    $filteredParams = array_filter($params, function($value) {
        return $value !== '' && $value !== null;
    });
    ksort($filteredParams);
    
    // 生成查询字符串
    $queryString = '';
    foreach ($filteredParams as $key => $value) {
        $queryString .= $key . $value;
    }
    
    // 追加密钥并生成MD5
    $stringToSign = $queryString . $appSecret;
    return strtoupper(md5($stringToSign));
}

// 接口示例
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $params = $input['params'];
    $appSecret = 'your-app-secret'; // 从安全配置中获取
    
    $signature = generateSignature($params, $appSecret);
    
    echo json_encode([
        'success' => true,
        'data' => ['signature' => $signature]
    ]);
}
?>
```

### 前端调用示例

```javascript
async function createSignature(params) {
    try {
        const response = await fetch('/api/getSign', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ params })
        });
        
        const result = await response.json();
        
        if (!result.success) {
            throw new Error(result.message || '获取签名失败');
        }
        
        return result.data.signature;
    } catch (error) {
        console.error('获取签名失败:', error);
        throw error;
    }
}
```

---

## 🎨 样式定制

可以把项目拉下来，然后修改样式。

## 🐛 常见问题

### Q: 智能大纲无法显示？

A: 请检查：

1. 签名配置是否正确
2. video ID 是否有效

### Q: 如何实现视频跳转？

A: 在 `onTimeClick` 回调中实现：

```javascript
onTimeClick: (time) => {
    const seconds = timeStringToSeconds(time);
    yourPlayer.seekTo(seconds);
}
```

### Q: 如何获取appId和appSecret？

A: 可以在保利威的后台获取appId和appSecret。

---

## 📞 技术支持

如果在接入过程中遇到问题，请：

1. 查看 `packages/vod-ai-outline-demo/` 中的完整示例
2. 检查浏览器控制台的错误信息
3. 参考本文档的常见问题部分
4. 联系保利威技术支持团队

---

## 📄 更新日志

### v1.1.0 (Latest)

- ✨ 支持异步数据加载和轮询状态管理
- ✨ 新增独立的错误处理和重试机制
- ✨ 支持 loading 和 error 状态的独立显示
- 🐛 修复多个 API 并发调用的状态管理问题
- 🔧 优化渲染逻辑，提升用户体验
- ✨ AIOutlinePanel 结构优化

### v1.0.0

- 初始版本发布
- 支持智能大纲和AI问答功能
- 提供Vue组件和纯JS两种接入方式
- 支持思维导图展示
