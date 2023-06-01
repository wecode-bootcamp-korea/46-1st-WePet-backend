import { cartService } from '../services/index.js'
import { catchAsync } from '../utils/errorHandler.js'

const getCartItems = catchAsync(async (req, res) => {
  const queryCartItems = await cartService.getCartItems()
  return res.status(200).json({
    data: queryCartItems,
  })
})

const postItemToCart = catchAsync(async (req, res) => {
  const { productId, productQuantity } = req.body
  const userId = req.userId

  if (!userId || !productId || !productQuantity) {
    return res.status(400).json({
      message: 'MISSING_USER_ID_PRODUCT_ID_AND_QUANTITY',
    })
  }

  await cartService.postItemToCart(userId, productId, productQuantity)

  return res.status(201).json({
    message: 'ITEM_ADDED_TO_CART_SUCCESSFULLY',
  })
})

export { getCartItems, postItemToCart }
