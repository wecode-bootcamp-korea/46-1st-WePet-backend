-- migrate:up
CREATE TABLE products_pets (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  product_id INT NULL,
  pet_id INT NULL,
  FOREIGN KEY (product_id) REFERENCES products (id),
  FOREIGN KEY (pet_id) REFERENCES pets (id)
);

-- migrate:down
DROP TABLE products_pets
