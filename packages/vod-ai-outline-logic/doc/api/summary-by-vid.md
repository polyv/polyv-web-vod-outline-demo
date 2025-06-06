# 视频摘要接口文档

## 接口概述

该接口用于根据视频ID获取视频的摘要信息。

## 请求信息

- **URL**: `https://api.polyv.net/ai-public/v1/knowledges/summary-by-vid`
- **方法**: GET
- **描述**: 获取视频摘要信息

## 请求参数

### 查询参数

| 参数名 | 必填 | 类型 | 说明 | 限制 |
|-------|-----|------|-----|------|
| vid | 是 | string | 视频ID | 长度1-100字符 |
| sign | 是 | string | 签名, 见[官方文档](https://help.polyv.net/index.html#/live/api/buildSign) | 长度1-100字符 |
| timestamp | 是 | number | 时间戳 | 当前时间戳 |
| appId | 是 | string | 应用ID | 长度1-100字符 |


## 响应信息

### 响应状态码

- **200**: 请求成功
- **500**: 请求失败

### 响应数据结构

```json
{
  "message": "string",  // 错误信息
  "status": "string",   // 状态
  "code": "number",     // 状态码
  "data": {
    "list": [
      {
        "title": "string",      // 标题
        "startTime": "string",  // 开始时间
        "endTime": "string",    // 结束时间
        "startIndex": number,   // 开始索引
        "endIndex": number,     // 结束索引
        "summary": [            // 摘要
          "string"
        ],
        "keyword": [            // 关键词
          "string"
        ]
      }
    ],
    "introduction": "string"  // 视频简介
  }
}
```

### 响应字段说明

#### 基础响应字段
| 字段名 | 类型 | 说明 |
|-------|------|-----|
| message | string | 错误信息，成功时为空字符串 |
| status | string | 请求状态，"success"或"fail" |
| code | number | 状态码，200表示成功，500表示失败 |
| data | object | 响应数据 |

#### data对象字段
| 字段名 | 类型 | 说明 |
|-------|------|-----|
| list | array | 视频摘要列表 |
| introduction | string | 视频的简要介绍 |

#### list数组字段
| 字段名 | 类型 | 说明 |
|-------|------|-----|
| title | string | 标题 |
| startTime | string | 开始时间 |
| endTime | string | 结束时间 |
| startIndex | number | 开始索引 |
| endIndex | number | 结束索引 |
| summary | array | 摘要内容 |
| keyword | array | 关键词 |

## 错误码说明

| 错误码 | 说明 |
|-------|------|
| 500 | accountId is required - 未提供有效的用户ID |
| 500 | 参数验证错误 - 参数不符合要求 |
| 500 | vid不存在 - 视频ID不存在 |

## 示例

### 请求示例

```
GET https://api.polyv.net/ai-public/v1/knowledges/summary-by-vid?vid=d7119ca331232ced5cf7b3bf793a0595_d&sign=8A3DFBD583DDDE5BA7510EE5454E79F5×tamp=1740996607254&appId=f0npfukn0d
```

### 成功响应示例

```json
{
  "message": "",
  "status": "success",
  "code": 200,
  "data": {
    "list": [
      {
        "title": "产品介绍",
        "startTime": "00:00:00",
        "endTime": "00:05:00",
        "startIndex": 0,
        "endIndex": 5,
        "summary": [
          "本节主要介绍公司产品",
          "包括产品功能和特点"
        ],
        "keyword": [
          "产品",
          "功能",
          "特点"
        ]
      }
    ],
    "introduction": "这是一段关于公司产品的介绍视频..."
  }
}
```

### 失败响应示例

```json
{
  "message": "accountId is required",
  "status": "fail",
  "code": 500
}
``` 