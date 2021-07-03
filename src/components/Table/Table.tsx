import React, { memo } from 'react';

import { createStyles, makeStyles } from '@material-ui/core';
import { ITheme } from '@/types/theme';
import { Css, DotNet, File, ComputerIcon } from '@/assets/icons';

interface TableColumn {
  field: string;
  headerName: string;
  width?: string | number;
  icon?: React.ReactElement;
  base64?: string;
}

interface Props {
  columns: TableColumn[];
  rows: any[];
}

const DefaultIcon = [Css, DotNet, File, ComputerIcon];

export default memo(function Table({ columns, rows }: Props) {
  const classes = useStyles();
  console.log({ rows, columns });
  return (
    <div className={classes.table}>
      <div className={classes.row}>
        {columns.map((col, idx) => (
          <div className={classes.col} style={{ width: col.width ?? '100%' }} key={idx}>
            {col.headerName}
          </div>
        ))}
      </div>
      {rows &&
        rows.map((row, idx) => (
          <div className={classes.row} key={idx}>
            {columns.map((col, colIdx) => (
              <div
                className={classes.col}
                style={{ width: col.width ?? '100%' }}
                key={colIdx}>
                {col.base64 ? (
                  row[col.base64] ? (
                    <img
                      className={classes.icon}
                      src={`data:image/png;base64, ${row[col.base64]}`}
                    />
                  ) : (
                    <Css className={classes.icon} />
                  )
                ) : null}
                {row[col.field]}
              </div>
            ))}
          </div>
        ))}
    </div>
  );
});

const useStyles = makeStyles((theme: ITheme) =>
  createStyles({
    table: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      border: `solid 1px ${theme.palette.grey[300]}`,
      '&:last-child': {
        borderBottom: 'none',
      },
    },
    row: {
      display: 'flex',
      borderBottom: `solid 1px ${theme.palette.grey[300]}`,
    },
    col: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(2),
      borderRight: `solid 1px ${theme.palette.grey[300]}`,
    },
    icon: {
      minWidth: 40,
      minHeight: 40,
      maxWidth: 40,
      maxHeight: 40,

      marginRight: theme.spacing(2),
    },
  }),
);
