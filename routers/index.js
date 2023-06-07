import { Router } from 'express'
import { usersRouter } from './usersRouter.js'
import { productsRouter } from './productsRouter.js'
import { cartsRouter } from './cartsRouter.js'
import { orderRouter } from './orderRouter.js'

const router = Router()

router.get('/', (req, res) => {
  const dogAscii = `  
   __
o-''|\\_____/)
 \\_/|_)     )
    \\  __  /
    (_/ (_/ 
`
  res.send(`<pre>${dogAscii}</pre>`)
})

router.use('/products', productsRouter)
router.use('/shopping-carts', cartsRouter)
router.use('/users', usersRouter)
router.use('/orders', orderRouter)

export { router }
