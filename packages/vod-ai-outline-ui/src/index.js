import AIOutlinePanel from './components/AIOutlinePanel.vue'
import integrator, { VodAiOutlineIntegrator, installGlobalAPI } from './integrator.js'

const components = [
  AIOutlinePanel
]

const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  
  // 注册所有组件
  components.forEach(component => {
    Vue.component(component)
  })
}

// 安装全局API
installGlobalAPI()

export {
  install,
  AIOutlinePanel,
  integrator,
  VodAiOutlineIntegrator
}

export default {
  install,
  AIOutlinePanel,
  integrator,
  VodAiOutlineIntegrator
} 