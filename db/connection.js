const mysql = require('mysql2');

// Connect to database w/ verification
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'n2fCs4rvhp!',
        database: 'employee'
    },
    console.log('Connected to the employee database.')
);

module.exports = db;