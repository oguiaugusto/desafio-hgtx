export interface User {
  name: string;
  email: string;
  password: string;
}

export interface UserRegister extends User {
  confirmPassword: string;
}
