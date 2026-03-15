CREATE DATABASE IF NOT EXISTS fly_ease;
USE fly_ease;

CREATE TABLE users(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(100) UNIQUE,
password VARCHAR(100)
);

CREATE TABLE flights(
id INT AUTO_INCREMENT PRIMARY KEY,
airline VARCHAR(100),
source VARCHAR(100),
destination VARCHAR(100),
departure VARCHAR(100),
arrival VARCHAR(100),
price INT,
seats INT
);

CREATE TABLE bookings(
id INT AUTO_INCREMENT PRIMARY KEY,
user_email VARCHAR(100),
flight_id INT,
status VARCHAR(50)
);

INSERT INTO flights (airline,source,destination,departure,arrival,price,seats)
VALUES
('Indigo','Delhi','Mumbai','08:00','10:00',4500,100),
('Air India','Delhi','Bangalore','09:00','12:00',5500,80),
('SpiceJet','Mumbai','Chennai','07:00','09:30',4200,90);