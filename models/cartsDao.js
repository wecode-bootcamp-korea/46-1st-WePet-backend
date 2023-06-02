import { database } from './dataSource.js'

const queryCartItems = async (userId) => {
  try {
    const data = await database.query(
      `
      SELECT
        users.id AS userId,
        users.name AS userName,
        JSON_ARRAYAGG (
            JSON_OBJECT (
                'productName', products.product_name,
                'productPrice', products.product_price,
                'productQuantity', shopping_carts.quantity
            )
        ) AS items
        FROM
          shopping_carts
        JOIN
          users ON shopping_carts.user_id = users.id
        JOIN
          products ON shopping_carts.product_id = products.id
        WHERE
          users.id = ?
      GROUP BY
        users.id,
        users.name
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

const queryInsertItemToCart = async (userId, productId, productQuantity) => {
  try {
    const data = await database.query(
      `
      INSERT INTO 
        shopping_carts 
          (
            user_id,
            product_id,
            quantity
          )
      VALUES(?, ?, ?)
      `,
      [userId, productId, productQuantity]
    )
    return data
  } catch {
    const error = new Error('DATABASE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

const queryCartItem = async (userId, productId) => {
  try {
    const data = await database.query(
      `
      SELECT
        product_id
      FROM
        shopping_carts
      WHERE
        user_id = ?
      `,
      [userId, productId]
    )
    return data
  } catch {
    const error = new Error('DATABASE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

const queryUpdateItemQuantityInCart = async (
  userId,
  productId,
  productQuantity
) => {
  try {
    const data = await database.query(
      `
      UPDATE 
        shopping_carts
      SET
        quantity = ?
      WHERE
        user_id = ?
        AND
        product_id = ?
      `,
      [productQuantity, userId, productId]
    )
    return data
  } catch {
    const error = new Error('DATABASE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

const queryAddItemQuantityInCart = async (
  userId,
  productId,
  productQuantity
) => {
  try {
    const data = await database.query(
      `
      UPDATE 
        shopping_carts
      SET
        quantity = quantity + ?
      WHERE
        user_id = ?
        AND
        product_id = ?
      `,
      [productQuantity, userId, productId]
    )
    return data
  } catch {
    const error = new Error('DATABASE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

const querySubtractItemQuantityInCart = async (
  userId,
  productId,
  productQuantity
) => {
  try {
    const data = await database.query(
      `
      UPDATE 
        shopping_carts
      SET
        quantity = quantity - ?
      WHERE
        user_id = ?
        AND
        product_id = ?
      `,
      [productQuantity, userId, productId]
    )
    return data
  } catch {
    const error = new Error('DATABASE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

const queryDeleteItemInCart = async (userId, productId) => {
  try {
    const data = await database.query(
      `
      UPDATE 
        shopping_carts
      SET
        product_id = NULL,
        quantity = 0
      WHERE
        user_id = ?
        AND
        product_id = ?
      `,
      [userId, productId]
    )
    return data
  } catch {
    const error = new Error('DATABASE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

const queryDeleteAllItemInCart = async (userId) => {
  try {
    const data = await database.query(
      `
      UPDATE
        shopping_carts
      SET
        product_id = NULL,
        quantity = 0
      WHERE
        user_id = ?
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
  queryCartItems,
  queryInsertItemToCart,
  queryCartItem,
  queryUpdateItemQuantityInCart,
  queryAddItemQuantityInCart,
  querySubtractItemQuantityInCart,
  queryDeleteItemInCart,
  queryDeleteAllItemInCart,
}
