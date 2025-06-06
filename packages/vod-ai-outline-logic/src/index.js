import {
  generateMD5Sign,
  generateSign,
  verifySign,
  addSignToParams,
  generateNonce
} from './sign'
// 导入API相关功能
import {
  VodAiApiClient,
  createApiClient,
  getSuggestQuestionsByVid,
  getSummaryByVid
} from './api/ai'
// 导入服务层功能
import {
  createVideoService,
  DEFAULT_API_CONFIG
} from './services/videoService'
// 导入时间工具
import {
  formatTime,
  parseTime,
  calculateDuration
} from './utils/time'

// 创建主要的逻辑对象
export const outlineLogic = {  
  // 签名工具
  generateMD5Sign,
  generateSign,
  verifySign,
  addSignToParams,
  generateNonce,
  
  // API工具
  VodAiApiClient,
  createApiClient,
  getSuggestQuestionsByVid,
  getSummaryByVid,
  
  // 服务层
  createVideoService,
  DEFAULT_API_CONFIG,
  
  // 时间工具
  formatTime,
  parseTime,
  calculateDuration
}

// 导出所有功能
export {
  // 签名工具
  generateMD5Sign,
  generateSign,
  verifySign,
  addSignToParams,
  generateNonce,
  
  // API工具
  VodAiApiClient,
  createApiClient,
  getSuggestQuestionsByVid,
  getSummaryByVid,
  
  // 服务层
  createVideoService,
  DEFAULT_API_CONFIG,
  
  // 时间工具
  formatTime,
  parseTime,
  calculateDuration
}

// 默认导出
export default outlineLogic