/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import usersMock from './mocks/usersMock';
import * as api from '../helpers/createNewUser';

const testIds = {
  toastifyContainer: 'toastify-container',
  newUserButton: 'new-user-button',
  newUserModal: 'new-user-modal',
  inputName: 'input-name',
  inputEmail: 'input-email',
  inputPassword: 'input-password',
  inputConfirmPassword: 'input-confirm-password',
  backButton: 'button-back',
  createButton: 'button-create',
};

const getInputName = () => screen.getByTestId(testIds.inputName).querySelector('input')!;
const getInputEmail = () => screen.getByTestId(testIds.inputEmail).querySelector('input')!;
const getInputPassword = () => screen.getByTestId(testIds.inputPassword).querySelector('input')!;
const getInputConfirmPassword = () => screen.getByTestId(testIds.inputConfirmPassword).querySelector('input')!;
const getCreateButton = () => screen.getByTestId(testIds.createButton);

const elementsCreateUser = () => {
  expect(getCreateButton()).toBeDisabled();

  userEvent.type(getInputName(), usersMock[0].name);
  userEvent.type(getInputEmail(), usersMock[0].email);
  userEvent.type(getInputPassword(), usersMock[0].password);
  userEvent.type(getInputConfirmPassword(), usersMock[0].password);

  expect(getCreateButton()).toBeEnabled();
};

describe('user table header', () => {
  beforeEach(async () => {
    render(<App />);

    const newUserButton = screen.getByTestId(testIds.newUserButton);
    await act(async () => newUserButton.click());
  });

  it('should have the expected elements', () => {
    const backButton = screen.getByTestId(testIds.backButton);

    expect(getInputName()).toBeInTheDocument();
    expect(getInputEmail()).toBeInTheDocument();
    expect(getInputPassword()).toBeInTheDocument();
    expect(getInputConfirmPassword()).toBeInTheDocument();
    expect(getCreateButton()).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
  });

  it('create button should only be enabled if fields are valid', async () => {
    expect(getCreateButton()).toBeDisabled();

    userEvent.type(getInputName(), usersMock[0].name);
    expect(getCreateButton()).toBeDisabled();

    userEvent.type(getInputEmail(), usersMock[0].email);
    expect(getCreateButton()).toBeDisabled();

    userEvent.type(getInputPassword(), usersMock[0].password);
    expect(getCreateButton()).toBeDisabled();

    userEvent.type(getInputConfirmPassword(), 'not-the-same-password');
    expect(getCreateButton()).toBeDisabled();

    userEvent.clear(getInputConfirmPassword());
    userEvent.type(getInputConfirmPassword(), usersMock[0].password);

    expect(getCreateButton()).toBeEnabled();
  });

  it('back button should close the modal', async () => {
    const modal = screen.getByTestId(testIds.newUserModal);

    expect(modal).toBeInTheDocument();
    userEvent.click(screen.getByTestId(testIds.backButton));

    await waitFor(() => {
      expect(modal).not.toBeInTheDocument();
    });
  });

  it('should create a user and close the modal', async () => {
    jest.spyOn(api, 'createNewUser').mockResolvedValue({ token: 'valid_token' });

    elementsCreateUser();
    await act(async () => screen.getByTestId(testIds.createButton).click());

    await waitFor(() => {
      expect(api.createNewUser).toHaveBeenCalledTimes(1);
      expect(screen.queryByText('Usuário criado com sucesso!')).toBeInTheDocument();
    });
  });

  it('should show an error message when user creation fails', async () => {
    jest.spyOn(api, 'createNewUser').mockResolvedValue({ message: 'Usuário já cadastrado' });

    elementsCreateUser();
    await act(async () => screen.getByTestId(testIds.createButton).click());

    await waitFor(() => {
      expect(api.createNewUser).toHaveBeenCalledTimes(1);
      expect(screen.queryByText('Usuário já cadastrado')).toBeInTheDocument();
    });
  });
});
