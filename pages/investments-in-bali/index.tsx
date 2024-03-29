import Head from 'next/head';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { LOCALES } from '@shared/lib/types/common';
import { LPageInDevelopment } from '@shared/ui/LPageInDevelopment';
import RootLayout from '@views/layout/RootLayout/RootLayout';

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
            t('title', { ns: 'layout' }) + " | " + pageTitle
          }
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RootLayout pageTitle={pageTitle}>
        <LPageInDevelopment />
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
