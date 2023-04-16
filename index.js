const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
/*const generateHTML = require('./src/generateHTML');*/
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

// An empty array to hold the team members
let teamMembers = [];

console.log(
  "\nWelcome to the team generator!\nUse `npm run reset` to reset the dist/ folder\n"
);
// Function that starts the app and prompts the user for information about the team manager
function init() {
  console.log("Please build your team 👥");
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the team manager's ID?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the team manager's email?",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
      },
    ])
    .then((answers) => {
      // Creating a new Manager object with the user's input and adding it to the teamMembers array
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      )
      teamMembers.push(manager);
      addTeamMember();
    });
};
// A function that prompts the user to add more team members, either an Engineer, an Intern or to finish adding team members
function addTeamMember() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'Finish building my team'],
      },
    ])
    .then((answer) => {
      if (answer.role === 'Engineer') {
        // If the user selects Engineer, move on to the addEngineer function
        addEngineer()
      } else if (answer.role === 'Intern') {
        // If the user selects Intern, move on to the addIntern function
        addIntern()
      } else {
        // If the user selects Finish building my team, generate the HTML and end the program
        generateHTML(teamMembers)
      };
    });
}
// A function that prompts the user for information about an Engineer
function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
        validate: (answer) => {
          if (answer !== "") {
            return true
          }
          return "Please enter at least one character."
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/)
          if (pass) {
            return true
          }
          return "Please enter a positive number greater than zero."
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
        validate: (answer) => {
          const pass = answer.match(/\S+@\S+\.\S+/)
          if (pass) {
            return true
          }
          return "Please enter a valid email address."
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?",
        validate: (answer) => {
          if (answer !== "") {
            return true
          }
          return "Please enter at least one character."
        },
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      )
      teamMembers.push(engineer)
      addTeamMember()
    });
};

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        validate: (answer) => {
          if (answer !== "") {
            return true
          }
          return "Please enter at least one character."
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's ID?",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/)
          if (pass) {
            return true
          }
          return "Please enter a positive number greater than zero."
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
        validate: (answer) => {
          const pass = answer.match(/\S+@\S+\.\S+/)
          if (pass) {
            return true
          }
          return "Please enter a valid email address."
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
        validate: (answer) => {
          if (answer !== "") {
            return true
          }
          return "Please enter at least one character."
        },
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      )
      teamMembers.push(intern)
      addTeamMember();
    })
}
function buildTeam() {
    // Create the output directory if the dist path doesn't exist
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
  }

  createManager();

   init();