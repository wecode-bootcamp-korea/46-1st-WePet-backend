import {
  queryCartItems,
  queryInsertItemToCart,
  queryUpdateItemQuantityInCart,
  queryAddItemQuantityInCart,
  querySubtractItemQuantityInCart,
  queryDeleteItemInCart,
  queryDeleteAllItemInCart,
} from '../models/cartsDao.js'

const getCartItems = async (userId) => {
  return await queryCartItems(userId)
}

const postItemToCart = async (userId, productId) => {
  return queryInsertItemToCart(userId, productId)
}

const putItemQuantityInCart = async (userId, productId, productQuantity) => {
  return queryUpdateItemQuantityInCart(userId, productId, productQuantity)
}

const addItemQuantityInCart = async (userId, productId, productQuantity) => {
  return queryAddItemQuantityInCart(userId, productId, productQuantity)
}

const subtractItemQuantityInCart = async (
  userId,
  productId,
  productQuantity
) => {
  return querySubtractItemQuantityInCart(userId, productId, productQuantity)
}

const deleteItemInCart = async (userId, productId) => {
  return queryDeleteItemInCart(userId, productId)
}

const deleteAllItemInCart = async (userId) => {
  return queryDeleteAllItemInCart(userId)
}

export {
  getCartItems,
  postItemToCart,
  putItemQuantityInCart,
  addItemQuantityInCart,
  subtractItemQuantityInCart,
  deleteItemInCart,
  deleteAllItemInCart,
}
