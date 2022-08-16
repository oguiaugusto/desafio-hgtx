import * as md5 from 'md5';
import { IUser, IUserDTO } from '../interfaces/User';
import { IUserRepository } from '../interfaces/UserRepository';
import ConflictError from '../../../helpers/RequestErrors/ConflictError';
import Messages from '../../../helpers/Messages';

export interface IUserCreateService {
  handle(data: IUserDTO): Promise<IUser>;
}

class UserCreateService implements IUserCreateService {
  constructor(private repository: IUserRepository) {
    this.repository = repository;
  }

  public handle = async (data: IUserDTO) => {
    const password = md5(data.password);

    const user = await this.repository.create({ ...data, password });
    if (!user) throw new ConflictError(Messages.USER_ALREADY_EXISTS);

    return user;
  };
}

export default UserCreateService;
