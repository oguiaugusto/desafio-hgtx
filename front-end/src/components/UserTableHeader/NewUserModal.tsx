import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Modal, Tab, Tabs, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import InformationsTab from './InformationsTab';
import { UserRegister } from '../../interfaces/user';
import 'react-toastify/dist/ReactToastify.css';
import { modalBoxStyle } from '../styled/StyledNewUserModal';
import { createNewUser } from '../../helpers/createNewUser';

interface NewUserModalProps {
  opened: boolean;
  handleClose: () => void;
}

const NewUserModal: React.FC<NewUserModalProps> = ({ opened, handleClose }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  const handleCreate = async (user: UserRegister) => {
    const { name, email, password } = user;
    const response = await createNewUser({ name, email, password });

    if (response.token) {
      toast.success('Usuário criado com sucesso!');
      localStorage.setItem('token', response.token);
      handleClose();
      window.location.reload();
    } else {
      toast.error(response.message);
    }
  };

  return (
    <Modal
      open={ opened }
      onClose={ handleClose }
      aria-labelledby="New User Modal"
      aria-describedby="Create a new user"
    >
      <Box data-testid="new-user-modal" sx={ modalBoxStyle }>
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
