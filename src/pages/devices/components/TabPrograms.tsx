import React, { memo, useState } from 'react';
import { Card, Enumeration, DeviceIcon, Table } from '@/components';
import { ScrollableContentiner } from '@/ui/components';
import { createStyles, makeStyles } from '@material-ui/core';
import { ITheme } from '@/types/theme';
import { useEffect } from 'react';
import api from '@/api';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Props {}

export default memo(function TabPrograms({}: Props) {
  const [data, setData] = useState();
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  useEffect(() => {
    api.device.getPrograms({ id: Number(id) }).then((res: any) => {
      console.log({ res });
      setData(res.data);
    });
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.tab}>
      <ScrollableContentiner>
        <Table
          columns={[
            {
              field: 'name',
              headerName: t('devices:device_programs.program'),
              width: '20%',
              base64: 'icon',
            },
            {
              field: 'version',
              headerName: t('devices:device_programs.version'),
              width: '20%',
            },
            {
              field: 'location',
              headerName: t('devices:device_programs.path'),
              width: '20%',
            },
            {
              field: 'publisher',
              headerName: t('devices:device_programs.vendor'),
              width: '20%',
            },
            {
              field: 'instTst',
              headerName: t('devices:device_programs.date'),
              width: '20%',
            },
          ]}
          rows={data ?? []}
        />
      </ScrollableContentiner>
    </div>
  );
});

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    tab: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      height: 0,
      padding: theme.spacing(1.5, 2, 0),
    },
  }),
);
