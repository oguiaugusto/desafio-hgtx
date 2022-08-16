import { sequelizeUserRepository } from '../repositories';
import UserFindAllController from './UserFindAllController';
import UserFindAllService from './UserFindAllService';

const userFindAllService = new UserFindAllService(sequelizeUserRepository);
const userFindAllController = new UserFindAllController(userFindAllService);

export default userFindAllController;
