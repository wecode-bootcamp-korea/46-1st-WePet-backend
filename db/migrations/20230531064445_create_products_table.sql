-- migrate:up
CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(200),
  product_price DECIMAL(8,2),
  product_description VARCHAR(200),
  product_category_id INT,
  quantity INT
);

-- migrate:down
DROP TABLE products
