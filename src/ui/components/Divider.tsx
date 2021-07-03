import React, { ReactElement } from 'react';
import { createStyles, Divider, DividerProps, makeStyles } from '@material-ui/core';
import { ITheme } from '@/types/theme';

interface Props extends DividerProps {}
export default function UIDivider(props: Props): ReactElement {
  const classes = useStyles();
  return <Divider className={classes.divider} {...props} />;
}

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    divider: {},
  }),
);
