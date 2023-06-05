import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { createUserDao, getUserByEmail, deleteUser, updateUser } from '../models/usersDao.js'

// 회원가입
const signUp = async (email, password, name) => {
  const pwValidation = new RegExp(
    '^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})'
  )
  if (!pwValidation.test(password)) {
    const err = new Error('PASSWORD_IS_NOT_VALID')
    err.statusCode = 409
    throw err
  }
  const saltRounds = 10
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  const createUser = await createUserDao(email, hashedPassword, name)

  return createUser
}
// 이메일 중복확인
const checkDuplicateEmail = async (email) => {
  const user = await getUserByEmail(email);
  if (user) {
    return true; // 중복된 이메일
  } else {
    return false; // 중복되지 않은 이메일
  }
};
// 로그인
const login = async (email, password) => {
  const user = await getUserByEmail(email)
  console.log(user)
  if (!user) {
    const err = new Error('specified user does not exist')
    err.statusCode = 404
    throw err
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
  const user = await getUserById(userId)

  if (!user) {
    const err = new Error('User not found')
    err.statusCode = 404
    throw err
  }
  return user
}
// 사용자 정보 삭제
const deletedUser = async (userId) => {
  try {
    const result = await deleteUser(userId);
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
//사용자 정보 업데이트
const updatedUser = async (userId, updatedUserData) => {
  try {
    await updateUser(userId, updatedUserData);
  } catch (err) {
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
}
