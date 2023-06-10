import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
import { displayData, generateData, loadData } from './database';
import userController from './user/user.controller';

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  morgan((tokens, req, res) => {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'),
      '-',
      tokens['response-time'](req, res),
      'ms',
      JSON.stringify(res.locals.data),
    ].join(' ');
  })
);

app.get('/gen', (req, res) => {
  generateData();
  const resData = { message: 'app.ts: GET /' };
  res.locals.data = resData;
  res.status(200).json(resData);
});

app.get('/load', (req, res) => {
  loadData();
  const resData = { message: 'app.ts: GET /' };
  res.locals.data = resData;
  res.status(200).json(resData);
});

app.get('/show', (req, res) => {
  displayData();
  const resData = { message: 'app.ts: GET /' };
  res.locals.data = resData;
  res.status(200).json(resData);
});

app.use('/api', userController);
app.listen(3000);
export default app;
