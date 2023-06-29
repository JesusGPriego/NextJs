import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Navbar from '../components/Navbar';
import MainLayout from '@/components/layouts/MainLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <MainLayout>
      <Link href='/about'>
        <h1>Ir a About</h1>
      </Link>
    </MainLayout>
  );
}
