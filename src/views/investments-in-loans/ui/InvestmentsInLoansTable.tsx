import { i18n, useTranslation } from 'next-i18next';
import Link from '@mui/material/Link';

import { LTableSmart } from '@shared/ui/LTableSmart';
import { localizeEasyInvestPlatformsLines } from '../lib/easyInvestPlatformsLines';

export function InvestmentsInLoansTable() {
  const { t } = useTranslation('investments-in-loans');
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
      width: 150,
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
      <LTableSmart columns={columns} lines={localizedEasyInvestPlatformsLines} />

      <style jsx global>{`
        .MuiDataGrid-footerContainer {
          display: none !important;
        }
      `}</style>
    </>
  );
}
