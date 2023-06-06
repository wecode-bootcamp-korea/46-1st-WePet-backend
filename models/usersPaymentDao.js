import { database } from './dataSource.js'

const usersPayment = async (points, userId) => {
  try {
    `UPDATE FROM users_payment
    SET points = ?
    WHERE id = ?
    `,
      [points, userId]
  } catch (err) {
    const error = new Error('INVALID_DATA_INPUT')
    error.statusCode = 400
    throw error
  }
}
export { usersPayment }
