// Import the Intern class from the Intern.js file
const Intern = require("../lib/Intern");

// Create a test suite for the Intern class
describe("Intern", () => {
  // Create a test for the getSchool() method
  describe("getSchool", () => {
    it("should return the intern's school", () => {
      // Create a new instance of the Intern class with sample data
      const intern = new Intern("John", 1, "john@test.com", "Harvard")
      // Call the getSchool() method and expect it to return the intern's school
      expect(intern.getSchool()).toEqual("Harvard");
    });
  });

  // Create a test for the getRole() method
  describe("getRole", () => {
    it('should return "Intern"', () => {
      // Create a new instance of the Intern class with sample data
      const intern = new Intern("John", 1, "john@test.com", "Harvard")
      // Call the getRole() method and expect it to return "Intern"
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
