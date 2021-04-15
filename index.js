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
    },])
        .then(function (data) {
            let teamName = data.teamName;
            myTeamArray.push(teamName);
            addTeamManager();
        });
}
// MANAGER
function addManager() {
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

        // push Manager Data
        .then(function (data) {
            let name = data.name;
            let id = data.id;
            let email = data.email;
            let officeNum = data.officeNum;
            let teammate = new Manager(name, id, email, officeNum); // follow up on ID
            myTeamArray.push(teammate);
            addTeammates();
        });
}
// TEAM BUILDER
function addTeammates() {
    inquirer.prompt([{
        type: "list",
        message: "Are there more team members to add?",
        choices: ["Add an Engineer", "Add an Intern", "No. Complete my team!"],
        name: "addTeamData",
    },])
        .then(function (data) {
            switch (data.addTeamData) {
                case "Add an Engineer":
                    addEngineer();
                    break;
                case "Add an Intern":
                    addIntern();
                    break;
                case "No. Complete my team!":
                    buildMyTeam();
                    break;
            }
        });
}
// ENGINEER
function addEngineer() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's employee ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github handle?",
    },
    ])
        //push Engineer data
        .then(function (data) {
            let name = data.name;
            let id = data.id;
            let email = data.email;
            let github = data.github;
            let teammate = new Engineer(name, id, email, github);
            myTeamArray.push(teammate);
            addTeammates();
        });
}
// INTERN
function addIntern() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the intern's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's employee ID?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
    },
    {
        type: "input",
        name: "school",
        message: "What school does the intern attend?",
    },
    ])
        // push intern data
        .then(function (data) {
            let name = data.name;
            let id = data.id;
            let email = data.email;
            let school = data.school;
            let teammate = new Intern(name, id, email, school);
            myTeamArray.push(teammate);
            addTeammates();
        });
}