import { Router } from 'express'
import { productController } from '../controllers/index.js'

const productsRouter = Router()

productsRouter.get('/', productController.getProducts)
productsRouter.get('/category', productController.getProductCategory)
productsRouter.get('/:productId', productController.getProductById)
productsRouter.get('/filter', productController.getSortProducts)

export { productsRouter }
