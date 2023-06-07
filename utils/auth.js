import jwt from 'jsonwebtoken'
<<<<<<< HEAD
import { usersService } from '../services/index.js'
=======
import { userService } from '../services/index.js'
>>>>>>> 9cb8e227df541a675644e8456f35e254e3e9b55c

const loginRequired = async (req, res, next) => {
  const accessToken = req.headers.authorization

  if (!accessToken) {
    const error = new Error('NEED_ACCESS_TOKEN')
    error.statusCode = 401

<<<<<<< HEAD
  // 2) Verification token
  const decoded = await jwt.verify(accessToken, process.env.JWT_SECRET);
=======
    return res.status(error.statusCode).json({ message: error.message })
  }
>>>>>>> 9cb8e227df541a675644e8456f35e254e3e9b55c

  const decoded = await jwt.verify(accessToken, process.env.SECRET_JWT_KEY)

  const user = await userService.getUserById(decoded.id)

<<<<<<< HEAD
  // 4) GRANT ACCESS
  req.user = user;
  next();
=======
  if (!user) {
    const error = new Error('USER_DOES_NOT_EXIST')
    error.statusCode = 404

    return res.status(error.statusCode).json({ message: error.message })
  }

  req.user = user
  next()
>>>>>>> 9cb8e227df541a675644e8456f35e254e3e9b55c
}

export { loginRequired }
