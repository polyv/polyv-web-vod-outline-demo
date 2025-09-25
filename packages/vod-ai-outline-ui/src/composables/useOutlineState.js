import { computed } from 'vue'
import { AsyncStatus } from './useAsyncState'

/**
 * 大纲状态管理 hook
 */
export function useOutlineState(props) {
  // 大纲状态计算属性
  const outlineStatus = computed(() => {
    if (props.isSummaryLoading) {
      return AsyncStatus.LOADING
    }
    if (props.outlineError) {
      return AsyncStatus.ERROR
    }
    return AsyncStatus.SUCCESS
  })

  const outlineMessage = computed(() => {
    if (props.isSummaryLoading) {
      return props.summaryLoadingMessage
    }
    if (props.outlineError) {
      return props.outlineError
    }
    return ''
  })

  // 问答状态计算属性
  const qaStatus = computed(() => {
    if (props.isQuestionsLoading) {
      return AsyncStatus.LOADING
    }
    if (props.qaError) {
      return AsyncStatus.ERROR
    }
    return AsyncStatus.SUCCESS
  })

  const qaMessage = computed(() => {
    if (props.isQuestionsLoading) {
      return props.questionsLoadingMessage
    }
    if (props.qaError) {
      return props.qaError
    }
    return ''
  })

  return {
    outlineStatus,
    outlineMessage,
    qaStatus,
    qaMessage
  }
}