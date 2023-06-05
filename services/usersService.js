import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { createUserDao, getUserByEmail, deleteUser, updateUser, getUserByIdDao } from '../models/usersDao.js'

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
  const createUser = await createUserDao(email, hashedPassword, name)

  return createUser
}

const checkDuplicateEmail = async (email) => {
  const user = await getUserByEmail(email);
  if (user) {
    return true;
  } else {
    return false;
  }
};

const login = async (email, password) => {
  const user = await getUserByEmail(email)
  console.log(user)
  if (!user) {
    const error = new Error('SPECIFIED USER DOES NOT EXIST')
    error.statusCode = 400
    throw error
  }
  const result = await bcrypt.compare(password, user.password)
  console.log(result)

  if (!result) {
    const err = new Error('invalid password')
    err.statusCode = 400
    throw err
  }
  return jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET)
}

const getUserById = async (userId) => {
  const user = await getUserByIdDao(userId)

  if (!user) {
    const error = new Error('USER NOT FOUND')
    error.statusCode = 400
    throw error;
  }
  return user
}

const deletedUser = async (userId) => {
  try {
    const result = await deleteUser(userId);
    return result;
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT');
    error.statusCode = 400;
    throw error;
  }
};

const updatedUser = async (userId, updatedUserData) => {
  try {
    await updateUser(userId, updatedUserData);
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT');
    error.statusCode = 400;
    throw error;
  }
};

const updateAddress = async(userId, address) => {
  try {
    await updateAddress(userId, address)
  } catch(err) {
    const error = new Error('INVALID_DATA_INPUT');
    error.statusCode = 400;
    throw error;
  }
};

export {
  signUp,
  login,
  getUserById,
  deletedUser,
  updatedUser,
  checkDuplicateEmail,
  updateAddress,
}
