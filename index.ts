import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  const WELCOME_MESSAGE = 'Express + TypeScript Server';
  res.send(WELCOME_MESSAGE);
});

app.get('/ping', (req: Request, res: Response) => {
  const MESSAGE:String = "pong";
  res.send(MESSAGE)
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});