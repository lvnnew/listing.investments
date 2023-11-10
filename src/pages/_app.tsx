import { ReactNode } from "react";
import { appWithTranslation } from "next-i18next";
// import { isEmpty } from "ramda";
// import { Provider } from "mobx-react";
// import "dayjs/locale/ru";
// import "macro-css";
// import "normalize.css";
import "@application/styles/global.scss";
import "@application/styles/tippy.scss";

import { useSaveLanguage } from '@shared/lib/hooks/useSaveLanguage';
// import { ToastProvider } from "@application/providers/ToastProvider";
// import { LocalizationProvider } from "@application/providers/LocalizationProvider";
// import initializeStore from "../store/mobxSsrStore";
// import { useGlobalStore } from "@store/globalStore";

function MyApp(props: any) {
  const { Component, pageProps, locale } = props;
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  useSaveLanguage(locale);

  return (
    // <Provider {...store}>
    //   <LocalizationProvider>
        {/*<ToastProvider>*/}
          <>555{getLayout(<Component {...pageProps} />)}</>
        {/*</ToastProvider>*/}
      // </LocalizationProvider>
    // </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  const { locale } = ctx;
  // const mobxStore = await initializeStore();
  //
  // if (isEmpty(mobxStore.store.exchangeUnits)) {
  //   await mobxStore.store.fetchExchangeUnits({ locale });
  // }
  //
  // if (isEmpty(mobxStore.store.locales)) {
  //   await mobxStore.store.fetchLocales({});
  // }
  //
  // ctx.mobxStore = mobxStore;
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
    // mobxStore,
    locale,
  };
};

export default appWithTranslation(MyApp);
