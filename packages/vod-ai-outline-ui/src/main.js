import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import VodAiOutlineUI from './index.js'

// 安装组件库
Vue.use(VodAiOutlineUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app') 