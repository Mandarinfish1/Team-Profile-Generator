// Importing the Employee class
const Employee = require("./Employee")

// Creating a new class called Engineer that extends the Employee class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github
    this.role = "Engineer"
  }

  // Adding a new method to return the GitHub username of the Engineer
  getGithub() {
    return this.github
  }
}

// Exporting the Engineer class
module.exports = Engineer
