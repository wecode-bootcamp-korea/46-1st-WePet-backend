-- migrate:up
CREATE TABLE address (
  id int NOT NULL AUTO_INCREMENT,
  user_id int,
  address_1 varchar(500) NOT NULL,
  address_2 varchar(500) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE address
