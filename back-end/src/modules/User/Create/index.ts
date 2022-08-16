import { sequelizeUserRepository } from '../repositories';
import UserCreateService from './UserCreateService';
import UserCreateController from './UserCreateController';

const userCreateService = new UserCreateService(sequelizeUserRepository);
const userCreateController = new UserCreateController(userCreateService);

export default userCreateController;
