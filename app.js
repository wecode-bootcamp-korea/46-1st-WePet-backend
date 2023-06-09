dotenv.config()
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'

import { database } from './models/dataSource.js'
import { globalErrorHandler } from './utils/errorHandler.js'
import { router } from './routers/index.js'

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(router)
app.use(globalErrorHandler)

database
  .initialize()
  .then(() => {
    console.log('DATABASE_INITIALIZED 💽')
  })
  .catch((error) => {
    console.error('DATABASE_INITIALIZATION_ERROR 👻')
  })

app.listen(PORT, () => {
  console.log(`LISTENING_ON 127.0.0.1:${PORT} 🤖`)
})
