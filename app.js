const inquirer = require('inquirer');
const db = require('./db/connection');
const dbCall = require('./utils/lib');

function init() {
    inquirer.prompt([
        {
            message: "Please select an option:",
            name: "init",
            type: "list",
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ]).then((answer) => {
        promptChoice(answer);
    });
};

function promptChoice(answer) {
    switch (answer.init) {
        case 'View all departments':
            dbCall.allDepartments();
            break;
        case 'View all roles':
            dbCall.allRoles();
            break;
        case 'View all employees':
            dbCall.allEmployees();
            break;
        case 'Add a department':
            inquirer.prompt([
                {
                    message: "Please enter the name of the department:",
                    name: "addDept",
                    type: "input",
                }
            ]).then((answer) => {
                dbCall.addDepartment(answer.addDept);
            });
            break;
        case 'Add a role':
            inquirer.prompt([
                {
                    message: "Please enter the title of the role:",
                    name: "title",
                    type: "input",
                },
                {
                    message: "Please enter the role's salary:",
                    name: "salary",
                    type: "number"
                },
                {
                    message: "Please enter the department id for the role:",
                    name: "dept",
                    type: "number"
                }
            ]).then((answer) => {
                dbCall.addRole(answer);
            });
            break;
        case 'Add an employee':
            inquirer.prompt([
                {
                    message: "Please enter the employee's first name:",
                    name: "first",
                    type: "input",
                },
                {
                    message: "Please enter the employee's last name:",
                    name: "last",
                    type: "input"
                },
                {
                    message: "Please enter the employee's role id:",
                    name: "role",
                    type: "number"
                },
                {
                    message: "Please enter the employee's manager's id:",
                    name: "manager",
                    type: "number"
                },
            ]).then((answer) => {
                dbCall.addEmployee(answer);
            });
            break;
        case 'Update an employee role':
            inquirer.prompt([
                {
                    message: "Please enter the employee's id number:",
                    name: "id",
                    type: "number",
                },
                {
                    message: "Please enter the employee's new role id:",
                    name: "newRole",
                    type: "number"
                }
            ]).then((answer) => {
                dbCall.updateEmployee(answer);
            });
    }

    init();
};

init();