import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContextProvider } from "../src/contexts/data/data.context";
import { UiContextProvider } from "../src/contexts/ui/ui.context";

export default ({ Component, pageProps }) => {

  const init = () => {
    if (process.env.NODE_ENV === 'production') {
      if (location.protocol !== 'https:') {
        location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
      }
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:2317955,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    }
  };

  return (
    <DataContextProvider>
      <UiContextProvider>
        <Head>
          <title>HIIT Workout</title>
          <script>{ process.browser && init() }</script>
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
