import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import * as userDao from '../models/usersDao.js'
import * as addressDao from '../models/addressDao.js'
// import * as usersPaymentDao from '../models/usersPaymentDao'

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
  const createUser = await userDao.createUserDao(email, hashedPassword, name)

  return createUser
}

const checkDuplicateEmail = async (email) => {
  const user = await userDao.getUserByEmail(email);
  if (user) {
    return true;
  } else {
    return false;
  }
};

const login = async (email, password) => {
  const user = await userDao.getUserByEmail(email)
  if (!user) {
    const error = new Error('SPECIFIED USER DOES NOT EXIST')
    error.statusCode = 400
    throw error
  }
  const result = await bcrypt.compare(password, user.password)

  if (!result) {
    const err = new Error('invalid password')
    err.statusCode = 400
    throw err
  }
  return jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET)
}

const getUserById = async (userId) => {
  const user = await userDao.getUserByIdDao(userId)

  if (!user) {
    const error = new Error('USER NOT FOUND')
    error.statusCode = 400
    throw error;
  }
  return user
}
//수정
const deletedUser = async (userId) => {
  try {
    const result = await userDao.deleteUser(userId);
    return result;
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT!');
    console.log(err)
    error.statusCode = 404;
    throw error;
  }
};

const updateUser = async (userId, data) => {
  try {
    return await userDao.update(userId, data);
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT');
    error.statusCode = 400;
    console.log(err)
    throw error;
  }
};

const createNewAddress = async(userId, address1, address2) => {
  try {
    await addressDao.createAddress(userId, address1, address2)
  } catch(err) {
    const error = new Error('INVALID_DATA_INPUT');
    error.statusCode = 400;
    throw error;
  }
};

const updatePayment = async() => {
  try {
    await usersPaymentDao.payment(points, userId)
  } catch(err) {
    const error = new Error('INVALID_DATA_INPUT');
    error.statusCode = 400;
    throw error;
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
  updatePayment
}
