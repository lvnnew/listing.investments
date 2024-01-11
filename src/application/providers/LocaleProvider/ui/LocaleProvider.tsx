import React, { ReactNode } from "react";

import { LocaleContext } from "../lib/LocaleContext";
import { LOCALES } from '@shared/lib/types/common';

interface LocalizationProviderProps {
  locale: LOCALES;
  children?: ReactNode;
}

export const LocaleProvider = ({ locale, children }: LocalizationProviderProps) => (
  <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
);
