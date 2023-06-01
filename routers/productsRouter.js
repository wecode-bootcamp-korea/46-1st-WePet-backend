import controllers from '../controllers/index.js'
import { Router } from 'express'

const productsRouter = Router()

productsRouter.get('/', controllers.getProducts)
productsRouter.get('/category', controllers.getProduct)
productsRouter.get('/:productId', controllers.getProductById)

export { productsRouter }
