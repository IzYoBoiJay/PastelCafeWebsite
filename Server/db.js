const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "PASSWORD",
    host: "localhost",
    port: 5432,
    database: "DB_NAME"
});

module.exports = pool;