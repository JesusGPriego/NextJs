import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src={
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        }
        width={50}
        height={50}
        alt='appIcon'
      />
      <Text color='white' h2>
        P
      </Text>
      <Text color='white' h3>
        okémon
      </Text>
      <div
        style={{
          display: 'flex',
          flex: 1,
          paddingRight: '15px',
        }}
      >
        <Spacer
          css={{
            flex: 1,
          }}
        />
        <Text color='white' h3>
          Favoritos
        </Text>
      </div>
    </div>
  );
};

export default Navbar;
