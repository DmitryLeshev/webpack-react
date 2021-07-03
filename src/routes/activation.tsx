import React from 'react'
import { redirect404 } from './errors'

export default {
  path: '/activation/:step',
  component: React.lazy(() => import('../pages/activation')),
  exact: true,
  routes: [
    {
      path: '/activation/step-1',
      exact: true,
      component: React.lazy(
        () => import('../pages/activation/components/step-1')
      ),
    },
    {
      path: '/activation/step-2',
      exact: true,
      component: () => 'step-2',
    },
    {
      path: '/activation/step-3',
      exact: true,
      component: () => 'step-3',
    },
    {
      path: '/activation/step-4',
      exact: true,
      component: () => 'step-4',
    },
    {
      path: '/activation/step-5',
      exact: true,
      component: () => 'step-5',
    },
    redirect404,
  ],
}
