const express = require("express");
const app = express();
const cors = require("cors");

//Allows queries to be used with pgSQL
const pool = require("./db");

//Middleware
app.use(cors());

//Request body object to retrieve data from the client side
app.use(express.json()) //request.body


/*Routes*/

//Create user information app.post() to add data
//async provides await
app.post("/Register", async(request, response) => {

    try {

        const {username, password, fname, lname, phoneNum, address} = request.body;

        const newUser = await pool.query("INSERT INTO customer (username, password, lname, fname, phonenum, address) VALUES($1, $2, $3, $4, $5, $6) RETURNING *", 
        [username, password, lname, fname, phoneNum, address]);

        response.json(newUser.rows[0]);

    } catch (err) {

        console.error(err.message);

    }

})


app.post("/Menu", async(request, response) => {

    try {

        const {nameIn} = request.body;

        const newIn = await pool.query("INSERT INTO transaction (name) VALUES($1) RETURNING *", 
        [nameIn]);

        response.json(newIn.rows[0]);

    } catch (err) {

        console.error(err.message);

    }

})

app.get("/Cart", async(request, response) => {

    try {
        response.set('Access-Control-Allow-Origin', '*');
        const allItems = await pool.query("SELECT * FROM menuItem M WHERE EXISTS (SELECT * FROM orderContainsItems WHERE orderNum = 1 AND foodId = M.foodId)");
        response.json(allItems.rows);
    } catch (err) {
        console.error(err.message);
    }

})

app.listen(5000, () => {

    console.log("Server started on port 5000");

});