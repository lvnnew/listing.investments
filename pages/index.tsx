import Head from 'next/head';

import RootLayout from '../src/views/layout/RootLayout';
import { LOCALES } from '@shared/lib/types/common';
import { IndexTable } from '../src/views/index';

export default function Index() {
  return (
    <RootLayout lang={LOCALES.EN}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IndexTable />
    </RootLayout>
  );
}
