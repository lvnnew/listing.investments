import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { i18n } from "next-i18next";

export function LTable({ columns, lines }) {
  const getShownValue = (column, columnIndex, line, lineIndex) => (
    columns[columnIndex].valueMaker
      ? columns[columnIndex].valueMaker(line, lineIndex)
      : line[column.fieldKey][i18n?.resolvedLanguage || 'en']
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.fieldKey}>
                {column.fieldLabel}
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
              {columns.map((column, columnIndex) => (
                <TableCell key={`line-${lineIndex}--cell-${column.fieldKey}`}>
                  {getShownValue(column, columnIndex, line, lineIndex)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
