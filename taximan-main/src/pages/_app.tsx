import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import Head from "next/head";
import Script from "next/script";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        {/* UXWIZZ script update script */}
        <Script id='uxwizz'>
          UST_CT = []; UST = "
          {"s: Date.now(), addTag: function(tag) {UST_CT.push(tag)} "}
          ";UST.addEvent = UST.addTag;
        </Script>
        <Script
          src='https://stats.listri.digital/server/ust.min.js?v=4.5.0'
          async
        ></Script>
        {/* FIN UXWIZZ script  */}
      </Head>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>{" "}
    </>
  );
};

export default appWithTranslation(App);
