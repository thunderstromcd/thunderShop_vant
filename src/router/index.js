import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import Home from '../components/home/home.vue'
import Cart from '../components/cart/Cart.vue'
import MemberCenter from '../components/member/MemberCenter.vue'
import Search from '../components/search/Search.vue'
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
      { path: '/search', component: Search }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
