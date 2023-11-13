import Head from 'next/head';
import { useEffect } from 'react';
import { useTranslation } from "next-i18next";

import { LOCALES } from '@shared/lib/types/common';
import RootLayout from '@views/layout/RootLayout';
import { IndexTable } from '@views/index';


export default function Index() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    console.log('i18n-after', i18n);
    // code to run after render goes here
  });

  return (
    <RootLayout locale={LOCALES.EN}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*{i18n}*/}

      <IndexTable />
    </RootLayout>
  );
}
