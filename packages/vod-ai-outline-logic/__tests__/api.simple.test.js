const { VodAiApiClient } = require('../src/api/ai.js')

// Mock addSignToParams function
jest.mock('../src/sign.js', () => ({
  addSignToParams: jest.fn((params) => params)
}))

// Mock axios
const mockAxiosInstance = {
  get: jest.fn(),
  interceptors: {
    response: {
      use: jest.fn()
    }
  }
}

jest.mock('axios', () => ({
  create: jest.fn(() => mockAxiosInstance)
}))

describe('VodAiApiClient 基础测试', () => {
  const mockConfig = {
    appId: 'test_app_id',
    appSecret: 'test_app_secret',
    vid: 'test_vid'
  }

  beforeEach(() => {
    // 清除所有mock的调用记录
    jest.clearAllMocks()
  })

  test('应该正确初始化客户端', () => {
    const client = new VodAiApiClient(mockConfig)
    expect(client.config.appId).toBe('test_app_id')
    expect(client.config.appSecret).toBe('test_app_secret')
  })

  test('缺少appId时应该抛出错误', () => {
    expect(() => {
      new VodAiApiClient({ appSecret: 'test_secret' })
    }).toThrow('必须提供 getSignature 函数或者 appId 和 appSecret')
  })

  test('应该使用正确的默认baseURL', () => {
    const client = new VodAiApiClient(mockConfig)
    expect(client.config.baseURL).toBe('https://api.polyv.net/ai-public')
  })

  test('应该正确请求获取推荐问题', async () => {
    // Mock axios返回值
    const mockResponse = {
      status: 'success',
      data: ['问题1', '问题2', '问题3']
    }
    mockAxiosInstance.get.mockResolvedValue(mockResponse)

    const client = new VodAiApiClient(mockConfig)
    const result = await client.getSuggestQuestionsByVid({ vid: mockConfig.vid })
    
    expect(result).toBeDefined()
    expect(result).toEqual(mockResponse)
    expect(mockAxiosInstance.get).toHaveBeenCalledWith('/v1/knowledges/suggest-questions-by-vid', {
      params: expect.objectContaining({
        vid: mockConfig.vid,
        appId: mockConfig.appId,
        timestamp: expect.any(Number)
      })
    })
  })

  test('应该正确请求获取视频摘要', async () => {
    // Mock axios返回值
    const mockResponse = {
      status: 'success',
      data: { summary: '这是视频摘要' }
    }
    mockAxiosInstance.get.mockResolvedValue(mockResponse)

    const client = new VodAiApiClient(mockConfig)
    const result = await client.getSummaryByVid({ vid: mockConfig.vid })

    console.log('result', result)
    
    expect(result).toBeDefined()
    expect(result).toEqual(mockResponse)
    expect(mockAxiosInstance.get).toHaveBeenCalledWith('/v1/knowledges/summary-by-vid', {
      params: expect.objectContaining({
        vid: mockConfig.vid,
        appId: mockConfig.appId,
        timestamp: expect.any(Number)
      })
    })
  })
}) 