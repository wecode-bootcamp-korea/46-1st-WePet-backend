import {
  getAllProducts,
  getProductByCategoryId,
  getProductById,
} from './productsService.js'

const productServices = {
  getAllProducts: getAllProducts,
  getProductByCategoryId: getProductByCategoryId,
  getProductById: getProductById,
}

export default productServices
