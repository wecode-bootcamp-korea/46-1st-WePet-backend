import { cartService } from '../services/index.js'

const getCartItems = async (req, res) => {
  const queryCartItems = await cartService.getCartItems()
  return res.status(200).json({
    data: queryCartItems,
  })
}

export { getCartItems }
