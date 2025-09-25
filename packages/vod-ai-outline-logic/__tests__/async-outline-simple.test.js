/**
 * 异步大纲生成功能测试（简化版）
 * 测试轮询机制和状态处理
 */

import { createVideoService } from '../src/index.js'

describe('异步大纲生成功能测试', () => {
  let videoService

  beforeEach(() => {
    // 创建服务实例
    videoService = createVideoService({
      getSignature: async (params) => {
        // 模拟签名函数
        return 'mock_signature'
      }
    })
  })

  describe('轮询机制测试', () => {
    test('应该正确处理"处理中"状态', async () => {
      const vid = 'test_video_1'
      
      // 模拟API返回处理中状态
      const originalMethod = videoService.apiClient.getSummaryByVidV2
      videoService.apiClient.getSummaryByVidV2 = async () => ({
        status: 'processing',
        message: '智能大纲生成中，请稍后',
        code: 500,
        data: null
      })
      
      try {
        const result = await videoService.getVideoSummaryAsync(
          { vid },
          { pollInterval: 100, maxPollTime: 500 } // 短时间用于测试
        )
        
        // 验证返回状态
        expect(result.success).toBe(false)
        expect(result.errors).toContain('大纲生成超时，请稍后刷新重试')
      } finally {
        // 恢复原始方法
        videoService.apiClient.getSummaryByVidV2 = originalMethod
      }
    })

    test('应该正确处理"成功"状态', async () => {
      const vid = 'test_video_2'
      
      // 模拟API返回成功状态
      const originalMethod = videoService.apiClient.getSummaryByVidV2
      videoService.apiClient.getSummaryByVidV2 = async () => ({
        status: 'success',
        message: '获取成功',
        code: 200,
        data: {
          title: '测试视频',
          introduction: '这是一个测试视频',
          list: [
            {
              id: 'segment_1',
              title: '测试分段',
              startTime: '00:00:00',
              endTime: '00:02:00',
              summary: '测试摘要',
              keywords: ['测试']
            }
          ]
        }
      })
      
      try {
        const result = await videoService.getVideoSummaryAsync({ vid })
        
        // 验证返回状态
        expect(result.success).toBe(true)
        expect(result.outlineData).toBeDefined()
        expect(result.outlineData.length).toBe(1)
        expect(result.introduction).toBe('这是一个测试视频')
      } finally {
        // 恢复原始方法
        videoService.apiClient.getSummaryByVidV2 = originalMethod
      }
    })

    test('应该正确处理"失败"状态', async () => {
      const vid = 'test_video_3'
      
      // 模拟API返回失败状态
      const originalMethod = videoService.apiClient.getSummaryByVidV2
      videoService.apiClient.getSummaryByVidV2 = async () => ({
        status: 'fail',
        message: '大纲生成失败，请重试',
        code: 500,
        data: null
      })
      
      try {
        const result = await videoService.getVideoSummaryAsync({ vid })
        
        // 验证返回状态
        expect(result.success).toBe(false)
        expect(result.errors).toContain('大纲生成失败，请重试')
      } finally {
        // 恢复原始方法
        videoService.apiClient.getSummaryByVidV2 = originalMethod
      }
    })
  })

  describe('轮询状态展示测试', () => {
    test('轮询过程中应正确显示状态消息', async () => {
      const vid = 'test_video_4'
      const statusMessages = []
      
      // 模拟API返回处理中状态
      const originalMethod = videoService.apiClient.getSummaryByVidV2
      videoService.apiClient.getSummaryByVidV2 = async () => ({
        status: 'processing',
        message: '智能大纲生成中，请稍后',
        code: 500,
        data: null
      })
      
      const onStatusChange = (status, message, pollCount) => {
        statusMessages.push({ status, message, pollCount })
      }
      
      try {
        await videoService.getVideoSummaryAsync(
          { vid },
          { 
            pollInterval: 100,
            maxPollTime: 500,
            onStatusChange 
          }
        )
        
        // 验证状态变化
        expect(statusMessages.length).toBeGreaterThan(0)
        expect(statusMessages[0].status).toBe('processing')
        expect(statusMessages[0].message).toBe('智能大纲生成中，请稍后')
      } finally {
        // 恢复原始方法
        videoService.apiClient.getSummaryByVidV2 = originalMethod
      }
    })
  })

  describe('错误处理测试', () => {
    test('网络错误时应正确处理', async () => {
      const vid = 'test_video_5'
      
      // 模拟网络错误
      const originalMethod = videoService.apiClient.getSummaryByVidV2
      videoService.apiClient.getSummaryByVidV2 = async () => {
        throw new Error('网络连接失败')
      }
      
      try {
        const result = await videoService.getVideoSummaryAsync({ vid })
        
        // 验证错误处理
        expect(result.success).toBe(false)
        expect(result.errors[0]).toContain('网络连接失败')
      } finally {
        // 恢复原始方法
        videoService.apiClient.getSummaryByVidV2 = originalMethod
      }
    })
  })
})
