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

});

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


app.get("/Cart/:customer", async(request, response) => {

    try {

        const {customer} = request.params;

        const cart = await pool.query("SELECT * FROM ordercontainsitems WHERE customer = $1", [customer]);
        response.json(cart.rows[0]);

    } catch (err) {

        console.error(err.message);

    }

})


app.listen(5000, () => {

    console.log("Server started on port 5000");

});