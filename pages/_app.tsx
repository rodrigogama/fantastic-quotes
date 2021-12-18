import '../styles/globals.css';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import type { AppProps } from 'next/app';
import { UserAuthenticationProvider } from '../context/user';
import { Navbar } from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserAuthenticationProvider>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserAuthenticationProvider>
  );
}
export default MyApp;
