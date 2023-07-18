import React, { DragEvent, FC, useContext } from 'react';
import { Card, CardActionArea, CardActions, Typography } from '@mui/material';
import { Entry } from '@/interfaces';
import { UIContext } from '@/context/ui';

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text', entry._id);
    startDragging();
  };

  const onDragEnd = () => {
    endDragging();
    console.log({ hooola: 'xdd' });
  };

  return (
    <Card
      sx={{
        marginBottom: 1,
      }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <Typography
          sx={{
            whiteSpace: 'pre-line',
            margin: 1,
          }}
        >
          {entry.description}
        </Typography>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'end',
            paddingRight: 2,
          }}
        >
          <Typography variant='body2'>hace 30 mins</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};