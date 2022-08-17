import { act, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import App from '../App';

const testIds = {
  newUserButton: 'new-user-button',
  searchInput: 'search-input',
  refreshButton: 'refresh-button',
  newUserModal: 'new-user-modal',
};

describe('user table header', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should have the expected elements', () => {
    const newUserButton = screen.getByTestId(testIds.newUserButton);
    const searchInput = screen.getByTestId(testIds.searchInput);
    const refreshButton = screen.getByTestId(testIds.refreshButton);

    expect(newUserButton).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(refreshButton).toBeInTheDocument();
  });

  it('new user button should open a modal', async () => {
    const newUserButton = screen.getByTestId(testIds.newUserButton);

    expect(newUserButton).toBeInTheDocument();
    expect(screen.queryByTestId(testIds.newUserModal)).not.toBeInTheDocument();

    await act(async () => newUserButton.click());
    await waitFor(() => {
      expect(screen.queryByTestId(testIds.newUserModal)).toBeInTheDocument();
    });
  });
});
