import { ITheme } from '@/types/theme'
import { createStyles, makeStyles } from '@material-ui/core'
import { renderRoutes } from 'react-router-config'

export default ({ route }: any) => {
  const classes = useStyles()
  return <div className={classes.stepper}>{renderRoutes(route.routes)}</div>
}

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    stepper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
    },
  })
)
