import Head from 'next/head';
import { useEffect } from 'react';
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router'

import { LOCALES } from '@shared/lib/types/common';
import RootLayout from '@views/layout/RootLayout';
import { IndexTable } from '@views/index';

import { getLang } from '@shared/lib/helpers/getLang';

export default function Index() {
  const { i18n, t } = useTranslation("common");

  console.log('getLang', getLang());
  console.log('test', t("msg_003"));


  // const lang = req.query.lang as string;
  console.log('i18n-before', i18n);

  useEffect(() => {
    console.log('i18n-after', i18n);
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
