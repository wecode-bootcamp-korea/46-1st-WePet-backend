import { database } from './dataSource.js'

const createUser = async (email, password, name) => {
  try {
    const result = await database.query(
      `INSERT INTO users (
            email,
            password,
            name
        ) VALUES (
          ?, ?, ?)`,
      [email, password, name]
    )
    if (result.affectedRows > 0) {
      await database.query(
        `INSERT INTO users_payment (
          user_id,
          points
        ) VALUES (?, 500000)`,
        [result.insertId]
      )
    } else {
      const error = new Error('CREATE_NOT_USER')
      error.statusCode = 401
    }
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT!')
    error.statusCode = 400
    throw error
  }
}

const getUserByEmail = async (email) => {
  try {
    const [user] = await database.query(
      `SELECT 
        u.id,
        u.email,
        u.password,
        u.name,
        u.points
        FROM users u
        WHERE u.email = ?
        `,
      [email]
    )
    return user
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT')
    error.statusCode = 400
    throw error
  }
}

const getUserById = async (userId) => {
  try {
    const [user] = await database.query(
      `SELECT
        u.id, 
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
    const error = new Error('INVALID_DATA_INPUT')
    error.statusCode = 400
    throw error
  }
}

const deleteUser = async (userId) => {
  try {
    return await database.query(
      `DELETE FROM users
       WHERE id = ?`,
      [userId]
    )
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT')
    error.statusCode = 400
    throw error
  }
}

const updateUser = async (userId, data) => {
  try {
    return await database.query(
      `UPDATE users
       SET email = ?,
           password = ?,
           name = ?
       WHERE id = ?`,
      [data.email, data.password, data.name, userId]
    )
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT')
    error.statusCode = 400
    throw error
  }
}

export { createUser, getUserByEmail, getUserById, deleteUser, updateUser }
