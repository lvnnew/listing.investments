import { useTranslation } from 'next-i18next';

export const LPageInDevelopment = () => {
  const { t } = useTranslation('common');

  const label = t('pageInDevelopment', { ns: 'common' });
  return <>{label}</>
};
