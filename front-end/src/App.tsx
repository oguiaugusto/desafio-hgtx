import { Typography } from '@mui/material';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import StyledApp from './components/styled/StyledApp';
import UsersTable from './components/UsersTable';
import UsersTableHeader from './components/UserTableHeader/UsersTableHeader';

const App: React.FC = () => (
  <StyledApp>
    <Typography className="title" variant="h6">Usuários</Typography>
    <UsersTableHeader />
    <UsersTable />
    <ToastContainer autoClose={ 3000 } />
  </StyledApp>
);

export default App;
