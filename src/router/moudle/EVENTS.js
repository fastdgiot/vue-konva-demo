export default [
  {
    path: '/Shape-Events',
    name: 'Shape-Events',
    component: () => import('@/views/events/Shape-Events')
  },
  {
    path: '/Image-Events',
    name: 'Image-Events',
    component: () => import('@/views/events/Image-Events')
  },
  {
    path: '/Remove-Event-Listener',
    name: 'Remove-Event-Listener',
    component: () => import('@/views/events/Remove-Event-Listener')
  },
  {
    path: '/Remove-Event-Listener-by-Name',
    name: 'Remove-Event-Listener-by-Name',
    component: () => import('@/views/events/Remove-Event-Listener-by-Name')
  },
  {
    path: '/Custom-Hit-Function',
    name: 'Custom-Hit-Function',
    component: () => import('@/views/events/Custom-Hit-Function')
  },
  {
    path: '/Event-Delegation',
    name: 'Event-Delegation',
    component: () => import('@/views/events/Event-Delegation')
  },
  {
    path: '/Keyboard-events',
    name: 'Keyboard-events',
    component: () => import('@/views/events/Keyboard-events')
  }
]
