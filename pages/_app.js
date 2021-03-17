import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

export default ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>HIIT Workout</title>
      </Head>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          max-width: 100%;
          overflow: hidden;
          font-family: Open Sans;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};
