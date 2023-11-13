import { useRouter } from 'next/router';

import { DEFAULT_LOCALE } from '@shared/lib/types/common';

export const getLang = () => {
  const router = useRouter();
  const URLLocale = router.locale;

  return URLLocale === 'default'
    ? DEFAULT_LOCALE
    : URLLocale;
}
