import {
  getAllProducts,
  getProductByCategoryId,
  getProductById,
} from './productsService.js'

const services = {
  getAllProducts: getAllProducts,
  getProductByCategoryId: getProductByCategoryId,
  getProductById: getProductById,
}

export default services
