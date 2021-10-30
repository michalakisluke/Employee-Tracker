const db = require('../db/connection');

//display departments table from departments table in employees database
function allDepartments() {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
            return;
        }
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

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
    })
};

//display all employees from employees table in employees database
function allEmployees() {
    const sql = `SELECT employees.*, 
    CONCAT(managers.first_name,' ',managers.last_name) AS manager, 
    roles.title AS role
    FROM employees
    LEFT JOIN roles ON employees.role_id = roles.id
    LEFT JOIN employees as managers on employees.manager_id = managers.id`;

    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
    })
};

//add to the departments database, display updated table
function addDepartment(answer) {
    const sql = `INSERT INTO departments (name) VALUES(?)`;
    const param = answer;

    db.query(sql, param, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Succesfully added ' + param + ' to the departments table');
        allDepartments();
    });
};

function addRole(answer) {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES(?,?,?)`;
    const param = [answer.title, answer.salary, answer.dept];

    db.query(sql, param, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Succesfully added ' + param[0] + ' to the roles table');
        allRoles();
    });
};

function addEmployee(answer) {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)`;
    const param = [answer.first, answer.last, answer.role, answer.manager];

    db.query(sql, param, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Succesfully added ' + param[0] + '' + param[1] + ' to the employees table');
        allEmployees();
    });
};

function updateEmployee(answer) {
    const sql = `UPDATE employees
                 SET role_id = ?
                 WHERE id = ?`;
    const param = [answer.newRole, answer.id];

    db.query(sql, param, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Successfully updated employee information");
        allEmployees();
    });
};

module.exports = { allDepartments, allRoles, allEmployees, addDepartment, addRole, addEmployee, updateEmployee };

