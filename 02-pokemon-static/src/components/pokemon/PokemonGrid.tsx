import { Grid } from '@nextui-org/react';
import React, { FC } from 'react';
import { PokemonCard } from './';
import { SmallPokemon } from '../../interfaces/pokemon-list';

interface Props {
  pokemons: SmallPokemon[];
}

const PokemonGrid: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify='flex-start'>
      {pokemons.map((pokemon) => (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default PokemonGrid;
