-- migrate:up
CREATE TABLE colors (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(200) NOT NULL
);

-- migrate:down
DROP TABLE colors
