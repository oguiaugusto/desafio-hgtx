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

export interface IUserToken {
  id: number;
  name: string;
  email: string;
  status: string;
}

export interface IUserDecoded extends JwtPayload {
  user: IUserToken;
}

export interface IUserPublic extends IUserToken {
  token: string;
}
