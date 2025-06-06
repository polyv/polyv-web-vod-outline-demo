import { generateMD5Sign } from '@polyv/vod-ai-outline-logic'
/**
 * 签名服务 - 用于ui层dev测试。
 */
class SignService {
  constructor(options = {}) {
    this.baseURL = options.baseURL || ''
    this.timeout = options.timeout || 10000
    this.appId = options.appId || ''
    this.appSecret = options.appSecret || ''
  }

  /**
   * 获取签名
   * @param {Object} params - 需要签名的参数
   * @returns {Promise<Object>} 包含签名的参数对象
   */
  async getSignature(params) {
    try {
      const response = await this.request('/api/sign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ params })
      })

      if (response.success) {
        return response.data
      } else {
        throw new Error(response.message || '获取签名失败')
      }
    } catch (error) {
      console.error('获取签名失败:', error)
      throw new Error(`获取签名失败: ${error.message}`)
    }
  }

  async getSignatureByLocal(params) {
    const { appSecret } = this;
    const signStr = generateMD5Sign({
      ...params
    }, appSecret)
    console.log('signStr', signStr)
    return signStr
  }

  /**
   * 发送HTTP请求
   * @private
   */
  async request(url, options = {}) {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), this.timeout)

    try {
      const response = await fetch(this.baseURL + url, {
        ...options,
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      clearTimeout(timeoutId)
      
      if (error.name === 'AbortError') {
        throw new Error('请求超时')
      }
      
      throw error
    }
  }
}

/**
 * 创建签名服务实例
 * @param {Object} options - 配置选项
 * @returns {SignService} 签名服务实例
 */
export function createSignService(options = {}) {
  return new SignService(options)
}

/**
 * 创建获取签名的函数，用于API客户端配置
 * @param {Object} options - 签名服务配置
 * @returns {Function} 获取签名的函数
 */
export function createGetSignatureFunction(options = {}) {
  const signService = createSignService(options)
  
  return async (params) => {
    return await signService.getSignature(params)
  }
}

/**
 * 创建获取签名的函数，用作本地测试
 * @param {Object} options - 签名服务配置
 * @returns {Function} 获取签名的函数
 */
export function createGetSignatureByLocalFunction(options = {}) {
  const signService = createSignService(options)
  
  return async (params) => {
    return await signService.getSignatureByLocal(params)
  }
}

export default SignService 