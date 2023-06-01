import { database } from './dataSource.js'

const queryCartItems = async (userId) => {
  try {
    const data = await database.query(
      `SELECT
        shopping_carts.id AS cartId,
        users.name AS userName,
        products.product_name AS productName,
        shopping_carts.quantity AS productQuantity,
        products.product_price AS productPrice
      FROM
        shopping_carts
      JOIN
        users ON shopping_carts.id = users.id
      JOIN
        products ON shopping_carts.product_id = products.id
      WHERE
        users.id = ?
      `,
      [userId]
    )
    return data
  } catch {
    const error = new Error('DATASOURCE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

export { queryCartItems }
