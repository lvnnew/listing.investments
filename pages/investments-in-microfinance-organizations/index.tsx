import * as React from 'react';
import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import RootLayout from '@views/layout/RootLayout/RootLayout';
import { InvestmentsInMFOTable } from '@views/investments-in-microfinance-organizations';

type Props = {
  // Add custom props here
}

const InvestmentsInMicrofinanceOrganizations = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['common', 'investments-in-microfinance-organizations', 'layout']);

  const pageTitle = t('title', { ns: 'investments-in-microfinance-organizations' });

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
        <InvestmentsInMFOTable />
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
      'investments-in-microfinance-organizations',
      'common-invest-table',
      'layout',
      'common'
    ])),
  },
})

export default InvestmentsInMicrofinanceOrganizations;
