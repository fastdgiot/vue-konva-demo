import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 框子
import layout from '@/layout/index'
// shapes 创建形状
import shapes from './moudle/SHAPES'

const routes = [
  {
    path: '/',
    redirect: '/rect',
    component: layout,
    children: [...shapes]
  }
]

const router = new VueRouter({
  routes
})

export default router
