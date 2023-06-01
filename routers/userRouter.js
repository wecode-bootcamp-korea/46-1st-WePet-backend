import { Router } from 'express'
import { signUp, login } from '../controller/userController.js'

const userRouter = Router();

userRouter.post('/signup', signUp );
userRouter.post('/login', login );

export { userRouter };
