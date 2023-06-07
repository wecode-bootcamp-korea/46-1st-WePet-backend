import { Router } from 'express'

import { cartController } from '../controllers/index.js'
import { loginRequired } from '../utils/auth.js'

const cartsRouter = Router()

cartsRouter.get('/', loginRequired, cartController.getCartItems)
cartsRouter.post('/', loginRequired, cartController.postItemToCart)
cartsRouter.put('/', loginRequired, cartController.putItemQuantityInCart)
cartsRouter.patch(
  '/add/single-item',
  loginRequired,
  cartController.addItemQuantityInCart
)
cartsRouter.patch(
  '/subtract/single-item',
  loginRequired,
  cartController.subtractItemQuantityInCart
)
cartsRouter.delete(
  '/remove/single-item/:productId',
  loginRequired,
  cartController.deleteItemInCart
)
cartsRouter.delete(
  '/remove/all-items',
  loginRequired,
  cartController.deleteAllItemInCart
)

cartsRouter.get('/create-order', loginRequired, cartController.createUserOrder)

export { cartsRouter }
