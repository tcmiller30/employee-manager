# Employee Manager

## Description

This is a command line application that allows the user to manage their employees. The user can add, view, and update employees, roles, and departments.

This application uses Node.js, Inquirer, and MySQL in order to store employee data supplied by the user.

## Installation

To install this application, clone the repository and run `npm install` in the root directory to install the dependencies. Create the database on your local machine using the provided schema.sql file in the db directory using MySQL. Then, run `node index.js` to start the application.

## Usage

The user is presented with a menu of options to select from. They can choose to view all employees, roles, and departments, add employees, roles, and departments, and update employee roles. The user can also choose to exit the application.

When When a user chooses to add an employee they are prompted to enter the employee's first name, last name, role, and manager. The user is then presented with a menu of roles to choose from. The user can also choose to add a new role. The user is then presented with a menu of managers to choose from. The user can also choose to add a new manager. The employee is then added to the database.

When a user chooses to add a role they are prompted to enter the role's title, salary, and department. The user is then presented with a menu of departments to choose from. The user can also choose to add a new department. The role is then added to the database.

When a user chooses to add a department they are prompted to enter the department's name. The department is then added to the database.

When a user chooses to update an employee's role they are presented with a menu of employees to choose from. After selecting the employee, they are presented with a list of all roles. The selected employee's role will be changed to whatever role the user chose.

When a user chooses to exit the application the connection to the database is closed and the application is terminated.

[Check out a demo of the application here](https://drive.google.com/file/d/13sInYdjs9szs_eEidzVNVPtY1WgTTP8e/view?usp=sharing)
## License

MIT License

Copyright (c) [2022] [Travis Miller]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

