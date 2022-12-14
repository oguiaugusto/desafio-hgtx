import 'express-async-errors';
import * as express from 'express';
import * as cors from 'cors';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ErrorMiddleware from '../middlewares/ErrorMiddleware';
import userRouter from '../routes/user';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.router();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(cors());
    this.app.use(express.json());
  }

  private router(): void {
    this.app.get('/', (_req: Request, res: Response) => (
      res.status(StatusCodes.OK).json({ message: 'Online!' })
    ));

    this.app.use('/users', userRouter);
    this.app.use(ErrorMiddleware.handle);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }
}

export const { app } = new App();
export default new App();
