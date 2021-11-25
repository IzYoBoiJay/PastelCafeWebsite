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
app.post("/register", async(request, response) => {

    try {

        const {username, password} = request.body;

        const newUser = await pool.query("INSERT INTO customer (username, password) VALUES($1, $2) RETURNING *", [username, password]);

        response.json(newUser.rows[0]);

    } catch (err) {

        console.error(err.message);

    }

})


app.listen(5000, () => {

    console.log("Server started on port 5000");

});