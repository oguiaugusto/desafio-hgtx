import { Router } from 'express';
import { celebrate, Segments } from 'celebrate';
import userCreateController from '../modules/User/Create';
import JoiSchemas from '../helpers/JoiSchemas';

const userRouter = Router();

userRouter
  .route('/')
  .post(
    celebrate({ [Segments.BODY]: JoiSchemas.userCreate }),
    userCreateController.handle,
  );

export default userRouter;
