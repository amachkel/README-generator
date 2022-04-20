// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your github username?",
    validate: (inputValid) =>
      inputValid ? true : console.log("An answer is required"),
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (inputValid) =>
      inputValid ? true : console.log("An answer is required"),
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (inputValid) =>
      inputValid ? true : console.log("An answer is required"),
  },
  {
    type: "input",
    name: "description",
    message: "What is a description of your project?",
    validate: (inputValid) =>
      inputValid ? true : console.log("An answer is required"),
  },
  {
    type: "confirm",
    name: "table",
    message: "Do you want to include a Table of Contents?",
  },
  {
    type: "input",
    name: "installation",
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
    name: "contributors",
    message: "List collaborators here.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Which license would you like to use?",
    choices: [
      "none",
      "Apache 2.0",
      "GNU Public v3.0",
      "MIT",
      "Mozilla Public 2.0",
      "Boost Software License 1.0",
      "The Unilicense",
    ],
  },
  {
    type: "input",
    name: "tests",
    message: "Explain testing procedures.",
    default: "There are currently no tests for this project.",
  },
];

// A function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("README was created.")
  );
}

// A function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
