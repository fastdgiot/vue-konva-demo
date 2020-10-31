export default [
  {
    path: '/Fill',
    name: 'Fill',
    component: () => import('@/views/styling/Fill')
  },
  {
    path: '/Stroke',
    name: 'Stroke',
    component: () => import('@/views/styling/Stroke')
  },
  {
    path: '/Opacity',
    name: 'Opacity',
    component: () => import('@/views/styling/Opacity')
  },
  {
    path: '/Shadow',
    name: 'Shadow',
    component: () => import('@/views/styling/Shadow')
  },
  {
    path: '/Line-Join',
    name: 'Line-Join',
    component: () => import('@/views/styling/Line-Join')
  },
  {
    path: '/Hide-and-Show',
    name: 'Hide-and-Show',
    component: () => import('@/views/styling/Hide-and-Show')
  },
  {
    path: '/Mouse-Cursor-Styles',
    name: 'Mouse-Cursor-Styles',
    component: () => import('@/views/styling/Mouse-Cursor-Styles')
  },
  {
    path: '/Blend-Mode',
    name: 'Blend-Mode',
    component: () => import('@/views/styling/Blend-Mode')
  }
]
