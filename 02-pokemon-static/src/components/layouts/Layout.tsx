import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';
import Navbar from '../ui/Navbar';

type Props = {
  title?: string;
};

const Layout: FC<PropsWithChildren<Props>> = ({
  children,
  title = 'Pokemon App',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='author' content='Suleware' />
        <meta name='description' content={`${title} pokemon Info`} />
        <meta
          name='keywords'
          content={`${title}, pokemon, Info, pokedex, pokédex, pokémon`}
        />
      </Head>
      <Navbar />
      <main style={{}}>{children}</main>
    </>
  );
};

export default Layout;
