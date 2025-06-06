const { 
  generateMD5Sign, 
  generateSign, 
  verifySign, 
  addSignToParams, 
  generateNonce 
} = require('../src/sign.js')

describe('签名功能测试', () => {
  const testParams = {
    appId: 'test_app_id',
    vid: 'test_video_id',
    timestamp: 1638360000
  }
  const testSecret = 'test_secret'

  test('应该能生成MD5签名', () => {
    const sign = generateMD5Sign(testParams, testSecret)
    expect(typeof sign).toBe('string')
    expect(sign.length).toBe(32) // MD5签名长度为32
    expect(sign).toBe(sign.toUpperCase()) // 应该是大写
  })

  test('generateSign应该返回MD5签名', () => {
    const sign1 = generateMD5Sign(testParams, testSecret)
    const sign2 = generateSign(testParams, testSecret)
    expect(sign1).toBe(sign2)
  })

  test('应该能验证正确的签名', () => {
    const sign = generateSign(testParams, testSecret)
    const paramsWithSign = { ...testParams, sign }
    const isValid = verifySign(paramsWithSign, testSecret)
    expect(isValid).toBe(true)
  })

  test('应该能检测错误的签名', () => {
    const paramsWithSign = { ...testParams, sign: 'wrong_signature' }
    const isValid = verifySign(paramsWithSign, testSecret)
    expect(isValid).toBe(false)
  })

  test('addSignToParams应该添加正确的签名', () => {
    const result = addSignToParams(testParams, testSecret)
    expect(result).toHaveProperty('sign')
    expect(typeof result.sign).toBe('string')
    expect(result.sign.length).toBe(32)
    
    // 验证签名是否正确
    const isValid = verifySign(result, testSecret)
    expect(isValid).toBe(true)
  })

  test('generateNonce应该生成随机字符串', () => {
    const nonce1 = generateNonce()
    const nonce2 = generateNonce()
    
    expect(typeof nonce1).toBe('string')
    expect(typeof nonce2).toBe('string')
    expect(nonce1).not.toBe(nonce2) // 应该不相同
    expect(nonce1.length).toBeGreaterThan(0)
  })

  test('应该过滤掉空值参数', () => {
    const paramsWithEmpty = {
      appId: 'test_app_id',
      vid: 'test_video_id',
      emptyString: '',
      nullValue: null,
      undefinedValue: undefined,
      validParam: 'valid'
    }
    
    const sign1 = generateSign(paramsWithEmpty, testSecret)
    
    const paramsWithoutEmpty = {
      appId: 'test_app_id',
      vid: 'test_video_id',
      validParam: 'valid'
    }
    
    const sign2 = generateSign(paramsWithoutEmpty, testSecret)
    
    expect(sign1).toBe(sign2)
  })
}) 