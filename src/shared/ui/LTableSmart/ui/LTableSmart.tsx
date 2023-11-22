import { i18n } from "next-i18next";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export function LTableSmart({ columns, lines }) {
  const getShownValue = (column, columnIndex, line, lineIndex) => (
    columns[columnIndex].valueMaker
      ? columns[columnIndex].valueMaker(line, lineIndex)
      : line[column.fieldKey][i18n?.resolvedLanguage || 'en']
  );

  const dataGridColumns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <>
    <div style={{ width: '100%' }}>
      <DataGrid
        disableRowSelectionOnClick
        rows={rows}
        columns={dataGridColumns}
      />
    </div>
    </>
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         {columns.map((column) => (
    //           <TableCell key={column.fieldKey}>
    //             {column.fieldLabel}
    //           </TableCell>
    //         ))}
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {lines.map((line, lineIndex) => (
    //         <TableRow
    //           key={`line-${lineIndex}`}
    //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    //         >
    //           {columns.map((column, columnIndex) => (
    //             <TableCell key={`line-${lineIndex}--cell-${column.fieldKey}`}>
    //               {getShownValue(column, columnIndex, line, lineIndex)}
    //             </TableCell>
    //           ))}
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
}
