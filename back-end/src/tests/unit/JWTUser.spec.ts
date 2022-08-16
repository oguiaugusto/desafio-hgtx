import { expect } from 'chai';
import jwtDecode from 'jwt-decode';
import jwtUser from '../../helpers/JWTUser';
import { usersPublicMock } from '../mocks/usersMock';

describe('jwt user methods', () => {
  it('generate should return a token with the encrypted information', () => {
    const token = jwtUser.generate(usersPublicMock[0]);
    expect(token).to.be.a('string');

    const decoded = jwtDecode(token);
    expect(decoded).to.include(usersPublicMock[0]);
  });

  it('verify should return a decoded token', () => {
    const token = jwtUser.generate(usersPublicMock[0]);
    const decoded = jwtUser.verify(token);

    expect(decoded).to.include(usersPublicMock[0]);
  })
});
