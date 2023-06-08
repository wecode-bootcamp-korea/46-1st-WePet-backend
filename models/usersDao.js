import { database } from './dataSource.js'

const createUserDao = async (email, password, name, points) => {
  try {
    const result = await database.query(
      `INSERT INTO users (
            email,
            password,
            name,
            points
        ) VALUES (
          ?, ?, ?, ?)`,
      [email, password, name, points]
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

const getUserByEmailDao = async (email) => {
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

const getUserByIdDao = async (userId) => {
  try {
    const [ user ] = await database.query(
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

const deleteUserByIdDao = async (userId) => {
  try { 
    await database.query(
      `DELETE FROM
        address
      WHERE user_id = ?`,
      [userId]
    );

    await database.query(
      `DELETE FROM
        users
      WHERE id = ?`,
      [userId]
    )
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT')
    error.statusCode = 400
    throw error
  }
}

const updateUserByIdDao = async (userId, updatedUserData) => {
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
};

const updateAddressDao = async(userId, address1, address2) => {
  try {
    console.log(userId)
    const result = await database.query(
      /*
      이름 :
      번호:
      주소:
      상세주소:
      */
      `INSERT INTO address (
        address_1,
        address_2,
        user_id
      ) VALUES (?, ?, ?)
      `,
        [address1, address2, userId]
        )
        return result
      } catch(err) {
        console.log(err)
        const error = new Error('INVALID_DATA_INPUT!')
        error.statusCode = 400
        throw error
      }
    }

export {
  createUserDao,
  getUserByEmailDao,
  getUserByIdDao,
  deleteUserByIdDao,
  updateUserByIdDao,
  updateAddressDao
}