// Require the connection to the database
const connection = require('./connection');

// create a constructor object to hold all the functions that will be used to query the database
class DB {
    constructor(connection) {
        this.connection = connection;
    }

    // Find all departments
    findAllDepartments() {
        return this.connection.promise().query(
            `SELECT * FROM department`
            );
        }
    // Find all roles
    findAllRoles() {
        return this.connection.promise().query(
            `SELECT r.id, r.title, d.name AS department, r.salary 
            FROM role r
            LEFT JOIN department d ON r.department_id = d.id`
            );
        }
        // Find all employees, join with roles and departments to display their roles, salaries, departments, and managers
        findAllEmployees() {
            return this.connection.promise().query(
                `SELECT e.id, CONCAT(e.first_name, ' ', e.last_name) AS name, 
                m.last_name AS manager_name,
                d.name AS department,
                r.title AS role, r.salary
                FROM employee e
                LEFT JOIN employee m ON e.manager_id = m.id
                LEFT JOIN role r ON e.role_id = r.id
                LEFT JOIN department d ON r.department_id = d.id`
            );
        }
        // Create a new department
        createDepartment(department) {
            return this.connection.promise().query(
                `INSERT INTO department SET ?`, department
            );
        }
        // Create a new role
        createRole(role) {
            return this.connection.promise().query(
                `INSERT INTO role SET ?`, role
            );
        }
        // Create a new employee
        createEmployee(employee) {
            return this.connection.promise().query(
                `INSERT INTO employee SET ?`, employee
            );
        }
        // Update the given employee's role
        updateEmployeeRole(employeeId, roleId) {
            return this.connection.promise().query(
                `UPDATE employee SET role_id = ? WHERE id = ?`, [roleId, employeeId]
            );
        }
        // Update the given employee's manager
        updateEmployeeManager(employeeId, managerId) {
            return this.connection.promise().query(
                `UPDATE employee SET manager_id = ? WHERE id = ?`, [managerId, employeeId]
            );
        }

        // Delete a department
        deleteEmployee(employeeId) {
            return this.connection.promise().query(
                `DELETE FROM employee WHERE id = ?`, employeeId
            );
        }

        // Delete a role
        deleteRole(roleId) {
            return this.connection.promise().query(
                `DELETE FROM role WHERE id = ?`, roleId
            );
        }

        // End the application
        end() {
            this.connection.end();
        }
        
        
}

module.exports = new DB(connection);