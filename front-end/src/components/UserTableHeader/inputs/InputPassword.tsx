import { TextField } from '@mui/material';
import React, { ChangeEvent, ReactNode } from 'react';
import { UserRegister } from '../../../interfaces/user';

interface Props {
  user: UserRegister;
  name: 'password' | 'confirmPassword';
  error: boolean;
  showPassword: boolean;
  endAdornment: ReactNode;
  handleChange: ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => void;
}

const InputPassword: React.FC<Props> = (props) => {
  const { user, name, error, showPassword, endAdornment, handleChange } = props;

  const label = name === 'password' ? 'Senha *' : 'Confirmar senha *';
  const helperText = name === 'password' ? 'Sua senha deve ter pelo menos 6 caracteres' : 'As senhas devem ser iguais';
  const dataTestId = name === 'password' ? 'input-password' : 'input-confirm-password';

  return (
    <TextField
      data-testid={ dataTestId }
      name={ name }
      label={ label }
      helperText={ helperText }
      error={ error }
      value={ user[name] }
      onChange={ handleChange }
      type={ showPassword ? 'text' : 'password' }
      InputProps={ { endAdornment } }
      sx={ { gridArea: name } }
    />
  );
};

export default InputPassword;
