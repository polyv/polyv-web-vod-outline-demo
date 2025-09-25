/**
 * VOD AI Outline Integrator
 * 提供简单的API，只需配置参数就能直接使用智能大纲功能
 */

import Vue from 'vue'
import AIOutlinePanel from './components/AIOutlinePanel.vue'
import * as VodAiOutlineLogic from '@polyv/vod-ai-outline-logic'
import { debugLog } from './config/env'

// 常量定义
const DEFAULT_CONFIG = {
  playerHeight: 400,
  defaultActiveTab: 'outline',
  showIntroduction: true
}

const STYLE_ID = 'vod-ai-outline-default-styles'

// 错误类型定义
class IntegratorError extends Error {
  constructor(message, type = 'GENERAL') {
    super(message)
    this.name = 'IntegratorError'
    this.type = type
  }
}

class VodAiOutlineIntegrator {
  constructor() {
    this.instances = new Map()
    this.initialized = false
  }

  /**
   * 初始化智能大纲
   * @param {Object} config 配置对象
   * @returns {Promise<Object>} 返回实例对象
   */
  async init(config) {
    try {
      // 参数验证
      const validatedConfig = this._validateAndNormalizeConfig(config)
      
      // 获取目标容器
      const container = this._getContainer(validatedConfig)
      
      // 加载logic服务
      const logicService = await this._loadLogicService(validatedConfig.api, validatedConfig.getSignature)
      
      // 创建Vue实例
      const instance = this._createVueInstance(container, validatedConfig, logicService)
      
      // 生成实例ID并保存
      const instanceId = this._generateInstanceId(validatedConfig)
      this.instances.set(instanceId, instance)
      
      return this._createInstanceWrapper(instanceId, instance, logicService)
    } catch (error) {
      this._handleError(error, config.callbacks?.onError)
      throw error
    }
  }

  /**
   * 验证和标准化配置
   * @private
   */
  _validateAndNormalizeConfig(config) {
    if (!config || typeof config !== 'object') {
      throw new IntegratorError('配置对象不能为空', 'CONFIG_INVALID')
    }

    // 验证容器配置
    if (!config.containerId && !config.containerClass) {
      throw new IntegratorError('必须指定containerId或containerClass', 'CONTAINER_MISSING')
    }

    // 验证API配置
    if (!config.api || typeof config.api !== 'object') {
      throw new IntegratorError('必须提供API配置', 'API_CONFIG_MISSING')
    }

    const { appId, appSecret } = config.api
    // 如果没有提供appId或appSecret，则必须提供getSignature函数
    if ((!appId || !appSecret) && typeof config.getSignature !== 'function') {
      throw new IntegratorError('未提供appId/appSecret时，必须提供getSignature签名函数', 'API_CREDENTIALS_OR_SIGNATURE_MISSING')
    }
    // 如果提供了appId和appSecret，且提供了getSignature，也要校验getSignature类型
    if (typeof config.getSignature !== 'undefined' && typeof config.getSignature !== 'function') {
      throw new IntegratorError('getSignature必须是一个函数', 'SIGN_FUNCTION_INVALID')
    }

    // 标准化配置
    return {
      ...config,
      options: {
        ...DEFAULT_CONFIG,
        ...config.options
      },
      callbacks: config.callbacks || {}
    }
  }

  /**
   * 获取目标容器
   * @private
   */
  _getContainer(config) {
    const { containerId, containerClass } = config
    let container

    if (containerId) {
      container = document.getElementById(containerId)
      if (!container) {
        throw new IntegratorError(`找不到ID为"${containerId}"的容器元素`, 'CONTAINER_NOT_FOUND')
      }
    } else {
      container = document.querySelector(`.${containerClass}`)
      if (!container) {
        throw new IntegratorError(`找不到class为"${containerClass}"的容器元素`, 'CONTAINER_NOT_FOUND')
      }
    }

    return container
  }

  /**
   * 加载logic服务
   * @private
   */
  async _loadLogicService(apiConfig, getSignature) {
    try {
      return this._createLogicService(VodAiOutlineLogic, apiConfig, getSignature)
    } catch (error) {
      console.warn('Logic服务初始化失败:', error)
    }
  }

