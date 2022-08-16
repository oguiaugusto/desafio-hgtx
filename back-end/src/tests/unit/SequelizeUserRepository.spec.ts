import { expect } from 'chai';
import * as sinon from 'sinon';
import User from '../../database/models/user';
import SequelizeUserRepository from '../../modules/User/repositories/SequelizeUserRepository';
import { UserModelMockFail, UserModelMockSuccess, usersMock } from '../mocks/UserModelMock';

describe('sequelize user repository methods', () => {
  const successModelMock = new UserModelMockSuccess() as unknown as typeof User;
  const failModelMock = new UserModelMockFail() as unknown as typeof User;
  
  describe('on success', () => {
    const repository = new SequelizeUserRepository(successModelMock);
    afterEach(() => { sinon.restore(); });

    it('findAll should return an array of users', async () => {
      const users = await repository.findAll();
      expect(users).to.be.eq(usersMock);
    });

    it('findById should return a user', async () => {
      const user = await repository.findById(1);
      expect(user).to.be.eq(usersMock[0]);
    });

    it('create should return a user', async () => {
      const user = await repository.create(usersMock[0]);
      expect(user).to.be.eq(usersMock[0]);
    });

    it('update should return a user', async () => {
      sinon.stub(successModelMock, 'findByPk').onFirstCall().resolves(successModelMock as unknown as User);

      const user = await repository.update(1, { name: 'John Doe' });
      expect(user).to.be.eq(usersMock[0]);
    });

    it('delete should return true', async () => {
      sinon.stub(successModelMock, 'findByPk').onFirstCall().resolves(successModelMock as unknown as User);

      const result = await repository.delete(1);
      expect(result).to.be.eq(true);
    });
  });

  describe('on fail', () => {
    const repository = new SequelizeUserRepository(failModelMock);
    afterEach(() => { sinon.restore(); });

    it('findById should return null', async () => {
      const user = await repository.findById(123);
      expect(user).to.be.null;
    });

    it('create should return null', async () => {
      const user = await repository.create(usersMock[0]);
      expect(user).to.be.null;
    });

    it('update should return null', async () => {
      sinon.stub(failModelMock, 'findByPk').onFirstCall().resolves(null);

      const user = await repository.update(123, { name: 'John Doe' });
      expect(user).to.be.null;
    });

    it('delete should return null', async () => {
      sinon.stub(failModelMock, 'findByPk').onFirstCall().resolves(null);

      const user = await repository.delete(1);
      expect(user).to.be.null;
    });
  });
});
