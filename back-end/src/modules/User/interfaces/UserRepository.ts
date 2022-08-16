import { IUser, IUserDTO, IUserPublic } from './User';

export interface IUserRepository {
  findAll: () => Promise<IUserPublic[]>;
  findById: (id: number) => Promise<IUserPublic | null>;
  create: (user: IUserDTO) => Promise<IUser | null>;
  update: (id: number, user: Partial<IUserDTO>) => Promise<IUser | null>;
  delete: (id: number) => Promise<true | null>;
}
