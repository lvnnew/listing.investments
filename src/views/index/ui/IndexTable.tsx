import React, { useContext } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { i18n, useTranslation } from 'next-i18next';
// import { LocaleContext } from '@application/providers/LocaleProvider/lib/LocaleContext';

import { easyInvestPlatformsEntity } from '../../../entities/easyInvestPlatforms';
import { LTable } from '../../../shared/ui/LTable';

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function IndexTable() {
  const { t } = useTranslation('easy-investing');

  const columns = [
    {
      fieldKey: 'ID',
      fieldLabel: '#',
      valueMaker: (line, lineIndex) => (<>
        {lineIndex + 1}
      </>)
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


  const lines = [
    {
      [easyInvestPlatformsEntity.TITLE.fieldKey]: {
        en: 'Bondora',
        ru: 'Bondora',
      },
      [easyInvestPlatformsEntity.COUNTRY.fieldKey]: {
        en: 'Estonia',
        ru: 'Эстония',
      },
      [easyInvestPlatformsEntity.SPECIALIZATION.fieldKey]: {
        en: 'General',
        ru: 'Общая',
      },
      [easyInvestPlatformsEntity.LINK.fieldKey]: {
        en: 'https://www.bondora.com',
        ru: 'https://www.bondora.com',
      },
      [easyInvestPlatformsEntity.PROFITABILITY.fieldKey]: {
        en: '6,81% - 14,81% in euro',
        ru: '6,81% - 14,81% в евро',
      },
      [easyInvestPlatformsEntity.MINIMUM_INVEST_AMOUNT.fieldKey]: {
        en: '10 euro',
        ru: '10 евро',
      },
    }
  ];

  return (
    <>
      <LTable columns={columns} lines={lines} />
    </>

    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Dessert (100g serving)</TableCell>
    //         <TableCell align="right">Calories</TableCell>
    //         <TableCell align="right">Fat&nbsp;(g)</TableCell>
    //         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
    //         <TableCell align="right">Protein&nbsp;(g)</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow
    //           key={row.name}
    //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row">
    //             {row.name}
    //           </TableCell>
    //           <TableCell align="right">{row.calories}</TableCell>
    //           <TableCell align="right">{row.fat}</TableCell>
    //           <TableCell align="right">{row.carbs}</TableCell>
    //           <TableCell align="right">{row.protein}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
}
