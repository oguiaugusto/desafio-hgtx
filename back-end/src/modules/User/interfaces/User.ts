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
