import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
          <link rel="manifest" href="icons/site.webmanifest" />
          <link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="Daniel Simão is a Fullstack Developer from Portugal" />
          {/* font */}
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
