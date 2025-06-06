import md5 from 'js-md5'

/**
 * 生成MD5签名
 * @param {Object} params - 请求参数对象
 * @param {string} appSecret - 应用密钥
 * @returns {string} 生成的MD5签名（大写）
 */
export function generateMD5Sign(params, appSecret) {
  const signString = buildSignString(params, appSecret)
  return md5(signString).toUpperCase()
}

/**
 * 通用签名生成函数（现在只支持MD5）
 * @param {Object} params - 请求参数对象
 * @param {string} appSecret - 应用密钥
 * @returns {string} 生成的MD5签名（大写）
 */
export function generateSign(params, appSecret) {
  return generateMD5Sign(params, appSecret)
}

/**
 * 构建签名字符串
 * @param {Object} params - 请求参数对象
 * @param {string} appSecret - 应用密钥
 * @returns {string} 用于签名的字符串
 */
function buildSignString(params, appSecret) {
  // 1. 过滤掉值为 null、undefined 或空字符串的参数
  const filteredParams = {}
  Object.keys(params).forEach(key => {
    const value = params[key]
    if (value !== null && value !== undefined && value !== '') {
      filteredParams[key] = String(value)
    }
  })

  // 2. 按参数名（key）字典顺序排序
  const sortedKeys = Object.keys(filteredParams).sort()

  // 3. 拼接参数名和参数值：key1value1key2value2...keyNvalueN
  let signString = ''
  sortedKeys.forEach(key => {
    signString += key + filteredParams[key]
  })

  // 4. 首尾加上 appSecret
  return appSecret + signString + appSecret
}

/**
 * 验证签名是否正确
 * @param {Object} params - 请求参数对象（包含sign参数）
 * @param {string} appSecret - 应用密钥
 * @returns {boolean} 签名是否正确
 */
export function verifySign(params, appSecret) {
  const { sign, ...paramsWithoutSign } = params
  const expectedSign = generateSign(paramsWithoutSign, appSecret)
  return sign === expectedSign
}

/**
 * 为请求参数添加签名
 * @param {Object} params - 请求参数对象
 * @param {string} appSecret - 应用密钥
 * @returns {Object} 包含签名的参数对象
 */
export function addSignToParams(params, appSecret) {
  const paramsWithSign = { ...params }
  
  // 生成并添加签名
  paramsWithSign.sign = generateSign(paramsWithSign, appSecret)
  
  return paramsWithSign
}

/**
 * 生成一次性随机数（用于防止重放攻击）
 * @returns {string} 简单的随机数字符串
 */
export function generateNonce() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

// 默认导出对象
export default {
  generateMD5Sign,
  generateSign,
  verifySign,
  addSignToParams,
  generateNonce
}
