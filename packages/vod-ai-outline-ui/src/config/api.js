import { createGetSignatureFunction, createGetSignatureByLocalFunction } from '../services/signService'

/**
 * API配置管理
 */

const getConfig = () => ({
  baseURL: 'https://api.polyv.net/ai-public',
  timeout: 30000,
  signatureMethod: 'MD5'
})

/**
 * 获取API配置
 * @returns {Object} API配置对象
 */
export function getApiConfig() {
  const env = process.env.NODE_ENV || 'development'
  const config = getConfig()
  
  // 在开发环境下，使用dev server的签名接口
  if (env === 'development') {
    // config.getSignature = createGetSignatureFunction({
    //   baseURL: '', // 使用相同域名
    //   timeout: 10000
    // })
    console.log('createGetSignatureByLocalFunction')
    config.getSignature = createGetSignatureByLocalFunction({
      appId: 'xxx',
      appSecret: 'xxx'
    })
  } else {
    // 生产环境需要提供getSignature函数或者使用其他签名方式
    // 这里可以根据实际情况配置
    if (!config.getSignature) {
      throw new Error('生产环境必须提供 getSignature 函数')
    }
  }
  
  return config
}

/**
 * 验证API配置
 * @param {Object} config - API配置
 * @returns {boolean} 配置是否有效
 */
export function validateApiConfig(config) {
  if (!config) return false
  
  // 必须有baseURL
  if (!config.baseURL || typeof config.baseURL !== 'string') return false
  
  // 必须有获取签名的方式
  if (!config.getSignature || typeof config.getSignature !== 'function') {
    return false
  }
  
  return true
}

/**
 * 创建生产环境签名函数（示例）
 * @param {Object} options - 配置选项
 * @param {string} options.signatureEndpoint - 签名接口地址
 * @param {string} options.appId - 应用ID
 * @returns {Function} 获取签名的函数
 */
export function createProductionSignatureFunction(options) {
  const { signatureEndpoint, appId } = options
  
  return async (params) => {
    const response = await fetch(signatureEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-App-Id': appId
      },
      body: JSON.stringify({ params })
    })
    
    if (!response.ok) {
      throw new Error(`签名服务错误: ${response.status}`)
    }
    
    const result = await response.json()
    if (!result.success) {
      throw new Error(result.message || '获取签名失败')
    }
    
    return result.data
  }
}

export default {
  getApiConfig,
  validateApiConfig,
  createProductionSignatureFunction,
} 