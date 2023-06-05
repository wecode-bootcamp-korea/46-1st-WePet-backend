import { productService } from '../services/index.js'
import { catchAsync } from '../utils/errorHandler.js'

const getProducts = catchAsync(async (req, res) => {
  const queryProductsData = await productService.getAllProducts()
  res.status(200).json({ data: queryProductsData })
})

const getProductCategory = catchAsync(async (req, res) => {
  const productCategoryId = req.query.id
  const queryProductData = await productService.getProductByCategoryId(
    productCategoryId
  )
  res.status(200).json({ data: queryProductData })
})

const getProductById = catchAsync(async (req, res) => {
  const { productId } = req.params
  const [product] = await productService.getProductById(productId)
  res.status(200).json({ data: product })
})

const getSortProducts = catchAsync(async (req, res) => {
  console.log(req)
  const { orderBy, offset, limit } = req.query

  const queryProducts = await productService.getSortProducts(
    orderBy,
    offset,
    limit
  )
  res.status(200).json({ data: queryProducts })
})

export { getProducts, getProductCategory, getProductById, getSortProducts }
