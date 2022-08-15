import 'dotenv/config';
import app from './app';

const { PORT = 3001 } = process.env;
app.start(PORT);
