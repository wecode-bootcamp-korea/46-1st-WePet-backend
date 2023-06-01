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
  } catch (err) {}
}

const getUserById = async (userId) => {
  
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

// //유저 정보 삭제
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

export { createUserDao, getUserByEmail, updateUser, deleteUser }
