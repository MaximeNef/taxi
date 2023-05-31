import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

const App = ({ Component, pageProps }: AppProps) => 
{
  useEffect(() => {
  AOS.init();
  }, []);

  return (
  <I18nextProvider i18n={i18n}>
  <Component {...pageProps} />
  </I18nextProvider>
  );
};

export default appWithTranslation(App);

