const db = require('../db/connection');

function allDepartments() {
    const sql = 'SELECT * FROM departments'
    db.query(sql, (err, rows) => {
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

// router.get('/votes', (req, res) => {
//     const sql = `SELECT candidates.*, parties.name AS party_name, COUNT(candidate_id) AS count
//                 FROM votes
//                 LEFT JOIN candidates ON votes.candidate_id = candidates.id
//                 LEFT JOIN parties ON candidates.party_id = parties.id
//                 GROUP BY candidate_id ORDER BY count DESC`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: rows
//         });
//     });
// });