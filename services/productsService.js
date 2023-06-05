import {
  queryAllProducts,
  queryProductByCategoryId,
  queryProductById,
  querySortProducts,
} from '../models/productsDao.js'

const getAllProducts = async () => {
  return queryAllProducts()
}

const getProductByCategoryId = async (productCategoryId) => {
  return queryProductByCategoryId(productCategoryId)
}

const getProductById = async (productId) => {
  return queryProductById(productId)
}

const getSortProducts = async (categoryId, orderBy, offset, limit) => {
  return querySortProducts(categoryId, orderBy, offset, limit)
}

export {
  getAllProducts,
  getProductByCategoryId,
  getProductById,
  getSortProducts,
}
