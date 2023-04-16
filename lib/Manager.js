// Import Employee class
const Employee = require("./Employee");

// Create Manager class that extends from Employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber;
  }

  // Override getRole method to return "Manager"
  getRole() {
    return "Manager";
  }

  // Add getOfficeNumber method to return officeNumber
  getOfficeNumber() {
    return this.officeNumber;
  }
}

// Export Manager class
module.exports = Manager;
