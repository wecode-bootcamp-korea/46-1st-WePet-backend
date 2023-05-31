-- migrate:up
CREATE TABLE pets (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(200) NOT NULL
);

-- migrate:down
DROP TABLE pets
