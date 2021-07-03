import React from 'react'
import { redirect404 } from './errors'

export default {
  path: '/home',
  component: React.lazy(() => import('@/pages/home')),
  routes: [
    {
      path: '/home',
      component: () => null,
      exact: true,
    },
    {
      path: '/home/:taskId',
      component: () => '[task]',
      exact: true,
    },
    redirect404,
  ],
}
