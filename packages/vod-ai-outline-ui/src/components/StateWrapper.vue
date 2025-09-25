<template>
  <div class="c-state-wrapper">
    <!-- 加载状态 -->
    <div v-if="isLoading" class="c-state-wrapper__loading">
      <LoadingIndicator :visible="true" :message="message" />
    </div>

    <!-- 错误状态 -->
    <div v-else-if="isError" class="c-state-wrapper__error">
      <div class="c-state-wrapper__error-content">
        <p class="c-state-wrapper__error-message">
          {{ message }}
        </p>
        <button
          v-if="showRetry"
          class="c-state-wrapper__retry-btn"
          @click="$emit('retry')"
        >
          重试
        </button>
      </div>
    </div>

    <!-- 空状态 -->
    <div v-else-if="isEmpty && showEmpty" class="c-state-wrapper__empty">
      <p class="c-state-wrapper__empty-message">
        {{ emptyMessage }}
      </p>
    </div>

    <!-- 内容状态 -->
    <div v-else class="c-state-wrapper__content">
      <slot />
    </div>
  </div>
</template>

<script>
import LoadingIndicator from "./LoadingIndicator.vue"
import { AsyncStatus } from '@/composables/useAsyncState'

export default {
  name: "StateWrapper",
  components: {
    LoadingIndicator,
  },
  props: {
    status: {
      type: String,
      required: true,
      validator: (value) => Object.values(AsyncStatus).includes(value)
    },
    data: {
      type: [Array, Object, String],
      default: null
    },
    message: {
      type: String,
      default: ""
    },
    emptyMessage: {
      type: String,
      default: "暂无数据"
    },
    showEmpty: {
      type: Boolean,
      default: true
    },
    showRetry: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isLoading() {
      return this.status === AsyncStatus.LOADING
    },
    isError() {
      return this.status === AsyncStatus.ERROR
    },
    isEmpty() {
      return !this.data || (Array.isArray(this.data) && this.data.length === 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.c-state-wrapper {
  width: 100%;
}

.c-state-wrapper__loading,
.c-state-wrapper__error,
.c-state-wrapper__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 20px;
  text-align: center;
}

.c-state-wrapper__error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.c-state-wrapper__error-message {
  font-family: "PingFang SC", sans-serif;
  font-size: 14px;
  line-height: 22px;
  margin: 0;
  color: #FFFFFF;
  word-break: break-all;
}

.c-state-wrapper__empty-message {
  font-family: "PingFang SC", sans-serif;
  font-size: 14px;
  line-height: 22px;
  margin: 0;
  color: #ADADC0;
}

.c-state-wrapper__retry-btn {
  background: none;
  border: none;
  font-family: "PingFang SC", sans-serif;
  font-size: 14px;
  line-height: 22px;
  cursor: pointer;
  padding: 4px 8px;
  text-decoration: underline;
  color: #3F76FC;

  &:hover {
    opacity: 0.8;
  }
}
</style>