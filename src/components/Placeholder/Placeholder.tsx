import React from 'react';
import { makeStyles } from '@material-ui/core';

interface Props {
  placeholder: string;
}

const Placeholder = ({ placeholder }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <p className={classes.placeholder}>{placeholder}</p>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },

  placeholder: {
    ...theme.typography.h4,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.primary,

    // backgroundSize: "400% 400%",
    // background: "linear-gradient(to right, #0e0d0d 45%, #f7f3f3 , #101010 55%)",
    // "-webkit-background-clip": "text",
    // "-webkit-text-fill-color": "transparent",
    // animation: "rainbow 10s ease infinite",
    // animationDelay: "-6s",
  },
}));

export default Placeholder;
