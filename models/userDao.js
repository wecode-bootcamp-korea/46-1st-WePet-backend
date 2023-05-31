import { database } from './dataSource.js'
//유저 회원가입
const createDao = async (email, password, name) => {
  try {
    await database.query(
      `INSERT INTO user(
            email,
            password,
            name
        ) VALUES (?, ?, ?)
        `,
      [email, password, name]
    )
    res.status(200).json({ message: 'User Create Successfully' })
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT!')
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
    return { message: 'User Updated Successfully' }
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
    return { message: 'User Delete Successfully' }
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT')
    error.statusCode = 400
    throw error
  }
}

export {
  createDao,
  updateUser,
  deleteUser,
}
