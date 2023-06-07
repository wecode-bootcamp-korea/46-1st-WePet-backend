-- migrate:up
ALTER TABLE users
RENAME COLUMN create_at TO created_at

-- migrate:down
DROP TABLE users

