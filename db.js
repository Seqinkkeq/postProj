const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "8495",
    host: "localhost",
    port: 5432,
    database: "node"
})
module.exports = pool