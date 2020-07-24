const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = []; //array used to hold employees



//  Inquirer prompt
function promptUser() {
    return inquirer.prompt({
            type: "list",
            message: "Chose employee type",
            name: "type",
            choices: ["Manager", "Engineer", "Intern","All employees have been entered"]
        })
        .then(function (answers) {
            switch (answers.type) {
                case "Manager":
                    createManager();
                    break;
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                case "All employees have been entered":
                    renderHtml();
                    break;

            }
        })
}


function createManager() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter name of manager",
            name: "name"
         },
         {
            type: "input",
            message: "Enter manager's ID number",
            name: "id"
         },
         {
            type: "input",
            message: "Enter manager's email address",
            name: "email"
         },
         {
            type: "input",
            message: "Enter manager's office number",
            name: "officeNumber"
         },
    ])
    .then(function({name, id, email, officeNumber}){
       
       const manager = new Manager(name, id, email, officeNumber)
       employees.push(manager);

       promptUser();
    })
}


function createEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter engineer's name",
            name: "name"
         },
         {
            type: "input",
            message: "Enter engineer's ID number",
            name: "id"
         },
         {
            type: "input",
            message: "Enter engineer's email address",
            name: "email"
         },
         {
            type: "input",
            message: "Enter Github username for Engineer",
            name: "userName"
         },
    ])
    .then(function({name, id, email, userName}){
       
       const engineer = new Engineer(name, id, email, userName)
       employees.push(engineer);

       promptUser();
    })
}


function createIntern() {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter intern's name",
            name: "name"
         },
         {
            type: "input",
            message: "Enter intern's ID number",
            name: "id"
         },
         {
            type: "input",
            message: "Enter intern's email address",
            name: "email"
         },
         {
            type: "input",
            message: "Enter name of intern's school",
            name: "school"
         },
    ])
    .then(function({name, id, email, school}){
       
       const intern = new Intern(name, id, email, school)
       employees.push(intern);

       promptUser();
    })
}

// Creates HTML
function renderHtml() {
    fs.writeFileSync(outputPath, render(employees)) 

    console.log("Successfully wrote to file");
    
}


promptUser();


