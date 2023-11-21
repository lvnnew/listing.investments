import React, { useContext } from "react";
import { i18n, useTranslation } from 'next-i18next';

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
      <LTable columns={columns} lines={easyInvestPlatformsLines} />
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
