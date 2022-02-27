// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "desc",
        message: "What is a description of your project?",
    },
    {
        type: "input",
        name: "install",
        message: "What is required to install your project?",
        default: "npm",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
    },
    {
        type: "input",
        name: "credits",
        message: "List collaborators here.",
    },
    {
        type: "input",
        name: "license",
        message: "Which license would you like to use?",
        default: "MIT",
    },
])
.then((data) => {
    const fileName = "README.md";
    writeToFile(fileName, data);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();