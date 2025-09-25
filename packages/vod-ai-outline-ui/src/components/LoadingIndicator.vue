<template>
  <div v-if="visible" class="c-loading-indicator">
    <div class="c-loading-indicator__spinner"></div>
    <p class="c-loading-indicator__message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoadingIndicator',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    message: {
      type: String,
      default: '加载中，请稍后'
    }
  }
}
</script>

<style scoped>
.c-loading-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.c-loading-indicator__spinner {
  width: 24px;
  height: 24px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid #3F76FC;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 12px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.c-loading-indicator__message {
  font-size: 14px;
  line-height: 22px;
  color: #ADADC0;
  margin: 0;
}
</style>




