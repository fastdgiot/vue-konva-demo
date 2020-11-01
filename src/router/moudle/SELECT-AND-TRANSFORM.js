export default [
  {
    path: '/Select-and-Transform',
    name: 'Select-and-Transform',
    component: () => import('@/views/SelectAndTransform/Select-and-Transform')
  },
  {
    path: '/Select-and-Transform2',
    name: 'Select-and-Transform2',
    component: () => import('@/views/SelectAndTransform/Select-and-Transform2')
  },
  {
    path: '/Centered-Scaling',
    name: 'Centered-Scaling',
    component: () => import('@/views/SelectAndTransform/Centered-Scaling')
  },
  {
    path: '/Keep-Ratio',
    name: 'Keep-Ratio',
    component: () => import('@/views/SelectAndTransform/Keep-Ratio')
  },
  {
    path: '/Select-and-Transform-Styling',
    name: 'Select-and-Transform-Styling',
    component: () => import('@/views/SelectAndTransform/Select-and-Transform-Styling')
  },
  {
    path: '/Transform-Events',
    name: 'Transform-Events',
    component: () => import('@/views/SelectAndTransform/Transform-Events')
  },
  {
    path: '/Transform-Limits',
    name: 'Transform-Limits',
    component: () => import('@/views/SelectAndTransform/Transform-Limits')
  }
]
