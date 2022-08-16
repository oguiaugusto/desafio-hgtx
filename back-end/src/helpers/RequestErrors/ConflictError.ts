import { StatusCodes } from 'http-status-codes';
import RequestError from './RequestError';
import Messages from '../Messages';

class ConflictError extends RequestError {
    constructor(message: Messages) {
        super(StatusCodes.CONFLICT, message);
    }
}

export default ConflictError;
