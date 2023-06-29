import Link from 'next/link';
import { Inter } from 'next/font/google';
import MainLayout from '@/components/layouts/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Contact() {
  return (
    <>
      <MainLayout>
        <Link href='/'>
          <h1>Ir a Home</h1>
        </Link>
      </MainLayout>
    </>
  );
}
