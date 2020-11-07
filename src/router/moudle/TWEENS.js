export default [
  {
    path: '/Linear-Easing',
    name: 'Linear-Easing',
    component: () => import('@/views/tweens/Linear-Easing')
  },
  {
    path: '/Common-Easing',
    name: 'Common-Easing',
    component: () => import('@/views/tweens/Common-Easing')
  },
  {
    path: '/All-Easing',
    name: 'All-Easing',
    component: () => import('@/views/tweens/All-Easing')
  },
  {
    path: '/Finish-Event',
    name: 'Finish-Event',
    component: () => import('@/views/tweens/Finish-Event')
  },
  {
    path: '/All-Controls',
    name: 'All-Controls',
    component: () => import('@/views/tweens/All-Controls')
  },
  {
    path: '/Tween-Filter',
    name: 'Tween-Filter',
    component: () => import('@/views/tweens/Tween-Filter')
  }
]
