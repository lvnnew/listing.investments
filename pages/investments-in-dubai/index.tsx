import * as React from 'react';
import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import RootLayout from '@views/layout/RootLayout';
import { LPageInDevelopment } from '@shared/ui/LPageInDevelopment/LPageInDevelopment';
import { LH1 } from '@shared/ui/LH1/LH1';

type Props = {
  // Add custom props here
}

const Index = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['common', 'investments-in-dubai', 'layout']);

  const pageTitle = t('title', { ns: 'investments-in-dubai' });

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
            <LPageInDevelopment />
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
    ...(await serverSideTranslations(locale ?? 'en', [
      'investments-in-dubai',
      'layout',
      'common'
    ])),
  },
})

export default Index;
