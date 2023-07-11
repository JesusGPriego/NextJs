import React, { FC } from 'react';
import Image from 'next/image';
import { Card, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '@/interfaces';
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onPress = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Card
      isPressable
      isHoverable
      variant='bordered'
      css={{ mw: '400px' }}
      onPress={onPress}
    >
      <Card.Body css={{ p: 5 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src={pokemon.img}
            alt={pokemon.name}
            width={450}
            height={140}
            loading='lazy'
          />
        </div>
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
