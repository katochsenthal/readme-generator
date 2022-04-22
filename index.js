// packages needed for this application
const { deepStrictEqual } = require("assert");

const fs = require("fs");
const inquirer = require("inquirer");
// const { generateMarkdown } = require("./utils/generateMarkdown");
const markdown = require("./utils/generateMarkdown");

// array of questions for user input

const questions = [
  {
    type: "input",
    name: "project_title",
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
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Provide project description");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    name: "content",
    message:
      "Please select optional items you would like to include in the table of content",
    choices: ["Installation", "Usage", "credits"],
  },
  {
    when: (answers) => {
      if (answers.content.includes("Installation")) {
        return true;
      } else {
        return false;
      }
    },
    type: "input",
    name: "installation",
    message:
      "What are the steps required to install your project? Provide a step-by-step to run description of how to get the development environment running",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please installation requirements");
        return false;
      }
    },
  },
  {
    when: (answers) => {
      if (answers.content.includes("Usage")) {
        return true;
      } else {
        return false;
      }
    },
    type: "input",
    name: "usage",
    message: "Please provide usage instructions",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Provide screenshots or link to a video");
        return false;
      }
    },
  },

  {
    when: (answers) => {
      if (answers.content.includes("Usage")) {
        return true;
      } else {
        return false;
      }
    },
    type: "input",
    name: "credits",
    message:
      "List your collaborators, or any third-party assets that require attribution",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter name of contributors");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github_username",
    message: "enter your github username",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your GitHub Username");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message:
      "Include a license to let other developers know what they can and cannot do with your project",
    choices: ["MIT", "Apache", "GPL", "MPL", "BSL", "EPL"],
    validate: (value) => {
      if (value) {
        return true;
      } else {
        console.log("Please select a license to continue");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "questions",
    message: "To receive future questions from users enter your email?",
  },
  {
    type: "input",
    name: "tests",
    message: "Instructions on how to test your project",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        console.log("Please enter instructions to test your project");
        return false;
      }
    },
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(JSON.stringify(answers));
    fs.writeFile("README.md", markdown.generateMarkdown(answers), (err) => {
      if (err) {
        return console.log(err);
      } else {
        console.log("Readme.md file generated!");
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
