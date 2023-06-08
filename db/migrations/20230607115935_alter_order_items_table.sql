-- migrate:up
ALTER TABLE order_items
ADD item_total decimal(10,2) NOT NULL

-- migrate:down
DROP Table order_items
