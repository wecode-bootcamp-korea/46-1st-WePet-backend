import { Router } from 'express'

import { cartController } from '../controllers/index.js'

const cartsRouter = Router()

cartsRouter.get('/', cartController.getCartItems)
cartsRouter.post('/', cartController.postItemToCart)
cartsRouter.put('/', cartController.putItemQuantityInCart)
cartsRouter.patch('/add/single-item', cartController.addItemQuantityInCart)
cartsRouter.patch(
  '/subtract/single-item',
  cartController.subtractItemQuantityInCart
)
cartsRouter.delete(
  '/remove/single-item/:productId',
  cartController.deleteItemInCart
)
cartsRouter.delete('/remove/all-items', cartController.deleteAllItemInCart)

export { cartsRouter }
