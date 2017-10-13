--create table
DROP DATABASE IF EXISTS BAMAZON_db;

CREATE DATABASE BAMAZON_db;

USE BAMAZON_db;



CREATE TABLE departments (
  department_id INT(12) NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(40) NOT NULL,
  over_head_costs DECIMAl(10,2) DEFAULT NULL,
  product_sales DECIMAL(10,2) NOT NULL,
  total_profit DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (department_id)
); 

INSERT INTO departments (department_name, over_head_costs, product_sales, total_profit)
VALUES ('Fragances', 3000.00, 6500.00,3500.00),
('Sports', 300.00, 1000.00, 699.00),
('Luggage', 800.00, 2500.00, 1700.00),
('ToysandGames', 1500.00, 3553.00, 1600.00),
('Kitchen', 2010.00, 2600.00, 490.00),
('ArtSupplyes', 6890.00, 13000.00, 7234.00);






CREATE TABLE products (
  item_id int(10) NOT NULL AUTO_INCREMENT,
  product_name varchar(40) NOT NULL,
  department_name varchar(40) NOT NULL,
  price decimal(10,2) NOT NULL,
  stock_quantity int(10) DEFAULT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Estée Lauder Pleasures', 'Fragances', 125.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Brooks Womens Ravenna 8', 'Sports', 99.00, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Skyline Rolling Duffel - Gray', 'Luggage', 39.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Pictionary Game', 'Toys and Game', 16.99, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Distressed Blue Frame By Studio Décor®', 'Frames', 19.99, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Wanderers Cove 1000pc Puzzle', 'Toys and Game', 18.95, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Rectangular Platter - Vario Antico', 'Kitchen', 99.00, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Rembrandt® Pastel 30 Color Portrait Set', 'Art Supplies', 164.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Women Nike 3" Running Shorts', 'Sports', 30.00, 55);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Derwent® Graphic 24 Pencil Tin Set', 'Art Supplies', 28.00, 25);



SELECT * FROM products;
