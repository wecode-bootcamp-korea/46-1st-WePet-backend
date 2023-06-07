import jwt from 'jsonwebtoken'
import { userService } from '../services/index.js'

const loginRequired = async (req, res, next) => {
  const accessToken = req.headers.authorization

  if (!accessToken) {
    const error = new Error('NEED_ACCESS_TOKEN')
    error.statusCode = 401

    return res.status(error.statusCode).json({ message: error.message })
  }

  const decoded = await jwt.verify(accessToken, process.env.SECRET_JWT_KEY)

  const user = await userService.getUserById(decoded.id)

  if (!user) {
    const error = new Error('USER_DOES_NOT_EXIST')
    error.statusCode = 404

    return res.status(error.statusCode).json({ message: error.message })
  }

  req.user = user
  next()
}

export { loginRequired }
