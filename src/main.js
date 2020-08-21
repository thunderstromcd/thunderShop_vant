import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
// 引入vant
import Vant from 'vant'
import 'vant/lib/index.css'

import '../public/icon/iconfont.css'
// axios请求默认地址
axios.defaults.baseURL = 'http://api.cms.liulongbin.top'
Vue.use(Vant)
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
