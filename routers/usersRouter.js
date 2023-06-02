import { Router } from 'express'

import { userController } from '../controllers/index.js'

const usersRouter = Router()

usersRouter.post('/signup', userController.signUp)
usersRouter.post('/login', userController.login)
usersRouter.patch('/update', userController.updateUser)
usersRouter.delete('/delete', userController.deleteUser)

export { usersRouter }
