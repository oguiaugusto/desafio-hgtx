import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IUserFindAllService } from './UserFindAllService';

class UserFindAllController {
  constructor(private service: IUserFindAllService) {
    this.service = service;
  }

  public handle = async (req: Request, res: Response) => {
    const users = await this.service.handle();

    return res.status(StatusCodes.OK).json(users);
  };
}

export default UserFindAllController;
