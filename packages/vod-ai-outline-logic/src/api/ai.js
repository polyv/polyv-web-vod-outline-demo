import axios from 'axios'
import { addSignToParams } from '../sign.js'

/**
 * API配置
 */
const DEFAULT_CONFIG = {
  baseURL: 'https://api.polyv.net/ai-public',
  timeout: 30000,
  signatureMethod: 'MD5'
}

/**
 * VOD AI API
 */
class VodAiApiClient {
  /**
   * 构造函数
   * @param {Object} config - 配置对象
   * @param {string} [config.appId] - 应用ID
   * @param {string} [config.appSecret] - 应用密钥
   * @param {Function} [config.getSignature] - 获取签名的函数，参数为请求参数对象，返回包含签名的参数对象
   * @param {string} [config.baseURL] - API基础URL
   * @param {number} [config.timeout] - 请求超时时间（毫秒）
   * @param {string} [config.signatureMethod] - 签名方法 'MD5'
   */
  constructor(config) {
    if (!config) {
      throw new Error('配置对象是必需的')
    }

    // 检查是否提供了签名函数或者传统的appId/appSecret, 生成环境一定要提供getSignature函数！！！
    if (!config.getSignature && (!config.appId || !config.appSecret)) {
      throw new Error('必须提供 getSignature 函数或者 appId 和 appSecret')
    }

    this.config = {
      ...DEFAULT_CONFIG,
      ...config
    }

    // 创建axios实例
    this.httpClient = axios.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // 添加响应拦截器
    this.httpClient.interceptors.response.use(
      response => response.data,
      error => {
        const errorInfo = {
          message: error.message,
          status: 'fail',
          code: error.response?.status || 500,
          data: null
        }

        if (error.response?.data) {
          return Promise.resolve(error.response.data)
        }

        return Promise.resolve(errorInfo)
      }
    )
  }

  /**
   * 构建请求参数（添加签名）
   * @param {Object} params - 请求参数
   * @returns {Promise<Object>} 包含签名的参数对象
   */
  async buildRequestParams(params) {
    params.appId = params.appId || this.config.appId
    params.timestamp = params.timestamp || Date.now()

    // 如果配置了 getSignature 函数，优先使用
    if (this.config.getSignature && typeof this.config.getSignature === 'function') {
      try {
        const signedParams = await this.config.getSignature(params)
        return {
          ...params,
          sign: signedParams
        }
      } catch (error) {
        throw new Error(`获取签名失败: ${error.message}, 参数: ${JSON.stringify(params)}`)
      }
    }

    // 降级到传统的签名方式
    const requestParams = {
      ...params
    }

    return addSignToParams(requestParams, this.config.appSecret, this.config.signatureMethod)
  }

  /**
   * 根据视频ID获取推荐问题
   * @param {Object} options - 请求选项
   * @param {string} options.vid - 视频ID
   * @param {number} [options.size] - 返回的问题数量，范围1-50
   * @returns {Promise<Object>} API响应
   */
  async getSuggestQuestionsByVid(options) {
    if (!options || !options.vid) {
      return {
        message: 'vid 参数是必需的',
        status: 'fail',
        code: 400,
        data: null
      }
    }

    const { vid, size, appId } = options

    // 验证参数
    if (typeof vid !== 'string' || vid.length === 0 || vid.length > 100) {
      return {
        message: 'vid 长度必须在1-100字符之间',
        status: 'fail',
        code: 400,
        data: null
      }
    }

    if (size !== undefined && (typeof size !== 'number' || size < 1 || size > 50)) {
      return {
        message: 'size 范围必须在1-50之间',
        status: 'fail',
        code: 400,
        data: null
      }
    }

    try {
      const params = await this.buildRequestParams({ vid, ...(size !== undefined && { size }), ...(appId !== undefined && { appId }), timestamp: Date.now() })
      console.log('getSuggestQuestionsByVid', params)
      const response = await this.httpClient.get('/v1/knowledges/suggest-questions-by-vid', { params })
      return response
    } catch (error) {
      return {
        message: error.message || '请求失败',
        status: 'fail',
        code: 500,
        data: null
      }
    }
  }

  /**
   * 根据视频ID获取视频摘要
   * @param {Object} options - 请求选项
   * @param {string} options.vid - 视频ID
   * @returns {Promise<Object>} API响应
   */
  async getSummaryByVid(options) {
    if (!options || !options.vid) {
      return {
        message: 'vid 参数是必需的',
        status: 'fail',
        code: 400,
        data: null
      }
    }

    const { vid, appId } = options

    // 验证参数
    if (typeof vid !== 'string' || vid.length === 0 || vid.length > 100) {
      return {
        message: 'vid 长度必须在1-100字符之间',
        status: 'fail',
        code: 400,
        data: null
      }
    }

    try {
      const params = await this.buildRequestParams({ vid, appId, timestamp: Date.now() })
      const response = await this.httpClient.get('/v1/knowledges/summary-by-vid', { params })
      return response
    } catch (error) {
      return {
        message: error.message || '请求失败',
        status: 'fail',
        code: 500,
        data: null
      }
    }
  }
}

/**
 * 创建API客户端实例的便捷函数
 * @param {Object} config - 配置对象
 * @returns {VodAiApiClient} API客户端实例
 */
function createApiClient(config) {
  return new VodAiApiClient(config)
}

/**
 * 便捷的函数式API - 获取推荐问题
 * @param {Object} config - API配置
 * @param {Object} options - 请求选项
 * @returns {Promise<Object>} API响应
 */
async function getSuggestQuestionsByVid(config, options) {
  const client = new VodAiApiClient(config)
  return client.getSuggestQuestionsByVid(options)
}

/**
 * 便捷的函数式API - 获取视频摘要
 * @param {Object} config - API配置
 * @param {Object} options - 请求选项
 * @returns {Promise<Object>} API响应
 */
async function getSummaryByVid(config, options) {
  const client = new VodAiApiClient(config)
  return client.getSummaryByVid(options)
}

// ES模块导出
export {
  VodAiApiClient,
  createApiClient,
  getSuggestQuestionsByVid,
  getSummaryByVid
}
