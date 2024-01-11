import * as React from 'react';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { RootLayout } from '@layout/RootLayout';

type Props = {
  // Add custom props here
}

const Index = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['common', 'layout', 'index']);

  const pageTitle = t('title', { ns: 'index' });

  return (
    <>
      <Head>
        <title>
          {
            t('title', { ns: 'layout' }) + " | " + pageTitle
          }
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootLayout pageTitle={pageTitle}>
        ---
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
      'layout',
      'index',
    ])),
  },
})

export default Index;
