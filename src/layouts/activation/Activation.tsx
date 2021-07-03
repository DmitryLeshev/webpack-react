import React, { memo } from 'react'
import { createStyles, makeStyles } from '@material-ui/core'
import { renderRoutes, RouteConfig } from 'react-router-config'

import { ITheme } from 'src/types/theme'
import { Topbar, Settingbar } from '@/components'

interface Props {
  route: RouteConfig
}

export default function Activation({ route }: Props) {
  const classes = useStyles()
  console.log({ route })
  return (
    <>
      <Topbar />
      <Settingbar />
      <main className={classes.main}>{renderRoutes(route.routes)}</main>
    </>
  )
}

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    main: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
  })
)
