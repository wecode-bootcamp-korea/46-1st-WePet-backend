import { Router } from 'express'

import { userController } from '../controllers/index.js'

const usersRouter = Router();

usersRouter.post('/signup', userController.signUp);
usersRouter.post('/login', userController.login);

export { usersRouter }