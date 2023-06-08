import { orderService } from '../services/index.js'
import { catchAsync } from '../utils/errorHandler.js'

const createUserOrder = catchAsync(async (req, res) => {
  const userId = req.user.id
  await orderService.createUserOrder(userId)
  return res.status(201).json({
    message: 'CREATE_ORDER_SUCCESSFUL',
  })
})

const getUserOrder = catchAsync(async (req, res) => {
  const userId = req.user.id
  const orderData = await orderService.getUserOrder(userId)
  return res.status(200).json({
    data: orderData,
  })
})

const postUserOrderTotal = catchAsync(async (req, res) => {
  const userId = req.user.id
  const { orderTotal } = req.body
  await orderService.postUserOrderTotal(userId, orderTotal)
  return res.status(201).json({
    message: 'USER_ORDER_TOTAL_POSTED_SUCCESSFULLY',
  })
})

const getUserOrderHistory = catchAsync(async (req, res) => {
  const userId = req.user.id
  const orderHistory = await orderService.getUserOrderHistory(userId)
  return res.status(200).json({
    data: orderHistory,
  })
})

export {
  createUserOrder,
  getUserOrder,
  postUserOrderTotal,
  getUserOrderHistory,
}
