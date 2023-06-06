import { database } from './dataSource.js'

const createAddress = async (userId, address1, address2) => {
  try {
    await database.query(
      `
        INSERT INTO address (
          user_id,
          address_1,
          address_2
        ) VALUES(?, ?, ?)
        `,
      [userId, address1, address2]
    )
  } catch (err) {
    console.log(err)
    const error = new Error('INVALID_DATA_INPUT!')
    error.statusCode = 400
    throw error
  }
}

export { createAddress }
