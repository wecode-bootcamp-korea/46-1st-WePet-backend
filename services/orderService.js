import {
  queryCreateUserOrder,
  queryOrderData,
  queryInsertOrderTotal,
  queryUserOrderHistory,
} from '../models/orderDao.js'

const createUserOrder = async (userId) => {
  return queryCreateUserOrder(userId)
}

const getUserOrder = async (userId) => {
  return queryOrderData(userId)
}

const postUserOrderTotal = async (userId, orderTotal) => {
  return queryInsertOrderTotal(userId, orderTotal)
}

const getUserOrderHistory = async (userId) => {
  return queryUserOrderHistory(userId)
}

export {
  createUserOrder,
  getUserOrder,
  postUserOrderTotal,
  getUserOrderHistory,
}
