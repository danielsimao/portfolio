/* eslint-disable react/react-in-jsx-scope */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import './global.css';

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

  return <Component {...pageProps} />;
}

export default MyApp;
