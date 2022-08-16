import { IUserRepository } from '../interfaces/UserRepository';
import User from '../../../database/models/user';
import { IUser, IUserDTO } from '../interfaces/User';

class SequelizeUserRepository implements IUserRepository {
  constructor(private client: typeof User = User) {
    this.client = client;
  }

  public findAll = async (): Promise<IUser[]> => {
    const users = await this.client.findAll();
    return users;
  };

  public findById = async (id: number): Promise<IUser | null> => {
    const user = await this.client.findByPk(id);
    return user;
  };

  public create = async (user: IUserDTO): Promise<IUser | null> => {
    const existingUser = await this.client.findOne({ where: { email: user.email } });
    if (existingUser) return null;

    const newUser = await this.client.create({ ...user, status: 'Pendente' });
    return newUser;
  };

  public update = async (id: number, user: Partial<IUser>): Promise<IUser | null> => {
    const existingUser = await this.client.findByPk(id);
    if (!existingUser) return null;

    const updatedUser = await existingUser.update(user);
    return updatedUser;
  };

  public delete = async (id: number): Promise<true | null> => {
    const existingUser = await this.client.findByPk(id);
    if (!existingUser) return null;

    await existingUser.destroy();
    return true;
  };
}

export default SequelizeUserRepository;
