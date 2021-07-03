import React from 'react';
import { makeStyles } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';
import Page from '@src/components/Page/Page';

const DetailCardTab = ({ tabId, data: { id, label, component: Component, content } }) => {
  const classes = useStyles();

  return (
    <CSSTransition in={id === tabId} timeout={300} classNames={classes.tab} unmountOnExit>
      <div className={classes.tab}>
        <Page className={classes.container} title={`Задачи: ${label}`} scroll>
          <Component content={content} />
        </Page>
      </div>
    </CSSTransition>
  );
};

const useStyles = makeStyles((theme) => ({
  tab: {
    position: 'absolute',
    zIndex: 800,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    '&-enter': {
      opacity: 0,
      transform: 'scale(1.1)',
    },

    '&-enter-active': {
      opacity: 1,
      transform: 'scale(1)',
      transition: 'opacity 300ms, transform 300ms',
    },

    '&-exit': {
      opacity: 1,
      transform: 'scale(1)',
    },

    '&-exit-active': {
      opacity: 0,
      transform: 'scale(0.9)',
      transition: 'opacity 300ms, transform 300ms',
    },
  },
  container: {
    width: '100%',
  },
}));

export default DetailCardTab;
