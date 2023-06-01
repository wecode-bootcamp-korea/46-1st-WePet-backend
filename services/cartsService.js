import { queryCartItems } from '../models/cartsDao.js'

const getCartItems = async () => {
  const queryData = await queryCartItems()
  return queryData
}

export { getCartItems }
