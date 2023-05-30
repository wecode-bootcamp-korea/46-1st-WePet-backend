-- migrate:up
CREATE TABLE user_payment (
  id int NOT NULL AUTO_INCREMENT,
  user_id int NOT NULL,
  points int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE user_payment

