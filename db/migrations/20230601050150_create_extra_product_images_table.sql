-- migrate:up
CREATE TABLE extra_product_images (
  id INT NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  extra_product_image VARCHAR(1000) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) REFERENCES products (id)
);

-- migrate:down
DROP TABLE extra_product_images
