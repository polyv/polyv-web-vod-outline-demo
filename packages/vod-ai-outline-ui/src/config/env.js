/**
 * 环境配置管理
 * 统一管理所有环境变量配置
 */

/**
 * 获取环境变量，支持默认值
 * @param {string} key - 环境变量key
 * @param {*} defaultValue - 默认值
 * @returns {*} 环境变量值
 */
function getEnvVar(key, defaultValue = '') {
  const value = import.meta.env[key]
  if (value === undefined || value === null || value === '') {
    return defaultValue
  }

  // 处理布尔值
  if (value === 'true') return true
  if (value === 'false') return false

  // 处理数字
  const numValue = Number(value)
  if (!isNaN(numValue) && value === numValue.toString()) {
    return numValue
  }

  return value
}

/**
 * API 相关配置
 */
export const apiConfig = {
  baseURL: getEnvVar('VITE_API_BASE_URL', 'https://api.polyv.net/ai-public'),
  timeout: getEnvVar('VITE_API_TIMEOUT', 30000),
  signatureMethod: getEnvVar('VITE_SIGNATURE_METHOD', 'MD5'),
}

/**
 * 应用凭证配置
 */
export const credentialsConfig = {
  appId: getEnvVar('VITE_APP_ID'),
  appSecret: getEnvVar('VITE_APP_SECRET'),
}

/**
 * 开发配置
 */
export const devConfig = {
  debugMode: getEnvVar('VITE_DEBUG_MODE', false),
  useLocalSignature: getEnvVar('VITE_USE_LOCAL_SIGNATURE', false),
}

/**
 * 默认配置
 */
export const defaultConfig = {
  vid: getEnvVar('VITE_DEFAULT_VID'),
}

/**
 * 获取当前环境
 */
export const getCurrentEnv = () => {
  return import.meta.env.MODE || 'development'
}

/**
 * 是否为开发环境
 */
export const isDevelopment = () => {
  return getCurrentEnv() === 'development'
}

/**
 * 是否为生产环境
 */
export const isProduction = () => {
  return getCurrentEnv() === 'production'
}

/**
 * 调试日志（仅在开发环境或启用调试模式时输出）
 */
export const debugLog = (...args) => {
  if (devConfig.debugMode || isDevelopment()) {
    console.log('[VOD-AI-Outline]', ...args)
  }
}
/**
 * 导出所有配置
 */ 
export default {
  api: apiConfig,
  credentials: credentialsConfig,
  dev: devConfig,
  default: defaultConfig,
  getCurrentEnv,
  isDevelopment,
  isProduction,
  debugLog
}