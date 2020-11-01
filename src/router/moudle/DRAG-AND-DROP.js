export default [
  {
    path: '/Drag-and-Drop',
    name: 'Drag-and-Drop',
    component: () => import('@/views/dragAndDrop/Drag-and-Drop')
  },
  {
    path: '/Drag-and-Drop-a-Group',
    name: 'Drag-and-Drop-a-Group',
    component: () => import('@/views/dragAndDrop/Drag-and-Drop-a-Group')
  },
  {
    path: '/Simple-Drag-Bounds',
    name: 'Simple-Drag-Bounds',
    component: () => import('@/views/dragAndDrop/Simple-Drag-Bounds')
  },
  {
    path: '/Complex-Drag-and-Drop-Bounds',
    name: 'Complex-Drag-and-Drop-Bounds',
    component: () => import('@/views/dragAndDrop/Complex-Drag-and-Drop-Bounds')
  },
  {
    path: '/Drop-Events',
    name: 'Drop-Events',
    component: () => import('@/views/dragAndDrop/Drop-Events')
  }
]
