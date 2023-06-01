import sign from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { createUserDao, updateUser, deleteUser } from '../models/userDao.js'

const createUser = async (email, password, name) => {
  const pwValidation = new RegExp(
    '^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})'
  )
  if (!pwValidation.test(password)) {
    const err = new Error('PASSWORD_IS_NOT_VALID')
    err.statusCode = 409
    throw err
  }
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  const createUser = await createUserDao(email, hashedPassword, name)

  return createUser
}

const getUserById = async (userId) => {

}


const login = async (email, password) => {

  const user = await userDao.getUserByEmail(email);

  if (!user) {
    const err = new Error('specified user does not exist');
    err.statusCode = 404;
    throw err;
  }

  const result = await bcrypt.compare(password, user.password);

  if (!result) {
    const err = new Error('invalid password');
    err.statusCode = 401;
    throw err;
  }

  return sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET);
}

export { createUser, updateUser, deleteUser, login }
