const express = require("express");
const app = express();
const cors = require("cors");

//Allows queries to be used with pgSQL
const pool = require("./db");
const { request, response } = require("express");

//Middleware
app.use(cors());

//Request body object to retrieve data from the client side
app.use(express.json()) //request.body


/*Routes*/

// Query for inserting info from register page to database
app.post("/Register", async(request, response) => {

    try {

        const {username, password, fname, lname, phoneNum, address} = request.body;

        const newUser = await pool.query("INSERT INTO customer (username, password, lname, fname, phonenum, address) VALUES($1, $2, $3, $4, $5, $6) RETURNING *", 
        [username, password, lname, fname, phoneNum, address]);

        response.json(newUser.rows[0]);

    } catch (err) {

        console.error(err.message);
    
    }

});

// Query that returns a boolean if user info is validated
app.use('/LoginValidate', async(request, response) => {

    try {

    const {username, password} = request.body;

    const loginMatch = await pool.query("SELECT EXISTS(SELECT * FROM customer WHERE username = $1 AND password = $2)",
    [username, password]);

    response.json(loginMatch.rows[0].exists);

    
    } catch (err) {

        console.error(err.message)

    }

});


app.use('/LoginSuccess', (request, response) => {
    response.send({
      token: request.body
    });
});

// Query that returns menu items in users cart
app.get("/Cart", async(request, response) => {
  
    try {
        response.set('Access-Control-Allow-Origin', '*');
        const cart = await pool.query("SELECT * FROM menuItem M WHERE EXISTS (SELECT * FROM orderContainsItems X WHERE orderNum = 1 AND foodId = M.foodId AND EXISTS (SELECT * FROM ticket WHERE ifcomplete = False))");
        response.json(cart.rows);

    } catch (err) {

        console.error(err.message);

    }

})

// Query that returns users total in their cart
app.get("/total", async(request, response) => {

    try {

        response.set('Access-Control-Allow-Origin', '*');

        const total = await pool.query("SELECT SUM(price) FROM menuItem M WHERE EXISTS (SELECT * FROM orderContainsItems X WHERE orderNum = 1 AND foodId = M.foodId AND EXISTS (SELECT * FROM ticket T WHERE ifcomplete = False))");
        response.json(total.rows[0].sum);

    } catch (err) {

        console.error(err.message);

    }

})

// Inserts item user adds to their cart
app.post("/Menu", async(request, response) => {

    try {

        const {foodID} = request.body;

        const newItem = await pool.query("INSERT INTO orderContainsItems (orderNum, foodId) VALUES(1, $1) RETURNING *", [foodID]);

        response.json(newItem.rows[0]);

    } catch (err) {

        console.error(err.message);

    }

})

// Query that inserts into transaction table with users info
app.post("/Checkout/:user", async(request, response) => {

    try {

        const {user} = request.params;
        const {cardNum, gratuity, total} = request.body;

        const newUser = await pool.query("INSERT INTO Transaction (total, gratuity, cardno, customer, ordernum) VALUES($1, $2, $3, $4, 1) RETURNING *", 
        [total, gratuity, cardNum, user]);

        response.json(newUser.rows[0]);

    } catch (err) {

        console.error(err.message);
    }

});

// Query that creates a ticket
app.post("/OrderNow", async(request, response) => {

    try {

        const {user} = request.body;
        const createTicket = await pool.query("INSERT INTO Ticket (customer, ifComplete) VALUES($1, false) RETURNING *", [user]);

        response.json(createTicket.rows[0]);

    } catch (err) {

        console.error(err.message);
    }

})

// Query that deletes order
app.post("/deleteOrder", async(request, response) => {

    try {
        const deleteItems = await pool.query("DELETE FROM OrderContainsItems WHERE orderNum = 1");
        response.json(deleteItems);
    } catch (err) {
        console.error(err.message);
    }

})


app.listen(5000, () => {

    console.log("Server started on port 5000");

});