-- migrate:up
CREATE TABLE shopping_carts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  product_id INT,
  quantity INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE shopping_carts
