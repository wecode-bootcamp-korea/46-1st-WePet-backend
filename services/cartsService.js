import { queryCartItems, queryInsertItemToCart } from '../models/cartsDao.js'

const getCartItems = async () => {
  const queryData = await queryCartItems()
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

export { getCartItems, postItemToCart }
