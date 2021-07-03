import { Application } from '@/lib'
import App from '@/app'

import { createBrowserHistory } from 'history'
import { store } from './store'

import './lib/i18n'
import './styles/index.css'

const serverHost = '192.168.2.2'
const host = process.env.NODE_ENV === 'production' ? serverHost : 'localhost'
const history = createBrowserHistory()

const app = Application.create({
  element: document.getElementById('root'),
  component: App,
  store: store,
  history: history,
  url: `${location.protocol}://${host}/index.php`,
  options: {},
})
