import { database } from './dataSource.js'

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

const deleteUser = async (userId) => {
  try {
    await database.query(
      `DELETE FROM users
       WHERE id = ?`,
      [userId]
    );
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT');
    error.statusCode = 400;
    throw error;
  }
};

const updateUser = async (userId, updatedUserData) => {
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


const address = async(userId, address1, address2) => {
  try {
    await database.query(
      `UPDATE address
        SET
        address1 = ?,
        address2 = ?
        WHERE id = ?`,
        [ address1, address2, userId]
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
  getUserByEmail,
  getUserByIdDao,
  deleteUser,
  updateUser,
  address
}
