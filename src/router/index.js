import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import Home from '../components/home/home.vue'
import Cart from '../components/cart/Cart.vue'
import MemberCenter from '../components/member/MemberCenter.vue'
import Search from '../components/search/Search.vue'
import NewsList from '../components/news/NewsList.vue'
import NewsDetail from '../components/news/NewsDetail.vue'
import PicList from '../components/share/PicList.vue'
import PicDetail from '../components/share/PicDetail.vue'

import Regist from '../components/login/Regist.vue'
import Login from '../components/login/Login.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Index,
    redirect: '/home',
    children: [
      { path: '/home', component: Home },
      { path: '/cart', component: Cart },
      { path: '/member', component: MemberCenter },
      { path: '/search', component: Search },
      { path: '/newslist', component: NewsList, meta: { keepAlive: true } },
      { path: '/newsdetail/:id', component: NewsDetail, meta: { keepAlive: false } },
      { path: '/piclist', component: PicList, meta: { keepAlive: true } },
      { path: '/picdetail/:id', component: PicDetail }
    ]
  },
  // 注册
  { path: '/regist', component: Regist },
  // 登录
  { path: '/login', component: Login }
]

const router = new VueRouter({
  routes
})

export default router
