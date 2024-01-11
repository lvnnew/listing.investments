import { useTranslation } from 'next-i18next';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';

import { MAIN_FONT_CLASSNAME } from '@application/helpers/fonts';
import { LOCALES } from '@shared/lib/types/common';
import { LH1 } from '@shared/ui/LH1';
import { LPaper } from '@shared/ui/LPaper';
import LHeaderTitle from '@views/layout/RootLayout/components/LHeaderTitle';
import { IHeaderLinkButton } from '@views/layout/RootLayout/types';

export function RootLayout({ children, pageTitle }) {
  const router = useRouter();

  const defaultTheme = createTheme({
    typography: {
      fontFamily: 'inherit',
    },
  });
  const { t } = useTranslation('layout');

  const urlLocalePrefix = router.locale === LOCALES.EN
    ? ``
    : `/${router.locale}`;

  const headerLinkButtons: IHeaderLinkButton[] = [
    { title: t('menu.RiskyInvestments'), url: `${urlLocalePrefix}/investments-in-loans` },
    { title: t('menu.InvestmentsInMFO'), url: `${urlLocalePrefix}/investments-in-microfinance-organizations` },
    { title: t('menu.InRealEstate'), linkList: [
      { title: t('menu.InvestmentsInBali'), url: `${urlLocalePrefix}/investments-in-bali` },
      { title: t('menu.InvestmentsInDubai'), url: `${urlLocalePrefix}/investments-in-dubai` },
    ] },
  ];

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={MAIN_FONT_CLASSNAME} style={{
        backgroundColor: defaultTheme.palette.mode === 'light'
          ? defaultTheme.palette.grey[100]
          : defaultTheme.palette.grey[900],
        width: '100%',
      }}>
        <Container maxWidth="lg">
          <main>
            <LHeaderTitle title={t('title')} linkButtons={headerLinkButtons} />

            <Container maxWidth="lg" sx={{ mt: 0, mb: 0 }}>
              <LH1>
                {pageTitle}
              </LH1>
              <LPaper>
                {children}
              </LPaper>
            </Container>

            <footer>
              {t('footer.Copyright')}
              {/*<a*/}
              {/*  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
              {/*  target="_blank"*/}
              {/*  rel="noopener noreferrer"*/}
              {/*>*/}
              {/*</a>*/}
            </footer>
          </main>
        </Container>
      </div>

      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
        }
      `}</style>

      <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
      }
      * {
        box-sizing: border-box;
      }
    `}</style>
    </ThemeProvider>
  );
}

export default RootLayout;
