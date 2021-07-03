import { createStyles, makeStyles } from '@material-ui/core'
import React, { memo } from 'react'
import { renderRoutes, RouteConfig } from 'react-router-config'
import { ITheme } from 'src/types/theme'

interface Props {
  route: RouteConfig
}

export default memo(function Error({ route }: Props) {
  const classes = useStyles()

  return (
    <>
      <main className={classes.main}>{renderRoutes(route.routes)}</main>
    </>
  )
})

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
