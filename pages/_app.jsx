/* eslint-disable react/react-in-jsx-scope */
import './global.css';
import Head from 'next/head';
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      smoothscroll.polyfill();
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
