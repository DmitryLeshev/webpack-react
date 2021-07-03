import { Theme } from '@material-ui/core'

export interface ITheme extends Theme {
  drawer: {
    closeWidth: number
    openWidth: number
    transition: string
  }
  header: {
    height: number
  }
}

import * as env from './env'

export { env }
