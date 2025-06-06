# @polyv/vod-ai-outline-logic

视频大纲AI处理工具库，提供视频摘要、推荐问题等AI功能。

## 快速开始

### 基础使用

```javascript
import { VodAiApiClient, formatTime } from '@polyv/vod-ai-outline-logic'

// 1. 创建API客户端
const apiClient = new VodAiApiClient({
  appId: 'your_app_id',
  appSecret: 'your_app_secret'
})

// 2. 获取视频推荐问题
const questions = await apiClient.getSuggestQuestionsByVid({
  vid: 'your_video_id',
  size: 5
})

// 3. 获取视频摘要
const summary = await apiClient.getSummaryByVid({
  vid: 'your_video_id'
})

// 4. 时间格式化
const time = formatTime(150) // "02:30"
```

## 核心功能

### 🤖 AI接口

#### 获取推荐问题

```javascript
const result = await apiClient.getSuggestQuestionsByVid({
  vid: 'video_id',
  size: 5 // 返回问题数量，范围1-50
})
```

#### 获取视频摘要

```javascript
const result = await apiClient.getSummaryByVid({
  vid: 'video_id'
})

### 🛠️ 工具函数

#### 时间处理

```javascript
import { formatTime, parseTime, calculateDuration } from '@polyv/vod-ai-outline-logic'

formatTime(90)                    // "01:30"
formatTime(3661)                  // "01:01:01"
parseTime("01:30")                // 90
parseTime("01:01:01")             // 3661
calculateDuration(30, 90)         // 60
```

#### 签名工具

```javascript
import { generateSign, addSignToParams } from '@polyv/vod-ai-outline-logic'

// 生成签名
const sign = generateSign(
  { vid: 'xxx', timestamp: Date.now() },
  'your_app_secret',
  'MD5'
)

// 为参数添加签名
const signedParams = addSignToParams(
  { vid: 'xxx' },
  'your_app_secret',
  'MD5'
)
```

#### 视频服务

```javascript
import { createVideoService } from '@polyv/vod-ai-outline-logic'

const videoService = createVideoService({
  appId: 'your_app_id',
  appSecret: 'your_app_secret'
})

// 使用视频服务的各种功能
```

## 便捷调用方式

### 方式一：创建客户端实例

```javascript
import { VodAiApiClient } from '@polyv/vod-ai-outline-logic'

const client = new VodAiApiClient({
  appId: 'your_app_id',
  appSecret: 'your_app_secret'
})

const questions = await client.getSuggestQuestionsByVid({ vid: 'xxx' })
const summary = await client.getSummaryByVid({ vid: 'xxx' })
```

### 方式二：直接函数调用

```javascript
import { getSuggestQuestionsByVid, getSummaryByVid } from '@polyv/vod-ai-outline-logic'

const config = { appId: 'xxx', appSecret: 'xxx' }

const questions = await getSuggestQuestionsByVid(config, { vid: 'xxx' })
const summary = await getSummaryByVid(config, { vid: 'xxx' })
```

### 方式三：使用默认导出

```javascript
import { outlineLogic } from '@polyv/vod-ai-outline-logic'

// 创建API客户端
const client = new outlineLogic.VodAiApiClient({ appId: 'xxx', appSecret: 'xxx' })

// 使用工具函数
const formattedTime = outlineLogic.formatTime(150)
const signature = outlineLogic.generateSign(params, secret, 'MD5')
```

## API配置

```javascript
const apiClient = new VodAiApiClient({
  appId: 'your_app_id',          // 必填：应用ID
  appSecret: 'your_app_secret',  // 必填：应用密钥
  timeout: 30000,                // 可选：超时时间（毫秒）
  signatureMethod: 'MD5'         // 可选：签名方法，支持 'MD5'
})
```

## 错误处理

```javascript
try {
  const result = await apiClient.getSuggestQuestionsByVid({ vid: 'xxx' })
  console.log(result.data)
} catch (error) {
  console.error('API调用失败:', error.message)
}
```

## 完整功能导出列表

```javascript
import {
  // AI API客户端
  VodAiApiClient,
  createApiClient,
  getSuggestQuestionsByVid,
  getSummaryByVid,
  
  // 时间工具
  formatTime,
  parseTime,
  calculateDuration,
  
  // 签名工具
  generateSign,
  generateMD5Sign,
  verifySign,
  addSignToParams,
  generateNonce,
  
  // 视频服务
  createVideoService,
  DEFAULT_API_CONFIG,
  
  // 默认导出
  outlineLogic
} from '@polyv/vod-ai-outline-logic'
```

## 支持与帮助

- 📖 [API接口文档](./doc/api/) 临时本地文档，后续请以帮助中心版本为准
