import Head from 'next/head';
import { useEffect } from 'react';
import { useTranslation } from "next-i18next";
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import RootLayout from '@views/layout/RootLayout';
import { IndexTable } from '@views/index';
import { getLang } from '@shared/lib/helpers/getLang';

type Props = {
  // Add custom props here
}

const Index = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const { i18n, t } = useTranslation("common");
  const { t, i18n } = useTranslation('common')

  console.log('getLang', getLang());
  console.log('test', t("msg_003"));


  // const lang = req.query.lang as string;
  console.log('i18n-before', i18n);

  useEffect(() => {
    console.log('i18n-after', i18n);
  });

  return (
    <>
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootLayout>
        {/*{i18n}*/}
        <IndexTable />
      </RootLayout>
    </>
  );
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({
                                                              locale,
                                                            }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
      'easy-investing'
    ])),
  },
})


export default Index;
