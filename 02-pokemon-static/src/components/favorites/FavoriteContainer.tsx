import React, { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { FavoriteCard } from './FavoriteCard';

interface Props {
  favorites: number[];
}

export const FavoriteContainer: FC<Props> = ({ favorites }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {favorites.map((id: number) => (
        <FavoriteCard key={id} id={id} />
      ))}
    </Grid.Container>
  );
};
