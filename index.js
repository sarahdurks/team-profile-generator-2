// CONSTANTS USED
const inquirer = require("inquirer");
const fs = require("fs");

// DEFINING EMPLOYEE ROLE
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
let myTeamArray = [];

// INITIATE TEAM SERIES
function askUser() {
    return inquirer.prompt([{
            type: "input",
            message: "Name your team",
            name: "teamName",
        }, ])
        .then(function(data) {
            let teamName = data.teamName;
            myTeamArray.push(teamName);
            addTeamManager();
        });
}
// Define Manager
function addTeamManager() {
    inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the Manager's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email address?",
            },
            {
                type: "number",
                name: "officeNum",
                message: "What is the office phone number?",
            },
        ])
