import React  from "react";
import { i18n, useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import { LTableSmart } from '@shared/ui/LTableSmart';
import { easyInvestPlatformsRows } from '@views/index/lib/easyInvestPlatformsLines';

export default function IndexTable() {
  const { t } = useTranslation('easy-investing');

  const columns = [
    {
      field: 'id',
      headerName: '#',
      valueGetter: (line, lineIndex) => (line) => (
        Math.random()
        // (<>{lineIndex + 1}</>)
      )
    },
    {
      field: 'TITLE',
      headerName: t('tableColumnLabels.TITLE'),
      valueGetter: (line) => (
        `12345`
        // <Link href={line.LINK[i18n?.resolvedLanguage || 'en']}>{line.TITLE[i18n?.resolvedLanguage || 'en']}</Link>
      )
    },
    {
      field: 'COUNTRY',
      headerName: t('tableColumnLabels.COUNTRY'),
    },
    {
      field: 'SPECIALIZATION',
      headerName: t('tableColumnLabels.SPECIALIZATION'),
    },
    {
      field: 'MINIMUM_INVEST_AMOUNT',
      headerName: t('tableColumnLabels.MINIMUM_INVEST_AMOUNT'),
    },
    {
      field: 'PROFITABILITY',
      headerName: t('tableColumnLabels.PROFITABILITY'),
    },
  ];

  return (
    <>
      {/*<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>*/}
        <LTableSmart columns={columns} lines={easyInvestPlatformsRows} />
      {/*</Container>*/}
    </>
  );
}
