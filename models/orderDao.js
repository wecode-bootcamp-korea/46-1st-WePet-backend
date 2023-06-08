import { database } from './dataSource.js'

const queryCreateUserOrder = async (userId) => {
  try {
    const createOrder = await database.query(
      `
        INSERT INTO
          orders(user_id)
        VALUES(?)
         `,
      [userId]
    )

    const getOrder = await database.query(
      `SELECT
          o.id,
          sc.user_id,
          sc.product_id,
          sc.quantity,
          p.product_price 
        FROM shopping_carts AS sc
        JOIN orders AS o ON sc.user_id = o.user_id
        JOIN products AS p ON sc.product_id = p.id
        WHERE
          o.user_id = ?        
          `,
      [userId]
    )
    const orderItems = getOrder.map((order) => [
      order.id,
      order.product_id,
      order.product_price,
      order.quantity,
      order.order_item_price * order.quantity,
    ])
    await database.query(
      `
      INSERT INTO 
      order_items (
        orders_id, 
        product_id, 
        order_item_price, 
        order_item_quantity,
        itemTotal
        )
      VALUES ?
    `,
      [orderItems]
    )

    const clearUserShoppingCartData = await database.query(
      `
        DELETE FROM shopping_carts WHERE user_id = ?
        `,
      [userId]
    )
  } catch {
    const error = new Error('DATABASE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

const queryOrderData = async (userId) => {
  try {
    const data = await database.query(
      `SELECT
        order_items.product_id AS productId,
        order_items.order_item_quantity AS itemQuantity,
        order_items.order_item_price AS itemPrice,
        order_items.item_total AS itemTotal
      FROM
        order_items
      JOIN
        orders AS o ON o.id = order_items.orders_id
      WHERE o.user_id = ?
      `,
      [userId]
    )
    return data
  } catch {
    const error = new Error('DATABASE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

const queryInsertOrderTotal = async (userId, orderTotal) => {
  try {
    const data = await database.query(
      `
      UPDATE
        orders
      SET
        order_total = ?
      WHERE 
        user_id = ?
      `,
      [orderTotal, userId]
    )
    return data
  } catch (err) {
    console.log(err)
    const error = new Error('DATABASE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

export { queryCreateUserOrder, queryOrderData, queryInsertOrderTotal }
