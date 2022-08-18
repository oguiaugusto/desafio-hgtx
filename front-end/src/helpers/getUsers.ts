import { UserPublic } from '../interfaces/user';

const { REACT_APP_API_URL = 'http://localhost:3001' } = process.env;

const getUsers = async () => {
  const response = await fetch(`${REACT_APP_API_URL}/users`);

  if (!response.ok) {
    return [] as UserPublic[];
  }

  const data = await response.json();
  return data as UserPublic[];
};

// eslint-disable-next-line import/prefer-default-export
export { getUsers };
