import { User } from '../interfaces/user';

const { REACT_APP_API_URL = 'http://localhost:3001' } = process.env;

const createNewUser = async (user: User) => {
  const response = await fetch(`${REACT_APP_API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const { message } = await response.json();
    return message;
  }

  const data = await response.json();
  return data as { token: string };
};

// eslint-disable-next-line import/prefer-default-export
export { createNewUser };
