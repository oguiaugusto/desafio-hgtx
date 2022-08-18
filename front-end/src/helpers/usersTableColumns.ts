import { GridColDef } from '@mui/x-data-grid';

const usersTableColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'email', headerName: 'E-mail', flex: 2 },
  { field: 'status', headerName: 'Status', width: 200 },
];

export default usersTableColumns;
