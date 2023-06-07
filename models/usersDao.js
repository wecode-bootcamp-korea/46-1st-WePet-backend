import { database } from './dataSource.js'

const createUserDao = async (email, password, name, points) => {
  try {
    await database.query(
      `INSERT INTO users (
            email,
            password,
            name,
            points
        ) VALUES (
          ?, ?, ?, ?)`,
      [email, password, name, points]
    )
  } catch (err) {
    console.log(err)
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
    console.log(err)
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
    console.log(err)
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
    );
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT');
    error.statusCode = 400;
    throw error;
  }
};

const updateUserByIdDao = async (userId, updatedUserData) => {
  try {
    await database.query(
      `UPDATE users
       SET email = ?,
           password = ?,
           name = ?
       WHERE id = ?`,
      [updatedUserData.email, updatedUserData.password, updatedUserData.name, userId]
    );
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT');
    error.statusCode = 400;
    throw error;
  }
};

const updateAddressDao = async(userId, address1, address2) => {
  try {
    const result = await database.query(
      `UPDATE address
        SET
        address_1 = ?,
        address_2 = ?
        WHERE user_id = ?`,
        [address1, address2, userId]
        )
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
