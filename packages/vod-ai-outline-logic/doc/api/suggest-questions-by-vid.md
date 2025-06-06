# 视频推荐问题接口文档

## 接口概述

该接口用于根据视频ID获取推荐的问题列表及其答案。

## 请求信息

- **URL**: `https://api.polyv.net/ai-public/v1/knowledges/suggest-questions-by-vid`
- **方法**: GET
- **描述**: 获取与视频相关的推荐问题列表

## 请求参数

### 查询参数

| 参数名 | 必填 | 类型 | 说明 | 限制 |
|-------|-----|------|-----|------|
| vid | 是 | string | 视频ID | 长度1-100字符 |
| size | 否 | number | 返回的问题数量 | 范围1-50 |
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
    "questions": [
      {
        "question": "string",  // 推荐问题
        "answer": "string"     // 问题答案
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
| questions | array | 推荐问题列表 |
| introduction | string | 视频的简要介绍 |

#### questions数组字段
| 字段名 | 类型 | 说明 |
|-------|------|-----|
| question | string | 具体问题内容 |
| answer | string | 对应问题的答案 |

## 错误码说明

| 错误码 | 说明 |
|-------|------|
| 500 | accountId is required - 未提供有效的用户ID |
| 500 | 参数验证错误 - 参数不符合要求 |

## 示例

### 请求示例

```
GET https://api.polyv.net/ai-public/v1/knowledges/suggest-questions-by-vid?vid=41b5b893bcaca7f4b041627b736c6500_4&size=5&sign=20390237EA1914D67CA5561320D3A41F×tamp=1740724559010&appId=f0npfukn0d
```

### 成功响应示例

```json
{
  "message": "",
  "status": "success",
  "code": 200,
  "data": {
    "questions": [
      {
        "question": "保利威的主要业务是什么？",
        "answer": "保利威主要提供视频云服务..."
      },
      {
        "question": "保利威总部在哪里？",
        "answer": "保利威总部位于广州天河区..."
      }
    ],
    "introduction": "这是一段关于保利威公司的介绍视频..."
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