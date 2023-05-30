-- migrate:up
CREATE TABLE product_item (
  id int NOT NULL AUTO_INCREMENT,
  product_id int NOT NULL,
  product_name varchar(200) NOT NULL,
  product_price int NOT NULL,
  product_color varchar(200) DEFAULT NULL,
  product_size varchar(200) DEFAULT NULL,
  product_description varchar(500) NOT NULL,
  product_type varchar(200) NOT NULL,
  pet_type varchar(200) NOT NULL,
  quantity int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE product_item
