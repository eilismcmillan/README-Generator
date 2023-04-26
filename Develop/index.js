// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please give your repository a title:",
    validate: (title) => title.length >= 1
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a short description of your project:",
    validate: (title) => title.length >= 1
  },
  {
    type: "input",
    name: "installation",
    message:
      "If applicable, please provide any necessary installation instructions:",
    default: "N/A"
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information:",
    validate: (title) => title.length >= 1
  },
  {
    type: "list",
    name: "license",
    message: "Please select the license that applies to your application:",
    choices: ["MIT", "GPLv2", "Apache", "GPLv3", "BSD 3-clause", "No License"],
  },
  {
    type: "input",
    name: "contribution",
    message:
      "If applicable, please provide guidelines for how other developers may contribute:",
    default: "N/A"
  },
  {
    type: "input",
    name: "instructions",
    message: "If applicable, please provide test instructions:",
    default: "N/A"
  },
  {
    type: "input",
    name: "githubUser",
    message: "Please provide your GitHub username:",
    validate: (title) => title.length >= 1
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address:",
    validate: (title) => title.length >= 1
  },
];

function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownContent = generateMarkdown(answers);

      fs.writeFile("README.md", markdownContent, (err) => {
        err
          ? console.log(err)
          : console.log(
              "Congratulations! You have successfully created a professional README!"
            );
      });
    });
}

init();




