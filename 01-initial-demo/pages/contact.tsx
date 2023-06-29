import Link from 'next/link';
import { Inter } from 'next/font/google';
import MainLayout from '@/components/layouts/MainLayout';
import DarkLayout from '@/components/layouts/DarkLayout';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const inter = Inter({ subsets: ['latin'] });

const Contact: NextPageWithLayout = () => {
  return (
    <Link href='/'>
      <h1>Ir a Home</h1>
    </Link>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
