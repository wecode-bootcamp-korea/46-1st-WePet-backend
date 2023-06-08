import { database } from './dataSource.js'
import orderId from 'order-id'

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
      `
      SELECT o.id,
        sc.user_id,
        sc.product_id,
        p.product_price,
        sc.quantity,
      SUM(p.product_price * sc.quantity) AS per_item_total
      FROM shopping_carts AS sc
      JOIN orders AS o ON sc.user_id = o.user_id
      JOIN products AS p ON sc.product_id = p.id
      WHERE o.user_id = 5
      GROUP BY o.id, sc.user_id, sc.product_id, sc.quantity;
          `,
      [userId]
    )

    const orderItems = getOrder.map((order) => [
      order.id,
      order.product_id,
      order.product_price,
      order.quantity,
      order.per_item_total,
    ])

    const insertItems = await database.query(
      `
      INSERT INTO 
      order_items (
        orders_id, 
        product_id, 
        order_item_price, 
        order_item_quantity,
        item_total
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
    const orderNum = orderId().generate()
    const data = await database.query(
      `
      UPDATE
        orders
      SET
        order_total = ?,
        order_number = ?
      WHERE 
        user_id = ?
      `,
      [orderTotal, orderNum, userId]
    )
    return data
  } catch {
    const error = new Error('DATABASE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

const queryUserOrderHistory = async (userId) => {
  try {
    const data = await database.query(
      `
      SELECT
      JSON_OBJECT(
        'OrderNumber', o.order_number,
        'totalOrderPrice', o.order_total,
        'orderItems', JSON_ARRAYAGG(
          JSON_OBJECT(
            'productId', oi.product_id,
            'itemPrice', oi.order_item_price,
            'itemQuantity', oi.order_item_quantity,
            'perItemTotalPrice', oi.item_total
          )
        )
      ) AS orderData
      FROM
        orders AS o
      JOIN
        order_items AS oi ON o.id = oi.orders_id
      WHERE
        o.user_id = ?
      GROUP BY
      o.order_number, o.order_total;
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

export {
  queryCreateUserOrder,
  queryOrderData,
  queryInsertOrderTotal,
  queryUserOrderHistory,
}
