// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt(
    [
      {
        type: "input",
        name: "project",
        message: "What is the name of the Project",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter project");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Provide a project description",
      },
      {
        type: "input",
        name: "Table of Contents",
        message: "Table of Contents",
      },
      {
        type: "input",
        name: "Installation",
        message:
          "What are the steps required to install your project? Provide a step-by-step to run description of how to get the development environment running",
      },
      {
        type: "input",
        name: "Usage",
        message:
          "Provide instructions and examples for use. Provide screenshots or a video url to the project",
      },
      {
        type: "input",
        name: "Credits",
        message:
          "List your collaborators, or any third-party assets that require attribution",
      },
      {
        type: "checkbox",
        name: "License",
        message:
          "Include a license to let other developers know what they can and cannot do with your project",
        choices: ["MIT", "Apache", "GPL"],
      },
      {
        type: "input",
        name: "Questions",
        message: "",
      },
    ]
      .then((answers) => {})
      .catch((err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(answers);
        }
      })
  );
};

questions;

// TODO: Create a function to write README file

fs.writeFile("readme.md", questions(), (err) => {
  if (err) return console.log(err);

  console.log("successfully wrote in README file!");
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
