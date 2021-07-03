import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { makeStyles, Tab, Tabs } from '@material-ui/core';
import clsx from 'clsx';

import { ITab } from '@/types/tab';

const initialConfig = [
  { id: 0, i18next: '[0] i18next', url: '/' },
  { id: 1, i18next: '[1] i18next', url: '/' },
];

interface Props {
  tabsConfig: ITab[];
  tabValue: number;
  setTabValue: (id: number) => any;
  match: any;
  className?: any;
}

const TabsComponent = ({
  tabsConfig = initialConfig,
  tabValue,
  setTabValue,
  match,
  className,
}: Props) => {
  const { t } = useTranslation();
  const classes = useStyles();

  const _renderTab = () => {
    return tabsConfig.map((tc) => {
      const { id, i18next, url } = tc;
      const label = tc.label ? tc.label : t(`${i18next}`);
      return <Tab key={id} label={label} component={RouterLink} to={url} />;
    });
  };

  useEffect(() => {
    const selectedTab = tabsConfig.find((el) => el.url === match.url);
    if (!selectedTab) return setTabValue(0);
    setTabValue(selectedTab.id);
    // eslint-disable-next-line
  }, [match]);

  return (
    <div className={clsx(classes.container, className)}>
      <Tabs
        value={tabValue}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth">
        {_renderTab()}
      </Tabs>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    zIndex: theme.zIndex.appBar,
    boxShadow: theme.shadows[3],
    backgroundColor: theme.palette.background.paper,
  },
}));

export default TabsComponent;
