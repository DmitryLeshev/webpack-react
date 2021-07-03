import React, { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  Card,
  CardActions,
  CardContent,
  createStyles,
  makeStyles,
  Typography,
} from '@material-ui/core'

import { Input, Button } from '@/ui/components'
import { ITheme } from 'src/types/theme'

interface Props {}
interface State {
  login: string
  password: string
}
export default function Auth({}: Props) {
  const { t } = useTranslation()

  const [state, setState] = useState<State>({ login: '', password: '' })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget
    console.log({ name, value })
    setState((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography variant="subtitle2" gutterBottom>
          {t('auth:enter')}
        </Typography>

        <Input
          className={classes.input}
          name="login"
          label={t('auth:login')}
          value={state.login}
          onChange={onChange}
        />
        <Input
          className={classes.input}
          name="password"
          label={t('auth:password')}
          value={state.password}
          onChange={onChange}
          type="password"
        />
      </CardContent>
      <CardActions>
        <Button
          className={classes.btn}
          onClick={async () => {
            const { login, password } = state
            // await application?.auth?.login({ login, password });
            // await application?.auth?.checkAuth();
          }}
        >
          {t('auth:login-to')}
        </Button>
      </CardActions>
    </Card>
  )
}

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    card: {
      display: 'flex',
      flexDirection: 'column',
      width: 400,
      padding: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        margin: theme.spacing(3),
      },
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      padding: 0,
    },
    input: { marginTop: theme.spacing(1) },
    btn: { marginLeft: 'auto', marginTop: theme.spacing(2) },
  })
)
