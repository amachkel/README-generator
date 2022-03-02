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
    ]
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("README was created.")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const generateMarkdown = require("./utils/generateMarkdown");
    writeToFile("README.md", generateMarkdown(data));
    // let buffer = fs.readFileSync("template.md", (err) => {
    //   err ? console.log(err) : console.log("README was created");
    // });
    // let fileContents = buffer.toString();
    // console.log(fileContents);
    // let newFile = fileContents.replace("${title}", data.title);
  });
}

// Function call to initialize app
init();
