import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index.vue'
import Welcome from '../components/Welcome.vue'
import Cart from '../components/cart/Cart.vue'
import MemberCenter from '../components/member/MemberCenter.vue'
import Search from '../components/search/Search.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Index,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
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
