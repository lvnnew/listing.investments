import Head from 'next/head';

import { LOCALES } from '@shared/lib/types/common';
import RootLayout from '@views/layout/RootLayout';
import { IndexTable } from '@views/index';

import { i18n } from 'next-i18next';

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
