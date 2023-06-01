import { Router } from 'express'
import  { usersRouter } from './usersRouter.js'
import { productsRouter } from './productsRouter.js'

const router = Router()

router.get('/', (req, res) => {
  res.json({
    message: 'this is test message for root endpoint',
  })
})

router.use('/users', usersRouter)
router.use('/products', productsRouter)

export { router }
