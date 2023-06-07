import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import * as userDao from '../models/usersDao.js'
import * as addressDao from '../models/addressDao.js'

const signUp = async (email, password, name) => {
  const pwValidation = new RegExp(
    '^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})'
  )
  if (!pwValidation.test(password)) {
    const error = new Error('PASSWORD_IS_NOT_VALID')
    error.statusCode = 400
    throw error
  }
  const saltRounds = 10
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  const createUser = await userDao.createUser(email, hashedPassword, name)

  return createUser
}

const checkDuplicateEmail = async (email) => {
  const user = await userDao.getUserByEmail(email)

  if (user) {
    return true
  } else {
    return false
  }
}

const login = async (email, plaintextPassword) => {
  const user = await userDao.getUserByEmail(email)

  if (!user) {
    const error = new Error('SPECIFIED_USER_DOES_NOT_EXIST')
    error.statusCode = 400
    throw error
  }

  const result = await bcrypt.compare(plaintextPassword, user.password)

  if (!result) {
    const err = new Error('INVALID_PASSWORD')
    err.statusCode = 400
    throw err
  }

  return jwt.sign({ id: user.id }, process.env.SECRET_JWT_KEY, {
    algorithm: process.env.ALGORITHM,
    expiresIn: process.env.JWT_EXPIRES_IN,
  })
}

const getUserById = async (userId) => {
  const user = await userDao.getUserById(userId)
  if (!user) {
    const error = new Error('USER_NOT_FOUND')
    error.statusCode = 400
    throw error
  }

  return user
}

const deletedUser = async (userId) => {
  try {
    const result = await userDao.deleteUser(userId)
    return result
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT!')
    error.statusCode = 404
    throw error
  }
}

const updateUser = async (userId, data) => {
  try {
    return await userDao.updateUser(userId, data)
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT')
    error.statusCode = 400
    throw error
  }
}

const createNewAddress = async (userId, address1, address2) => {
  try {
    await addressDao.createAddress(userId, address1, address2)
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT')
    error.statusCode = 400
    throw error
  }
}

const updatePayment = async () => {
  try {
    await usersPaymentDao.payment(userPoints, userId)
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT')
    error.statusCode = 400
    throw error
  }
}

export {
  signUp,
  login,
  getUserById,
  deletedUser,
  updateUser,
  checkDuplicateEmail,
  createNewAddress,
  updatePayment,
}
