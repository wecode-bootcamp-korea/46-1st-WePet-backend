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
      `
      SELECT
        p.id AS productId,
        p.product_name AS productName,
        p.product_price AS productPrice,
        p.product_description AS productDescription,
        p.product_category_id AS productCategoryId,
        p.quantity AS productQuantity,
        p.main_image_thumbnail AS mainThumbnailImage,
        JSON_ARRAYAGG(e.extra_product_image) AS extraImages
      FROM
        products AS p
      LEFT JOIN
        extra_product_images AS e ON p.id = e.product_id
      WHERE
        p.id = ?
      GROUP BY
        p.id
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

const querySortProducts = async (
  categoryId,
  orderBy,
  offset = 0,
  limit = 10
) => {
  try {
    const conditionArr = []
    let whereQuery = ''
    let sortQuery = ''
    let limitQuery = `LIMIT ${parseInt(limit)} OFFSET ${parseInt(offset)}`

    if (categoryId)
      conditionArr.push(`p.product_category_id IN (${categoryId})`)

    if (conditionArr.length > 0)
      whereQuery = `WHERE` + ` ` + conditionArr.join(' AND ')

    switch (orderBy) {
      case 'priceASC':
        sortQuery = `ORDER BY p.product_price ASC`
        break
      case 'priceDESC':
        sortQuery = `ORDER BY p.product_price DESC`
        break
      case 'newest':
        sortQuery = `ORDER BY p.created_at DESC`
        break
      case 'recommended':
        sortQuery = `ORDER BY p.quantity ASC`
        break
      default:
        sortQuery = `ORDER BY p.id`
        break
    }

    const data = await database.query(
      `
      SELECT
        p.id AS productId,
        p.product_name AS productName,
        p.product_price AS productPrice,
        p.main_image_thumbnail AS productImage
      FROM products AS p
      ${whereQuery}
      ${sortQuery}
      ${limitQuery}
    `
    )
    return data
  } catch {
    const error = new Error('DATABASE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

const queryInsertProduct = async (
  productName,
  productCategoryId,
  productPrice,
  productQuantity,
  productDescription,
  mainImageUrl
) => {
  try {
    const data = await database.query(
      `INSERT INTO products
      (
         product_name,
         product_price,
         product_description,
         product_category_id,
         quantity,
         main_image_thumbnail
      ) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        productName,
        productPrice,
        productDescription,
        productCategoryId,
        productQuantity,
        mainImageUrl,
      ]
    )
    return data
  } catch {
    const error = new Error('DATABASE_QUERY_ERROR')
    error.statusCode = 400
    throw error
  }
}

export {
  queryAllProducts,
  queryProductByCategoryId,
  queryProductById,
  querySortProducts,
  queryInsertProduct,
}
