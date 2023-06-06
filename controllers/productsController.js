import { productService } from '../services/index.js'
import { catchAsync } from '../utils/errorHandler.js'

const getProducts = catchAsync(async (req, res) => {
  const queryProductsData = await productService.getAllProducts()
  return res.status(200).json({ data: queryProductsData })
})

const getProductCategory = catchAsync(async (req, res) => {
  const productCategoryId = req.query.id
  const queryProductData = await productService.getProductByCategoryId(
    productCategoryId
  )
  return res.status(200).json({ data: queryProductData })
})

const getProductById = catchAsync(async (req, res) => {
  const { productId } = req.params
  const [product] = await productService.getProductById(productId)
  return res.status(200).json({ data: product })
})

const getSortedProducts = catchAsync(async (req, res) => {
  const { categoryId, orderBy, offset, limit } = req.query

  const queryProducts = await productService.getSortProducts(
    categoryId,
    orderBy,
    offset,
    limit
  )
  return res.status(200).json({ data: queryProducts })
})

const postProductToDb = catchAsync(async (req, res) => {
  const {
    productName,
    productCategoryId,
    productPrice,
    productQuantity,
    productDescription,
    mainImageUrl,
  } = req.body

  await productService.postProduct(
    productName,
    productCategoryId,
    productPrice,
    productQuantity,
    productDescription,
    mainImageUrl
  )
  return res.status(200).json({
    message: 'PRODUCT_POSTED_TO_DB_SUCESSFULLY',
  })
})

export {
  getProducts,
  getProductCategory,
  getProductById,
  getSortedProducts,
  postProductToDb,
}
