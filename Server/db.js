const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "2166",
    host: "localhost",
    port: 5432,
    database: "DatabaseCafe"
});

module.exports = pool;