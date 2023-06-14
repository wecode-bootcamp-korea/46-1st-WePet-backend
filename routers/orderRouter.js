import { Router } from 'express'

import { orderController } from '../controllers/index.js'
import { loginRequired } from '../utils/auth.js'

const orderRouter = Router()

orderRouter.post('/', loginRequired, orderController.createUserOrder)
orderRouter.get('/', loginRequired, orderController.getUserOrder)
orderRouter.post(
  '/order-total',
  loginRequired,
  orderController.postUserOrderTotal
)

export { orderRouter }
