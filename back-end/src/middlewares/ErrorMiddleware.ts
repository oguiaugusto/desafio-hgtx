import { isCelebrateError } from 'celebrate';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import RequestError from '../helpers/RequestErrors/RequestError';
import Messages from '../helpers/Messages';

type CelebrateMessage = { message: string };

class ErrorMiddleware {
  public static handle(err: Error, _req: Request, res: Response, _next: NextFunction) {
    let status = StatusCodes.INTERNAL_SERVER_ERROR;
    let message: string = Messages.INTERNAL_SERVER_ERROR;

    if (isCelebrateError(err)) {
      const { message: celebrateMessage }: CelebrateMessage = err
        .details.entries().next().value[1].details[0];

      message = celebrateMessage;
      status = message.includes('must ')
        ? StatusCodes.UNPROCESSABLE_ENTITY : StatusCodes.BAD_REQUEST;
    }

    if (err instanceof RequestError) {
      status = err.status;
      message = err.message;
    }

    return res.status(status).json({ message });
  }
}

export default ErrorMiddleware;