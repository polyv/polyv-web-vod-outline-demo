# Polyv Vod AI Outline Demo

这是polyv点播智能大纲演示项目。

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动demo

```bash
npm start
```

### 3. 访问demo

服务器启动后，在浏览器中打开 [http://localhost:8083](http://localhost:8083) 查看demo。

## 端口配置

默认端口为 8083，可以通过环境变量修改：

```bash
PORT=8080 npm start
```

## 停止服务

在终端中按 `Ctrl+C` 停止服务器。

## 目录结构

```
vod-ai-outline-demo/
├── index.html          # 主页面
├── server.js           # Express服务器
├── package.json        # 项目配置
└── README.md          # 说明文档
```

## 注意事项

- 确保已构建 `vod-ai-outline-ui` 项目的 dist 文件
