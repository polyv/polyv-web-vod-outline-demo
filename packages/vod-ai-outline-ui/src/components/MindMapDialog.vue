<template>
  <Dialog
    :visible="visible"
    title="思维导图"
    :body-style="{ padding: '0', overflow: 'hidden' }"
    @close="handleClose"
  >
    <MindMap
      ref="mindMap"
      :video-title="videoTitle"
      :summary-data="summaryData"
      :config="mindMapConfig"
      @time-click="handleTimeClick"
      @node-click="handleNodeClick"
      @initialized="handleMindMapInitialized"
      @error="handleMindMapError"
    />
    
    <!-- 操作按钮 -->
    <template #footer>
      <div class="c-mindmap-dialog__actions">
        <button class="c-mindmap-dialog__btn" @click="handleFitView">
          自适应视图
        </button>
        <button class="c-mindmap-dialog__btn" @click="handleReset">
          重置视图
        </button>
      </div>
    </template>
  </Dialog>
</template>

<script>
import Dialog from './Dialog.vue'
import MindMap from './MindMap.vue'

export default {
  name: 'MindMapDialog',
  components: {
    Dialog,
    MindMap
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    // 视频标题，作为根节点
    videoTitle: {
      type: String,
      default: '视频内容'
    },
    // 摘要数据
    summaryData: {
      type: Array,
      default: () => []
    },
    // 思维导图配置
    mindMapConfig: {
      type: Object,
      default: () => ({
        layout: 'logicalStructure',
        theme: 'dark',
        viewData: {
          transform: {
            scaleX: 0.8,
            scaleY: 0.8,
            shiftX: 0,
            shiftY: 0
          }
        },
        nodeTextEditZIndex: 1000,
        nodeNoteTooltipZIndex: 1000
      })
    }
  },
  data() {
    return {
      mindMapInstance: null
    }
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
    
    handleTimeClick(time) {
      this.$emit('time-click', time)
    },
    
    handleNodeClick(nodeData) {
      this.$emit('node-click', nodeData)
    },
    
    handleMindMapInitialized(mindMapInstance) {
      this.mindMapInstance = mindMapInstance
      this.$emit('initialized', mindMapInstance)
    },
    
    handleMindMapError(error) {
      this.$emit('error', error)
    },
    
    handleFitView() {
      if (this.mindMapInstance) {
        this.$refs.mindMap?.fitView()
      }
    },
    
    handleReset() {
      if (this.mindMapInstance) {
        this.$refs.mindMap?.reset()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-mindmap-dialog__actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}

.c-mindmap-dialog__btn {
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: transparent;
  color: #ffffff;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'PingFang SC', sans-serif;
  font-size: 14px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }
  
  &--primary {
    background-color: #3F76FC;
    border-color: #3F76FC;
    
    &:hover {
      background-color: #5A8BFD;
      border-color: #5A8BFD;
    }
  }
}
</style> 