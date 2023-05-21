// import dependencies
const { prompt } = require("inquirer");

const db = require('./db');   
require("console.table");

function start () {
    console.log("Welcome to the Employee Tracker!");
    mainMenu();
}

// function which prompts the user for what action they should take
function mainMenu () {
     prompt([
        {
            type: "list",
            name: "mainMenu",
            message: "What would you like to do?",
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "Update an Employee Role",
                "Exit"
            ]
        }
    ])
    .then((ans) => {
        // based on their answer, call the appropriate function
        switch (ans.mainMenu) {
            case "View All Departments":
                // viewAllDepartments();
                break;
            case "View All Roles":
                // viewAllRoles();
                break;
            case "View All Employees":
                viewAllEmployees();
                break;
            case "Add a Department":
                // addDepartment();
                break;
            case "Add a Role":
                // addRole();
                break;
            case "Add an Employee":
                // addEmployee();
                break;
            case "Update an Employee Role":
                // updateEmployeeRole();
                break;
            case "Exit":
                db.end();
                break;
        }
    });
        
}

function viewAllEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees);
    })
    .then(() => mainMenu());
}

start();