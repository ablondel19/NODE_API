import express from 'express';
import router from './user/user.controller';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({});
});

app.use('/api', router);
app.listen(3000);
export default app;
