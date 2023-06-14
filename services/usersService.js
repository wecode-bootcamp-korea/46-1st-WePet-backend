import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {
  createUserDao,
  getUserByEmailDao,
  getUserByIdDao,
  deleteUserByIdDao,
  updateUserByIdDao,
  updateAddressDao,
} from '../models/usersDao.js'

const signUp = async (email, password, name) => {
  const pwValidation = new RegExp(
    '^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})'
  )
  if (!pwValidation.test(password)) {
    const error = new Error('PASSWORD IS NOT VALID')
    error.statusCode = 400
    throw error
  }
  const saltRounds = 10
  const defaultPoints = 500000
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  const createUser = await createUserDao(
    email,
    hashedPassword,
    name,
    defaultPoints
  )

  return createUser
}

const login = async (email, password) => {
  const user = await getUserByEmailDao(email)
  if (!user) {
    const error = new Error('SPECIFIED USER DOES NOT EXIST')
    error.statusCode = 400
    throw error
  }
  const result = await bcrypt.compare(password, user.password)

  if (!result) {
    const err = new Error('INVALID PASSWORD')
    err.statusCode = 400
    throw err
  }
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.SECRET_JWT_KEY
  )
}

const deleteUser = async (userId) => {
  try {
    const result = await deleteUserByIdDao(userId)
    return result
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT')
    error.statusCode = 400
    throw error
  }
}

const updateUser = async (userId, data) => {
  try {
    await updateUserByIdDao(userId, data)
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT')
    error.statusCode = 400
    throw error
  }
}

const updateUserAddress = async (
  userId,
  address1,
  address2,
  userName,
  phoneNumber,
  memo
) => {
  await updateAddressDao(
    userId,
    address1,
    address2,
    userName,
    phoneNumber,
    memo
  )
}

const checkDuplicateEmail = async (email) => {
  const user = await getUserByEmailDao(email)
  if (user) {
    return true
  } else {
    return false
  }
}

const getUserById = async (userId) => {
  const user = await getUserByIdDao(userId)
  if (!user) {
    const error = new Error('USER NOT FOUND')
    error.statusCode = 400
    throw error
  }
  return user
}

export {
  signUp,
  login,
  getUserById,
  deleteUser,
  updateUser,
  checkDuplicateEmail,
  updateUserAddress,
}
