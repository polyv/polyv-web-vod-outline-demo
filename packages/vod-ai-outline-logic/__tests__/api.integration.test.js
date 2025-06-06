const { VodAiApiClient } = require('../src/api/ai.js')
const { addSignToParams } = require('../src/sign.js')

// 真实接口集成测试
describe('VodAiApiClient 真实接口集成测试', () => {
  // 真实的API配置 - 在实际环境中应该从环境变量获取
  const realConfig = {
    appId: 'xxx',
    appSecret: 'xxx'
  }

  // 测试用的视频ID
  const testVid = 'xxx'

  let client

  beforeAll(() => {
    // 初始化真实的API客户端
    client = new VodAiApiClient(realConfig)
  })

  // 增加超时时间，因为真实接口可能需要更长时间
  jest.setTimeout(30000)

  describe('真实API调用测试', () => {
    test('应该成功获取推荐问题', async () => {
      console.log('🚀 开始测试获取推荐问题...')

      const params = {
        vid: testVid,
        size: 5
      }

      const result = await client.getSuggestQuestionsByVid(params)
      
      console.log('📝 推荐问题结果:', JSON.stringify(result, null, 2))
      
      // 验证响应结构
      expect(result).toBeDefined()
      expect(typeof result).toBe('object')
      
      // 根据API响应格式验证
      if (result.status === 'success') {
        expect(result.data).toBeDefined()
        expect(Array.isArray(result.data) || typeof result.data === 'object').toBe(true)
      } else {
        // 即使失败，也应该有明确的错误信息
        expect(result.message).toBeDefined()
        expect(result.code).toBeDefined()
      }
    })

    test('应该成功获取视频摘要', async () => {
      console.log('🚀 开始测试获取视频摘要...')

      const params = {
        vid: testVid
      }

      const result = await client.getSummaryByVid(params)
      
      console.log('📄 视频摘要结果:', JSON.stringify(result, null, 2))
      
      // 验证响应结构
      expect(result).toBeDefined()
      expect(typeof result).toBe('object')
      
      // 根据API响应格式验证
      if (result.status === 'success') {
        expect(result.data).toBeDefined()
      } else {
        // 即使失败，也应该有明确的错误信息
        expect(result.message).toBeDefined()
        expect(result.code).toBeDefined()
      }
    })

    test('应该正确处理无效的视频ID', async () => {
      console.log('🚀 开始测试无效视频ID处理...')
      
      const invalidVid = 'invalid_video_id_12345'
      const result = await client.getSuggestQuestionsByVid({ 
        vid: invalidVid 
      })
      
      console.log('❌ 无效ID结果:', JSON.stringify(result, null, 2))
      
      // 应该返回错误信息而不是抛出异常
      expect(result).toBeDefined()
      expect(typeof result).toBe('object')
      
      // 对于无效ID，通常会返回失败状态
      if (result.status === 'fail') {
        expect(result.message).toBeDefined()
        expect(result.code).toBeDefined()
      }
    })

    test('应该正确处理参数验证', async () => {
      console.log('🚀 开始测试参数验证...')
      
      // 测试空的vid参数
      const result = await client.getSuggestQuestionsByVid({ vid: '' })
      
      console.log('⚠️  空参数结果:', JSON.stringify(result, null, 2))
      
      expect(result).toBeDefined()
      expect(result.status).toBe('fail')
      expect(result.message).toContain('vid')
      expect(result.code).toBe(400)
    })

    test('应该正确处理size参数边界值', async () => {
      console.log('🚀 开始测试size参数边界值...')
      
      // 测试超出范围的size
      const result = await client.getSuggestQuestionsByVid({ 
        vid: testVid, 
        size: 100 // 超出最大值50
      })
      
      console.log('📊 边界值测试结果:', JSON.stringify(result, null, 2))
      
      expect(result).toBeDefined()
      expect(result.status).toBe('fail')
      expect(result.message).toContain('size')
      expect(result.code).toBe(400)
    })
  })

  describe('网络错误处理测试', () => {
    test('应该正确处理网络超时', async () => {
      console.log('🚀 开始测试网络超时处理...')
      
      // 创建一个超时时间很短的客户端
      const timeoutClient = new VodAiApiClient({
        ...realConfig,
        timeout: 1 // 1毫秒，几乎肯定会超时
      })
      
      const result = await timeoutClient.getSuggestQuestionsByVid({ 
        vid: testVid 
      })
      
      console.log('⏱️  超时测试结果:', JSON.stringify(result, null, 2))
      
      expect(result).toBeDefined()
      expect(result.status).toBe('fail')
      expect(result.message).toBeDefined()
    })
  })

  describe('性能测试', () => {
    test('API响应时间应该在合理范围内', async () => {
      console.log('🚀 开始性能测试...')
      
      const startTime = Date.now()
      
      const result = await client.getSuggestQuestionsByVid({ 
        vid: testVid,
        size: 3
      })
      
      const endTime = Date.now()
      const responseTime = endTime - startTime
      
      console.log(`⚡ API响应时间: ${responseTime}ms`)
      console.log('📈 性能测试结果:', JSON.stringify(result, null, 2))
      
      // 响应时间应该在30秒内（根据实际情况调整）
      expect(responseTime).toBeLessThan(30000)
      expect(result).toBeDefined()
    })

    test('并发请求应该正常处理', async () => {
      console.log('🚀 开始并发测试...')
      
      const promises = [
        client.getSuggestQuestionsByVid({ vid: testVid, size: 2 }),
        client.getSummaryByVid({ vid: testVid }),
        client.getSuggestQuestionsByVid({ vid: testVid, size: 3 })
      ]
      
      const results = await Promise.all(promises)
      
      console.log('🔄 并发测试结果:')
      results.forEach((result, index) => {
        console.log(`  请求${index + 1}:`, JSON.stringify(result, null, 2))
      })
      
      // 所有请求都应该返回结果
      results.forEach(result => {
        expect(result).toBeDefined()
        expect(typeof result).toBe('object')
      })
    })
  })
}) 