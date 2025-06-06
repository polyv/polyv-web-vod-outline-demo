<template>
  <div ref="mindMapContainer" class="c-mindmap-container"></div>
</template>

<script>
import MindMap from 'simple-mind-map'

export default {
  name: 'MindMap',
  props: {
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
    config: {
      type: Object,
      default: () => ({
        layout: 'logicalStructure',
        theme: 'dark',
        nodeTextEditZIndex: 1000,
        nodeNoteTooltipZIndex: 1000
      })
    }
  },
  data() {
    return {
      mindMap: null
    }
  },
  mounted() {
    this.initMindMap()
  },
  watch: {
    summaryData: {
      handler() {
        if (this.mindMap) {
          this.updateMindMapData()
        }
      },
      deep: true
    },
    videoTitle() {
      if (this.mindMap) {
        this.updateMindMapData()
      }
    }
  },
  beforeDestroy() {
    this.destroyMindMap()
  },
  methods: {
    initMindMap() {
      if (!this.$refs.mindMapContainer) {
        console.error('思维导图容器未找到')
        return
      }
      
      // 销毁之前的实例
      this.destroyMindMap()
      
      try {
        const mindMapData = this.generateMindMapData()
        
        // 验证生成的数据
        if (!mindMapData || !mindMapData.data || !mindMapData.data.text) {
          throw new Error('思维导图数据无效')
        }
        
        // 简化的配置，只传递必要的参数
        const mindMapConfig = {
          el: this.$refs.mindMapContainer,
          data: mindMapData,
          layout: this.config.layout || 'logicalStructure',
          theme: this.config.theme || 'dark',
          nodeTextEditZIndex: this.config.nodeTextEditZIndex || 1000,
          nodeNoteTooltipZIndex: this.config.nodeNoteTooltipZIndex || 1000
        }
        
        console.log('思维导图初始化配置:', mindMapConfig) // 调试日志
        
        this.mindMap = new MindMap(mindMapConfig)
        
        // 监听节点点击事件
        this.mindMap.on('node_click', (node, e) => {
          const nodeData = node.getData()
          
          // 触发节点点击事件
          this.$emit('node-click', nodeData)
          
          // 如果是章节节点，触发时间跳转
          if (nodeData.nodeType === 'chapter' && nodeData.startTime) {
            this.$emit('time-click', nodeData.startTime)
          } else if (nodeData.nodeType === 'summary' && nodeData.parentStartTime) {
            this.$emit('time-click', nodeData.parentStartTime)
          }
        })
        
        // 触发初始化完成事件
        this.$emit('initialized', this.mindMap)
        
      } catch (error) {
        console.error('初始化思维导图失败:', error)
        this.$emit('error', error)
      }
    },
    
    destroyMindMap() {
      if (this.mindMap) {
        try {
          this.mindMap.destroy()
        } catch (error) {
          console.error('销毁思维导图失败:', error)
        }
        this.mindMap = null
      }
    },
    
    updateMindMapData() {
      if (this.mindMap) {
        const data = this.generateMindMapData()
        this.mindMap.setData(data)
      }
    },
    
    generateMindMapData() {
      // 根据接口数据生成思维导图数据结构
      const rootNode = {
        data: {
          text: this.videoTitle || '视频内容'
        },
        children: []
      }
      
      // 确保summaryData是有效的数组
      if (!this.summaryData || !Array.isArray(this.summaryData) || this.summaryData.length === 0) {
        console.warn('summaryData为空或无效，使用默认数据')
        return rootNode
      }
      
      // 生成一级节点（使用summary-by-vid返回的list数组里的title）
      rootNode.children = this.summaryData
        .filter(item => item && typeof item === 'object') // 过滤无效项
        .map((item, index) => {
          const firstLevelNode = {
            data: {
              text: item.title || `章节 ${index + 1}`,
              startTime: item.startTime || '00:00:00',
              nodeType: 'chapter'
            },
            children: []
          }
          
          // 生成二级节点（使用list数据里item的summary数组）
          if (item.summary) {
            if (Array.isArray(item.summary) && item.summary.length > 0) {
              firstLevelNode.children = item.summary
                .map((summaryItem, summaryIndex) => {
                  let text = ''
                  
                  if (typeof summaryItem === 'string') {
                    text = summaryItem.trim()
                  } else if (summaryItem && typeof summaryItem === 'object') {
                    text = summaryItem.text || summaryItem.content || summaryItem.summary || `内容 ${summaryIndex + 1}`
                  } else {
                    text = String(summaryItem || `内容 ${summaryIndex + 1}`)
                  }
                  
                  return {
                    data: {
                      text: text || `内容 ${summaryIndex + 1}`,
                      nodeType: 'summary',
                      parentStartTime: item.startTime || '00:00:00'
                    }
                  }
                })
                .filter(node => node.data.text && node.data.text.length > 0) // 过滤空文本
            } else if (typeof item.summary === 'string' && item.summary.trim()) {
              // 如果summary是字符串，直接作为一个子节点
              firstLevelNode.children = [{
                data: {
                  text: item.summary.trim(),
                  nodeType: 'summary',
                  parentStartTime: item.startTime || '00:00:00'
                }
              }]
            }
          }
          
          return firstLevelNode
        })
        .filter(node => node && node.data && node.data.text) // 过滤无效节点
      
      console.log('生成的思维导图数据:', rootNode) // 调试日志
      return rootNode
    },
    
    // 公开一些方法供外部调用
    getMindMapInstance() {
      return this.mindMap
    },
    
    exportData() {
      return this.mindMap ? this.mindMap.getData() : null
    },
    
    fitView() {
      if (this.mindMap) {
        this.mindMap.view.fit()
      }
    },
    
    reset() {
      if (this.mindMap) {
        this.mindMap.view.reset()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-mindmap-container {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: #0f0f0f;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
}

// 覆盖simple-mind-map的一些默认样式
:deep(.smm-node) {
  .smm-node-text {
    font-family: 'PingFang SC', sans-serif !important;
  }
}

:deep(.smm-node-root) {
  .smm-node-text {
    font-size: 16px !important;
    font-weight: 600 !important;
  }
}

:deep(.smm-node-generalization) {
  .smm-node-text {
    font-size: 14px !important;
  }
}

:deep(.smm-node-second) {
  .smm-node-text {
    font-size: 14px !important;
  }
}
</style> 