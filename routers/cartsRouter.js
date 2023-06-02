import { Router } from 'express'
import { cartController } from '../controllers/index.js'

const cartsRouter = Router()

cartsRouter.get('/', cartController.getCartItems)
cartsRouter.post('/', cartController.postItemToCart)
cartsRouter.put('/', cartController.putItemQuantityInCart)
cartsRouter.patch('/add', cartController.addItemQuantityInCart)
cartsRouter.patch('/subtract', cartController.subtractItemQuantityInCart)
cartsRouter.delete('/remove', cartController.deleteItemInCart)
cartsRouter.delete('/clear', cartController.deleteAllItemInCart)

export { cartsRouter }
