import jwt from 'jsonwebtoken'
import { userService } from '../services/index.js'

const loginRequired = async (req, res, next) => {
  const accessToken = req.headers.authorization

  if (!accessToken) {
    const error = new Error('NEED_ACCESS_TOKEN')
    error.statusCode = 401

  // 2) Verification token
  const decoded = await jwt.verify(accessToken, process.env.JWT_SECRET);

  const user = await userService.getUserById(decoded.id)

  // 4) GRANT ACCESS
  req.user = user;
  next();
  }
}

export { loginRequired }
