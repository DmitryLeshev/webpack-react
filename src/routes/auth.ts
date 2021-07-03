// import { Auth } from '../pages';

import React from 'react'

export default {
  path: '/auth',
  exact: true,
  component: React.lazy(() => import('../pages/auth')),
}