  /**
   * 创建logic服务实例
   * @private
   */
  _createLogicService(logicLib, apiConfig, getSignature) {
    if (!logicLib?.createVideoService) {
      throw new Error('Logic库不包含createVideoService方法')
    }

    return logicLib.createVideoService({
      ...apiConfig,
      getSignature
    })
  }

  /**
   * 创建Vue实例
   * @private
   */
  _createVueInstance(container, config, logicService) {
    if (!Vue) {
      throw new IntegratorError('Vue未找到，请确保Vue已正确加载', 'VUE_NOT_FOUND')
    }

    // 准备容器
    const vueElement = this._prepareContainer(container)
    
    // 创建Vue组件配置
    const vueConfig = this._createVueConfig(config, logicService)
    
    // 创建Vue实例
    return new Vue({
      el: vueElement,
      ...vueConfig
    })
  }

  /**
   * 准备容器
   * @private
   */
  _prepareContainer(container) {
    container.innerHTML = ''
    const vueElement = document.createElement('div')
    vueElement.className = 'vod-ai-outline-vue-root'
    container.appendChild(vueElement)
    return vueElement
  }

  /**
   * 创建Vue配置
   * @private
   */
  _createVueConfig(config, logicService) {
    return {
      components: {
        'ai-outline-panel': AIOutlinePanel
      },
      data: () => ({
        loading: false,
        error: null,
        outlineData: [],
        suggestQuestions: [],
        introduction: '',
        videoData: null,
        videoTitle: '',
        lastVideoId: null,
        currentVid: null,

        // 异步轮询状态
        isPolling: false,
        pollingMessage: '',
        isQuestionsPolling: false,
        pollingQuestionsMessage: '',

        // 错误状态
        outlineError: null,
        qaError: null,

        config: { ...config.options }
      }),
      render: this._createRenderFunction(),
      methods: this._createVueMethods(config, logicService)
    }
  }

  /**
   * 创建渲染函数
   * @private
   */
  _createRenderFunction() {
    return function(h) {
      if (this.error) {
        return this._renderError(h)
      }

      // 只要有currentVid就渲染面板，让组件内部处理loading和error状态
      if (this.currentVid) {
        return this._renderOutlinePanel(h)
      }

      return h('div') // 空状态
    }
  }

