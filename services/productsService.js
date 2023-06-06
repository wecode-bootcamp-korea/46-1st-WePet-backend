import {
  queryAllProducts,
  queryProductByCategoryId,
  queryProductById,
  querySortProducts,
  queryInsertProduct,
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

const postProduct = async (
  productName,
  productCategoryId,
  productPrice,
  productQuantity,
  productDescription,
  mainImageUrl
) => {
  return queryInsertProduct(
    productName,
    productCategoryId,
    productPrice,
    productQuantity,
    productDescription,
    mainImageUrl
  )
}

export {
  getAllProducts,
  getProductByCategoryId,
  getProductById,
  getSortProducts,
  postProduct,
}
