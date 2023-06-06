import {
  queryAllProducts,
  queryProductByCategoryId,
  queryProductById,
} from '../models/productsDao.js'

import { catchAsync } from '../utils/errorHandler.js'

const getAllProducts = async () => {
  const queryData = await queryAllProducts()
  return queryData
}

const getProductByCategoryId = async (productCategoryId) => {
  const queryData = await queryProductByCategoryId(productCategoryId)
  return queryData
}

const getProductById = async (productId) => {
  const queryData = await queryProductById(productId)
  return queryData
}

export { getAllProducts, getProductByCategoryId, getProductById }
