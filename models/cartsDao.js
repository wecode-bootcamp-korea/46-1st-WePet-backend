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
    error.statusCode = 500
    throw error
  }
}

const queryInsertItemToCart = async (userId, productId, productQuantity) => {
  try {
    const productQuantityData = await database.query(
      `
      SELECT quantity
      FROM products
      WHERE id = ?
      `,
      [productId]
    )

    const availableQuantity = productQuantityData[0].quantity

    const shoppingCartQuantityData = await database.query(
      `
      SELECT COALESCE(SUM(quantity), 0) AS totalQuantity
      FROM shopping_carts
      WHERE user_id = ? AND product_id = ?
      `,
      [userId, productId]
    )

    const shoppingCartQuantity = shoppingCartQuantityData[0].totalQuantity

    if (
      parseInt(shoppingCartQuantity) + parseInt(productQuantity) >
      availableQuantity
    ) {
      throw new Error('CART_QUANTITY_EXCEEDS_AVAILABLE_QUANTITY')
    }

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
        VALUES (?, ?, 1)
        ON DUPLICATE KEY UPDATE
          quantity = quantity + ?
        `,
        [userId, productId, productQuantity]
      )
      return data
    } catch (dataError) {
      const error = new Error('DATABASE_QUERY_ERROR')
      error.statusCode = 500
      throw error
    }
  } catch (error) {
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
    const availableQuantityData = await database.query(
      `
      SELECT quantity AS maxQuantity
      FROM products
      WHERE id = ?
      `,
      [productId]
    )

    const availableQuantity = availableQuantityData[0].maxQuantity

    if (productQuantity > availableQuantity) {
      throw new Error('CART_QUANTITY_EXCEEDS_AVAILABLE_QUANTITY')
    }

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
    } catch (dataError) {
      const error = new Error('DATABASE_QUERY_ERROR')
      error.statusCode = 500
      throw error
    }
  } catch (error) {
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
    const checkResult = await database.query(
      `
      SELECT
        sc.quantity AS cart_quantity,
        p.quantity AS available_quantity
      FROM
        shopping_carts AS sc
      INNER JOIN
        products AS p ON sc.product_id = p.id
      WHERE
        sc.user_id = ?
        AND
        sc.product_id = ?
      `,
      [userId, productId]
    )
    const cartQuantity = checkResult[0].cart_quantity
    const availableQuantity = checkResult[0].available_quantity

    const desiredQuantity = cartQuantity + productQuantity

    if (desiredQuantity > availableQuantity) {
      throw new Error('CART_QUANTITY_EXCEEDS_AVAILABLE_QUANTITY')
    }

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
        [desiredQuantity, userId, productId]
      )

      return data
    } catch (dataError) {
      const error = new Error('DATABASE_QUERY_ERROR')
      error.statusCode = 500
      throw error
    }
  } catch (error) {
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
    const queryUpdatedQuantity = await database.query(
      `SELECT quantity
      FROM shopping_carts
      WHERE product_id = ?      
      `,
      [productId]
    )

    const updatedQuantity = queryUpdatedQuantity[0].quantity
    if (updatedQuantity === 1) {
      throw new Error('MINIMUM_QUANTITY_REACHED')
    }

    try {
      const data = await database.query(
        `
      UPDATE 
        shopping_carts
      SET
        quantity = IF(quantity - ? >= 1, quantity - ?, 1)
      WHERE
        user_id = ?
        AND
        product_id = ?
      `,
        [productQuantity, productQuantity, userId, productId]
      )

      return data
    } catch (dataError) {
      const error = new Error('DATABASE_QUERY_ERROR')
      error.statusCode = 500
      throw error
    }
  } catch (error) {
    error.statusCode = 400
    throw error
  }
}

const queryDeleteItemInCart = async (userId, productId) => {
  try {
    console.log(userId, productId)
    const data = await database.query(
      `
        DELETE FROM 
          shopping_carts
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
      DELETE FROM
        shopping_carts
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
  queryUpdateItemQuantityInCart,
  queryAddItemQuantityInCart,
  querySubtractItemQuantityInCart,
  queryDeleteItemInCart,
  queryDeleteAllItemInCart,
}
