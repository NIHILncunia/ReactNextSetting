import React from 'react';
import Head from 'next/head';

const App = ({ Component, pageProps, }) => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8'/>
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name={'viewport'} content={'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0'} />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;