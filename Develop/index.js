// Variables & Packages //
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// User Input Questions //
const questions = [
  {
    // Title //
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title");
        return false;
      }
    },
  },
  {
    // Description //
    type: "input",
    name: "description",
    message: "Please write a description for your project:",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description");
        return false;
      }
    },
  },
  {
    // Languages //
    type: "checkbox",
    name: "languages",
    message: "What did you use to make your project?",
    choices: [" CSS", " HTML", " JavaScript", " Node.js"],
    validate: (languagesInput) => {
      if (languagesInput) {
        return true;
      } else {
        console.log("Please select a language");
        return false;
      }
    },
  },
  {
    // Installation //
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please describe steps to install");
        return false;
      }
    },
  },
  {
    // Usage //
    type: "input",
    name: "usage",
    message: "How do you use this project?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please provide usage instructions");
        return false;
      }
    },
  },
  {
    // License //
    type: "list",
    name: "license",
    message: "What license should your project have?",
    choices: ["MIT", "GPL", "Apache", "None"],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please enter license used");
        return false;
      }
    },
  },
  {
    // Contributors //
    type: "confirm",
    name: "showContributor",
    message:
      "Would you like to provide credit or add contributors to this project?",
    default: true,
  },
  {
    type: "input",
    name: "contributors",
    message: "Please enter credit and/or contributors:",
    when: ({ showContributor }) => {
      if (showContributor) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    // Tests //
    type: "input",
    name: "tests",
    message:
      "What commands are used to run tests? (if none please enter 'N/A') ",
  },
  {
    // GitHub username //
    type: "input",
    name: "gitHub",
    message: "What is your GitHub username?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter GitHub username");
        return false;
      }
    },
  },
  {
    // Email Username //
    type: "input",
    name: "email",
    message: "Enter your email address",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter an email");
        return false;
      }
    },
  },
];

// Function to write README file //
function writeToFile(fileContent) {
  return new Promise((resolve, reject) => {
    fs.writeFile("README.md", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "README File Created!",
      });
    });
  });
}

// Initialize Application Function //
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    const inputData = generateMarkdown(userInput);
    writeToFile(inputData);
  });
}

// Called Initialize Function //
init();
