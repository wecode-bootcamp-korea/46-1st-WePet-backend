import { database } from './dataSource.js'
//유저 회원가입
const createUserDao = async (email, password, name) => {
  try {
    await database.query(
      `INSERT INTO users (
            email,
            password,
            name
        ) VALUES (
          ?, ?, ?)`,
      [email, password, name]
    )
  } catch (err) {
    console.log(err)
    const error = new Error('INVALID_DATA_INPUT!')
    error.statusCode = 400
    throw error
  }
}
//로그인
const getUserByEmail = async (email) => {
  try {
    const user = await database.query(
      `SELECT 
        u.email,
        u.password,
        u.name,
        u.points
      FROM users u
      WHERE u.email = ?
      `,
      [ email ]
    )
    return user
  } catch (err) {
    console.log(err)
    const error = new Error('!')
    error.statusCode = 400
    throw error
  }
}
//access_token을 verify해서 얻어낸 userId를  auth.js -> userService -> userDao의 흐름으로 전달한다.
const getUserById = async (userId) => {
  try {
    const user = await database.query(
      `SELECT 
        u.email,
        u.password,
        u.name,
        u.points
      FROM users u
      WHERE u.id = ?
      `,
      [userId]
    )
    return user
  } catch (err) {
    console.log(err)
    const error = new Error('INVALID_DATA_INPUT')
    error.statusCode = 400
    throw error
  }
}

//유저 정보 업데이트
const updateUser = async (email, password, name) => {
  try {
    await database.query(
      `UPDATE users
             SET email = ?,
                 password = ?,
                 name = ?
             WHERE id = ?`,
      [email, password, name, userId]
    )
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT')
    error.statusCode = 400
    throw error
  }
}

//유저 정보 삭제
const deleteUser = async (email, password, name) => {
  try {
    await database.req.body(
      `DELETE FROM users
            WHERE email = ?
            AND password = ?
            AND name = ?`,
      [email, password, name]
    )
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT')
    error.statusCode = 400
    throw error
  }
}

export { createUserDao,
  getUserByEmail,
  updateUser,
  deleteUser,
  getUserById,
}
