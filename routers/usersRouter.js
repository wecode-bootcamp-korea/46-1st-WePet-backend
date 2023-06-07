import { Router } from 'express'

import { loginRequired } from '../utils/auth.js';
import { userController } from '../controllers/index.js'

const usersRouter = Router()

usersRouter.post('/signup', userController.signUp);
usersRouter.post('/login', userController.login);
usersRouter.patch('/information', userController.updateUser);
usersRouter.patch('/address', loginRequired, userController.address);
usersRouter.delete('', loginRequired, userController.deleteUser);

export { usersRouter }