  /**
   * 创建Vue方法
   * @private
   */
  _createVueMethods(config, logicService) {
    return {
      async loadVideoData(vid, options = {}) {
        if (!vid) {
          throw new IntegratorError('视频ID不能为空', 'VIDEO_ID_MISSING')
        }

        this.loading = true
        this.error = null
        this.lastVideoId = vid
        this.currentVid = vid

        // 清除缓存
        if (logicService.clearCache) {
          logicService.clearCache(vid)
        }

        try {
          // 同时启动大纲和问答的异步获取
          await Promise.all([
            this._loadSummaryData(vid, options),
            this._loadQuestionsData(vid, options)
          ])
        } catch (error) {
          this._handleVideoDataError(error, config.callbacks?.onError)
        } finally {
          this.loading = false
        }
      },

      // 异步获取大纲数据
      async _loadSummaryData(vid, options = {}) {
        if (!logicService) return

        this.isPolling = true
        this.pollingMessage = ''

        try {
          const result = await logicService.getVideoSummaryAsync(
            { vid, appId: this.config?.appId || options.appId },
            {
              onStatusChange: (status, message, pollCount) => {
                this.pollingMessage = message || '智能大纲生成中，请稍后'
                if (config.callbacks?.onStatusChange) {
                  config.callbacks.onStatusChange('outline', status, message, pollCount)
                }
              }
            }
          )

          if (result.success) {
            this.outlineData = result.outlineData || []
            this.introduction = result.introduction || ''
            this.videoData = result.videoData || this.videoData
            this.videoTitle = result.videoData?.title || '视频标题'
            this.outlineError = null
          } else {
            this.outlineError = result.errors?.[0] || '智能大纲生成失败'
          }
        } catch (error) {
          this.outlineError = error.message || '智能大纲轮询异常'
          // 不抛出错误，允许问答数据独立加载成功
        } finally {
          this.isPolling = false
        }
      },

      // 异步获取推荐问题数据
      async _loadQuestionsData(vid, options = {}) {
        if (!logicService) return

        this.isQuestionsPolling = true
        this.pollingQuestionsMessage = ''

        try {
          const result = await logicService.getSuggestQuestionsAsync(
            { vid, appId: this.config?.appId || options.appId, size: options.questionsSize || 5 },
            {
              onStatusChange: (status, message, pollCount) => {
                this.pollingQuestionsMessage = message || '推荐问题生成中，请稍后'
                if (config.callbacks?.onStatusChange) {
                  config.callbacks.onStatusChange('questions', status, message, pollCount)
                }
              }
            }
          )

          if (result.success) {
            this.suggestQuestions = result.questions || []
            this.qaError = null
          } else {
            this.qaError = result.errors?.[0] || '推荐问题生成失败'
          }
        } catch (error) {
          this.qaError = error.message || '推荐问题轮询异常'
          // 不抛出错误，允许大纲数据独立加载成功
        } finally {
          this.isQuestionsPolling = false
        }
      },

      // 重试处理方法
      async handleOutlineRetry() {
        if (!this.currentVid) return

        this.outlineError = null
        try {
          await this._loadSummaryData(this.currentVid, {})
        } catch (error) {
          this.outlineError = error.message || '重试失败'
        }
      },

      async handleQaRetry() {
        if (!this.currentVid) return

        this.qaError = null
        try {
          await this._loadQuestionsData(this.currentVid, {})
        } catch (error) {
          this.qaError = error.message || '重试失败'
        }
      },

      updateConfig(newConfig) {
        if (newConfig && typeof newConfig === 'object') {
          Object.assign(this.config, newConfig)
        }
      },

      retry() {
        if (this.lastVideoId) {
          this.loadVideoData(this.lastVideoId)
        } else {
          this.error = null
        }
      },


      _handleVideoDataError(error, onError) {
        debugLog('加载视频数据失败:', error)
        this.error = error.message || '加载失败'
        if (onError) {
          onError(error)
        }
      },

      _renderError(h) {
        return h('div', { class: 'error-overlay' }, [
          h('p', { class: 'error-message' }, this.error),
          h('button', {
            class: 'retry-button',
            on: { click: this.retry }
          }, '重试')
        ])
      },

      _renderOutlinePanel(h) {
        return h('ai-outline-panel', {
          props: {
            'outline-data': this.outlineData,
            'suggest-questions': this.suggestQuestions,
            'introduction': this.introduction,
            'video-title': this.videoTitle,
            'default-active-tab': this.config.defaultActiveTab,
            'is-summary-loading': this.isPolling,
            'summary-loading-message': this.pollingMessage,
            'is-questions-loading': this.isQuestionsPolling,
            'questions-loading-message': this.pollingQuestionsMessage,
            'outline-error': this.outlineError,
            'qa-error': this.qaError
          },
          on: {
            'tab-change': (tab) => config.callbacks?.onTabChange?.(tab),
            'segment-click': (segment) => config.callbacks?.onSegmentClick?.(segment),
            'time-click': (time) => config.callbacks?.onTimeClick?.(time),
            'outline-retry': () => this.handleOutlineRetry(),
            'qa-retry': () => this.handleQaRetry()
          }
        })
      }
    }
  }

  /**
   * 生成实例ID
   * @private
   */
  _generateInstanceId(config) {
    return config.containerId || config.containerClass || 'default'
  }

  /**
   * 创建实例包装器
   * @private
   */
  _createInstanceWrapper(instanceId, instance, logicService) {
    return {
      id: instanceId,
      instance,
      logicService,
      loadVideoData: (vid, options) => instance.loadVideoData(vid, options),
      updateConfig: (newConfig) => instance.updateConfig(newConfig),
      destroy: () => this.destroy(instanceId),

      // 状态访问器
      get isLoading() { return instance.isPolling || instance.isQuestionsPolling },
      get hasData() { return instance.outlineData?.length > 0 || instance.suggestQuestions?.length > 0 },
      get error() { return instance.error },
      get outlineError() { return instance.outlineError },
      get qaError() { return instance.qaError }
    }
  }

