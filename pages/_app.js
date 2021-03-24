import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContextProvider } from "../src/contexts/data/data.context";
import { UiContextProvider } from "../src/contexts/ui/ui.context";

export default ({ Component, pageProps }) => {
  return (
    <DataContextProvider>
      <UiContextProvider>
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
            font-family: Open Sans;
            overflow-x: hidden;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </UiContextProvider>
    </DataContextProvider>
  );
};
