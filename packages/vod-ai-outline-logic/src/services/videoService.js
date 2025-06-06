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
   * 处理API响应结果
   * @private
   */
  processApiResponses(summaryResult, questionsResult) {
    const result = {
      success: false,
      videoData: null,
      outlineData: [],
      suggestQuestions: [],
      introduction: '', // 添加介绍字段
      errors: []
    }

    // 处理摘要数据
    if (summaryResult.status === 'fulfilled' && summaryResult.value.status === 'success') {
      const summaryData = this.processSummaryData(summaryResult.value.data)
      result.videoData = summaryData.videoData
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

    // 处理视频基本信息 - 从introduction提取
    const videoData = {
      title: data.title || '未知标题',
      host: data.host || data.author || '未知主持人', 
      status: data.status || data.liveStatus || '已结束',
      viewers: data.viewers || data.viewCount || 0,
      duration: formatDuration(data.duration) || '00:00:00',
      description: data.introduction || data.description || '',
      publishTime: data.publishTime || data.createTime || null
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
      videoData, 
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