import { JwtPayload } from 'jsonwebtoken';

export interface IUserDTO {
  name: string;
  email: string;
  password: string;
}

export interface IUser extends IUserDTO {
  id: number;
  status: string;
  lastUpdate: Date;
}

export interface IUserPublic {
  id: number;
  name: string;
  email: string;
  status: string;
}

export interface IUserDecoded extends JwtPayload {
  user: IUserPublic;
  token: string;
}
