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
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a short description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message:
      "If applicable, please provide any necessary installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information:",
  },
  {
    type: "input",
    name: "contribution",
    message:
      "If applicable, please provide guidelines for how other developers may contribute:",
  },
  {
    type: "input",
    name: "instructions",
    message: "If applicable, please provide test instructions:",
  },
  {
    type: "input",
    name: "contact",
    message:
      "If applicable, please provide instructions on how best to get in contact:",
  },
  {
    type: "input",
    name: "githubUser",
    message: "Please provide your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address:",
  },
  {
    type: "input",
    name: "additionalQuestions",
    message: "If applicable, please provide any additional questions:",
  },
];



// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)

// TODO: Create a function to write README file
    .then((answers) => {
      const markdownContent = generateMarkdown(answers);

      fs.writeFile("README.md", markdownContent, (err) => {
        err
          ? console.log(err)
          : console.log("Congratulations! You have successfully created a professional README!");
      });
    });
}

// Function call to initialize app
init();
