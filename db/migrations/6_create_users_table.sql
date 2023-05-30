-- migrate:up
CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  email varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  password varchar(50) NOT NULL,
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  points decimal NULL,
  updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
-- migrate:down

DROP TABLE users
