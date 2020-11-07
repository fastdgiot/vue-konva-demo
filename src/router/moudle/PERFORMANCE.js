export default [
  {
    path: '/Shape-Caching',
    name: 'Shape-Caching',
    component: () => import('@/views/performance/Shape-Caching')
  },
  {
    path: '/Optimizing-Strokes',
    name: 'Optimizing-Strokes',
    component: () => import('@/views/performance/Optimizing-Strokes')
  },
  {
    path: '/Shape-Redraw',
    name: 'Shape-Redraw',
    component: () => import('@/views/performance/Shape-Redraw')
  },
  {
    path: '/Disable-Perfect-Drawing',
    name: 'Disable-Perfect-Drawing',
    component: () => import('@/views/performance/Disable-Perfect-Drawing')
  },
  {
    path: '/Avoid-Memory-Leaks',
    name: 'Avoid-Memory-Leaks',
    component: () => import('@/views/performance/Avoid-Memory-Leaks')
  }
]
