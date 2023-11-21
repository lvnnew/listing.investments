import React  from "react";
import { i18n, useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';

import { LTable } from '@shared/ui/LTable';
import { easyInvestPlatformsLines } from '@views/index/lib/easyInvestPlatformsLines';

export default function IndexTable() {
  const { t } = useTranslation('easy-investing');

  const columns = [
    {
      fieldKey: 'ID',
      fieldLabel: '#',
      valueMaker: (line, lineIndex) => (<>{lineIndex + 1}</>)
    },
    {
      fieldKey: 'TITLE',
      fieldLabel: t('tableColumnLabels.TITLE'),
      valueMaker: (line) => (<>
        <a href={line.LINK[i18n?.resolvedLanguage || 'en']}>{line.TITLE[i18n?.resolvedLanguage || 'en']}</a>
      </>)
    },
    {
      fieldKey: 'COUNTRY',
      fieldLabel: t('tableColumnLabels.COUNTRY'),
    },
    {
      fieldKey: 'SPECIALIZATION',
      fieldLabel: t('tableColumnLabels.SPECIALIZATION'),
    },
    {
      fieldKey: 'MINIMUM_INVEST_AMOUNT',
      fieldLabel: t('tableColumnLabels.MINIMUM_INVEST_AMOUNT'),
    },
    {
      fieldKey: 'PROFITABILITY',
      fieldLabel: t('tableColumnLabels.PROFITABILITY'),
    },
  ];

  return (
    <>
      {/*<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>*/}
        <LTable columns={columns} lines={easyInvestPlatformsLines} />
      {/*</Container>*/}
    </>
  );
}
