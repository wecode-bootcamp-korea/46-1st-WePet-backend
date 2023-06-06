import { Router } from 'express'

import { userController } from '../controllers/index.js'

const usersRouter = Router()

usersRouter.post('/signup', userController.signUp)
usersRouter.post('/login', userController.login)
usersRouter.patch('/:userId', userController.updateUser)
usersRouter.post('/address', userController.postAddress)
usersRouter.delete('/delete', userController.deleteUser)
usersRouter.patch('/points', userController.userPoints)

export { usersRouter }
