import { Activation, Auth, Error, Main } from '../layouts'
import activation from './activation'
import auth from './auth'
// import devices from './devices'
// import events from './events'
import home from './home'
// import settings from './settings'
// import system from './system'
import { error401, error404, error500, redirect404 } from './errors'

const routerErrors = {
  path: '/errors',
  component: Error,
  routes: [error401, error404, error500, redirect404],
}

const routerActivation = {
  path: '/activation',
  component: Activation,
  routes: [activation, redirect404],
}

const routerAuth = {
  path: '/auth',
  component: Auth,
  routes: [auth, redirect404],
}

const routerMain = {
  route: '/',
  component: Main,
  routes: [home, redirect404],
  // routes: [devices, home, settings, events, system, redirect404],
}

const routes: any = [
  routerErrors,
  routerActivation,
  routerAuth,
  routerMain,
  redirect404,
]

export { routes, routerErrors, routerActivation, routerAuth, routerMain }
// export { routes }
