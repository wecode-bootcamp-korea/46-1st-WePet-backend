-- migrate:up
CREATE TABLE order_items_status (
  id INT PRIMARY KEY AUTO_INCREMENT,
  order_item_status_code VARCHAR(200) NOT NULL
);


-- migrate:down
DROP TABLE order_items_status
