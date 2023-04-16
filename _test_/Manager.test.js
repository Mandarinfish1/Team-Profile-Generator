const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and officeNumber if provided valid arguments", () => {
      const manager = new Manager("John", 1234, "john@test.com", 1)

      expect(manager.name).toEqual("John")
      expect(manager.id).toEqual(1234)
      expect(manager.email).toEqual("john@test.com")
      expect(manager.officeNumber).toEqual(1)
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Manager()
      expect(cb).toThrow()
    });

    it("should throw an error if not provided an office number", () => {
      const cb = () => new Manager("John", 1234, "john@test.com")
      expect(cb).toThrow()
    });

    it("should throw an error if not provided a name", () => {
      const cb = () => new Manager(undefined, 1234, "john@test.com", 1)
      expect(cb).toThrow()
    });

    it("should throw an error if not provided an ID", () => {
      const cb = () => new Manager("John", undefined, "john@test.com", 1)
      expect(cb).toThrow()
    });

    it("should throw an error if not provided an email", () => {
      const cb = () => new Manager("John", 1234, undefined, 1)
      expect(cb).toThrow()
    });

    it("should throw an error if provided an empty string for name", () => {
      const cb = () => new Manager("", 1234, "john@test.com", 1)
      expect(cb).toThrow()
    });

    it("should throw an error if provided an empty string for email", () => {
      const cb = () => new Manager("John", 1234, "", 1)
      expect(cb).toThrow()
    });

    it("should throw an error if provided an non-number for id", () => {
      const cb = () => new Manager("John", "1234", "john@test.com", 1)
      const cb2 = () => new Manager("John", [], "john@test.com", 1)
      expect(cb).toThrow()
      expect(cb2).toThrow()
    });

    it("should throw an error if provided an non-number for officeNumber", () => {
      const cb = () => new Manager("John", 1234, "john@test.com", "1")
      const cb2 = () => new Manager("John", 1234, "john@test.com", [])
      expect(cb).toThrow()
      expect(cb2).toThrow()
    })

    it("should throw an error if provided an invalid email", () => {
      const cb = () => new Manager("John", 1234, "johntest.com", 1)
      expect(cb).toThrow()
    });
  });

  describe("getRole", () => {
    it('should return "Manager"', () => {
      const manager = new Manager("John", 1234, "john@test.com", 1)

      expect(manager.getRole()).toEqual("Manager")
    });
  });
});
