import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import Comment from './components/Comment.vue'
// 引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
import '../public/icon/iconfont.css'
import moment from 'moment'

// 引入mock数据
import './components/mock/index'
// axios请求默认地址
axios.defaults.baseURL = 'http://api.cms.liulongbin.top'
Vue.use(Vant)
// 评论组件
Vue.component('comment', Comment)
Vue.prototype.$http = axios
Vue.config.productionTip = false
// 时间过滤器
Vue.filter('dateformat', function (value, format) {
  return moment(value).format(format)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
