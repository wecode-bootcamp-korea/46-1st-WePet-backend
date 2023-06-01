-- migrate:up
ALTER TABLE products ADD COLUMN image_url varchar(1000) NOT NULL;

-- migrate:down
DROP TABLE products
