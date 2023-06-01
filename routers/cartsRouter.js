import { Router } from 'express'
import { cartController } from '../controllers/index.js'

const cartsRouter = Router()

cartsRouter.get('/', cartController.getCartItems)
cartsRouter.post('/', cartController.postItemToCart)

export { cartsRouter }
