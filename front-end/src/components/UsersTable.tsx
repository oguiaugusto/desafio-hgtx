import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getUsers } from '../helpers/getUsers';
import { UserPublic } from '../interfaces/user';
import usersTableColumns from '../helpers/usersTableColumns';

const UsersTable: React.FC = () => {
  const [data, setData] = useState<UserPublic[]>([]);

  const fetchUsers = async () => {
    const users = await getUsers();
    setData(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={ { height: 400, width: '100%' } }>
      <DataGrid
        rows={ data }
        columns={ usersTableColumns }
        pageSize={ 5 }
        rowsPerPageOptions={ [10] }
        // checkboxSelection
      />
    </div>
  );
};

export default UsersTable;
