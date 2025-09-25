import { ref } from 'vue'

/**
 * Tab 切换管理 hook
 */
export function useTab(defaultTab = 'outline') {
  const activeTab = ref(defaultTab)

  const switchTab = (tab) => {
    activeTab.value = tab
  }

  const isActiveTab = (tab) => {
    return activeTab.value === tab
  }

  return {
    activeTab,
    switchTab,
    isActiveTab
  }
}