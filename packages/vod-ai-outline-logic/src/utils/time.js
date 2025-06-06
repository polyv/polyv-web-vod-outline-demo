/**
 * 将秒数格式化为时分秒格式
 * @param {number} seconds - 秒数
 * @param {boolean} forceHours - 是否强制显示小时，默认false
 * @returns {string} 格式化后的时间字符串 (HH:MM:SS 或 MM:SS)
 */
export function formatTime(seconds, forceHours = false) {
  if (typeof seconds !== 'number' || seconds < 0) {
    return forceHours ? '00:00:00' : '00:00'
  }
  
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = Math.floor(seconds % 60)
  
  if (hours > 0 || forceHours) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }
  
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

/**
 * 将时分秒格式解析为秒数
 * @param {string} timeString - 时间字符串 (HH:MM:SS 或 MM:SS)
 * @returns {number} 秒数
 */
export function parseTime(timeString) {
  if (typeof timeString !== 'string') {
    return 0
  }
  
  const parts = timeString.split(':').map(part => parseInt(part, 10))
  
  if (parts.length === 2) {
    // MM:SS 格式
    const [minutes, seconds] = parts
    return (minutes || 0) * 60 + (seconds || 0)
  } else if (parts.length === 3) {
    // HH:MM:SS 格式
    const [hours, minutes, seconds] = parts
    return (hours || 0) * 3600 + (minutes || 0) * 60 + (seconds || 0)
  }
  
  return 0
}

/**
 * 计算时间区间的持续时长
 * @param {number} startTime - 开始时间（秒）
 * @param {number} endTime - 结束时间（秒）
 * @returns {number} 持续时长（秒）
 */
export function calculateDuration(startTime, endTime) {
  if (typeof startTime !== 'number' || typeof endTime !== 'number') {
    return 0
  }
  
  return Math.max(0, endTime - startTime)
}

/**
 * 标准化时间格式 - 处理包含毫秒的时间格式
 * @param {string} timeString - 时间字符串，如 "00:00:00,000" 或 "00:00:00"
 * @returns {string} 标准化的时间格式 "HH:MM:SS"
 */
export function normalizeTimeFormat(timeString) {
  if (!timeString) return null
  
  // 如果包含逗号（毫秒分隔符），去掉毫秒部分
  if (timeString.includes(',')) {
    timeString = timeString.split(',')[0]
  }
  
  // 如果包含点号（毫秒分隔符），去掉毫秒部分
  if (timeString.includes('.') && timeString.split('.').length === 2) {
    const parts = timeString.split('.')
    if (parts[1].length === 3) { // 确保是毫秒而不是小数秒
      timeString = parts[0]
    }
  }
  
  // 验证时间格式
  const timePattern = /^\d{2}:\d{2}:\d{2}$/
  if (timePattern.test(timeString)) {
    return timeString
  }
  
  // 如果是数字，当作秒数处理
  if (!isNaN(timeString)) {
    return formatTime(timeString, true) // 强制使用 HH:MM:SS 格式
  }
  
  return timeString
}

/**
 * 格式化持续时间
 * @param {string|number} duration - 持续时间（可以是秒数或时间字符串）
 * @returns {string|null} 格式化后的时间字符串
 */
export function formatDuration(duration) {
  if (!duration && duration !== 0) return null
  
  // 如果已经是格式化的字符串，直接返回
  if (typeof duration === 'string' && duration.includes(':')) {
    return duration
  }
  
  // 如果是秒数，转换为时间格式
  return formatTime(duration, true) // 强制使用 HH:MM:SS 格式
} 