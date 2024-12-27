-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS productdb;
USE productdb;
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,   
    name VARCHAR(255) NOT NULL,           
    description TEXT,                     
    price DECIMAL(10, 2) NOT NULL,         
    category VARCHAR(100),                 
    stock_quantity INT NOT NULL,           
    manufacturer VARCHAR(255),             
    release_date DATE,                     
    rating DECIMAL(2, 1) DEFAULT 0         
);
-- Insert Sample Data into Products Table
INSERT INTO products (name, description, price, category, stock_quantity, manufacturer, release_date, rating)
VALUES 
('Smartphone X', 'A powerful smartphone with the latest features.', 999.99, 'Electronics', 150, 'Tech Corp', '2023-05-10', 4.8),
('Gaming Laptop Y', 'High-end gaming laptop with excellent performance.', 1599.50, 'Computers', 50, 'Game Tech', '2022-11-25', 4.5),
('Wireless Headphones Z', 'Noise-cancelling wireless headphones with long battery life.', 199.99, 'Accessories', 200, 'Sound Wave', '2023-01-05', 4.7);

