import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import { IUserDecoded, IUserPublic } from '../modules/User/interfaces/User';

class JWTUser {
  constructor(
    private secret: string,
    private options: jwt.SignOptions,
  ) {
    this.secret = secret;
    this.options = options;
  }

  public generate(data: IUserPublic) {
    return jwt.sign(data, this.secret, this.options);
  } 

  public verify(token: string) {
    return jwt.verify(token, this.secret) as IUserDecoded;
  }
}

const { JWT_SECRET = 'secret_key' } = process.env;
const jwtUser = new JWTUser(JWT_SECRET, { expiresIn: '7d' });

export { JWTUser };
export default jwtUser;
