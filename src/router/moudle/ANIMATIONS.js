export default [
  {
    path: '/Animate-Position',
    name: 'Animate-Position',
    component: () => import('@/views/animations/Animate-Position')
  },
  {
    path: '/Rotation-Animation',
    name: 'Rotation-Animation',
    component: () => import('@/views/animations/Rotation-Animation')
  },
  {
    path: '/Scale-Animation',
    name: 'Scale-Animation',
    component: () => import('@/views/animations/Scale-Animation')
  },
  {
    path: '/Stop-Animation',
    name: 'Stop-Animation',
    component: () => import('@/views/animations/Stop-Animation')
  }
]
