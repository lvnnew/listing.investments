import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { LocaleProvider } from '@application/providers/LocaleProvider';
import { DEFAULT_LOCALE } from '@shared/lib/types/common';

export default function RootLayout({ locale = DEFAULT_LOCALE, children }) {
  const defaultTheme = createTheme();

  return (
    <>
      <LocaleProvider locale={locale}>
        <ThemeProvider theme={defaultTheme}>
          {children}
        </ThemeProvider>
      </LocaleProvider>
    </>
  );
}
