import { IUserPublic } from '../interfaces/User';
import { IUserRepository } from '../interfaces/UserRepository';

export interface IUserFindAllService {
  handle(): Promise<IUserPublic[]>;
}

class UserFindAllService implements IUserFindAllService {
  constructor(private repository: IUserRepository) {
    this.repository = repository;
  }

  public handle = async () => {
    const users = await this.repository.findAll();
    return users;
  };
}

export default UserFindAllService;
