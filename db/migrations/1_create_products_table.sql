-- migrate:up
CREATE TABLE products (
  id int NOT NULL AUTO_INCREMENT,
  type_code varchar(200),
  PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE products

