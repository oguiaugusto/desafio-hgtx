import { IUser } from '../../modules/User/interfaces/User';
import { usersMock } from './usersMock';

class UserModelMockSuccess {
  public findAll = async (_query: any): Promise<IUser[]> => {
    return usersMock;
  }

  public findByPk = async (_query: any): Promise<IUser | null> => {
    return usersMock[0];
  }

  public findOne = async (_query: any): Promise<IUser | null> => {
    return null;
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

  public findOne = async (_query: any): Promise<IUser | null> => {
    return usersMock[0];
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
