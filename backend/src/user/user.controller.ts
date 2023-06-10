import { Router } from 'express';
const userController = Router();

userController.get('/user', (req, res) => {
  res.json({ message: 'user.controller.ts: GET /user' });
});

userController.get('/user/:id', (req, res) => {
  res.json({ message: 'user.controller.ts: GET /user/:id' });
});

userController.put('/user/:id', (req, res) => {
  res.json({ message: 'user.controller.ts: PUT /user/:id' });
});

userController.post('/user', (req, res) => {
  res.json({ message: 'user.controller.ts: POST /user' });
});

userController.delete('/user/:id', (req, res) => {
  res.json({ message: 'user.controller.ts: DELETE /user/:id' });
});

export default userController;
