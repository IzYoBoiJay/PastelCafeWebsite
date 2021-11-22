--Queries/application logic--

	--GRANT ALL PRIVILEGES ON DATABASE DatabaseCafe TO Manager;

		-- Creates view for customer for what they see from transaction
CREATE VIEW CustomerTransactionView AS SELECT Total, Gratuity, OrderNum FROM Transaction;
		-- Creates view for customer for what they see for each menu item
CREATE VIEW CustomerItemView AS SELECT Price FROM MenuItem;
	
	

	--Create trigger where user will not be able to add an item to their ticket if out of stock
CREATE OR REPLACE FUNCTION check_stock() RETURNS TRIGGER AS $OrderContainsItem$
BEGIN
	IF (SELECT InStock FROM MenuItem M1 WHERE M1.FoodID = New.FoodID) = 0 THEN 
		RAISE EXCEPTION 'Item not in stock.';
	END IF;
	RETURN NEW;
END;
$OrderContainsItem$ LANGUAGE PLPGSQL;
	
CREATE TRIGGER not_in_stock
BEFORE INSERT OR UPDATE OF FoodID ON OrderContainsItems
FOR EACH ROW
EXECUTE PROCEDURE check_stock();

	
	
	
		--When user begins an order, a ticket is created and as items are added to their cart, OrderContainsItem is updated
        --start ticket at 10001 and increased by 1
INSERT INTO Ticket (orderNum, customer, ifComplete) VALUES ((SELECT MAX(orderNum) FROM Ticket) + 1, custID /*insert user id
of user that is creating the order*/, 0 /*this will be updated later but when ticket it created its always false*/);




        --When check out button is pushed, a transaction is created
INSERT INTO Transaction (transactionID, total, gratuity, cardno, customer, ordernum) VALUES
((SELECT MAX(transactionID) FROM Transaction) + 1, (SELECT SUM(price) FROM orderContainsItem X WHERE X.orderNum 
= userOrderNum /*OrderNum from website*/), custGratuity /*Input from website*/, userCard /*Input from website*/,
orderNum /*OrderNum from website*/);



		--Trigger when insert on transaction to make the ticket say complete
CREATE OR REPLACE FUNCTION set_complete() RETURNS TRIGGER AS $Transaction$
BEGIN
	UPDATE Ticket SET ifComplete = 1 WHERE orderNum = new.orderNum;
	RETURN NEW;
END;
$Transaction$ LANGUAGE PLPGSQL;
	
CREATE TRIGGER set_complete
BEFORE INSERT ON Transaction
FOR EACH ROW
EXECUTE PROCEDURE set_complete();





       --If user cancels order before it is completed delete all rows with that ticket #

/*what actually deletes the ticket*/
DELETE FROM ticket WHERE ticket.orderNum = userOrderNUM /*users orderNum from website*/;

/*Trigger that deletes all rows with deleted orderNum*/
CREATE OR REPLACE FUNCTION delete_ticket() RETURNS TRIGGER AS $Ticket$
BEGIN
	DELETE FROM OrderContainsItem X WHERE X.orderNum = deleted.orderNum;
	RETURN NEW;
END;
$Ticket$ LANGUAGE PLPGSQL;
	
CREATE TRIGGER delete_ticket
BEFORE DELETE ON Ticket
FOR EACH ROW
EXECUTE PROCEDURE delete_ticket();




        --if user clicks 'removes item' button, delete from orderContainsItem
DELETE FROM orderContainsItem X WHERE X.orderNum = userOrderNum /*users orderNum from website*/ AND
X.foodID = deletedFoodID /*Deleted FoodID from website*/;



        --If user adds item to cart, add to OrderContainsItem
INSERT ON OrderContainsItem (orderNum, FoodID) VALUES (userOrderNum /*users orderNum from website*/,
AddedFoodID /*added foodID from website*/);
