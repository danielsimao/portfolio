import Document, { Head, Html, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../utils/gtag';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <title>Daniel Simão - Fullstack Developer</title>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
          <link rel="manifest" href="icons/site.webmanifest" />
          <link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          <meta name="title" content="Daniel Simão - Fullstack Developer" />
          <meta name="description" content="Daniel Simão is a Fullstack Developer from Portugal" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://danielsimao.dev/" />
          <meta property="og:title" content="Daniel Simão - Fullstack Developer" />
          <meta
            property="og:description"
            content="Daniel Simão is a Fullstack Developer from Portugal"
          />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://danielsimao.dev/" />
          <meta property="twitter:title" content="Daniel Simão - Fullstack Developer" />
          <meta
            property="twitter:description"
            content="Daniel Simão is a Fullstack Developer from Portugal"
          />
          <meta property="twitter:image" content="" />

          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Carrois+Gothic&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="stylesheet"
          />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
