import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import userCreateController from '../modules/User/Create';
import userFindAllController from '../modules/User/FindAll';
import JoiSchemas from '../helpers/JoiSchemas';

const userRouter = Router();

userRouter
  .route('/')
  .get(userFindAllController.handle)
  .post(
    celebrate({ [Segments.BODY]: JoiSchemas.userCreate }),
    userCreateController.handle,
  );

export default userRouter;
