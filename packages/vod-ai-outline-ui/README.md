# @polyv/vod-ai-outline-ui

基于 Vue 2.7 + Vite 的 VOD AI 大纲 UI 组件库

## 📦 安装

```bash
npm install @polyv/vod-ai-outline-ui
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
import { ComponentName } from '@polyv/vod-ai-outline-ui'
import '@polyv/vod-ai-outline-ui/dist/style.css'

Vue.component('ComponentName', ComponentName)
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

```
src/
├── components/     # 组件源码
├── styles/         # 样式文件
└── index.js        # 入口文件
```
