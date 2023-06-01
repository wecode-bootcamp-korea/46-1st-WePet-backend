-- migrate:up
ALTER TABLE products
RENAME COLUMN image_url TO main_image_thumbnail;

-- migrate:down
DROP TABLE products
