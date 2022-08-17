import { Typography } from '@mui/material';
import React from 'react';
import StyledApp from './components/styled/StyledApp';
import UsersTableHeader from './components/UsersTableHeader';

const App: React.FC = () => (
  <StyledApp>
    <Typography className="title" variant="h6">Usuários</Typography>
    <UsersTableHeader />
  </StyledApp>
);

export default App;
