<template>
  <div v-if="visible" class="c-dialog" @click.self="handleMaskClick">
    <div class="c-dialog__content" :style="contentStyle" @click.stop>
      <!-- 头部 -->
      <div v-if="!hideHeader" class="c-dialog__header">
        <slot name="header">
          <h3 class="c-dialog__title">{{ title }}</h3>
        </slot>
        <button v-if="showCloseBtn" class="c-dialog__close-btn" @click="handleClose">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
      
      <!-- 内容区域 -->
      <div class="c-dialog__body" :style="bodyStyle">
        <slot></slot>
      </div>
      
      <!-- 底部 -->
      <div v-if="!hideFooter && $slots.footer" class="c-dialog__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    // 是否显示
    visible: {
      type: Boolean,
      default: false
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 宽度
    width: {
      type: [String, Number],
      default: '90vw'
    },
    // 高度
    height: {
      type: [String, Number],
      default: '80vh'
    },
    // 最大宽度
    maxWidth: {
      type: [String, Number],
      default: '1200px'
    },
    // 最大高度
    maxHeight: {
      type: [String, Number],
      default: '800px'
    },
    // 是否显示关闭按钮
    showCloseBtn: {
      type: Boolean,
      default: true
    },
    // 是否隐藏头部
    hideHeader: {
      type: Boolean,
      default: false
    },
    // 是否隐藏底部
    hideFooter: {
      type: Boolean,
      default: false
    },
    // 是否可以通过点击遮罩关闭
    maskClosable: {
      type: Boolean,
      default: true
    },
    // 自定义内容区域样式
    bodyStyle: {
      type: Object,
      default: () => ({})
    },
    // z-index
    zIndex: {
      type: Number,
      default: 1000
    }
  },
  computed: {
    contentStyle() {
      const style = {
        width: typeof this.width === 'number' ? `${this.width}px` : this.width,
        height: typeof this.height === 'number' ? `${this.height}px` : this.height,
        maxWidth: typeof this.maxWidth === 'number' ? `${this.maxWidth}px` : this.maxWidth,
        maxHeight: typeof this.maxHeight === 'number' ? `${this.maxHeight}px` : this.maxHeight
      }
      return style
    }
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
        this.$emit('open')
      } else {
        document.body.style.overflow = ''
        this.$emit('close')
      }
    }
  },
  beforeDestroy() {
    document.body.style.overflow = ''
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
      this.$emit('close')
    },
    
    handleMaskClick() {
      if (this.maskClosable) {
        this.handleClose()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: v-bind(zIndex);
  backdrop-filter: blur(4px);
}

.c-dialog__content {
  background-color: #1a1a1a;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.c-dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}

.c-dialog__title {
  font-family: 'PingFang SC', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.c-dialog__close-btn {
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
}

.c-dialog__body {
  flex: 1;
  padding: 20px;
  overflow: hidden;
}

.c-dialog__footer {
  padding: 16px 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  flex-shrink: 0;
}
</style> 