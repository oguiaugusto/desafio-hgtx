import * as md5 from 'md5';
import { IUserPublic } from '../../modules/User/interfaces/User';

const usersMockDTO = [
  {
    name: 'John Doe',
    email: 'john@doe.com',
    password: '123456',
  },
  {
    name: 'Jane Doe',
    email: 'jane@doe.com',
    password: '123456',
  }
]

const usersMock = [
  {
    id: 1,
    ...usersMockDTO[0],
    password: md5(usersMockDTO[0].password),
    status: 'Pendente',
    lastUpdate: new Date(),
  },
  {
    id: 2,
    ...usersMockDTO[1],
    password: md5(usersMockDTO[1].password),
    status: 'Pendente',
    lastUpdate: new Date(),
  }
]

const usersPublicMock: IUserPublic[] = [
  {
    id: usersMock[0].id,
    name: usersMock[0].name,
    email: usersMock[0].email,
    status: usersMock[0].status,
  },
  {
    id: usersMock[1].id,
    name: usersMock[1].name,
    email: usersMock[1].email,
    status: usersMock[1].status,
  }
]

export {
  usersMockDTO,
  usersMock,
  usersPublicMock,
}
