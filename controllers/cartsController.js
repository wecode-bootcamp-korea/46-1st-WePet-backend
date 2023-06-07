import { cartService } from '../services/index.js'
import { catchAsync } from '../utils/errorHandler.js'

const getCartItems = catchAsync(async (req, res) => {
  const userId = req.user.id

  const queryCartItems = await cartService.getCartItems(userId)
  return res.status(200).json({
    data: queryCartItems,
  })
})

const postItemToCart = catchAsync(async (req, res) => {
  const userId = req.user.id
  const { productId, productQuantity } = req.body

  if (!userId || !productId || !productQuantity) {
    return res.status(400).json({
      message: 'MISSING_USER_ID_PRODUCT_ID_AND_QUANTITY',
    })
  }

  await cartService.postItemToCart(userId, productId, productQuantity)

  return res.status(201).json({
    message: 'ITEM_ADD_TO_CART_SUCCESSFUL',
  })
})

const putItemQuantityInCart = catchAsync(async (req, res) => {
  const userId = req.user.id
  const { productId, productQuantity } = req.body

  if (!userId || !productId || !productQuantity) {
    return res.status(400).json({
      message: 'MISSING_USER_ID_PRODUCT_ID_AND_QUANTITY',
    })
  }

  await cartService.putItemQuantityInCart(userId, productId, productQuantity)

  return res.status(201).json({
    message: 'ITEM_UPDATE_SUCCESSFUL',
  })
})

const addItemQuantityInCart = catchAsync(async (req, res) => {
  const userId = req.user.id
  const { productId } = req.body
  const productQuantity = 1

  if (!userId || !productId || !productQuantity) {
    return res.status(400).json({
      message: 'MISSING_USER_ID_PRODUCT_ID_AND_QUANTITY',
    })
  }

  await cartService.addItemQuantityInCart(userId, productId, productQuantity)

  return res.status(201).json({
    message: 'ITEM_QUANTITY_ADD_SUCCESSFUL',
  })
})

const subtractItemQuantityInCart = catchAsync(async (req, res) => {
  const userId = req.user.id
  const { productId } = req.body
  const productQuantity = 1

  if (!userId || !productId || !productQuantity) {
    return res.status(400).json({
      message: 'MISSING_USER_ID_PRODUCT_ID_AND_QUANTITY',
    })
  }

  await cartService.subtractItemQuantityInCart(
    userId,
    productId,
    productQuantity
  )

  return res.status(200).json({
    message: 'ITEM_QUANTITY_SUBTRACT_SUCCESSFUL',
  })
})

const deleteItemInCart = catchAsync(async (req, res) => {
  const userId = req.user.id
  const { productId } = req.params

  if (!userId || !productId) {
    return res.status(400).json({
      message: 'MISSING_USER_ID_PRODUCT_ID_AND_QUANTITY',
    })
  }

  await cartService.deleteItemInCart(userId, productId)

  return res.status(204).json({
    message: 'ITEM_REMOVED_SUCCESSFUL',
  })
})

const deleteAllItemInCart = catchAsync(async (req, res) => {
  const userId = req.user.id

  if (!userId) {
    return res.status(400).json({
      message: 'MISSING_USER_ID_PRODUCT_ID_AND_QUANTITY',
    })
  }

  await cartService.deleteAllItemInCart(userId)

  return res.status(204).json({
    message: 'REMOVE_ALL_ITEM_SUCCESSFUL',
  })
})

export {
  getCartItems,
  postItemToCart,
  putItemQuantityInCart,
  addItemQuantityInCart,
  subtractItemQuantityInCart,
  deleteItemInCart,
  deleteAllItemInCart,
}
