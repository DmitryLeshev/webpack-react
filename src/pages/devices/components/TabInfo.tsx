import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { createStyles, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

import { Card, Enumeration, DeviceIcon, Table } from '@/components';
import { Typography, Button, ScrollableContentiner } from '@/ui/components';
import { ITheme } from '@/types/theme';
import api from '@/api';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

interface Props {
  route: any;
  className: string;
}

export const DeviceTypeName: any = {
  0: 'unknown',
  1: 'station',
  2: 'server',
  3: 'printer',
  4: 'router',
  5: 'ip_telephony',
  6: 'camera',
  7: 'tv',
  8: 'tv_box',
  9: 'wifi',
  10: 'phone',
  11: 'security',
  12: 'cash',
  13: 'bluetooth',
};

export default memo(function TabInfo({ route, className }: Props) {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<any>();
  const [cards, setCards] = useState<string[]>();

  useEffect(() => {
    api.device.get({ id: Number(id) }).then((res: any) => {
      console.log({ res });
      setCards(Object.keys(res.data));
      setData(res.data);
    });
  }, [id]);

  // const cards = ['resume', 'usb', 'equipment', 'main'];
  const agentActions: { label: string }[] = t(`devices:info.agent.actions`, {
    returnObjects: true,
  });

  const classes = useStyles();

  const resumeDataKeys = ['name', 'type'];
  const resumeData =
    data &&
    data.resume &&
    resumeDataKeys.map((key) => {
      let value = data.resume[key];
      value =
        typeof value === 'number' ? (
          <div className={classes.value}>
            <DeviceIcon type={value} />
            <Typography>{DeviceTypeName[value]}</Typography>
          </div>
        ) : (
          value
        );
      return { key: t(`devices:info.${key}`), value };
    });
  const resume = (
    <Card
      header={<Typography variant="h4">{t(`devices:info.resume.title`)}</Typography>}
      body={
        <>
          <Enumeration items={resumeData} />
        </>
      }
    />
  );

  const ports = (
    <Card
      className={classes.ports}
      header={<Typography variant="h4">{t(`devices:info.ports.title`)}</Typography>}
      body={
        <>
          <Table
            columns={[
              { headerName: t('devices:info.number'), field: 'number', width: '20%' },
              { headerName: t('devices:info.type'), field: 'type', width: '20%' },
              { headerName: t('devices:info.protocol'), field: 'protocol', width: '20%' },
              { headerName: t('devices:info.banner'), field: 'banner', width: '40%' },
            ]}
            rows={data?.ports ?? []}
          />
        </>
      }
    />
  );

  const agent = (
    <Card
      header={<Typography variant="h4">{t(`devices:info.agent.title`)}</Typography>}
      footer={
        Array.isArray(agentActions)
          ? agentActions.map((action) => (
              <Button className={classes.btn} fullWidth key={action.label}>
                {action.label}
              </Button>
            ))
          : null
      }
    />
  );

  return (
    <div className={classes.tab}>
      <ScrollableContentiner>
        <div className={clsx(classes.container, className)}>
          {data?.resume && resume}
          {agent}
          {data?.ports && ports}
        </div>
      </ScrollableContentiner>
    </div>
  );
});

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    container: {
      gridTemplateColumns: `1fr 1fr`,
      gridAutoRows: `max-content`,
      paddingBottom: theme.spacing(1.5),
      alignItems: 'baseline',
      flexDirection: 'column',
      height: '100%',
    },
    icon: { marginLeft: 'auto' },
    btn: { marginRight: theme.spacing(2), '&:last-child': { marginRight: 0 } },
    value: { display: 'flex', '& > p': { marginLeft: theme.spacing(2) } },
    ports: { gridColumn: '1/3' },
    tab: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      height: 0,
      padding: theme.spacing(1.5, 0, 0),
    },
  }),
);

// {cards &&
//   cards.length > 0 &&
//   cards.map((card) => {
//     const list: { label: string }[] = t(`devices:info.${card}.list`, {
//       returnObjects: true,
//     });
//     const items = Array.isArray(list)
//       ? list.map((item, idx) => {
//           return { key: item.label, value: String(idx + 1) };
//         })
//       : [];
//     const header = (
//       <>
//         <Typography variant="h4">{t(`devices:info.${card}.title`)}</Typography>
//         {card === 'resume' && (
//           <IconButton className={classes.icon} size="small">
//             <CreateIcon />
//           </IconButton>
//         )}
//       </>
//     );
//     const body = <Enumeration items={items} />;
//     return <Card key={card} header={header} body={body} />;
//   })}
