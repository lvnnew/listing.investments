import * as React from 'react';
import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import RootLayout from '@views/layout/RootLayout';
import { IndexTable } from '@views/index';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

type Props = {
  // Add custom props here
}

const Index = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation(['easy-investing', 'layout']);

  const pageTitle = t('title', { ns: 'easy-investing' });

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
          <Typography
            component="h1"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1, mb: 4 }}
          >
            {
              pageTitle
            }
          </Typography>
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
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
      'easy-investing',
      'layout'
    ])),
  },
})

export default Index;
