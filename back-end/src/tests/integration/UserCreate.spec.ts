import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../../api/app';
import { sequelizeUserRepository } from '../../modules/User/repositories';
import { usersMock, usersMockDTO } from '../mocks/usersMock';
import { StatusCodes } from 'http-status-codes';
import Messages from '../../helpers/Messages';

const { expect } = chai;
chai.use(chaiHttp);

describe('endpoint POST /users', () => {
  const request = async (body: any) => (
    chai.request(app).post('/users').send(body)
  );

  describe('on success', () => {
    afterEach(() => { sinon.restore(); });
    
    it('should return a token and status 201', async () => {
      sinon.stub(sequelizeUserRepository, 'create').resolves(usersMock[0]);
      const response = await request(usersMockDTO[0]);

      expect(response.status).to.be.equal(StatusCodes.OK);
      expect(response.body).to.have.property('token');
    });
  });

  describe('on fail', () => {
    afterEach(() => { sinon.restore(); });

    it('should return an error message and status 409 if user already exists', async () => {
      sinon.stub(sequelizeUserRepository, 'create').resolves(null);
      const response = await request(usersMockDTO[0]);

      expect(response.status).to.be.equal(StatusCodes.CONFLICT);
      expect(response.body.message).to.be.equal(Messages.USER_ALREADY_EXISTS);
    });

    it('should return error messages and expected statuses if request body is invalid', async () => {
      sinon.stub(sequelizeUserRepository, 'create').resolves(null);

      const wrongRequests = [
        {},
        { name: usersMock[0].name },
        { name: usersMock[0].name, email: usersMock[0].email },
        { name: '12', email: usersMock[0].email, password: usersMock[0].password },
        { name: usersMockDTO[0].name, email: 'invalid_email', password: usersMock[0].password },
        { name: usersMockDTO[0].name, email: usersMockDTO[0].email, password: '123' },
      ];

      const expectedStatuses = [
        StatusCodes.BAD_REQUEST,
        StatusCodes.BAD_REQUEST,
        StatusCodes.BAD_REQUEST,
        StatusCodes.UNPROCESSABLE_ENTITY,
        StatusCodes.UNPROCESSABLE_ENTITY,
        StatusCodes.UNPROCESSABLE_ENTITY,
      ];

      for (let i = 0; i < wrongRequests.length; i++) {
        const response = await request(wrongRequests[i]);

        expect(response.status).to.be.equal(expectedStatuses[i]);
        expect(response.body).to.have.property('message');
      }
    });
  });
});
