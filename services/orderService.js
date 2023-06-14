import {
  queryCreateUserOrder,
  queryOrderData,
  queryInsertOrderTotal,
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

export { createUserOrder, getUserOrder, postUserOrderTotal }