  /**
   * 处理错误
   * @private
   */
  _handleError(error, onError) {
    console.error('VodAiOutlineIntegrator错误:', error)
    if (onError) {
      onError(error)
    }
  }

  /**
   * 添加默认样式
   * @private
   */
  _addDefaultStyles() {
    const style = document.createElement('style')
    style.id = STYLE_ID
    style.textContent = `
      .vod-ai-outline-vue-root {
        width: 100%;
        height: 100%;
        position: relative;
      }
      
      .loading-overlay {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px;
        text-align: center;
      }
      
      .loading-spinner {
        width: 32px;
        height: 32px;
        border: 3px solid #f3f3f3;
        border-top: 3px solid #3498db;
        border-radius: 50%;
        animation: vod-ai-outline-spin 1s linear infinite;
        margin-bottom: 16px;
      }
      
      @keyframes vod-ai-outline-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .error-overlay {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px;
        text-align: center;
      }
      
      .error-message {
        color: #e74c3c;
        margin-bottom: 16px;
        line-height: 1.5;
      }
      
      .retry-button {
        background: #3498db;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.2s ease;
      }
      
      .retry-button:hover {
        background: #2980b9;
      }
      
      .retry-button:active {
        transform: translateY(1px);
      }
    `
    document.head.appendChild(style)
  }

  /**
   * 销毁指定实例
   */
  destroy(instanceId) {
    const instance = this.instances.get(instanceId)
    if (instance) {
      try {
        instance.$destroy()
        this.instances.delete(instanceId)
        return true
      } catch (error) {
        console.error('销毁实例失败:', error)
        return false
      }
    }
    return false
  }

  /**
   * 销毁所有实例
   */
  destroyAll() {
    let destroyedCount = 0
    this.instances.forEach((instance, id) => {
      if (this.destroy(id)) {
        destroyedCount++
      }
    })
    return destroyedCount
  }

  /**
   * 获取实例信息
   */
  getInstanceInfo(instanceId) {
    const instance = this.instances.get(instanceId)
    if (instance) {
      return {
        id: instanceId,
        exists: true,
        hasData: instance.outlineData?.length > 0,
        loading: instance.loading,
        error: instance.error
      }
    }
    return { id: instanceId, exists: false }
  }

  /**
   * 获取所有实例信息
   */
  getAllInstances() {
    const instances = []
    this.instances.forEach((instance, id) => {
      instances.push(this.getInstanceInfo(id))
    })
    return instances
  }
}

// 创建全局实例
const integrator = new VodAiOutlineIntegrator()

// 自动添加样式
if (typeof document !== 'undefined') {
  const initStyles = () => {
    if (!document.getElementById(STYLE_ID)) {
      integrator._addDefaultStyles()
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStyles)
  } else {
    initStyles()
  }
}

/**
 * 创建全局API对象
 */
const createGlobalAPI = () => {
  return {
    /**
     * 初始化智能大纲
     */
    async init(config) {
      return await integrator.init(config)
    },

    /**
     * 快速创建智能大纲（使用ID选择器）
     */
    async createById(elementId, apiConfig, getSignature, options = {}) {
      return await integrator.init({
        containerId: elementId,
        api: apiConfig,
        getSignature,
        options,
        callbacks: options.callbacks
      })
    },

    /**
     * 快速创建智能大纲（使用class选择器）
     */
    async createByClass(className, apiConfig, getSignature, options = {}) {
      return await integrator.init({
        containerClass: className,
        api: apiConfig,
        getSignature,
        options,
        callbacks: options.callbacks
      })
    },

    /**
     * 销毁实例
     */
    destroy(instanceId) {
      integrator.destroy(instanceId)
    },

    /**
     * 销毁所有实例
     */
    destroyAll() {
      integrator.destroyAll()
    },

    /**
     * 获取版本信息
     */
    version: '1.0.0'
  }
}

/**
 * 安装全局API到window对象
 */
const installGlobalAPI = () => {
  if (typeof window !== 'undefined') {
    window.VodAiOutline = createGlobalAPI()
  }
}

// 导出
export default integrator
export { VodAiOutlineIntegrator, IntegratorError, createGlobalAPI, installGlobalAPI } 