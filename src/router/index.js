import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 框子
import layout from '@/layout/index'
// 各个模块路由
import SHAPES from '@/router/moudle/SHAPES'
import GUIDES from '@/router/moudle/GUIDES'
import STYLING from '@/router/moudle/STYLING'
import EVENTS from '@/router/moudle/EVENTS'
import DRAGANDDROP from '@/router/moudle/DRAG-AND-DROP'
import SELECTANDTRANSFORM from '@/router/moudle/SELECT-AND-TRANSFORM'
import CLIPPING from '@/router/moudle/CLIPPING'

const routes = [
  {
    path: '/',
    redirect: '/rect',
    component: layout,
    children: [...SHAPES, ...GUIDES, ...STYLING, ...EVENTS, ...DRAGANDDROP, ...SELECTANDTRANSFORM, ...CLIPPING]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
