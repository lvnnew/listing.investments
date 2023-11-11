import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { LocaleProvider } from '@application/providers/LocaleProvider';
import { DEFAULT_LOCALE } from '@shared/lib/types/common';
import styles from '../../../styles/Home.module.css';
import LHeader from './LHeader';

export default function RootLayout({ locale = DEFAULT_LOCALE, children }) {
  const defaultTheme = createTheme();

  return (
    <>
      <div className={styles.container}>
        <LHeader />
        <LocaleProvider locale={locale}>
          <ThemeProvider theme={defaultTheme}>
            <main>
            {children}
            </main>
          </ThemeProvider>
        </LocaleProvider>

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

      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family:
              -apple-system,
              BlinkMacSystemFont,
              Segoe UI,
              Roboto,
              Oxygen,
              Ubuntu,
              Cantarell,
              Fira Sans,
              Droid Sans,
              Helvetica Neue,
              sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
    </>
  );
}
