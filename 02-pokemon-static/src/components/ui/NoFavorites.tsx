import React from 'react';
import { Container, Text } from '@nextui-org/react';
import Image from 'next/image';
export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text h1>No hay favoritos</Text>
      <Image
        src={
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        }
        alt='no hay favoritos image'
        height={250}
        width={250}
        style={{
          opacity: 0.1,
        }}
      />
    </Container>
  );
};
