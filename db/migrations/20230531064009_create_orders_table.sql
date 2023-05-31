-- migrate:up
CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  order_status_id INT NOT NULL,
  order_number VARCHAR(200),
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (order_status_id) REFERENCES order_status (id)
);


-- migrate:down
DROP TABLE orders
