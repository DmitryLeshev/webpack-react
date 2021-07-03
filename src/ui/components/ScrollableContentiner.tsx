import { ITheme } from 'src/types/theme'
import { createStyles, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import React, { ReactElement } from 'react'
// import SimpleBar from 'simplebar-react';

interface Props {
  children: React.ReactNode
  className?: string
}

export default function ScrollableContentiner({
  children,
  className,
}: Props): ReactElement {
  const classes = useStyles()
  return <div className={clsx(classes.scroll, className)}>{children}</div>
}

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    scroll: { height: 0, flexGrow: 1 },
    contentEl: { display: 'flex', flexDirection: 'column' },
  })
)
