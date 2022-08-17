import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CachedIcon from '@mui/icons-material/Cached';
import TuneIcon from '@mui/icons-material/Tune';
import AddIcon from '@mui/icons-material/Add';
import { Button, IconButton, TextField } from '@mui/material';
import StyledUsersTableHeader from './styled/StyledUsersTableHeader';

const UsersTableHeader: React.FC = () => {
  const handleNewUser = () => {
    console.log('handleNewUser not implemented');
  };
  const searchUsers = () => {
    console.log('searchUsers not implemented');
  };
  const openFilters = () => {
    console.log('openFilters not implemented');
  };
  const handleRefresh = () => {
    console.log('handleRefresh not implemented');
  };

  return (
    <StyledUsersTableHeader className="users-table-header" component="div">
      <Button
        variant="contained"
        size="large"
        className="new-user-button"
        // sx={ { paddingY: '14px' } }
        startIcon={ <AddIcon sx={ { transform: 'scale(1.2)' } } /> }
        onClick={ handleNewUser }
      >
        Novo
      </Button>
      <TextField
        className="search-input"
        autoComplete="off"
        placeholder="Pesquisar Usuários"
        type="text"
        size="medium"
        InputProps={ {
          startAdornment: (
            <IconButton onClick={ searchUsers }>
              <SearchIcon />
            </IconButton>
          ),
          endAdornment: (
            <IconButton onClick={ openFilters }>
              <TuneIcon />
            </IconButton>
          ),
        } }
      />
      <Button
        className="refresh-button"
        variant="contained"
        size="small"
        onClick={ handleRefresh }
      >
        <CachedIcon />
      </Button>
    </StyledUsersTableHeader>
  );
};

export default UsersTableHeader;
