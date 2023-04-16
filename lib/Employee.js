// Defining a new class called "Employee"
class Employee {
  // The constructor function
  constructor(name, id, email) {
    // Set the "name", "id", and "email" properties of the instance to the provided arguments
    this.name = name
    this.id = id
    this.email = email
  }

  getName() {
    return this.name
  }
  // Return the value of the "id" property for the current instance
  getId() {
    return this.id
  }
  // Defining a method called "getEmail"
  getEmail() {
    return this.email
  }
  // Defining a method called "getRole"
  getRole() {
    return "Employee"
  }
}
// Exporting the Employee class so that it can be used in other parts of the application
module.exports = Employee
