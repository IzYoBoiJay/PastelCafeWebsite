const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Grips78!",
    database: "GroupProject"
});

module.exports = client;

/*
client.connect();

client.query(`SELECT * FROM Customer ORDER BY username ASC`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end;
})
*/