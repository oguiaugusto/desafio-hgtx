import { StatusCodes } from 'http-status-codes';
import Messages from '../Messages';

abstract class RequestError extends Error {
  constructor(public status: StatusCodes, message: Messages) {
    super(message);

    this.status = status;
  }
}

export default RequestError;
