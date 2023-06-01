import { productsService } from '../services/index.js'
import { catchAsync } from '../utils/errorHandler.js'

const getProducts = catchAsync(async (req, res) => {
  const queryProductsData = await productsService.getAllProducts()
  res.status(200).json({ data: queryProductsData })
})

const getProduct = catchAsync(async (req, res) => {
  const productCategoryId = req.query.id
  const queryProductData = await productsService.getProductByCategoryId(
    productCategoryId
  )
  res.status(200).json({ data: queryProductData })
})

const getProductById = catchAsync(async (req, res) => {
  const { productId } = req.params
  const [product] = await productsService.getProductById(productId)
  return res.status(200).json({ data: product })
})

export { getProducts, getProduct, getProductById }
