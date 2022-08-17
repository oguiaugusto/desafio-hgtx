import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Modal, Tab, Tabs, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import InformationsTab from './InformationsTab';
import { User } from '../../interfaces/user';
import 'react-toastify/dist/ReactToastify.css';
import { modalBoxStyle } from '../styled/StyledNewUserModal';

interface NewUserModalProps {
  opened: boolean;
  handleClose: () => void;
}

const { REACT_APP_API_URL = 'http://localhost:3001' } = process.env;

const NewUserModal: React.FC<NewUserModalProps> = ({ opened, handleClose }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const handleCreate = async (user: User) => {
    const response = await fetch(`${REACT_APP_API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      const { message } = await response.json();
      toast.error(message);
    } else {
      handleClose();
    }
  };

  return (
    <Modal
      open={ opened }
      onClose={ handleClose }
      aria-labelledby="New User Modal"
      aria-describedby="Create a new user"
    >
      <Box sx={ modalBoxStyle }>
        <Typography variant="h6" className="modal-title" sx={ { mb: 2 } }>
          Criar Usuário
        </Typography>
        <IconButton
          sx={ { position: 'absolute', right: 15, top: 15 } }
          onClick={ handleClose }
        >
          <CloseIcon />
        </IconButton>
        <Box sx={ { borderBottom: 1, borderColor: 'divider' } }>
          <Tabs value={ currentTab } onChange={ handleTabChange }>
            <Tab label="Informações" />
            <Tab label="Vínculos" disabled />
          </Tabs>
        </Box>
        <InformationsTab
          tabIndex={ 0 }
          tabValue={ currentTab }
          handleClose={ handleClose }
          handleCreate={ handleCreate }
        />
      </Box>
    </Modal>
  );
};

export default NewUserModal;
