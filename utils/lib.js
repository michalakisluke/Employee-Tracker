const db = require('../db/connection');

//display departments table from employees database
function allDepartments() {
    const sql = 'SELECT * FROM departments'
    db.query(sql, (err, rows) => {
        if (err) {
            return;
        }
        console.table(rows);
    })
};

// function allRoles() {

// };

// function allEmployees() {

// };

// function addDepartment() {

// };

// function addRole() {

// };

// function addEmployee() {

// };

// function updateEmployee() {

// };

module.exports = { allDepartments };

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
