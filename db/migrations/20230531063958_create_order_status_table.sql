-- migrate:up
CREATE TABLE order_status (
  id INT PRIMARY KEY AUTO_INCREMENT,
  order_status_code VARCHAR(200) NOT NULL
);

-- migrate:down
DROP TABLE order_status
