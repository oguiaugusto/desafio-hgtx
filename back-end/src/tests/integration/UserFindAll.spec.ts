import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../../api/app';
import { sequelizeUserRepository } from '../../modules/User/repositories';
import { usersPublicMock } from '../mocks/usersMock';
import { StatusCodes } from 'http-status-codes';

const { expect } = chai;
chai.use(chaiHttp);

describe('endpoint GET /users', () => {
  const request = async () => (
    chai.request(app).get('/users')
  );

  describe('on success', () => {
    afterEach(() => { sinon.restore(); });

    it('should return an array of users and status 200', async () => {
      sinon.stub(sequelizeUserRepository, 'findAll').resolves(usersPublicMock);
      const response = await request();

      expect(response.status).to.be.equal(StatusCodes.OK);
      expect(response.body).to.be.deep.eq(usersPublicMock);
    });
  });
});
