import { useEffect } from "react";
import { useRouter } from "next/router";

import { setLanguage } from "@shared/lib/cookies/language";

const CONFIRM_EMAIL_PATH_NAME = "/user/p/t/[id]/[code]";

const NOT_NEED_SAVE_PATH_NAMES = [CONFIRM_EMAIL_PATH_NAME];

export const useSaveLanguage = (locale: string) => {
  const router = useRouter();

  useEffect(() => {
    if (NOT_NEED_SAVE_PATH_NAMES.includes(router.pathname)) return;

    setLanguage(locale);
  }, [locale, router.pathname]);

  useEffect(() => {
    if (router.locale === "en" && router.isReady) {
      router.push({ pathname: router.pathname, query: router.query }, router.asPath, {
        locale: "default",
        shallow: true,
      });
    }
  }, [router]);
};
