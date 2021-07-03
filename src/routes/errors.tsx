import React from 'react'
import { Redirect } from 'react-router-dom'

const redirect404 = {
  component: () => <Redirect to="/errors/error-404" />,
}

const error401 = {
  path: '/errors/error-401',
  exact: true,
  component: React.lazy(() => import('../pages/errors/Error401')),
}

const error404 = {
  path: '/errors/error-404',
  exact: true,
  component: React.lazy(() => import('../pages/errors/Error404')),
}

const error500 = {
  path: '/errors/error-500',
  exact: true,
  component: React.lazy(() => import('../pages/errors/Error500')),
}

export { error401, error404, error500, redirect404 }
