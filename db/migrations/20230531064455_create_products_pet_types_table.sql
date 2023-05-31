-- migrate:up
CREATE TABLE products_pets (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  product_id INT NULL,
  product_pet INT NULL,
  FOREIGN KEY (product_id) REFERENCES products (id),
  FOREIGN KEY (product_pet) REFERENCES pets (id)
);

-- migrate:down
DROP TABLE products_pets
