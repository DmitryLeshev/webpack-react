import { ReactElement, Suspense, useEffect } from 'react'
import { renderRoutes } from 'react-router-config'

import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { SnackbarProvider } from 'notistack'
import { useActions, useTypedSelector } from '@/hooks'

import { routes } from '@/routes'
import useCustomTheme from '../ui/theme'

interface Props {}

export default function App({}: Props): ReactElement {
  const { settingbar, theme } = useTypedSelector((state) => state.app)

  const newTheme = useCustomTheme({
    type: theme.mode,
    colors: theme.colors,
  })

  console.log({ routes })

  const root = document.querySelector('#root')

  useEffect(() => {
    if (settingbar) root?.classList.add('blur')
    else root?.classList.remove('blur')
  }, [settingbar])

  console.log('[App] render')
  return (
    <ThemeProvider theme={newTheme}>
      <SnackbarProvider>
        <CssBaseline />
        <Suspense fallback="">{renderRoutes(routes)}</Suspense>
      </SnackbarProvider>
    </ThemeProvider>
  )
}
