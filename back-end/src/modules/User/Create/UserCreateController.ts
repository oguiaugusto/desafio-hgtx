import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IUserDTO } from '../interfaces/User';
import { IUserCreateService } from './UserCreateService';
import jwtUser from '../../../helpers/JWTUser';

class UserCreateController {
  constructor(private service: IUserCreateService) {
    this.service = service;
  }

  public handle = async (req: Request<{}, {}, IUserDTO>, res: Response) => {
    const { name, email, password } = req.body;
    const user = await this.service.handle({ name, email, password });
    const token = jwtUser.generate({
      id: user.id,
      name: user.name,
      email: user.email,
      status: user.status,
    });

    res.status(StatusCodes.OK).json({ token });
  };
}

export default UserCreateController;
