import { ReactNode } from "react";
import { appWithTranslation } from "next-i18next";

// import { useSaveLanguage } from "@shared/lib/hooks/useSaveLanguage";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto',
  display: 'swap',
})

function MyApp(props: any) {
  const { Component, pageProps, locale } = props;
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  // useSaveLanguage(locale);

  return (
    <>{getLayout(<Component {...pageProps} />)}</>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  const { locale } = ctx;

  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
    locale,
  };
};

export default appWithTranslation(MyApp);
