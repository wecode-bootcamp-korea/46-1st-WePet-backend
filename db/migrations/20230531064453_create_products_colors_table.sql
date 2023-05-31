-- migrate:up
CREATE TABLE products_colors (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  product_id INT NULL,
  product_color INT NULL,
  FOREIGN KEY (product_id) REFERENCES products (id),
  FOREIGN KEY (product_color) REFERENCES colors (id)
);

-- migrate:down
DROP TABLE products_colors
