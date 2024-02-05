import { Express, Request, Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './routes/authRoutes';
import generatePDF from './controllers/generatePDF';

dotenv.config();

const app: Express = express();
const port = 5001;

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server, changed');
});

app.use('/auth', authRouter);
app.post('/generate-pdf', generatePDF);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
