-- migrate:up
CREATE TABLE products_sizes (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  product_id INT NULL,
  product_size INT NULL,
  FOREIGN KEY (product_id) REFERENCES products (id),
  FOREIGN KEY (product_size) REFERENCES sizes (id)
);

-- migrate:down
DROP TABLE products_sizes
