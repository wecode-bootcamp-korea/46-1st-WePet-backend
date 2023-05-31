import { Router } from 'express'
import { signUp } from '../controller/userController.js'

const userRouter = Router();

userRouter.post('/signUp', signUp );


// userRouter.post('/signIn', signIn );

export { userRouter };
