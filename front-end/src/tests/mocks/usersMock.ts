import { UserPublic } from '../../interfaces/user';

const usersMock: UserPublic[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@doe.com',
    password: '123456',
    status: 'Ativo',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@doe.com',
    password: '123456',
    status: 'Pendente',
  },
];

export default usersMock;
