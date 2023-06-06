import { Router } from 'express'

import { productController } from '../controllers/index.js'

const productsRouter = Router()

productsRouter.get('/', productController.getProducts)
productsRouter.get('/category', productController.getProduct)
productsRouter.get('/:productId', productController.getProductById)

export { productsRouter }
