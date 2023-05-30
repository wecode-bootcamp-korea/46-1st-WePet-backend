-- migrate:up
CREATE TABLE order_status (
  id int NOT NULL AUTO_INCREMENT,
  order_status_code varchar(200) NOT NULL,
  order_status_description varchar(500) NOT NULL,
  PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE order_status
