-- migrate:up
CREATE TABLE order_items (
  id INT PRIMARY KEY AUTO_INCREMENT,
  orders_id INT NOT NULL,
  product_id INT NOT NULL,
  order_item_status_id INT NOT NULL,
  order_item_price DECIMAL(8,2) NOT NULL,
  order_item_quantity INT NOT NULL,
  FOREIGN KEY (orders_id) REFERENCES orders (id),
  FOREIGN KEY (order_item_status_id) REFERENCES order_items_status (id)
);


-- migrate:down
DROP TABLE order_items
