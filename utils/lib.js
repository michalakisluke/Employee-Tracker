const db = require('../db/connection');

//display departments table from departments table in employees database
function allDepartments() {
    const sql = `SELECT * FROM departments`;
    return db.promise().query(sql)
    .then(([rows, fields]) => {
        console.table(rows);
    })
};

//display all roles from roles table in employees database
function allRoles() {
    const sql = `SELECT roles.*, 
    departments.name AS department_name
    FROM roles
    LEFT JOIN departments
    ON roles.department_id = departments.id`;

    return db.promise().query(sql)
    .then(([rows, fields]) => {
        console.table(rows);
    });
};

//display all employees from employees table in employees database
function allEmployees() {
    const sql = `SELECT employees.*, 
    CONCAT(managers.first_name,' ',managers.last_name) AS manager, 
    roles.title AS role
    FROM employees
    LEFT JOIN roles ON employees.role_id = roles.id
    LEFT JOIN employees as managers on employees.manager_id = managers.id`;

    return db.promise().query(sql)
    .then(([rows, fields]) => {
        console.table(rows);
    });
};

//add to the departments table
function addDepartment(answer) {
    const sql = `INSERT INTO departments (name) VALUES(?)`;
    const param = answer;

    return db.promise().query(sql, param)
    .then(() => {
        console.log('Successfully added '  + param + ' to the departments table');
    });
};

//add to the roles table
function addRole(answer) {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES(?,?,?)`;
    const param = [answer.title, answer.salary, answer.dept];

    return db.promise().query(sql, param)
    .then(() => {
        console.log('Succesfully added ' + param[0] + ' to the roles table');
    });
};

//add to the employees table
function addEmployee(answer) {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)`;
    const param = [answer.first, answer.last, answer.role, answer.manager];

    return db.promise().query(sql, param)
    .then(() => {
        console.log('Succesfully added ' + param[0] + ' ' + param[1] + ' to the employees table');
    });
};

//update employee information in the employee table
function updateEmployee(answer) {
    const sql = `UPDATE employees
                 SET role_id = ?
                 WHERE id = ?`;
    const param = [answer.newRole, answer.id];

    return db.promise().query(sql, param)
    .then(() => {
        console.log("Successfully updated employee information");
    });
};

module.exports = { allDepartments, allRoles, allEmployees, addDepartment, addRole, addEmployee, updateEmployee };

