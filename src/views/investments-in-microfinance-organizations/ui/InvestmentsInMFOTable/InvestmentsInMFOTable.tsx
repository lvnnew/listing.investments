import { i18n, useTranslation } from 'next-i18next';
import Link from '@mui/material/Link';

import { LTableSmart } from '@shared/ui/LTableSmart';
import { localizeMFOLines } from './lib/MFOLines';

export function InvestmentsInMFOTable() {
  const { t } = useTranslation('common-invest-table');
  const localizedEasyInvestPlatformsLines = localizeMFOLines(i18n?.resolvedLanguage || 'en');

  const columns = [
    {
      field: 'id',
      headerName: '#',
      width: 30,
    },
    {
      field: 'TITLE',
      headerName: t('columnLabels.TITLE'),
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
      headerName: t('columnLabels.COUNTRY'),
      width: 150,
    },
    // {
    //   field: 'SPECIALIZATION',
    //   headerName: t('columnLabels.SPECIALIZATION'),
    //   width: 250,
    // },
    {
      field: 'MINIMUM_INVEST_AMOUNT',
      headerName: t('columnLabels.MINIMUM_INVEST_AMOUNT'),
      width: 200,
    },
    {
      field: 'PROFITABILITY',
      headerName: t('columnLabels.PROFITABILITY'),
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
