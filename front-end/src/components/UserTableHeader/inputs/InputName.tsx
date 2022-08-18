import { TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';
import validations from '../../../helpers/validations';
import { UserRegister } from '../../../interfaces/user';

interface Props {
  user: UserRegister;
  handleChange: ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => void;
}

const InputName: React.FC<Props> = ({ user, handleChange }) => (
  <TextField
    data-testid="input-name"
    label="Nome *"
    name="name"
    helperText="Seu nome deve ter pelo menos 3 caracteres"
    error={ user.name.length > 0 && !validations.name(user.name) }
    value={ user.name }
    onChange={ handleChange }
    sx={ { gridArea: 'name' } }
    fullWidth
  />
);

export default InputName;
