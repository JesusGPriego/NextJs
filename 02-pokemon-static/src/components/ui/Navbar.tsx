import { Link, Spacer, Text, useTheme } from '@nextui-org/react';
import NextLink from 'next/link';
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
      <NextLink href='/' passHref legacyBehavior>
        <Link>
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
        </Link>
      </NextLink>
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
        <NextLink href='/favorites' passHref legacyBehavior>
          <Link>
            <Text color='white'>Favoritos</Text>
          </Link>
        </NextLink>
      </div>
    </div>
  );
};

export default Navbar;
