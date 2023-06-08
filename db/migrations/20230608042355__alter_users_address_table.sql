-- migrate:up
ALTER TABLE address ADD COLUMN user_name VARCHAR(50) NOT NULL,
ADD COLUMN phone_number INT NOT NULL,
ADD COLUMN memo TEXT NULL

-- migrate:down
DROP TABLE address




