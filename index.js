const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// Code to gather information about the development team members, and render the HTML file.
const idList = []
const teamMembers = []

const appMenu = () => {

    function buildTeam() {

    }

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Add intern name",
            },
            {
                type: "input",
                name: "internId",
                message: "Add intern id",
            },
            {
                type: "input",
                name: "internEmail",
                message: "Add intern email",
            },
            {
                type: "input",
                name: "internSchool",
                message: "Add intern school",
            },
            
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idList.push(answers.internId);
            console.log(intern);
            createTeam()
        })
    }

    // Function to generate prompts for engineer's profile
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Add engineer name",
            },
            {
                type: "input",
                name: "engineerId",
                message: "Add engineer id",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Add engineer email",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Add engineer github",
            },
            
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idList.push(answers.engineerId);
            console.log(engineer);
            createTeam()
        })
    }
    

    // Function to create team 
    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Add preferred team member",
                choices: [
                    "Engineer",
                    "Intern",
                    "No more team member to add"
                ]
            }
        ]).then(userChoice => {
            if(userChoice.memberChoice === "Engineer") {
                addEngineer();
            } else if(userChoice.memberChoice === "Intern") {
                addIntern();
            } else {
                buildTeam();
            }

        })
    }


    // Function to generate prompts for manager's profile
    function createManager(){
        console.log("Please build your team.");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
                validate: answer => {
                    if(answer !== ""){
                        return true
                    }
                    return "Please enter a name."
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the team manager's id?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email?"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the team manager's office number?"
            }

        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            console.log(manager);
            teamMembers.push(manager);
            idList.push(answers.managerId);
            createTeam();
        })
    }
    createManager();
}

appMenu();
