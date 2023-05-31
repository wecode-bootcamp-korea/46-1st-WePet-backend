-- migrate:up
CREATE TABLE users_payment (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  points DECIMAL(8,2) NOT NULL,
  INDEX user_id (user_id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE users_payment
