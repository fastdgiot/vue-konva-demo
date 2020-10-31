import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 框子
import layout from '@/layout/index'
// shapes 创建形状
import shapes from './moudle/SHAPES'
import guides from './moudle/GUIDES'
import styling from './moudle/STYLING'

const routes = [
  {
    path: '/',
    redirect: '/rect',
    component: layout,
    children: [...shapes, ...guides, ...styling]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
