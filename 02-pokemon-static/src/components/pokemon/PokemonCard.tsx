import React, { FC } from 'react';
import { Button, Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '@/interfaces';

interface Props {
  pokemon: SmallPokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  return (
    <Card isPressable isHoverable variant='bordered' css={{ mw: '400px' }}>
      <Card.Body css={{ p: 5 }}>
        <Card.Image src={pokemon.img} width={'100%'} height={140} />
      </Card.Body>
      <Card.Footer>
        <Row justify='space-between'>
          <Text transform='capitalize'>{pokemon.name}</Text>
          <Text>{pokemon.id}</Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default PokemonCard;
