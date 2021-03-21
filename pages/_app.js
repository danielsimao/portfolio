/* eslint-disable react/react-in-jsx-scope */
import "./global.css";
import Head from "next/head";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
