--Tables created--
CREATE TABLE Customer(Username VARCHAR(20) PRIMARY KEY, Password VARCHAR(20),
PhoneNum VARCHAR(20), Address TEXT, Fname VARCHAR(20), LName VARCHAR(20));

CREATE TABLE MenuItem(FoodID VARCHAR(20) PRIMARY KEY, Price REAL);

CREATE TABLE Transaction(OrderID VARCHAR(20) PRIMARY KEY, FoodID VARCHAR(20), Price REAL, Quantity REAL, Total REAL);

