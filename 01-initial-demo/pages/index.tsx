import Link from 'next/link';
import { Inter } from 'next/font/google';
import MainLayout from '@/components/layouts/MainLayout';
import DarkLayout from '@/components/layouts/DarkLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const inter = Inter({ subsets: ['latin'] });

const Home: NextPageWithLayout = () => {
  return (
    <Link href='/about'>
      <h1>Ir a About</h1>
    </Link>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
