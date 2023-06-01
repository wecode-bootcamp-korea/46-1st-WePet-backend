-- migrate:up
ALTER TABLE users
MODIFY password VARCHAR(200);

-- migrate:down
DROP TABLE users

