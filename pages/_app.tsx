import '../styles/globals.css';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import type { AppProps } from 'next/app';
import { Navbar } from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
export default MyApp;
