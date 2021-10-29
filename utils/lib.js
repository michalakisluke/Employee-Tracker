const db = require('../db/connection');

//display departments table from employees database
function allDepartments() {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
            return;
        }
        console.table(rows);
    })
};

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

function allEmployees() {
    // const sql = `SELECT employees.*, 
    // roles.title AS role
    // FROM employees
    // LEFT JOIN roles ON employees.role_id = roles.id`;
    
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

// function addDepartment() {

// };

// function addRole() {

// };

// function addEmployee() {

// };

// function updateEmployee() {

// };

module.exports = { allDepartments, allRoles, allEmployees };

// switch (answer.init) {
//     case 'View all departments':
//         allDepartments();
//         break;
//     case 'View all roles':
//         allRoles();
//         break;
//     case 'View all employees':
//         allEmployees();
//         break;
//     case 'Add a department':
//         addDepartment();
//         break;
//     case 'Add a role':
//         addRole();
//         break;
//     case 'Add an employee':
//         addEmployee();
//         break;
//     case 'Update an employee role':
//         updateEmployee();
// }
