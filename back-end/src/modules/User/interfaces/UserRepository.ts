import { IUser, IUserDTO } from './User';

export interface IUserRepository {
  findAll: () => Promise<IUser[]>;
  findById: (id: number) => Promise<IUser | null>;
  create: (user: IUserDTO) => Promise<IUser>;
  update: (id: number, user: Partial<IUserDTO>) => Promise<IUser | null>;
  delete: (id: number) => Promise<true | null>;
}
