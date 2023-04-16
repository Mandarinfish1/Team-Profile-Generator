const Employee = require("../lib/Employee")

// This describes the "Employee" class and all of its methods
describe("Employee", () => {
  // This describes the "getName" method
  describe("getName", () => {
    // This tests the "getName" method with a valid name
    it("should return the name of the employee", () => {
      // Arrange
      const name = "Sonja"
      const employee = new Employee(name)

      // Act
      const result = employee.getName()

      // Assert
      expect(result).toEqual(name)
    })
  })

  // This describes the "getId" method
  describe("getId", () => {
    // This tests the "getId" method with a valid ID
    it("should return the ID of the employee", () => {
      // Arrange
      const name = "Sonja"
      const id = 123
      const employee = new Employee(name, id)

      // Act
      const result = employee.getId()

      // Assert
      expect(result).toEqual(id)
    })
  })

  // This describes the "getEmail" method
  describe("getEmail", () => {
    // This tests the "getEmail" method with a valid email
    it("should return the email of the employee", () => {
      // Arrange
      const name = "Sonja"
      const id = 123
      const email = "Sonja@example.com"
      const employee = new Employee(name, id, email)

      // Act
      const result = employee.getEmail()

      // Assert
      expect(result).toEqual(email)
    })
  })

  // This describes the "getRole" method
  describe("getRole", () => {
    // This tests the "getRole" method with a valid role
    it("should return the role of the employee", () => {
      // Arrange
      const name = "Sonja"
      const id = 123
      const email = "Sonja@example.com"
      const employee = new Employee(name, id, email)

      // Act
      const result = employee.getRole()

      // Assert
      expect(result).toEqual("Employee")
    })
  })
})
