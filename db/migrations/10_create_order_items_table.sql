-- migrate:up
CREATE TABLE order_items (
  id int NOT NULL AUTO_INCREMENT,
  order_items_id int NOT NULL,
  product_id int NOT NULL,
  order_item_price decimal(6,2) NOT NULL,
  order_item_quantity int NOT NULL,
  PRIMARY KEY (id) 
);

-- migrate:down
DROP TABLE order_items
