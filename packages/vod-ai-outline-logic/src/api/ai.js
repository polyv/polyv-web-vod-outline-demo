import axios from 'axios'
import { addSignToParams } from '../sign.js'

/**
 * API配置
 */
const DEFAULT_CONFIG = {
  baseURL: 'https://api.polyv.net/ai-public',
  timeout: 10000,
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
   * 公共参数验证
   * @private
   */
  _validateCommonParams(options) {
    if (!options || !options.vid) {
      return {
        message: 'vid 参数是必需的',
        status: 'fail',
        code: 400,
        data: null
      }
    }

    return null // 验证通过
  }

  /**
   * 公共处理生成中状态
   * @private
   */
  _handleGeneratingStatus(response, defaultMessage) {
    if (response && typeof response === 'object') {
      const { status, code, message } = response
      const isGeneratingMessage = /生成中|正在生成|processing/i.test(message || '')

      if ((code === 400 || code === 500) && isGeneratingMessage) {
        return {
          message: message || defaultMessage,
          status: 'processing',
          code: code,
          data: null
        }
      }

      if (status === 'error') {
        return {
          message: message || '请求失败',
          status: 'fail',
          code: code || 500,
          data: null
        }
      }
    }

    return null // 无需处理
  }

  /**
   * 创建错误响应
   * @private
   */
  _createErrorResponse(message, code = 500) {
    return {
      message: message || '请求失败',
      status: 'fail',
      code: code,
      data: null
    }
  }

  /**
   * 构建基础请求参数
   * @private
   */
  async _buildBaseParams(vid, appId, extraParams = {}) {
    const baseParams = {
      vid,
      timestamp: Date.now(),
      ...(appId !== undefined && { appId }),
      ...extraParams
    }
    return await this.buildRequestParams(baseParams)
  }

  /**
   * 根据视频ID获取推荐问题
   * @param {Object} options - 请求选项
   * @param {string} options.vid - 视频ID
   * @param {number} [options.size] - 返回的问题数量，范围1-50
   * @returns {Promise<Object>} API响应
   */
  async getSuggestQuestionsByVid(options) {
    // 公共参数验证
    const validationError = this._validateCommonParams(options)
    if (validationError) {
      return validationError
    }

    const { vid, size, appId } = options

    try {
      const params = await this._buildBaseParams(vid, appId, size !== undefined ? { size } : {})
      const response = await this.httpClient.get('/v1/knowledges/suggest-questions-by-vid', { params })

      // 处理生成中状态
      const statusHandling = this._handleGeneratingStatus(response, '推荐问题生成中，请稍后')
      if (statusHandling) {
        return statusHandling
      }

      return response
    } catch (error) {
      return this._createErrorResponse(error.message || '请求失败')
    }
  }

  /**
   * 根据视频ID获取视频摘要
   * @param {Object} options - 请求选项
   * @param {string} options.vid - 视频ID
   * @returns {Promise<Object>} API响应
   */
  async getSummaryByVid(options) {
    // 公共参数验证
    const validationError = this._validateCommonParams(options)
    if (validationError) {
      return validationError
    }

    const { vid, appId } = options

    try {
      const params = await this._buildBaseParams(vid, appId)
      const response = await this.httpClient.get('/v1/knowledges/summary-by-vid', { params })
      return response
    } catch (error) {
      return this._createErrorResponse(error.message || '请求失败')
    }
  }

  /**
   * 根据视频ID获取视频摘要（异步V2版本）
   * @param {Object} options - 请求选项
   * @param {string} options.vid - 视频ID
   * @returns {Promise<Object>} API响应，包含三种状态：success、processing、fail
   */
  async getSummaryByVidV2(options) {
    // 公共参数验证
    const validationError = this._validateCommonParams(options)
    if (validationError) {
      return validationError
    }

    const { vid, appId } = options

    try {
      const params = await this._buildBaseParams(vid, appId)
      const response = await this.httpClient.get('/v1/knowledges/v3/summary-by-vid', { params })

      // 处理生成中状态
      const statusHandling = this._handleGeneratingStatus(response, '智能大纲生成中，请稍后')
      if (statusHandling) {
        return statusHandling
      }

      return response
    } catch (error) {
      return this._createErrorResponse(error.message || '请求失败')
    }
  }

  /**
   * 根据视频ID获取推荐问题（异步V2版本）
   * @param {Object} options - 请求选项
   * @param {string} options.vid - 视频ID
   * @param {number} [options.size] - 返回的问题数量，范围1-50
   * @returns {Promise<Object>} API响应，包含三种状态：success、processing、fail
   */
  async getSuggestQuestionsByVidV2(options) {
    // 公共参数验证
    const validationError = this._validateCommonParams(options)
    if (validationError) {
      return validationError
    }

    const { vid, size, appId } = options

    try {
      const params = await this._buildBaseParams(vid, appId, size !== undefined ? { size } : {})
      const response = await this.httpClient.get('/v1/knowledges/v3/suggest-questions-by-vid', { params })

      // 处理生成中状态
      const statusHandling = this._handleGeneratingStatus(response, '推荐问题生成中，请稍后')
      if (statusHandling) {
        return statusHandling
      }

      return response
    } catch (error) {
      return this._createErrorResponse(error.message || '请求失败')
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

/**
 * 便捷的函数式API - 获取视频摘要（异步V2版本）
 * @param {Object} config - API配置
 * @param {Object} options - 请求选项
 * @returns {Promise<Object>} API响应
 */
async function getSummaryByVidV2(config, options) {
  const client = new VodAiApiClient(config)
  return client.getSummaryByVidV2(options)
}

/**
 * 便捷的函数式API - 获取推荐问题（异步V2版本）
 * @param {Object} config - API配置
 * @param {Object} options - 请求选项
 * @returns {Promise<Object>} API响应
 */
async function getSuggestQuestionsByVidV2(config, options) {
  const client = new VodAiApiClient(config)
  return client.getSuggestQuestionsByVidV2(options)
}

// ES模块导出
export {
  VodAiApiClient,
  createApiClient,
  getSuggestQuestionsByVid,
  getSuggestQuestionsByVidV2,
  getSummaryByVid,
  getSummaryByVidV2
}
