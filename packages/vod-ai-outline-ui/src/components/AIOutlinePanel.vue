<template>
  <div class="c-outline-panel">
    <!-- Tab 切换 -->
    <div class="c-outline-panel__tab-container">
      <div
        class="c-outline-panel__tab-item"
        :class="{ 'c-outline-panel__tab-item--active': activeTab === 'outline' }"
        @click="handleTabClick('outline')"
      >
        <span
          :class="activeTab === 'outline' ? 'c-outline-panel__tab-text--active' : 'c-outline-panel__tab-text'"
        >智能大纲</span>
      </div>
      <div
        class="c-outline-panel__tab-item"
        :class="{ 'c-outline-panel__tab-item--active': activeTab === 'qa' }"
        @click="handleTabClick('qa')"
      >
        <span
          :class="activeTab === 'qa' ? 'c-outline-panel__tab-text--active' : 'c-outline-panel__tab-text'"
        >AI问答</span>
      </div>
    </div>

    <!-- Tab 内容 -->
    <div class="c-outline-panel__content">
      <!-- 智能大纲 -->
      <div v-show="activeTab === 'outline'" class="c-outline-panel__outline-content">
        <StateWrapper
          :status="outlineStatus"
          :data="outlineData"
          :message="outlineMessage"
          @retry="handleOutlineRetry"
        >
          <OutlineContent
            :introduction="introduction"
            :outline-data="outlineData"
            :video-title="videoTitle"
            @time-click="handleTimeClick"
            @mind-map-click="handleMindMapClick"
          />
        </StateWrapper>
      </div>

      <!-- AI问答 -->
      <div v-show="activeTab === 'qa'" class="c-outline-panel__qa-content">
        <StateWrapper
          :status="qaStatus"
          :data="suggestQuestions"
          :message="qaMessage"
          :empty-message="'暂无推荐问题'"
          @retry="handleQaRetry"
        >
          <QaContent
            :questions="suggestQuestions"
          />
        </StateWrapper>
      </div>
    </div>

    <!-- 底部 -->
    <div class="c-outline-panel__footer">
      <slot name="footer">
        <div class="c-outline-panel__footer-text">内容由AI生成，请仔细甄别</div>
      </slot>
    </div>

    <!-- 思维导图Dialog -->
    <MindMapDialog
      :visible="mindMapDialogVisible"
      :video-title="videoTitle"
      :summary-data="outlineData"
      @close="handleMindMapDialogClose"
      @time-click="handleTimeClick"
    />
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import MindMapDialog from "./MindMapDialog.vue"
import StateWrapper from "./StateWrapper.vue"
import OutlineContent from "./OutlineContent.vue"
import QaContent from "./QaContent.vue"
import { useOutlineState } from '@/composables/useOutlineState'
import { useTab } from '@/composables/useTab'

// Props 定义
const props = defineProps({
  // 大纲数据
  outlineData: {
    type: Array,
    default: () => [],
  },
  // 推荐问题数据
  suggestQuestions: {
    type: Array,
    default: () => [],
  },
  // 视频介绍
  introduction: {
    type: String,
    default: "",
  },
  // 视频标题
  videoTitle: {
    type: String,
    default: "",
  },
  // 默认激活的tab
  defaultActiveTab: {
    type: String,
    default: "outline",
  },
  // 摘要加载中
  isSummaryLoading: {
    type: Boolean,
    default: false,
  },
  summaryLoadingMessage: {
    type: String,
    default: "",
  },
  // 推荐问题加载中
  isQuestionsLoading: {
    type: Boolean,
    default: false,
  },
  questionsLoadingMessage: {
    type: String,
    default: "",
  },
  // 错误状态
  outlineError: {
    type: String,
    default: null,
  },
  qaError: {
    type: String,
    default: null,
  },
})

// Events 定义
const emit = defineEmits([
  'tab-change',
  'time-click',
  'outline-retry',
  'qa-retry'
])

// 使用 hooks
const { activeTab, switchTab } = useTab(props.defaultActiveTab)
const { outlineStatus, outlineMessage, qaStatus, qaMessage } = useOutlineState(props)

// 响应式数据
const mindMapDialogVisible = ref(false)

// 事件处理函数
const handleTabClick = (tab) => {
  switchTab(tab)
  emit("tab-change", tab)
}

const handleTimeClick = (time) => {
  emit("time-click", time)
}

const handleMindMapClick = () => {
  mindMapDialogVisible.value = true
}

const handleMindMapDialogClose = () => {
  mindMapDialogVisible.value = false
}

const handleOutlineRetry = () => {
  emit("outline-retry")
}

const handleQaRetry = () => {
  emit("qa-retry")
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
  background-color: #202127;
  box-shadow: 0px 0px 16px 0px rgba(37, 43, 58, 0.06);
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
  background-color: #3E3E4E;

  &:first-child {
    width: 102px;
  }

  &:nth-child(2),
  &:nth-child(3) {
    width: 103px;
  }
}

.c-outline-panel__tab-text {
  font-family: "PingFang SC", sans-serif;
  font-size: 14px;
  line-height: 39px;
  color: #ADADC0;
}

.c-outline-panel__tab-text--active {
  font-family: "PingFang SC", sans-serif;
  font-size: 14px;
  line-height: 39px;
  color: #FFFFFF;
  border-bottom: 3px solid #FFFFFF;
}

.c-outline-panel__content {
  flex: 1;
  padding: 12px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #202127;
  }

  &::-webkit-scrollbar-thumb {
    background: #3E3E4E;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #4E4E5E;
  }
}

.c-outline-panel__footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
}

.c-outline-panel__footer-text {
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
}
</style>