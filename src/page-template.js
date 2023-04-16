// create the team
const generateTeam = (team) => {
  // create the manager html
  const generateManager = (manager) => {
    return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${manager.name}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
        `
  }

  // create the html for engineers
  const generateEngineer = (engineer) => {
    return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${engineer.name}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
        `
  }

  // create the html for interns
  const generateIntern = (intern) => {
    return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${intern.name}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
        `
  }

  const html = []

  html.push(
    team
      .filter((employee) => employee.role === "Manager")
      .map((manager) => generateManager(manager))
  )
  html.push(
    team
      .filter((employee) => employee.role === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  )
  html.push(
    team
      .filter((employee) => employee.role === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  )

  return html.join("")
}

// export function to generate entire page
module.exports = generateTeam;


function generateTeam(team) {
  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 p-5 mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${generateTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>
  `;
};
