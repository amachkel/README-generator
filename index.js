// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "desc",
    message: "What is a description of your project?",
  },
  {
    type: "confirm",
    name: "table",
    message: "Do you want to include a Table of Contents?",
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) console.log("error", err);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    let buffer = fs.readFileSync("template.md", (err) => {
      err ? console.log(err) : console.log("README was created");
    });
    let fileContents = buffer.toString();
    console.log(fileContents);
    let newFile = fileContents.replace("${title}", data.title);
    writeToFile("README.md", newFile);
  });
}

// Function call to initialize app
init();
