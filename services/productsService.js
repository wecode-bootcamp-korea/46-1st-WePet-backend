import {
  queryAllProducts,
  queryProductByCategoryId,
  queryProductById,
  querySortProducts,
} from '../models/productsDao.js'

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

const getSortProducts = async (orderBy, offset, limit) => {
  const queryData = await querySortProducts(orderBy, offset, limit)
  return queryData
}

export {
  getAllProducts,
  getProductByCategoryId,
  getProductById,
  getSortProducts,
}
