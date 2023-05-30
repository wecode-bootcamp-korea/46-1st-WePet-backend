-- migrate:up
CREATE TABLE user_order_history (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  user_order_history_id int NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_order_history_id) REFERENCES orders (id)
);

-- migrate:down
DROP TABLE user_order_history

