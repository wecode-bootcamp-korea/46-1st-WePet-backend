import {
  queryCartItems,
  queryInsertItemToCart,
  queryCartItem,
  queryUpdateItemQuantityInCart,
  queryAddItemQuantityInCart,
  querySubtractItemQuantityInCart,
  queryDeleteItemInCart,
  queryDeleteAllItemInCart,
} from '../models/cartsDao.js'

const getCartItems = async (userId) => {
  const queryData = await queryCartItems(userId)
  return queryData
}

const postItemToCart = async (userId, productId, productQuantity) => {
  const queryData = await queryInsertItemToCart(
    userId,
    productId,
    productQuantity
  )
  return queryData
}

const getCartItem = async (userId, productId) => {
  const queryData = await queryCartItem(userId, productId)
  return queryData
}

const putItemQuantityInCart = async (userId, productId, productQuantity) => {
  const queryData = await queryUpdateItemQuantityInCart(
    userId,
    productId,
    productQuantity
  )
  return queryData
}

const addItemQuantityInCart = async (userId, productId, productQuantity) => {
  const queryData = await queryAddItemQuantityInCart(
    userId,
    productId,
    productQuantity
  )
  return queryData
}

const subtractItemQuantityInCart = async (
  userId,
  productId,
  productQuantity
) => {
  const queryData = await querySubtractItemQuantityInCart(
    userId,
    productId,
    productQuantity
  )
  return queryData
}

const deleteItemInCart = async (userId, productId) => {
  const queryData = await queryDeleteItemInCart(userId, productId)
  return queryData
}

const deleteAllItemInCart = async (userId) => {
  const queryData = await queryDeleteAllItemInCart(userId)
  return queryData
}

export {
  getCartItems,
  postItemToCart,
  getCartItem,
  putItemQuantityInCart,
  addItemQuantityInCart,
  subtractItemQuantityInCart,
  deleteItemInCart,
  deleteAllItemInCart,
}
