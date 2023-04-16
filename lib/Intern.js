// Require the Employee class to inherit from
const Employee = require("./Employee")

// Create the Intern class and extend it from Employee
class Intern extends Employee {
  // Constructor function to create a new Intern instance
  constructor(name, id, email, school) {
    // Call the parent constructor with the name, id, and email parameters
    super(name, id, email)
    // Set the school parameter as a property on the new Intern instance
    this.school = school
  }

  // Method to return the role of the Intern
  getRole() {
    return "Intern"
  }

  // Method to return the school of the Intern
  getSchool() {
    return this.school
  }
}

// Export the Intern class
module.exports = Intern
