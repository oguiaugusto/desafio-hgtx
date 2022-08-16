import { expect } from 'chai';
import jwtDecode from 'jwt-decode';
import jwtUser from '../../helpers/JWTUser';
import { userToken } from '../mocks/usersMock';

describe('jwt user methods', () => {
  it('generate should return a token with the encrypted information', () => {
    const token = jwtUser.generate(userToken);
    expect(token).to.be.a('string');

    const decoded = jwtDecode(token);
    expect(decoded).to.include(userToken);
  });

  it('verify should return a decoded token', () => {
    const token = jwtUser.generate(userToken);
    const decoded = jwtUser.verify(token);

    expect(decoded).to.include(userToken);
  })
});
