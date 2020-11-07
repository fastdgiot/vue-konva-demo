export default [
  {
    path: '/Save-Stage',
    name: 'Save-Stage',
    component: () => import('@/views/export/Save-Stage')
  },
  {
    path: '/Simple-Load',
    name: 'Simple-Load',
    component: () => import('@/views/export/Simple-Load')
  },
  {
    path: '/Stage-Data-URL',
    name: 'Stage-Data-URL',
    component: () => import('@/views/export/Stage-Data-URL')
  }
]
