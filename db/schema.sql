-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

/* 
-- USE THE DATABASE
USE ecommerce_db;


-- Create the 'Category' table
CREATE TABLE Category (
    id INTEGER NOT NULL AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

-- Create the 'Product' table
CREATE TABLE Product (
    id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INTEGER NOT NULL DEFAULT 10,
    category_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES Category(id)
);

-- Create the 'Tag' table
CREATE TABLE Tag (
    id INTEGER NOT NULL AUTO_INCREMENT,
    tag_name VARCHAR(255),
    PRIMARY KEY (id)
);

-- Create the 'ProductTag' table
CREATE TABLE ProductTag (
    id INTEGER NOT NULL AUTO_INCREMENT,
    product_id INTEGER,
    tag_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES Product(id),
    FOREIGN KEY (tag_id) REFERENCES Tag(id)
); */