const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');

function init() {
    // Prompt for team manager info
    inquirer.prompt([
        {
            message: "Please select an option:",
            name: "init",
            type: "list",
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ]).then((answer) => {
        console.log(answer.init);

    });
};

function promptChoice(answer) {
    switch (answer.init) {
        
    }
}

init();