/* eslint-disable react/react-in-jsx-scope */
import './global.css';
import Head from 'next/head';
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      smoothscroll.polyfill();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Daniel Simão</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
