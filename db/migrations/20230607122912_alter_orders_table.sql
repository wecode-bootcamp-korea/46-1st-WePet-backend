-- migrate:up
ALTER TABLE orders
ADD order_total decimal(10,2) NOT NULL

-- migrate:down
DROP Table orders
