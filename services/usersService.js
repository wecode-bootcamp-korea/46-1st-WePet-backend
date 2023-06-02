import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { createUserDao, getUserByEmail } from '../models/usersDao.js'

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

  return jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET) //토큰을 생성!!
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
// 사용자 정보 업데이트


//유저 정보 삭제


export {
  signUp,
  login,
  getUserById,
}
