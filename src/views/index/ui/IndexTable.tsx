import React  from "react";
import { useTranslation } from 'next-i18next';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import { LTableSmart } from '@shared/ui/LTableSmart';
import { localizeEasyInvestPlatformsLines } from '@views/index/lib/easyInvestPlatformsLines';

export default function IndexTable() {
  const { i18n, t } = useTranslation('easy-investing');
  const localizedEasyInvestPlatformsLines = localizeEasyInvestPlatformsLines(i18n?.resolvedLanguage || 'en')

  const columns = [
    {
      field: 'id',
      headerName: '#',
      width: 30,
    },
    {
      field: 'TITLE',
      headerName: t('tableColumnLabels.TITLE'),
      renderCell: (line, lineIndex) => {
        // console.log(line, lineIndex)
        return <><Link href={line.row.LINK} target={'_blank'}>
          {line.row.TITLE}
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
      width: 250,
    },
    {
      field: 'MINIMUM_INVEST_AMOUNT',
      headerName: t('tableColumnLabels.MINIMUM_INVEST_AMOUNT'),
      width: 200,
    },
    {
      field: 'PROFITABILITY',
      headerName: t('tableColumnLabels.PROFITABILITY'),
      width: 250,
    },
  ];

  return (
    <>
      {/*<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>*/}
        <LTableSmart columns={columns} lines={localizedEasyInvestPlatformsLines} />
      {/*</Container>*/}
    </>
  );
}
