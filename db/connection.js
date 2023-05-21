const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fV2_4*KKoeVfmemj@qcVZJtEb2AeCWpV', // Add your password
    database: 'employee_db'
});

connection.connect((err) => {
    if (err) throw err;
});

module.exports = connection;