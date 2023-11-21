import { ReactNode } from "react";
import { appWithTranslation } from "next-i18next";

// import { useSaveLanguage } from "@shared/lib/hooks/useSaveLanguage";

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
  console.log('ctx', ctx);

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
