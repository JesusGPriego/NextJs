import React from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import styles from './MainLayout.module.css';

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar />
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
