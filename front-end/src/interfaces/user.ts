export interface User {
  name: string;
  email: string;
  password: string;
}

export interface UserRegister extends User {
  confirmPassword: string;
}

export interface UserPublic extends User {
  id: number;
  status: string;
}
