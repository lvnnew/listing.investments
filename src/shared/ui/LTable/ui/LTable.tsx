import { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// import { i18n } from "next-i18next";
import { LocaleContext } from '@application/providers/LocaleProvider/lib/LocaleContext';

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

export function LTable({ columns, lines }) {
  const locale = useContext(LocaleContext);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.fieldKey}>
                {column.fieldLabelLocals.valueMaker
                  ? column.fieldLabelLocals[locale]
                  : column.fieldLabelLocals[locale]
                }
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {lines.map((line, lineIndex) => (
            <TableRow
              key={`line-${lineIndex}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {columns.map((column, index) => (
                <TableCell key={`line-${lineIndex}--cell-${column.fieldKey}`}>
                  {line[column.fieldKey][locale]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
