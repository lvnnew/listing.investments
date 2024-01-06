import React, { ReactNode } from "react";

import { LocaleContext } from "../lib/LocaleContext";

interface LocalizationProviderProps {
  children?: ReactNode;
  locale: any;
}

export const LocaleProvider = ({ locale, children }: LocalizationProviderProps) => (
  <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
);
