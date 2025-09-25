import { ref, computed, readonly } from 'vue'

// 异步状态枚举
export const AsyncStatus = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error'
}

/**
 * 异步状态管理 composable (Vue 2.7)
 * @param {*} initialData 初始数据
 * @param {string} loadingMessage 加载提示消息
 */
export function useAsyncState(initialData = null, loadingMessage = '加载中...') {
  const status = ref(AsyncStatus.IDLE)
  const data = ref(initialData)
  const error = ref(null)
  const message = ref(loadingMessage)

  const isIdle = computed(() => status.value === AsyncStatus.IDLE)
  const isLoading = computed(() => status.value === AsyncStatus.LOADING)
  const isSuccess = computed(() => status.value === AsyncStatus.SUCCESS)
  const isError = computed(() => status.value === AsyncStatus.ERROR)
  const isEmpty = computed(() => !data.value || (Array.isArray(data.value) && data.value.length === 0))
  const hasData = computed(() => !isEmpty.value)

  const setLoading = (loadingMsg) => {
    status.value = AsyncStatus.LOADING
    message.value = loadingMsg || loadingMessage
    error.value = null
  }

  const setSuccess = (newData) => {
    status.value = AsyncStatus.SUCCESS
    if (newData !== null && newData !== undefined) {
      data.value = newData
    }
    error.value = null
  }

  const setError = (errorMsg, errorObj) => {
    status.value = AsyncStatus.ERROR
    error.value = errorObj || null
    message.value = errorMsg
  }

  const reset = () => {
    status.value = AsyncStatus.IDLE
    data.value = initialData
    error.value = null
    message.value = loadingMessage
  }

  return {
    // 状态
    status: readonly(status),
    data,
    error: readonly(error),
    message: readonly(message),

    // 计算属性
    isIdle,
    isLoading,
    isSuccess,
    isError,
    isEmpty,
    hasData,

    // 方法
    setLoading,
    setSuccess,
    setError,
    reset
  }
}