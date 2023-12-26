import * as React from 'react';
import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import { LH1 } from '@shared/ui/LH1';
import { LOCALES } from '@shared/lib/types/common';
import RootLayout from '@views/layout/RootLayout';
import { IndexTable } from '@views/index';

type Props = {
  // Add custom props here
}

const Index = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['investments-in-bali', 'layout']);

  const pageTitle = t('title', { ns: 'investments-in-bali' });

  return (
    <>
      <Head>
        <title>
          {
            t('title', { ns: 'layout'}) + " | " + pageTitle
          }
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootLayout>
        <Container maxWidth="lg" sx={{ mt: 0, mb: 0 }}>
          <LH1>
            {pageTitle}
          </LH1>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <IndexTable />
          </Paper>
        </Container>
      </RootLayout>
    </>
  );
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? LOCALES.EN, [
      'common',
      'investments-in-bali',
      'layout'
    ])),
  },
})

export default Index;
