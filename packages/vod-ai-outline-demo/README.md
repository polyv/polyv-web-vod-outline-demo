# VOD AI Outline Demo

这是polyv点播智能大纲演示项目。

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动服务

```bash
npm start
```

### 3. 访问演示

打开浏览器访问 [http://localhost:8083](http://localhost:8083)

## ⚙️ 配置修改

如需修改配置（如 appId、appSecret、videoId 等），直接编辑 `index.html` 中的配置对象：

```javascript
window.DemoConfig = {
  appId: 'your_app_id',
  appSecret: 'your_app_secret',
  defaultVid: 'your_video_id',
  signatureMode: 'frontend', // 'frontend' | 'api'
  signatureApiUrl: 'https://your-api.com/sign',
  debugMode: true
}
```

### 配置项说明

| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| `appId` | 应用ID | `gga7xoqqie` |
| `appSecret` | 应用密钥 | `d4deaa...` |
| `defaultVid` | 默认视频ID | `cc167950...` |
| `signatureMode` | 签名方式 | `frontend` |
| `signatureApiUrl` | 后端签名接口 | 默认测试接口 |
| `debugMode` | 调试模式 | `true` |

## 📁 文件结构

```text
├── index.html          # 主演示页面
├── server.js           # 开发服务器
├── package.json        # 项目配置
└── README.md           # 说明文档
```

## ⚠️ 注意事项

1. 确保已构建 `vod-ai-outline-ui` 项目的 dist 文件
2. 生产环境建议使用 `api` 签名方式避免暴露密钥
3. 调试模式下会输出详细的控制台日志
