// import dependencies
// const inquirer = require("inquirer");
const mysql = require("mysql2");
require("dotenv").config();
require("console.table");

// create the connection to database using .env file
const db = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// connect to the mysql server and sql database
db.connect((err) => {
    if(err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
    // run the start function after the connection is made to prompt the user
    start();
});

// function which prompts the user for what action they should take
0