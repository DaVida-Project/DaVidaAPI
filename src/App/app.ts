import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { corsOptions } from '@utils/corsOptions';

const app: Application = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan('dev'));

app.get('/', (request: Request, response: Response) => {
  return response
    .status(200)
    .json({ message: 'Hello World', codeStatus: 200, api: '' });
});

export default app;
