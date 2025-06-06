<template>
  <div class="p-ai-outline-main" :style="{ backgroundColor: neutralDark }">
    <!-- 主要内容区域 -->
    <div class="p-ai-outline-main__main-content">
      
      <!-- 右侧智能大纲面板 -->
      <OutlinePanel
        class="c-outline-panel"
        ref="outlinePanel"
        :outline-data="outlineData"
        :suggest-questions="suggestQuestions"
        :introduction="introduction"
        :default-active-tab="defaultActiveTab"
        :player-height="playerHeight"
        @tab-change="handleTabChange"
        @segment-click="handleSegmentClick"
        @time-click="handleTimeClick"
      />
    </div>
  </div>
</template>

<script>
import OutlinePanel from './AIOutlinePanel.vue'

export default {
  name: 'AIOutlineMain',
  components: {
    OutlinePanel
  },
  props: {
    // 播放器相关props
    videoData: {
      type: Object,
      default: () => ({})
    },
    // 大纲数据
    outlineData: {
      type: Array,
      default: () => []
    },
    // 推荐问题数据
    suggestQuestions: {
      type: Array,
      default: () => []
    },
    // 视频介绍
    introduction: {
      type: String,
      default: ''
    },
    // 默认激活的tab
    defaultActiveTab: {
      type: String,
      default: 'outline'
    }
  },
  data() {
    return {
      // 设计稿中的颜色token - 中性色/深色背景
      neutralDark: '#170F0F',
      playerHeight: 0,
      resizeObserver: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initResizeObserver()
      this.updatePlayerHeight()
    })
  },
  beforeDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
    }
  },
  methods: {
    initResizeObserver() {
      if (window.ResizeObserver && this.$refs.videoPlayer) {
        this.resizeObserver = new ResizeObserver(() => {
          this.updatePlayerHeight()
        })
        this.resizeObserver.observe(this.$refs.videoPlayer.$el)
      }
    },
    updatePlayerHeight() {
      if (this.$refs.videoPlayer && this.$refs.videoPlayer.$el) {
        const playerElement = this.$refs.videoPlayer.$el.querySelector('.c-video-player__container')
        if (playerElement) {
          this.playerHeight = playerElement.offsetHeight
        }
      }
    },
    handlePlayerReady() {
      this.$emit('player-ready')
      this.updatePlayerHeight()
    },
    handlePlayerResize() {
      this.updatePlayerHeight()
    },
    handleTimeUpdate(time) {
      this.$emit('time-update', time)
    },
    handleTabChange(tab) {
      this.$emit('tab-change', tab)
    },
    handleSegmentClick(segment) {
      this.$emit('segment-click', segment)
    },
    handleTimeClick(time) {
      this.$emit('time-click', time)
    }
  }
}
</script>

<style lang="scss">
.p-ai-outline-main {
  width: 100%;
  max-width: 1680px;
  min-width: 964px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.p-ai-outline-main__main-content {
  display: flex;
  align-items: flex-start;
  min-height: 0;
}

.p-ai-outline-main__player-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.c-outline-panel {
  width: 350px;

  height: 700px;
}
</style>