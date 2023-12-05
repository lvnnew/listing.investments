import { DataGrid } from '@mui/x-data-grid';

export function LTableSmart({ columns, lines }) {
  return (
    <div style={{ }}>
      <DataGrid
        rows={lines}
        columns={columns}
        disableRowSelectionOnClick
      />
    </div>
  );
}
