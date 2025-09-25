import { VodAiApiClient } from '../index.js'
import { normalizeTimeFormat, formatDuration } from '../utils/time.js'

/**
 * 视频数据服务类
 */
class VideoService {
  constructor(apiConfig) {
    this.apiClient = new VodAiApiClient(apiConfig)
    this.cache = new Map() // 简单的内存缓存
  }

  /**
   * 获取视频完整数据（摘要 + 推荐问题）
   * @param {string} vid - 视频ID
   * @param {Object} options - 选项
   * @returns {Promise<Object>} 处理后的视频数据
   */
  async getVideoData(vid, options = {}) {
    const { useCache = true, questionsSize = 10, appId } = options
    
    // 检查缓存
    const cacheKey = `video_${vid}`
    if (useCache && this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)
    }

    try {
      // 并行获取多个接口数据
      const [summaryResult, questionsResult] = await Promise.allSettled([
        this.apiClient.getSummaryByVid({ vid, appId }),
        this.apiClient.getSuggestQuestionsByVid({ vid, size: questionsSize, appId })
      ])

      // 处理数据
      const processedData = this.processApiResponses(summaryResult, questionsResult)
      
      // 缓存结果
      if (useCache) {
        this.cache.set(cacheKey, processedData)
      }

      return processedData
    } catch (error) {
      console.error('获取视频数据失败:', error)
      throw new Error(`获取视频数据失败: ${error.message}`)
    }
  }

  /**
   * 仅获取视频摘要
   * @param {Object} params.vid - 视频ID
   * @param {Object} params.appId - 应用ID
   * @returns {Promise<Object>} 摘要数据
   */
  async getVideoSummary(params) {
    try {
      const response = await this.apiClient.getSummaryByVid(params)
      if (response.status === 'success') {
        return this.processSummaryData(response.data)
      } else {
        throw new Error(response.message || '获取摘要失败')
      }
    } catch (error) {
      console.error('获取视频摘要失败:', error)
      throw error
    }
  }

  /**
   * 仅获取推荐问题
   * @param {string} vid - 视频ID
   * @param {number} size - 问题数量
   * @param {Object} params.appId - 应用ID
   * @returns {Promise<Array>} 推荐问题列表
   */
  async getSuggestQuestions(params) {
    try {
      const response = await this.apiClient.getSuggestQuestionsByVid(params)
      if (response.status === 'success') {
        // 处理真实的数据结构：data.questions
        return response.data?.questions || []
      } else {
        throw new Error(response.message || '获取推荐问题失败')
      }
    } catch (error) {
      console.error('获取推荐问题失败:', error)
      throw error
    }
  }

  /**
   * 异步获取推荐问题（支持轮询）
   * @param {Object} params
   * @param {string} params.vid
   * @param {string} [params.appId]
   * @param {number} [params.size] 默认5
   * @param {Object} [options]
   * @param {number} [options.pollInterval] 默认10秒
   * @param {number} [options.maxPollTime] 默认5分钟
   * @param {Function} [options.onStatusChange]
   */
  async getSuggestQuestionsAsync(params, options = {}) {
    const {
      pollInterval = 10000,
      maxPollTime = 300000,
      onStatusChange
    } = options

    const startTime = Date.now()
    let pollCount = 0 

    while (true) {
      try {
        const response = await this.apiClient.getSuggestQuestionsByVidV2({
          vid: params.vid,
          size: params.size ?? 10,
          appId: params.appId
        })
        pollCount++

        if (onStatusChange) {
          onStatusChange(response.status, response.message, pollCount)
        }

        switch (response.status) {
          case 'success': {
            const questions = response.data?.questions || []
            const normalized = questions.map(q => ({
              ...q,
              startTime: normalizeTimeFormat(q.startTime),
              endTime: normalizeTimeFormat(q.endTime)
            }))
            return {
              success: true,
              questions: normalized,
              errors: [],
              pollCount,
              totalTime: Date.now() - startTime
            }
          }
          case 'processing': {
            if (Date.now() - startTime >= maxPollTime) {
              return {
                success: false,
                questions: [],
                errors: ['AI问答生成超时，请稍后刷新重试'],
                pollCount,
                totalTime: Date.now() - startTime
              }
            }
            await new Promise(resolve => setTimeout(resolve, pollInterval))
            break
          }
          case 'fail':
          default:
            return {
              success: false,
              questions: [],
              errors: [response.message || 'AI问答生成失败'],
              pollCount,
              totalTime: Date.now() - startTime
            }
        }
      } catch (error) {
        return {
          success: false,
          questions: [],
          errors: [`获取推荐问题失败: ${error.message}`],
          pollCount,
          totalTime: Date.now() - startTime
        }
      }
    }
  }

  /**
   * 异步获取视频摘要（V2版本，支持轮询）
   * @param {Object} params - 请求参数
   * @param {string} params.vid - 视频ID
   * @param {string} [params.appId] - 应用ID
   * @param {Object} [options] - 轮询选项
   * @param {number} [options.pollInterval] - 轮询间隔（毫秒），默认10秒
   * @param {number} [options.maxPollTime] - 最大轮询时间（毫秒），默认5分钟
   * @param {Function} [options.onStatusChange] - 状态变化回调函数
   * @param {Function} [options.onCancel] - 取消轮询的回调函数
   * @returns {Promise<Object>} 处理后的视频数据
   */
  async getVideoSummaryAsync(params, options = {}) {
    const { 
      pollInterval = 10000, // 10秒
      maxPollTime = 300000, // 5分钟
      onStatusChange,
      onCancel
    } = options

    const startTime = Date.now()
    let pollCount = 0
    let isCancelled = false

    // 设置取消检查
    if (onCancel) {
      onCancel(() => {
        isCancelled = true
      })
    }

    while (true) {
      // 检查是否已取消
      if (isCancelled) {
        return {
          success: false,
          videoData: null,
          outlineData: [],
          introduction: '',
          suggestQuestions: [],
          errors: ['轮询已取消'],
          pollCount,
          totalTime: Date.now() - startTime
        }
      }

      try {
        const response = await this.apiClient.getSummaryByVidV2(params)
        pollCount++

        // 通知状态变化
        if (onStatusChange) {
          onStatusChange(response.status, response.message, pollCount)
        }

        switch (response.status) {
          case 'success':
            // 成功获取摘要数据，仅返回摘要相关；推荐问题改由 getSuggestQuestionsAsync 独立轮询
            const processedData = this.processSummaryData(response.data)
            return {
              success: true,
              outlineData: processedData.outlineData,
              introduction: processedData.introduction,
              suggestQuestions: [],
              errors: [],
              pollCount,
              totalTime: Date.now() - startTime
            }

          case 'processing':
            // 检查是否超时
            if (Date.now() - startTime >= maxPollTime) {
              return {
                success: false,
                outlineData: [],
                introduction: '',
                suggestQuestions: [],
                errors: ['大纲生成超时，请稍后刷新重试'],
                pollCount,
                totalTime: Date.now() - startTime
              }
            }

            // 等待指定时间后继续轮询
            await new Promise(resolve => setTimeout(resolve, pollInterval))
            break // 继续循环

          case 'fail':
          default:
            // 失败情况
            return {
              success: false,
              outlineData: [],
              introduction: '',
              suggestQuestions: [],
              errors: [response.message || '大纲生成失败，请重试'],
              pollCount,
              totalTime: Date.now() - startTime
            }
        }
      } catch (error) {
        console.error('轮询过程中发生错误:', error)
        return {
          success: false,
          outlineData: [],
          introduction: '',
          suggestQuestions: [],
          errors: [`轮询失败: ${error.message}`],
          pollCount,
          totalTime: Date.now() - startTime
        }
      }
    }
  }

  /**
   * 处理API响应结果
   * @private
   */
  processApiResponses(summaryResult, questionsResult) {
    const result = {
      success: false,
      outlineData: [],
      suggestQuestions: [],
      introduction: '', // 添加介绍字段
      errors: []
    }

    // 处理摘要数据
    if (summaryResult.status === 'fulfilled' && summaryResult.value.status === 'success') {
      const summaryData = this.processSummaryData(summaryResult.value.data)
      result.outlineData = summaryData.outlineData
      result.introduction = summaryData.introduction
      result.success = true
    } else {
      const error = summaryResult.reason || summaryResult.value?.message || '获取摘要失败'
      result.errors.push(`摘要接口: ${error}`)
    }

    // 处理推荐问题数据 
    if (questionsResult.status === 'fulfilled' && questionsResult.value.status === 'success') {
      result.suggestQuestions = questionsResult.value.data?.questions || []
      
      // 处理推荐问题的时间格式
      result.suggestQuestions = result.suggestQuestions.map(question => ({
        ...question,
        startTime: normalizeTimeFormat(question.startTime),
        endTime: normalizeTimeFormat(question.endTime)
      }))
    } else {
      const error = questionsResult.reason || questionsResult.value?.message || '获取推荐问题失败'
      result.errors.push(`推荐问题接口: ${error}`)
    }

    return result
  }

  /**
   * 处理摘要数据
   * @private
   */
  processSummaryData(data) {
    if (!data) {
      throw new Error('摘要数据为空')
    }

    // 处理大纲数据 - 使用list字段
    let outlineData = []
    if (data.list && Array.isArray(data.list)) {
      outlineData = data.list.map((item, index) => ({
        id: item.id || `outline_${index + 1}`,
        title: item.title || `分段 ${index + 1}`,
        startTime: normalizeTimeFormat(item.startTime) || '00:00:00',
        endTime: normalizeTimeFormat(item.endTime) || '00:00:00', 
        summary: this.normalizeSummary(item.summary),
        keywords: item.keywords || []
      }))
    } else if (data.outline && Array.isArray(data.outline)) {
      // 兼容原有的outline字段
      outlineData = data.outline.map((item, index) => ({
        id: item.id || `outline_${index + 1}`,
        title: item.title || `分段 ${index + 1}`,
        startTime: normalizeTimeFormat(item.startTime) || '00:00:00',
        endTime: normalizeTimeFormat(item.endTime) || '00:00:00', 
        summary: this.normalizeSummary(item.summary),
        keywords: item.keywords || []
      }))
    } else if (data.segments && Array.isArray(data.segments)) {
      outlineData = data.segments.map((item, index) => ({
        id: item.id || `segment_${index + 1}`,
        title: item.title || `分段 ${index + 1}`,
        startTime: normalizeTimeFormat(item.start) || '00:00:00',
        endTime: normalizeTimeFormat(item.end) || '00:00:00',
        summary: this.normalizeSummary(item.summary),
        keywords: item.keywords || []
      }))
    }

    return { 
      outlineData,
      introduction: data.introduction || ''
    }
  }



  /**
   * 清除缓存
   */
  clearCache(vid = null) {
    if (vid) {
      this.cache.delete(`video_${vid}`)
    } else {
      this.cache.clear()
    }
  }

  /**
   * 获取缓存状态
   */
  getCacheInfo() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    }
  }

  /**
   * 标准化摘要内容 - summary必定为数组，转换为字符串
   * @private
   * @param {Array} summary - 摘要内容数组
   * @returns {string} 标准化的摘要字符串
   */
  normalizeSummary(summary) {
    // 如果summary为空或不存在，返回空字符串
    if (!summary) return ''
    
    // 如果不是数组，但有值，转换为数组处理
    if (!Array.isArray(summary)) {
      console.warn('Expected summary to be an array, but got:', typeof summary, summary)
      return String(summary)
    }
    
    // 如果是空数组，返回空字符串
    if (summary.length === 0) return ''
    
    // 将数组元素转换为字符串并用换行符连接
    return summary.map((item, index) => {
      if (typeof item === 'string') {
        return item.trim()
      } else if (typeof item === 'object' && item !== null) {
        // 如果数组元素是对象，尝试提取文本内容
        const text = item.text || item.content || item.summary || item.description || ''
        return String(text).trim()
      } else {
        // 其他类型直接转换为字符串
        return String(item).trim()
      }
    }).filter(item => item.length > 0) // 过滤空字符串
      .map((item, index) => `${index + 1}. ${item}`) // 添加序号
      .join('\n')
  }
}

/**
 * 创建视频服务实例的工厂函数
 * @param {Object} apiConfig - API配置
 * @param {Function} [apiConfig.getSignature] - 获取签名的函数
 * @param {string} [apiConfig.baseURL] - API基础URL
 * @param {number} [apiConfig.timeout] - 请求超时时间
 * @returns {VideoService} 视频服务实例
 */
export function createVideoService(apiConfig) {
  return new VideoService(apiConfig)
}

/**
 * 默认配置
 */
export const DEFAULT_API_CONFIG = {
  baseURL: 'https://api.polyv.net/ai-public',
  timeout: 30000,
  signatureMethod: 'MD5'
}

export default VideoService 