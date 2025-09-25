<template>
  <div class="app">
    <!-- 主要内容区域 -->
    <AIOutlinePanel
      class="p-outline-panel"
      :outline-data="outlineData"
      :suggest-questions="suggestQuestions"
      :introduction="introduction"
      :video-title="videoTitle"
      :default-active-tab="activeTab"
      :is-summary-loading="isPolling"
      :summary-loading-message="pollingMessage"
      :is-questions-loading="isQuestionsPolling"
      :questions-loading-message="pollingQuestionsMessage"
      :outline-error="outlineError"
      :qa-error="qaError"
      @tab-change="handleTabChange"
      @time-click="handleTimeClick"
      @outline-retry="handleOutlineRetry"
      @qa-retry="handleQaRetry"

    >
    </AIOutlinePanel>
  </div>
</template>

<script>
import { createVideoService } from '@polyv/vod-ai-outline-logic'
import { getApiConfig, validateApiConfig } from './config/api'
import envConfig, { debugLog } from './config/env'
import AIOutlinePanel from './components/AIOutlinePanel.vue'

export default {
  name: 'App',

  components: {
    AIOutlinePanel
  },
  
  data() {
    return {
      // 全局状态
      videoService: null,
      currentVid: this.getVideoIdFromUrl() || envConfig.default.vid,
      appId: envConfig.credentials.appId,

      // 数据状态
      outlineData: [],
      suggestQuestions: [],
      introduction: '',
      videoTitle: '视频标题',
      activeTab: 'outline',

      // 轮询状态
      isPolling: false,
      pollingMessage: '',
      isQuestionsPolling: false,
      pollingQuestionsMessage: '',

      // 错误状态
      outlineError: null,
      qaError: null
    }
  },
  
  async mounted() {
    await this.initializeServices()
    await this.loadVideoData()
  },
  
  methods: {
    getVideoIdFromUrl() {
      const urlParams = new URLSearchParams(window.location.search)
      return urlParams.get('vid') || urlParams.get('videoId')
    },
    
    async initializeServices() {
      try {
        const apiConfig = getApiConfig()
        
        if (!validateApiConfig(apiConfig)) {
          throw new Error('API配置无效，请检查配置')
        }
        
        this.videoService = createVideoService(apiConfig)

        debugLog('服务初始化成功')

      } catch (error) {
        debugLog('初始化服务失败:', error)
        this.error = error.message || '初始化失败，请检查配置'
      }
    },
    
    async loadVideoData() {
      if (!this.videoService) {
        this.error = '视频服务未初始化'
        return
      }

      this.startSummaryPolling()
      this.startQuestionsPolling()
    },
    
    async retryLoad() {
      await this.loadVideoData()
    },
    
    async updateVideo(vid) {
      if (vid !== this.currentVid) {
        this.currentVid = vid
        // 清除缓存并重新加载数据
        if (this.videoService) {
          this.videoService.clearCache(this.currentVid)
        }
        await this.loadVideoData()
      }
    },
    
    handleTabChange(tab) {
      debugLog('切换Tab:', tab)
      this.activeTab = tab
      this.$emit('tab-change', tab)
    },

    handleSegmentClick(segment) {
      debugLog('点击分段:', segment)
      const startTimeInSeconds = this.videoService?.parseTime(segment.startTime) || 0
      this.seekToTime(startTimeInSeconds)
      this.$emit('segment-click', segment)
    },

    handleTimeClick(time) {
      debugLog('点击时间:', time)
      const timeInSeconds = this.videoService?.parseTime(time) || 0
      this.seekToTime(timeInSeconds)
      this.$emit('time-click', time)
    },

    seekToTime(seconds) {
      debugLog(`跳转到时间: ${seconds}秒`)

      // 通过事件总线通知播放器
      if (this.$eventBus) {
        this.$eventBus.$emit('seek-to-time', seconds)
      }

      this.$emit('seek-to-time', seconds)
    },

    // 重试处理方法
    async handleOutlineRetry() {
      debugLog('重试大纲数据')
      this.outlineError = null
      try {
        await this.getSummaryDataAsync()
      } catch (error) {
        this.outlineError = error.message || '重试失败'
      }
    },

    async handleQaRetry() {
      debugLog('重试问答数据')
      this.qaError = null
      try {
        await this.startQuestionsPolling()
      } catch (error) {
        this.qaError = error.message || '重试失败'
      }
    },

    // 开始智能大纲轮询, 默认10s轮询一次, 可配置
    async startSummaryPolling() {
      if (!this.videoService || !this.currentVid) {
        throw new Error('服务未初始化或视频ID无效')
      }

      this.isPolling = true
      this.pollingMessage = ''

      try {
        const result = await this.videoService.getVideoSummaryAsync(
          { vid: this.currentVid, appId: this.appId },
          {
            onStatusChange: (status, message, pollCount) => {
              this.pollingMessage = message || '智能大纲生成中，请稍后'
              debugLog(`智能大纲轮询: ${status}, 第${pollCount}次轮询`)
            }
          }
        )

        if (result.success) {
          
          debugLog('智能大纲加载成功:', result)
          this.videoData = result.videoData || this.videoData
          this.outlineData = result.outlineData || []
          this.introduction = result.introduction || ''
          this.videoTitle = result.videoData?.title || '视频标题'
          this.outlineError = null
        } else {
          this.outlineError = result.errors?.[0] || '智能大纲生成失败'
        }

        return result
      } catch (error) {
        this.outlineError = error.message || '智能大纲轮询异常'
        throw error
      } finally {
        this.isPolling = false
      }
    },

    // 开始推荐问题轮询, 默认10s轮询一次, 可配置
    async startQuestionsPolling() {
      if (!this.videoService || !this.currentVid) {
        throw new Error('服务未初始化或视频ID无效')
      }

      this.isQuestionsPolling = true
      this.pollingQuestionsMessage = ''

      try {
        const result = await this.videoService.getSuggestQuestionsAsync(
          { vid: this.currentVid, appId: this.appId, size: 10,  },
          {
            onStatusChange: (status, message, pollCount) => {
              this.pollingQuestionsMessage = message || '推荐问题生成中，请稍后'
              debugLog(`推荐问题轮询: ${status}, 第${pollCount}次轮询`)
            },
          }
        )

        if (result.success) {
          debugLog('推荐问题加载成功:', result.questions?.length || 0, '个问题')
          this.suggestQuestions = result.questions || []
          this.qaError = null
        } else {
          debugLog('推荐问题生成失败或超时:', result.errors)
          this.qaError = result.errors?.[0] || '推荐问题生成失败'
        }

        return result
      } catch (error) {
        debugLog('推荐问题轮询异常:', error)
        this.qaError = error.message || '推荐问题轮询异常'
        throw error
      } finally {
        this.isQuestionsPolling = false
      }
    }
  },
  beforeDestroy() {
    if (this.videoService) {
      this.videoService.clearCache()
    }
  }
}
</script>

<style scoped>
.app {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 84px 72px;
  gap: 72px;
  background-color: #170f0f;
  min-width: 1280px;
  overflow: auto;
}

.p-outline-panel {
  width: 350px;

  height: 700px;
}

/* 全局状态样式 */
.g-loading-container,
.g-error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  color: #FFFFFF;
}

.g-loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left: 4px solid #3F76FC;
  border-radius: 50%;
  animation: g-spin 1s linear infinite;
  margin-bottom: 16px;
}

@keyframes g-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.g-loading-message {
  font-size: 16px;
  color: #ADADC0;
  margin: 0;
}

.g-error-message {
  font-size: 16px;
  margin-bottom: 20px;
  color: #FF6264;
  text-align: center;
  line-height: 1.5;
}

.g-retry-button {
  padding: 12px 24px;
  background-color: #3F76FC;
  color: #FFFFFF;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.g-retry-button:hover {
  background-color: #2c5ce6;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(63, 118, 252, 0.3);
}

.g-retry-button:active {
  transform: translateY(0);
}
</style> 