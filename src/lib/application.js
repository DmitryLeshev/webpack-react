import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Router } from 'react-router-dom'

const CALL_TIMEOUT = 7 * 1000
const PING_INTERVAL = 60 * 1000
const RECONNECT_TIMEOUT = 2 * 1000

class Application {
  constructor({ element, component, store, history, url, options }) {
    this.rootElement = element
    this.Component = component
    this.store = store
    this.history = history
    this.env = process.env.NODE_ENV
    this.url = url

    this.ready = false
    this.active = false
    this.connected = false

    this.lastActivity = new Date().getTime()
    this.callTimeout = options.callTimeout || CALL_TIMEOUT
    this.pingInterval = options.pingInterval || PING_INTERVAL
    this.reconnectTimeout = options.reconnectTimeout || RECONNECT_TIMEOUT

    this.init()
  }

  static async create({ element, component, store, history, url, options }) {
    console.log('create')
    return new Application({ element, component, store, history, url, options })
  }

  async init() {
    console.log('init')
    const { Component, rootElement, history, store } = this

    console.log({ history, store })

    const component = (
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    )
    ReactDOM.render(component, rootElement)
  }

  async shutdown() {
    console.log('shutdown')
  }

  async restart() {
    console.log('restart')
  }

  async reboot() {
    console.log('reboot')
  }

  async reset() {
    console.log('reset')
  }

  // async send(packet) {
  //   const [path, args] = Object.entries(packet)[0]
  //   const [iface = 'default', method = 'method'] = path.split('/')
  //   return await fetchData(iface)({ [method]: args })
  // }
}

export default Application
