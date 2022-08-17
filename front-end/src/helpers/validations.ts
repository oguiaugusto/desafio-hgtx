import { UserRegister } from '../interfaces/user';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;
/* Source: https://www.regextester.com/100026 */

const validations = {
  name: (name: string) => name.length >= 3,
  email: (email: string) => !!email.match(EMAIL_REGEX),
  password: (password: string) => password.length >= 6,
  confirmPassword: (password: string, confirmPassword: string) => password === confirmPassword,
};

const validateAll = (user: UserRegister) => (
  validations.name(user.name)
    && validations.email(user.email)
    && validations.password(user.password)
    && validations.confirmPassword(user.password, user.confirmPassword)
);

export { validateAll };
export default validations;
