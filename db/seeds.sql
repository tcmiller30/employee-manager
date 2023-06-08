INSERT INTO department (name) VALUES
('Engineering'),
('Sales'),
('Legal'),
('Finance');

INSERT INTO role (title, salary, department_id) VALUES
('Lead Engineer', 150000, 1),
('Software Engineer', 120000, 1),
('Sales Lead', 100000, 2),
('Salesperson', 80000, 2),
('Lead Counsel', 250000, 3),
('Lawyer', 190000, 3),
('Account Manager', 160000, 4),
('Accountant', 125000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Mike', 'Chan', 2, 1),
('Ashley', 'Rodriguez', 3, NULL),
('Kevin', 'Tupik', 4, 3),
('Malia', 'Brown', 5, NULL),
('Sarah', 'Lourd', 6, 5),
('Tom', 'Allen', 7, null),
('Sally', 'Wong', 8, 7);
