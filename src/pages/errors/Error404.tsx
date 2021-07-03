import { createStyles, makeStyles } from '@material-ui/core'
import React from 'react'
import { ITheme } from 'src/types/theme'
import { Button } from '@/ui/components'
import png from '../../assets/png/404.png'
import { useHistory } from 'react-router-dom'

export default () => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <div className={classes.error}>
      <img className={classes.img} src={png} />
      <Button className={classes.btn} onClick={() => history.goBack()}>
        Go to back
      </Button>
    </div>
  )
}

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    error: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      padding: 0,
      backgroundColor: theme.palette.background.paper,
    },
    img: { height: 'auto' },
    btn: { transform: 'translateY(-160px)' },
  })
)
