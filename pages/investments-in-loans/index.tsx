import * as React from 'react';
import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { LPaper } from '@shared/ui/LPaper';
import RootLayout from '@views/layout/RootLayout/RootLayout';
import { InvestmentsInLoansTable } from '@views/investments-in-loans';

type Props = {
  // Add custom props here
}

const InvestmentsInLoans = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['investments-in-loans', 'layout']);

  const pageTitle = t('title', { ns: 'investments-in-loans' });

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
        <InvestmentsInLoansTable />
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
      'investments-in-loans',
      'layout'
    ])),
  },
})

export default InvestmentsInLoans;
