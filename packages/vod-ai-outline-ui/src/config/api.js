import { createGetSignatureByLocalFunction } from '../services/signService'
import envConfig, { debugLog } from './env'

/**
 * API配置管理
 */

/**
 * 获取API配置
 * @returns {Object} API配置对象
 */
export function getApiConfig() {
  const config = {
    baseURL: envConfig.api.baseURL,
    timeout: envConfig.api.timeout,
    signatureMethod: envConfig.api.signatureMethod
  }

  debugLog('API配置:', config)

  // 根据环境和配置决定签名方式， 生产环境不建议使用本地签名
  if (envConfig.dev.useLocalSignature && envConfig.credentials.appId && envConfig.credentials.appSecret) {
    // 使用本地签名（开发环境）
    debugLog('使用本地签名')
    config.getSignature = createGetSignatureByLocalFunction({
      appId: envConfig.credentials.appId,
      appSecret: envConfig.credentials.appSecret
    })
  } else if (envConfig.isProduction()) {
    // 生产环境必须提供签名方式，通过接口的方式返回对应sign、timestamp等必须参数
    throw new Error('生产环境必须配置 VITE_SIGNATURE_ENDPOINT 或 VITE_APP_SECRET')
  } else {
    throw new Error('未找到有效的签名配置，请检查环境变量')
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

export default {
  getApiConfig,
  validateApiConfig
} 