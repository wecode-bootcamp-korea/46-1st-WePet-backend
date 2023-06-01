import { Router } from 'express'
import { cartController } from '../controllers/index.js'

const cartsRouter = Router()

cartsRouter.get('/', cartController.getCartItems)

export { cartsRouter }
