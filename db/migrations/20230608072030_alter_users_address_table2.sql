-- migrate:up
ALTER TABLE address MODIFY COLUMN phone_number VARCHAR(50) NOT NULL

-- migrate:down
DROP TABLE address