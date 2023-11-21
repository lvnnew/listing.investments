import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Container from '@mui/material/Container';

import RootLayout from '@views/layout/RootLayout';
import { IndexTable } from '@views/index';

type Props = {
  // Add custom props here
}

const Index = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootLayout>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <IndexTable />
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
      'easy-investing'
    ])),
  },
})


export default Index;
