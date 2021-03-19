import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContextProvider } from "../src/contexts/data/data.context";

export default ({ Component, pageProps }) => {
  return (
    <DataContextProvider>
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
    </DataContextProvider>
  );
};
