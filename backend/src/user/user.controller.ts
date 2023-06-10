import { Router } from 'express';
const userController = Router();

userController.get('/user', (req, res) => {
  const resData = { message: 'user.controller.ts: GET /user' };
  res.locals.data = resData;
  res.status(200).json(resData);
});

userController.get('/user/:id', (req, res) => {
  const resData = { message: 'user.controller.ts: GET /user/:id' };
  res.locals.data = resData;
  res.status(200).json(resData);
});

userController.post('/user', (req, res) => {
  const resData = { message: 'user.controller.ts: POST /user' };
  res.locals.data = resData;
  res.status(201).json(resData);
});

userController.delete('/user/:id', (req, res) => {
  const resData = { message: 'user.controller.ts: DELETE /user/:id' };
  res.locals.data = resData;
  res.status(200).json(resData);
});

export default userController;
