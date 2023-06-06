-- migrate:up
ALTER TABLE shopping_carts
ADD CONSTRAINT uc_user_product UNIQUE (user_id, product_id),
ADD FOREIGN KEY (user_id) REFERENCES users(id),
ADD FOREIGN KEY (product_id) REFERENCES products(id);

-- migrate:down
DROP TABLE products
