-- migrate:up
CREATE TABLE address (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT DEFAULT NULL,
  address_1 VARCHAR(500) NOT NULL,
  address_2 VARCHAR(500) NOT NULL,
  INDEX user_id (user_id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE address
