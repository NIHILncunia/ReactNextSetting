import React from 'react';
import Head from 'next/head';

const App = ({ Component, pageProps, }) => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8'/>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;