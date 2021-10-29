const dbCall = require('./utils/lib');
const inquirer = require('inquirer');

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
        // case 'View all roles':
        //     allRoles();
        //     break;
        // case 'View all employees':
        //     allEmployees();
        //     break;
        // case 'Add a department':
        //     addDepartment();
        //     break;
        // case 'Add a role':
        //     addRole();
        //     break;
        // case 'Add an employee':
        //     addEmployee();
        //     break;
        // case 'Update an employee role':
        //     updateEmployee();
    }
};

init();