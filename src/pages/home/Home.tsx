import React, { memo, useEffect, useState } from 'react'
import { renderRoutes } from 'react-router-config'
import { useTranslation } from 'react-i18next'

import { createStyles, makeStyles } from '@material-ui/core'

import { Page } from '@/components'
import { ITheme } from '@/types/theme'

// import { TopTasks, Internet, Network } from './components'
// import { ScrollableContentiner } from '@/ui/components'
import api from '@/api'

interface Props {
  route: any
}

export default memo(function Home({ route }: Props) {
  const { t } = useTranslation()
  const classes = useStyles()
  const [tasks, setTasks] = useState<any>([])
  const [incidents, setIncidents] = useState<any>([])
  const [network, setNetwork] = useState<any>()

  useEffect(() => {
    api.main.index().then((res: any) => {
      const { incidents, tasks, localNetwork } = res?.data
      if (tasks) setTasks(tasks)
      if (incidents) setIncidents(incidents)
      if (localNetwork) setNetwork(localNetwork)
    })
  }, [])

  return (
    <Page title={t('home:page')}>
      {/* <ScrollableContentiner> */}
      <div className={classes.temlate}>
        page home
        {/* <Internet />
          <Network network={network} />
          <div className={classes.tt}>
            <TopTasks isIncident={false} tasks={tasks} />
            <TopTasks isIncident={true} tasks={incidents} />
          </div> */}
      </div>
      {/* </ScrollableContentiner> */}
      {renderRoutes(route.routes)}
    </Page>
  )
})

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    temlate: {
      flexGrow: 1,
      display: 'grid',
      gridGap: theme.spacing(3),
      padding: theme.spacing(1.5, 5),
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      // gridTemplateAreas: `
      //   "in in in in hm hm"
      // `,
    },
    tt: {
      display: 'grid',
      gridColumn: '1/5',
      gridTemplateColumns: '1fr 1fr',
      gridGap: theme.spacing(3),
    },
  })
)
