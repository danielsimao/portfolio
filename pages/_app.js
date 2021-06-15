/* eslint-disable react/react-in-jsx-scope */
import "./global.css";
import Head from "next/head";
import smoothscroll from "smoothscroll-polyfill";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      smoothscroll.polyfill();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Daniel Simão</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="icons/favicon-16x16.png"
        />
        <link rel="manifest" href="icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
