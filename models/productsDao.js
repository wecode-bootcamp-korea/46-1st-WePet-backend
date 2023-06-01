import { database } from './dataSource.js'

const queryAllProducts = async () => {
  try {
    const data = await database.query(
      `SELECT
        products.product_name AS productName,
        products.product_price AS productPrice,
        products.product_description AS productDescription,
        products.product_category_id AS productCategory,
        products.quantity AS productQuantity,
        products.image_url AS productImage
      FROM products
      `
    )
    return data
  } catch {
    const error = new Error('DATASOURCE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

const queryProductByCategoryId = async (queryId) => {
  try {
    const data = await database.query(
      `SELECT
        products.product_name AS productName,
        products.product_price AS productPrice,
        products.product_description AS productDescription,
        products.product_category_id AS productCategory,
        products.quantity AS productQuantity,
        products.image_url AS productImage
        FROM products
        WHERE product_category_id = ?
      `,
      [queryId]
    )
    return data
  } catch {
    const error = new Error('DATASOURCE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

const queryProductById = async (productId) => {
  try {
    const data = await database.query(
      `SELECT
        products.id AS productId,
        products.product_name AS productName,
        products.product_price AS productPrice,
        products.product_description AS productDescription,
        products.product_category_id AS productCategory,
        products.quantity AS productQuantity,
        products.image_url AS productImage
        FROM products
        WHERE id = ?
    `,
      [productId]
    )
    return data
  } catch {
    const error = new Error('DATASOURCE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

export { queryAllProducts, queryProductByCategoryId, queryProductById }
