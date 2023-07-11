import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';
import Navbar from '../ui/Navbar';

type Props = {
  title?: string;
};

const origin = typeof window === 'undefined' ? '' : window.location.origin;

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
        <meta property='og:title' content={`Información sobre ${title}`} />
        <meta
          property='og:description'
          content={`En esta página se encuentra información sobre el pokémon ${title}`}
        />
        <meta property='og:image' content={`${origin}/images/banner.png`} />
      </Head>
      <Navbar />
      <main style={{}}>{children}</main>
    </>
  );
};

export default Layout;
