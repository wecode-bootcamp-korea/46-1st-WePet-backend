import { database } from './dataSource.js'

const queryAllProducts = async () => {
  try {
    const data = await database.query(
      `SELECT
        p.id AS productId,
        p.product_name AS productName,
        p.product_price AS productPrice,
        p.product_description AS productDescription,
        p.product_category_id AS productCategoryId,
        p.quantity AS productQuantity,
        p.main_image_thumbnail AS mainThumbnailImage
      FROM
        products AS p
      `
    )
    return data
  } catch {
    const error = new Error('DATABASE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

const queryProductByCategoryId = async (queryId) => {
  try {
    const data = await database.query(
      `SELECT
        p.id AS productId,
        p.product_name AS productName,
        p.product_price AS productPrice,
        p.product_description AS productDescription,
        p.product_category_id AS productCategoryId,
        p.quantity AS productQuantity,
        p.main_image_thumbnail AS mainThumbnailImage
      FROM
        products AS p
      WHERE
        p.product_category_id = ?
      `,
      [queryId]
    )
    return data
  } catch {
    const error = new Error('DATABASE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

const queryProductById = async (productId) => {
  try {
    const data = await database.query(
      `SELECT
        p.id AS productId,
        p.product_name AS productName,
        p.product_price AS productPrice,
        p.product_description AS productDescription,
        p.product_category_id AS productCategoryId,
        p.quantity AS productQuantity,
        p.main_image_thumbnail AS mainThumbnailImage
       FROM 
        products AS p
       WHERE 
        p.id = ?
    `,
      [productId]
    )
    return data
  } catch {
    const error = new Error('DATABASE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

export { queryAllProducts, queryProductByCategoryId, queryProductById }
