import { Router } from 'express'

import { userController } from '../controllers/index.js'
import { loginRequired } from '../utils/auth.js';

const usersRouter = Router()

usersRouter.post('/signup', userController.signUp);
usersRouter.post('/login', userController.login);
usersRouter.put('', loginRequired, userController.updateUser);
usersRouter.patch('/address', userController.address);
usersRouter.delete('',loginRequired, userController.deleteUser);

export { usersRouter }
