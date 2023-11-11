import { ReactNode } from "react";
import { appWithTranslation } from "next-i18next";
// import "dayjs/locale/ru";
// import "macro-css";
// import "normalize.css";
// import "@application/styles/global.scss";
// import "@application/styles/tippy.scss";
// import "@bestchange/fe-pub-ui/dist/fe-pub-ui.cjs.development.css";

import { useSaveLanguage } from "@shared/lib/hooks/useSaveLanguage";

function MyApp(props: any) {
  const { Component, pageProps, locale } = props;
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  useSaveLanguage(locale);

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
