import jwt from 'jsonwebtoken'
import { userService } from '../services/index.js'

const loginRequired = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization

    if (!accessToken) {
      const error = new Error('NEED_ACCESS_TOKEN')
      error.statusCode = 401

      throw error
    }

    const decoded = await jwt.verify(accessToken, process.env.JWT_SECRET)

    const user = await userService.getUserById(decoded.sub)

    if (!user) {
      const error = new Error('USER_DOES_NOT_EXIST')
      error.statusCode = 404

      throw error
    }

    req.user = user
    next()
  } catch (error) {
    next(error)
  }
}

export { loginRequired }
