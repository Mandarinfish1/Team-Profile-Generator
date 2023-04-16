// Importing the Engineer class
const Engineer = require("../lib/Engineer");

// Creating a test suite for the Engineer class
describe("Engineer", () => {
  // Creating a test for the getGithub method
  describe("getGithub", () => {
    it("should return the Engineer's GitHub username", () => {
      // Creating a new instance of the Engineer class with test data
      const engineer = new Engineer(
        "John",
        1,
        "john@company.com",
        "john-github"
      );

      // Expecting the getGithub method to return the Engineer's GitHub username
      expect(engineer.getGithub()).toEqual("john-github")
    });
  });

  // Creating a test for the getRole method
  describe("getRole", () => {
    it("should return the Engineer's role", () => {
      // Creating a new instance of the Engineer class with test data
      const engineer = new Engineer(
        "John",
        1,
        "john@company.com",
        "john-github"
      );

      // Expecting the getRole method to return "Engineer"
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
