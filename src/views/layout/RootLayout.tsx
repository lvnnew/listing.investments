import { useTranslation } from 'next-i18next';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

import LHeaderBlog from '@views/layout/LHeaderBlog';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto',
  display: 'swap',
});

export default function RootLayout({ children }) {
  const defaultTheme = createTheme({
    typography: {
      fontFamily: 'inherit',
    },
  });
  const { t } = useTranslation('layout');

  const headerSections = [
    { title: t('menu.RiskyInvestments'), url: '/' },
    { title: t('menu.InvestmentsInBali'), url: '/investments-in-bali' },
    { title: t('menu.InvestmentsInDubai'), url: '/investments-in-dubai' },
  ];

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={roboto.className} style={{
        backgroundColor: defaultTheme.palette.mode === 'light'
          ? defaultTheme.palette.grey[100]
          : defaultTheme.palette.grey[900],
        width: '100%',
      }}>
        <Container maxWidth="lg">
          <main>
            <LHeaderBlog title={t('title')} sections={headerSections} />

            {children}

            <footer>
              <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer.Copyright')}
              </a>
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
