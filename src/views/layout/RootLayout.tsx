import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'next-i18next';
import { Container } from '@mui/material';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin', 'cyrillic'],
})

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <main className={roboto.className}>
//       <Component {...pageProps} />
//     </main>
//   )
// }

import styles from '../../../styles/Home.module.css';
// import LHeader from './LHeader';
import LHeaderBlog from '@views/layout/LHeaderBlog';

export default function RootLayout({ children }) {
  const defaultTheme = createTheme();
  const { t } = useTranslation("common");

  const headerSections = [
    { title: 'Рисковые инвестиции', url: '#' },
    { title: 'В недвижимость на Бали', url: '#' },
    { title: 'В недвижимость в Дубае', url: '#' },
  ];

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <div className={roboto.className} style={{
          backgroundColor: defaultTheme.palette.mode === 'light'
              ? defaultTheme.palette.grey[100]
              : defaultTheme.palette.grey[900],
          width: '100%',
        }}>
          <Container maxWidth="lg" sx={{
            // backgroundColor: (theme) =>
            //   theme.palette.mode === 'light'
            //     ? theme.palette.grey[100]
            //     : theme.palette.grey[900],
          }}>
            <div className={styles.container}>
              {/*<LHeader />*/}
              <LHeaderBlog title={'Listing.Investments'} sections={headerSections} style={{
                width: '100%',
              }} />
              {/*<LocaleProvider locale={locale}>*/}
                  <main>
                    {children}
                  </main>
              {/*</LocaleProvider>*/}

              <footer>
                <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Listing.Investments, 2023
                </a>
              </footer>
            </div>
          </Container>
        </div>
      </ThemeProvider>

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
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            // background-color: #F3F6F9;
            width: 100%;
            // justify-content: center;
            // align-items: center;
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
          // font-family:
          //   Menlo,
          //   Monaco,
          //   Lucida Console,
          //   Liberation Mono,
          //   DejaVu Sans Mono,
          //   Bitstream Vera Sans Mono,
          //   Courier New,
          //   monospace;
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
    </>
  );
}
