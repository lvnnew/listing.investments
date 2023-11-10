declare module "i18next" {
  // @ts-ignore
  import { LOCALES } from './src/shared/lib/types/common';
  import { TFunction } from "next-i18next";

  interface CustomTypeOptions {
    returnNull: false;
  }

  interface i18n {
    resolvedLanguage: LOCALES;
    language: string;
    t: TFunction<N, TKPrefix>;
  }
}
