import React  from "react";
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import { LTableSmart } from '@shared/ui/LTableSmart';
import {
  easyInvestPlatformsLinesByLang,
  easyInvestPlatformsRows,
} from '@views/index/lib/easyInvestPlatformsLines';

export default function IndexTable() {
  const { i18n, t } = useTranslation('easy-investing');
  console.log('langu-age', easyInvestPlatformsLinesByLang(i18n?.resolvedLanguage || 'en'));

  const columns = [
    {
      field: 'id',
      headerName: '#',
      width: 20,
    },
    {
      field: 'TITLE',
      headerName: t('tableColumnLabels.TITLE'),
      renderCell: (line, lineIndex) => {
        console.log(line, lineIndex)
        return <><Link href={line.row.LINK[i18n?.resolvedLanguage || 'en']}>
          {line.row.TITLE[i18n?.resolvedLanguage || 'en']}
        </Link></>
      },
      width: 150,
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
      width: 200,
    },
    {
      field: 'PROFITABILITY',
      headerName: t('tableColumnLabels.PROFITABILITY'),
      width: 200,
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
