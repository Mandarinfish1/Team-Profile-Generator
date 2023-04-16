// Importing the `fs` module to work with the file system
const fs = require("fs")

// Defining a function to remove the `team.html` file from the `dist` folder
function resetDistFolder() {
  // Checking if the `team.html` file exists in the `dist` folder
  if (fs.existsSync("./dist/team.html")) {
    // If the file exists, remove it
    fs.unlinkSync("./dist/team.html")
    // Log a message to the console to confirm that the file has been removed
    console.log("The `team.html` file has been removed from the `dist` folder!")
  } else {
    // If the file does not exist, log a message to the console to inform the user
    console.log("The `team.html` file does not exist in the `dist` folder!")
  }
}

// Exporting the `resetDistFolder` function so that it can be used in other modules
module.exports = resetDistFolder
