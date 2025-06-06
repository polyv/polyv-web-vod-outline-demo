<template>
  <div class="app">
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <p>正在加载视频数据...</p>
    </div>
    
    <div v-else-if="error" class="error-container">
      <p class="error-message">{{ error }}</p>
      <button @click="retryLoad" class="retry-button">重试</button>
    </div>
    <AIOutlineMain 
      v-else
      :video-data="videoData"
      :outline-data="outlineData"
      :suggest-questions="suggestQuestions"
      :introduction="introduction"
      :default-active-tab="'qa'"
      @segment-click="handleSegmentClick"
      @time-click="handleTimeClick"
    />
  </div>
</template>

<script>
import { createVideoService } from '@polyv/vod-ai-outline-logic'
import { getApiConfig, validateApiConfig } from './config/api'
import AIOutlineMain from './components/AIMain.vue'

export default {
  name: 'App',
  
  components: {
    AIOutlineMain
  },
  
  data() {
    return {
      loading: true,
      error: null,
      videoService: null,
      
      currentVid: this.getVideoIdFromUrl() || 'cc167950af597b81acc736a227da4acf_c',
      
      videoData: {
        title: '',
        host: '',
        status: '',
        viewers: 0,
        duration: ''
      },
      
      outlineData: [],
      suggestQuestions: [],
      introduction: ''
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
        
        console.log('服务初始化成功，配置:', {
          baseURL: apiConfig.baseURL,
          hasGetSignature: typeof apiConfig.getSignature === 'function'
        })
        
      } catch (error) {
        console.error('初始化服务失败:', error)
        this.error = error.message || '初始化失败，请检查配置'
      }
    },
    
    async loadVideoData() {
      if (!this.videoService) {
        this.error = '视频服务未初始化'
        return
      }
      
      this.loading = true
      this.error = null
      
      try {
        const result = await this.videoService.getVideoData(this.currentVid, {
          appId: 'gga7xoqqie',
          useCache: false,
          questionsSize: 5
        })
        
        if (result.success) {
          console.info(result)
          this.videoData = result.videoData
          this.outlineData = result.outlineData
          this.suggestQuestions = result.suggestQuestions
          this.introduction = result.introduction
          
          console.log('视频数据加载成功:', {
            videoData: this.videoData,
            outlineCount: this.outlineData.length,
            questionsCount: this.suggestQuestions.length
          })
          
        } else {
          console.warn('API调用失败:', result.errors)
        }
        
      } catch (error) {
        console.error('加载数据时发生错误:', error)
        this.error = `加载数据失败: ${error.message}`
      } finally {
        this.loading = false
      }
    },
    
    async retryLoad() {
      await this.loadVideoData()
    },
    
    async updateVideo(vid) {
      if (vid !== this.currentVid) {
        this.currentVid = vid
        if (this.videoService) {
          this.videoService.clearCache(this.currentVid)
        }
        await this.loadVideoData()
      }
    },
    
    handleSegmentClick(segment) {
      console.log('点击分段:', segment)
      const startTimeInSeconds = this.videoService?.parseTime(segment.startTime) || 0
      this.seekToTime(startTimeInSeconds)
      this.$emit('segment-click', segment)
    },
    
    handleTimeClick(time) {
      console.log('点击时间:', time)
      const timeInSeconds = this.videoService?.parseTime(time) || 0
      this.seekToTime(timeInSeconds)
      this.$emit('time-click', time)
    },
    
    seekToTime(seconds) {
      console.log(`跳转到时间: ${seconds}秒`)
      
      // 通过事件总线通知播放器
      if (this.$eventBus) {
        this.$eventBus.$emit('seek-to-time', seconds)
      }
      
      this.$emit('seek-to-time', seconds)
    },
    
    // 兼容旧版本的方法
    handleItemClick(item, index) {
      console.log('点击大纲项:', item, index)
      alert(`点击了第 ${index + 1} 个大纲项: ${item.title}`)
    },
    
    handleDataChange(newData) {
      console.log('大纲数据变化:', newData)
      this.outlineData = newData
    },
    
    handleSave(data) {
      console.log('保存大纲数据:', data)
      this.outlineData = data
      alert('大纲数据已保存！')
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

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  color: #FFFFFF;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left: 4px solid #3F76FC;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 16px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-container p {
  font-size: 16px;
  color: #ADADC0;
}

.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  color: #FFFFFF;
}

.error-message {
  font-size: 16px;
  margin-bottom: 20px;
  color: #FF6264;
  text-align: center;
  line-height: 1.5;
}

.retry-button {
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

.retry-button:hover {
  background-color: #2c5ce6;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(63, 118, 252, 0.3);
}

.retry-button:active {
  transform: translateY(0);
}
</style> 