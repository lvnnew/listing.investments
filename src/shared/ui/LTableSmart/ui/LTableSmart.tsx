import { DataGrid } from '@mui/x-data-grid';

export function LTableSmart({ columns, lines }) {
  return (
    <>
    <div style={{ width: '100%' }}>
      <DataGrid
        rows={lines}
        columns={columns}
        disableRowSelectionOnClick
      />
    </div>
    </>
  );
}
