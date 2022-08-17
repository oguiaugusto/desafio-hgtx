import { TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';
import validations from '../../../helpers/validations';
import { UserRegister } from '../../../interfaces/user';

interface Props {
  user: UserRegister;
  handleChange: ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => void;
}

const InputEmail: React.FC<Props> = ({ user, handleChange }) => (
  <TextField
    label="E-mail *"
    name="email"
    helperText="Insira um email válido"
    error={ user.email.length > 0 && !validations.email(user.email) }
    value={ user.email }
    onChange={ handleChange }
    sx={ { gridArea: 'email' } }
    fullWidth
  />
);

export default InputEmail;
