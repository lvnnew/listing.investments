import Head from 'next/head';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n } from 'next-i18next';

import { LOCALES, DEFAULT_LOCALE } from '@shared/lib/types/common';
import RootLayout from '@views/layout/RootLayout';
import { IndexTable } from '@views/index';


export default function Index() {
  console.log('i18n', i18n);

  return (
    <RootLayout locale={LOCALES.RU}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexTable />
    </RootLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { locale = DEFAULT_LOCALE } = ctx;

    const locales = await serverSideTranslations(locale, ["common"]);

    return {
      props: {
        ...locales,
        locale,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
