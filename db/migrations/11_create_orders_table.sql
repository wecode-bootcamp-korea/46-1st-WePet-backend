-- migrate:up
CREATE TABLE orders (
  id int NOT NULL AUTO_INCREMENT,
  orders_id int NOT NULL,
  user_id int NOT NULL,
  order_status_id varchar(200),
  order_date_placed TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  order_details int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES order_items (id),
  FOREIGN KEY (order_status_id) REFERENCES order_status (id)
);

-- migrate:down
DROP TABLE orders


