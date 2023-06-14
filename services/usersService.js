import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {
  createUserDao,
  getUserByEmailDao,
  getUserByIdDao,
  deleteUserByIdDao,
  updateUserByIdDao,
  updateAddressDao,
  updatePassword,
} from '../models/usersDao.js'

const signUp = async (email, password, name) => {
  const isDuplicateEmail = await checkDuplicateEmail(email)
  if (!email || !password || !name) {
    const error = new Error('KEY_ERROR')
    error.statusCode = 400
    throw error
  } else if (isDuplicateEmail === true) {
    const error = new Error('DUPLICATE_EMAIL')
    error.statusCode = 400
    throw error
  }

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

const checkDuplicateEmail = async (email) => {
  const user = await getUserByEmailDao(email)
  if (user) {
    return true
  } else {
    return false
  }
}

const login = async (email, password) => {
  const user = await getUserByEmailDao(email)
  if (!user) {
    const error = new Error('SPECIFIED_USER_DOES_NOT_EXIST')
    error.statusCode = 400
    throw error
  }
  const result = await bcrypt.compare(password, user.password)

  if (!result) {
    const err = new Error('INVALID_PASSWORD')
    err.statusCode = 400
    throw err
  }
  return jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET)
}

const deleteUser = async (userId) => {
  return await deleteUserByIdDao(userId)
}

const changePassword = async (userId, password) => {
  const pwValidation = new RegExp(
    '^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})'
  )
  if (!pwValidation.test(password)) {
    const error = new Error('PASSWORD IS NOT VALID')
    error.statusCode = 400
    throw error
  }
  const user = await getUserByIdDao(userId)
  const checkPasswordDuplicacy = await bcrypt.compare(password, user.password)
  if (checkPasswordDuplicacy === true) {
    const err = new Error('INVALID_PASSWORD')
    err.statusCode = 400
    throw err
  }
  const saltRounds = 10
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  return await updatePassword(userId, hashedPassword)
}

const updateUser = async (userId, data) => {
  const existingUser = await getUserByIdDao(userId)

  const getOrUpdateEmail = data.email ? data.email : existingUser.email
  const getOrUpdateName = data.name ? data.name : existingUser.name

  return await updateUserByIdDao(userId, getOrUpdateEmail, getOrUpdateName)
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

const getUserById = async (userId) => {
  const user = await getUserByIdDao(userId)
  if (!user) {
    const error = new Error('USER_NOT_FOUND')
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
  updateUserAddress,
  changePassword,
}
