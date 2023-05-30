-- migrate:up
CREATE TABLE shopping_cart (
  id int NOT NULL AUTO_INCREMENT,
  product_item_id int NOT NULL,
  quantity int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (product_item_id) REFERENCES product_item (id)
);

-- migrate:down
DROP TABLE shopping_cart
