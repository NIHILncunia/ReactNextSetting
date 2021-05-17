import Document, { Html, Head, Main, NextScript } from 'next/document';

class NextDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, };
  }

  render() {
    return (
      <Html lang='ko'>
        <Head>
          <meta charSet='UTF-8'/>
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <meta name={'viewport'} content={'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0'} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default NextDocument;