import { IUser } from '../../modules/User/interfaces/User';

const usersMock = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@doe.com',
    password: '123456',
    status: 'Pendente',
    lastUpdate: new Date(),
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@doe.com',
    password: '123456',
    status: 'Pendente',
    lastUpdate: new Date(),
  }
]

class UserModelMockSuccess {
  public findAll = async (_query: any): Promise<IUser[]> => {
    return usersMock;
  }

  public findByPk = async (_query: any): Promise<IUser | null> => {
    return usersMock[0];
  }

  public create = async (_query: any): Promise<IUser> => {
    return usersMock[0];
  }

  public update = async (_query: any): Promise<IUser | null> => {
    return usersMock[0];
  }

  public destroy = async (_query: any): Promise<true | null> => {
    return true;
  }
}

class UserModelMockFail {
  public findByPk = async (_query: any): Promise<IUser | null> => {
    return null;
  }

  public update = async (_query: any): Promise<IUser | null> => {
    return null;
  }

  public destroy = async (_query: any): Promise<true | null> => {
    return null;
  }
}

export {
  usersMock,
  UserModelMockSuccess,
  UserModelMockFail,
}
