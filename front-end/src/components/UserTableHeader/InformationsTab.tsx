import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment } from '@mui/material';
import React, { ChangeEvent, Dispatch, useState } from 'react';
import validations, { validateAll } from '../../helpers/validations';
import { UserRegister } from '../../interfaces/user';
import { StyledInformationsTab } from '../styled/StyledNewUserModal';
import InputEmail from './inputs/InputEmail';
import InputName from './inputs/InputName';
import InputPassword from './inputs/InputPassword';

interface InformationsTabProps {
  tabIndex: number;
  tabValue: number;
  handleClose: () => void;
  handleCreate: (user: UserRegister) => Promise<void>;
}

const passwordVisibility = (
  showPassword: boolean,
  setShowPassword: Dispatch<React.SetStateAction<boolean>>,
) => (
  <InputAdornment position="end">
    <IconButton
      onClick={ () => setShowPassword(!showPassword) }
      edge="end"
    >
      { showPassword ? <VisibilityOff /> : <Visibility /> }
    </IconButton>
  </InputAdornment>
);

const InformationsTab: React.FC<InformationsTabProps> = (props) => {
  const { tabIndex, tabValue, handleClose, handleCreate } = props;
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showStandartPassword, setShowStandartPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [name]: value });
  };

  const isButtonDisabled = !validateAll(user);

  return (
    <StyledInformationsTab role="tabpanel" hidden={ tabValue !== tabIndex }>
      <Box className="fields">
        <InputName user={ user } handleChange={ handleChange } />
        <InputEmail user={ user } handleChange={ handleChange } />
        <InputPassword
          name="password"
          user={ user }
          error={ user.password.length > 0 && !validations.password(user.password) }
          showPassword={ showStandartPassword }
          endAdornment={ passwordVisibility(showStandartPassword, setShowStandartPassword) }
          handleChange={ handleChange }
        />
        <InputPassword
          user={ user }
          name="confirmPassword"
          error={
            user.confirmPassword.length > 0
              && !validations.confirmPassword(user.password, user.confirmPassword)
          }
          showPassword={ showConfirmPassword }
          endAdornment={ passwordVisibility(showConfirmPassword, setShowConfirmPassword) }
          handleChange={ handleChange }
        />
      </Box>
      <Box className="buttons">
        <Button
          data-testid="button-back"
          className="back-button"
          variant="text"
          size="large"
          onClick={ handleClose }
        >
          Voltar
        </Button>
        <Button
          data-testid="button-create"
          className="create-button"
          variant="contained"
          size="large"
          onClick={
            () => handleCreate(user)
          }
          disabled={ isButtonDisabled }
        >
          Criar
        </Button>
      </Box>
    </StyledInformationsTab>
  );
};

export default InformationsTab;
