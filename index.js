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
                "Remove an Employee",
                "Update an Employee Role",
                "Exit"
            ]
        }
    ])
    .then((ans) => {
        // based on their answer, call the appropriate function
        switch (ans.mainMenu) {
            case "View All Departments":
                viewAllDepartments();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "View All Employees":
                viewAllEmployees();
                break;
            case "Add a Department":
                addDepartment();
                break;
            case "Add a Role":
                addRole();
                break;
            case "Add an Employee":
                addEmployee();
                break;
            case "Update an Employee Role":
                updateEmployeeRole();
                break;
            case "Remove an Employee":
                removeEmployee();
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

function viewAllRoles() {
    db.findAllRoles()
    .then(([rows]) => {
        let roles = rows;
        console.log("\n");
        console.table(roles);
    })
    .then(() => mainMenu());
}

function viewAllDepartments() {
    db.findAllDepartments()
    .then(([rows]) => {
        let departments = rows;
        console.log("\n");
        console.table(departments);
    })
    .then(() => mainMenu());
}

function addDepartment() {
    prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the department?"
        }
    ])
    .then((ans) => {
        db.createDepartment(ans)
        .then(() => console.log(`Added ${ans.name} to the database`))
        .then(() => mainMenu());
    });
}

function addRole() {
    prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of the role?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary of the role?"
        },
        {
            type: "input",
            name: "department_id",
            message: "What is the department ID of the role?"
        }
    ])
    .then((ans) => {
        db.createRole(ans)
        .then(() => console.log(`Added ${ans.title} to the database`))
        .then(() => mainMenu());
    });
}

function addEmployee() {
    // Get all roles and employees from the database to use in the choices for the prompt
    Promise.all([db.findAllRoles(), db.findAllEmployees()])
    .then(([roleRows, employeeRows]) => {
        const roles = roleRows[0];
        const employees = employeeRows[0];

        const roleChoices = roles.map(({ id, title }) => ({
            name: title,
            value: id
        }));

        const managerChoices = employees.map(({ id, first_name, last_name }) => ({
            first_name: first_name,
            last_name: last_name,
            value: id
        }));

        prompt([
            {
                type: "input",
                name: "first_name",
                message: "What is the employee's first name?"
            },
            {
                type: "input",
                name: "last_name",
                message: "What is the employee's last name?"
            },
            {
                type: "list",
                name: "role_id",
                message: "What is the employee's role?",
                choices: roleChoices
            },
            {
                type: "list",
                name: "manager_id",
                message: "Who is the employee's manager?",
                choices: managerChoices
            }
        ])
        .then((ans) => {
            db.createEmployee(ans)
            .then(() => console.log(`Added ${ans.first_name} ${ans.last_name} to the database`))
            .then(() => mainMenu());
        });
    });
}

function updateEmployeeRole() {
    // Get all roles and employees from the database to use in the choices for the prompt
    db.findAllRoles()
    .then(([rows]) => {
        let roles = rows;
        const roleChoices = roles.map(({ id, title }) => ({
            name: title,
            value: id
        }));
        db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            const employeeChoices = employees.map(({ id, name }) => ({
                name: name,
                value: id
            }));
            prompt([
                {
                    type: "list",
                    name: "id",
                    message: "Which employee's role do you want to update?",
                    choices: employeeChoices
                },
                {
                    type: "list",
                    name: "role_id",
                    message: "Which role do you want to assign the selected employee?",
                    choices: roleChoices
                }
            ])
            .then((ans) => {
                db.updateEmployeeRole(ans.id, ans.role_id)
                .then(() => console.log("Updated employee's role"))
                .then(() => mainMenu());
            });
        });
    });
}

// function removeEmployee() {
//     db.findAllEmployees()
//     .then(([rows]) => {
//         let employees = rows;
//         const employeeChoices = employees.map(({ id, name }) => ({
//             name: name,
//             value: id
//         }));
//         prompt([
//             {
//                 type: "list",
//                 name: "id",
//                 message: "Which employee do you want to remove?",
//                 choices: employeeChoices
//             }
//         ])
//         .then((ans) => {
//             console.log(ans)
//             db.deleteEmployee(ans)
//             .then(() => console.log("Removed employee from the database"))
//             .then(() => mainMenu());
//         });
//     });
// }
    


start();