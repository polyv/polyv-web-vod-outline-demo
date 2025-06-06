<template>
  <div class="c-outline-panel" :style="{ backgroundColor: panelBg, boxShadow: panelShadow }">
    <!-- Tab 切换 -->
    <div class="c-outline-panel__tab-container">
      <div class="c-outline-panel__tab-item" :class="{ 'c-outline-panel__tab-item--active': activeTab === 'outline' }"
        @click="handleTabClick('outline')" :style="{ backgroundColor: tabBg }">
        <span
          :style="{ color: activeTab === 'outline' ? whiteColor : grayTextColor, borderBottom: activeTab === 'outline' ? `3px solid ${whiteColor}` : 'none' }">智能大纲</span>
      </div>
      <div class="c-outline-panel__tab-item" :class="{ 'c-outline-panel__tab-item--active': activeTab === 'qa' }"
        @click="handleTabClick('qa')" :style="{ backgroundColor: tabBg }">
        <span
          :style="{ color: activeTab === 'qa' ? whiteColor : grayTextColor, borderBottom: activeTab === 'qa' ? `3px solid ${whiteColor}` : 'none' }">AI问答</span>
      </div>
    </div>

    <!-- Tab 内容 -->
    <div class="c-outline-panel__content">
      <!-- 智能大纲 -->
      <div v-show="activeTab === 'outline'" class="c-outline-panel__outline-content">
        <!-- 摘要部分 -->
        <div class="c-outline-panel__section-header">
          <h4 class="c-outline-panel__section-title" :style="{ color: whiteColor }">摘要</h4>
          <div class="c-outline-panel__section-action-wrapper">
            <span class="c-outline-panel__section-action" :style="{ color: whiteColor }"
              @click="handleMindMapClick">思维导图</span>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none"
              version="1.1" width="16" height="16" viewBox="0 0 16 16">
              <defs>
                <clipPath id="master_svg0_2_5823">
                  <rect x="0" y="0" width="16" height="16" rx="0" />
                </clipPath>
              </defs>
              <g clip-path="url(#master_svg0_2_5823)">
                <g>
                  <path
                    d="M9.579083492279054,8L5.9562094922790525,11.62288L6.710457492279053,12.37712L10.710453492279052,8.37712Q10.747603492279053,8.33998,10.776783492279053,8.296299999999999Q10.805963492279052,8.25263,10.826073492279054,8.2041Q10.846173492279053,8.15557,10.856413492279053,8.10405Q10.866663492279052,8.05253,10.866663492279052,8Q10.866663492279052,7.94747,10.856413492279053,7.89595Q10.846173492279053,7.84443,10.826073492279054,7.7959Q10.805963492279052,7.74737,10.776783492279053,7.7036999999999995Q10.747603492279053,7.660019999999999,10.710453492279052,7.62288L6.710457492279053,3.6228759999999998L5.9562094922790525,4.377124L9.579083492279054,8Z"
                    fill-rule="evenodd" fill="#FFFFFF" fill-opacity="1" />
                </g>
              </g>
            </svg>
          </div>
        </div>

        <div v-if="introduction" class="c-outline-panel__summary-section" :style="{ backgroundColor: summaryBg }">
          <p class="c-outline-panel__summary-text" :style="{ color: whiteColor }"
            v-html="formatIntroduction(introduction)">
          </p>
          <button v-if="introduction.length > 150" class="c-outline-panel__expand-btn" :style="{ color: brandBlue }"
            @click="toggleIntroductionExpanded">
            {{ isIntroductionExpanded ? '收起' : '展开' }}
          </button>
        </div>
        
        <h4 class="c-outline-panel__section-header" :style="{ color: whiteColor }">分段总结</h4>
        <!-- 分段总结 -->
        <div class="c-outline-panel__segments-section" :style="{ backgroundColor: summaryBg }">

          <!-- 如果没有大纲数据，显示提示信息 -->
          <div v-if="!outlineData || outlineData.length === 0" class="c-outline-panel__no-data">
            <p :style="{ color: grayTextColor }">暂无分段数据</p>
          </div>

          <!-- 显示大纲数据 -->
          <div v-for="(segment, index) in outlineData" :key="segment.id" class="c-outline-panel__segment-item">
            <div class="c-outline-panel__segment-header">
              <h5 class="c-outline-panel__segment-title" :style="{ color: whiteColor }">
                {{ segment.title }}
                <span
                  class="c-outline-panel__segment-time" :style="{ color: brandBlue }"
                  @click="handleTimeClick(segment.startTime)">
                  {{ segment.startTime }}
                </span>
              </h5>
            </div>
            <p class="c-outline-panel__segment-summary" :style="{ color: whiteColor }"
              v-html="formatSummary(segment.summary)">
            </p>

            <!-- 分割线 -->
            <div v-if="index < outlineData.length - 1" class="c-outline-panel__segment-divider"
              :style="{ backgroundColor: whiteColor }"></div>
          </div>
        </div>
      </div>

      <!-- AI问答 -->
      <div v-show="activeTab === 'qa'" class="c-outline-panel__qa-content">
        <!-- 如果没有推荐问题，显示提示 -->
        <div v-if="!suggestQuestions || suggestQuestions.length === 0" class="c-outline-panel__no-data">
          <p :style="{ color: grayTextColor }">暂无推荐问题</p>
        </div>

        <!-- 显示推荐问题列表 -->
        <div v-else class="c-outline-panel__questions-list">
          <div v-for="(question, index) in suggestQuestions" :key="question.id || index"
            class="c-outline-panel__question-item">
            <div class="c-outline-panel__question-content">
              <div class="c-outline-panel__question-header">
                <div class="c-outline-panel__question-icon-wrapper">
                  <div class="c-outline-panel__question-icon">
                  </div>
                </div>
                <div class="c-outline-panel__question-main">
                  <h5 class="c-outline-panel__question-title" :style="{ color: whiteColor }">
                    {{ question.question }}
                  </h5>
                </div>
              </div>

              <div class="c-outline-panel__answer-content">
                <div class="c-outline-panel__answer-icon-wrapper">
                  <div class="c-outline-panel__answer-icon">
                  </div>
                </div>
                <div class="c-outline-panel__answer-main">
                  <p class="c-outline-panel__question-answer" :style="{ color: whiteColor }">
                    {{ question.answer }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 思维导图Dialog -->
    <MindMapDialog :visible="mindMapDialogVisible" :video-title="videoTitle" :summary-data="outlineData"
      @close="handleMindMapDialogClose" @time-click="handleTimeClick" />
  </div>
</template>

<script>
import MindMapDialog from './MindMapDialog.vue'

export default {
  name: 'OutlinePanel',
  components: {
    MindMapDialog
  },
  props: {
    // 大纲数据
    outlineData: {
      type: Array,
      default: () => []
    },
    // 推荐问题数据 - 新增
    suggestQuestions: {
      type: Array,
      default: () => []
    },
    // 视频介绍 - 新增
    introduction: {
      type: String,
      default: ''
    },
    // 视频标题 - 新增
    videoTitle: {
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
      activeTab: this.defaultActiveTab,
      isIntroductionExpanded: false, // 控制介绍展开/收起状态
      // 设计稿中的颜色token
      panelBg: '#202127',
      summaryBg: 'rgba(255, 255, 255, 0.1)',
      brandBlue: '#3F76FC',
      whiteColor: '#FFFFFF',
      grayTextColor: '#ADADC0',
      tabBg: '#3E3E4E',
      borderColor: '#D8D8D8',
      panelShadow: '0px 0px 16px 0px rgba(37, 43, 58, 0.06)',
      mindMapDialogVisible: false
    }
  },
  methods: {
    handleTabClick(tab) {
      this.activeTab = tab
      this.$emit('tab-change', tab)
    },
    handleTimeClick(time) {
      this.$emit('time-click', time)
    },
    handleSegmentClick(segment) {
      this.$emit('segment-click', segment)
    },
    
    // 格式化介绍文本
    formatIntroduction(text) {
      if (!text) return ''
      
      if (typeof text !== 'string') {
        console.warn('formatIntroduction: text参数不是字符串类型', text)
        text = String(text)
      }
      
      // 如果未展开且文本较长，则截断
      if (!this.isIntroductionExpanded && text.length > 50) {
        return text.substring(0, 50) + '...'
      }
      
      // 将换行符转换为HTML换行
      return text.replace(/\n/g, '<br>')
    },
    
    // 格式化摘要文本
    formatSummary(text) {
      if (!text) return ''
      // 确保text是字符串类型
      if (typeof text !== 'string') {
        console.warn('formatSummary: text参数不是字符串类型', text)
        return String(text)
      }
      // 将换行符转换为HTML换行
      return text.replace(/\n/g, '<br>')
    },
    
    // 切换介绍展开状态
    toggleIntroductionExpanded() {
      this.isIntroductionExpanded = !this.isIntroductionExpanded
    },
    handleMindMapClick() {
      this.mindMapDialogVisible = true
    },
    handleMindMapDialogClose() {
      this.mindMapDialogVisible = false
    }
  }
}
</script>

<style lang="scss">
.c-outline-panel {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.c-outline-panel__tab-container {
  display: flex;
  min-height: 42px;
}

.c-outline-panel__tab-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  span {
    font-family: 'PingFang SC', sans-serif;
    font-size: 14px;
    line-height: 39px;
  }
  
  &:first-child {
    width: 102px;
  }
  
  &:nth-child(2),
  &:nth-child(3) {
    width: 103px;
  }
}

.c-outline-panel__content {
  flex: 1;
  padding: 12px;
  overflow-y: auto;
  overflow-x: hidden;
}

.c-outline-panel__summary-section,
.c-outline-panel__segments-section {
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 30px;
}

.c-outline-panel__section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.c-outline-panel__section-title {
  font-family: 'PingFang SC', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
}

.c-outline-panel__section-action {
  font-family: 'PingFang SC', sans-serif;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
}

.c-outline-panel__summary-text {
  display: inline;
  font-family: 'PingFang SC', sans-serif;
  font-size: 14px;
  line-height: 22px;
  margin: 0 0 12px 0;
  opacity: 0.8;
}

.c-outline-panel__expand-btn {
  margin-left: 4px;
  display: inline;
  background: none;
  border: none;
  font-family: 'PingFang SC', sans-serif;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  padding: 0;
}

.c-outline-panel__segments-section {
  .c-outline-panel__section-title {
    margin-bottom: 30px;
  }
}

.c-outline-panel__segment-item {
  margin-bottom: 20px;
  position: relative;
}

.c-outline-panel__segment-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.c-outline-panel__segment-title {
  font-family: 'PingFang SC', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin: 0;
  opacity: 0.8;
}

.c-outline-panel__segment-time {
  font-family: 'PingFang SC', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-decoration: underline;
  cursor: pointer;
  opacity: 0.8;
}

.c-outline-panel__segment-summary {
  font-family: 'PingFang SC', sans-serif;
  font-size: 14px;
  line-height: 22px;
  margin: 0;
  opacity: 0.8;
}

.c-outline-panel__segment-divider {
  width: 260px;
  height: 1px;
  margin: 20px 0;
  opacity: 0.1;
}

.c-outline-panel__transcript-content,
.c-outline-panel__qa-content {
  
  p {
    font-family: 'PingFang SC', sans-serif;
    font-size: 14px;
    line-height: 22px;
    margin: 0;
  }
}

// 新增样式
.c-outline-panel__no-data {
  text-align: center;
  padding: 20px;
  
  p {
    font-family: 'PingFang SC', sans-serif;
    font-size: 14px;
    line-height: 22px;
    margin: 0;
  }
}

.c-outline-panel__questions-list {
  padding: 0;
}

.c-outline-panel__question-item {
  margin-bottom: 24px;
  position: relative;
  padding: 16px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
}

.c-outline-panel__question-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.c-outline-panel__question-header {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.c-outline-panel__question-icon-text {
  font-family: 'PingFang SC', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
}

.c-outline-panel__question-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.c-outline-panel__question-title {
  font-family: 'PingFang SC', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
  opacity: 0.9;
}

.c-outline-panel__question-time {
  font-family: 'PingFang SC', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-decoration: underline;
  cursor: pointer;
  opacity: 0.8;
  align-self: flex-start;
  
  &:hover {
    opacity: 1;
  }
}

.c-outline-panel__answer-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.c-outline-panel__answer-main {
  flex: 1;
}

.c-outline-panel__question-answer {
  font-family: 'PingFang SC', sans-serif;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  opacity: 0.8;
}

.c-outline-panel__question-divider {
  width: 100%;
  height: 1px;
  margin: 20px 0;
  opacity: 0.1;
}

.c-outline-panel__question-icon {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url('@/assets/imgs/ic-question.png') no-repeat center center;
  background-size: 100% 100%;
}

.c-outline-panel__answer-icon {
  display: inline-block;  
  width: 18px;
  height: 18px;
  background: url('@/assets/imgs/ic-answer.png') no-repeat center center;
  background-size: 100% 100%;
}

.c-outline-panel__section-action-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}
</style>