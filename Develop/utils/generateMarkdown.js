// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let badgeIcon = ""

function renderLicenseBadge(data) {
  if (data.license === "MIT") {
    return badgeIcon = "https://img.shields.io/badge/License-MIT-yellow.svg"
  } else if (data.license === "GPLv2") {
    return badgeIcon = "https://img.shields.io/badge/License-GPL%20v2-blue.svg"
  } else if (data.license === "Apache") {
    return badgeIcon = "https://img.shields.io/badge/License-Apache%202.0-blue.svg"
  } else if (data.license === "GPLv3") {
    return badgeIcon = "https://img.shields.io/badge/License-GPL%20v3-blue.svg"
  } else if (data.license === "BSD 3-clause") {
    return badgeIcon = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"
  } else if (data.license === "No License") {
    return badgeIcon = ""
  }
}

let licenseLink = ""

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === "MIT") {
    return licenseLink = "https://choosealicense.com/licenses/mit/"
  } else if (data.license === "GPLv2") {
    return licenseLink = "https://choosealicense.com/licenses/gpl-2.0/"
  } else if (data.license === "Apache") {
    return licenseLink = "https://choosealicense.com/licenses/apache-2.0/"
  } else if (data.license === "GPLv3") {
    return licenseLink = "https://choosealicense.com/licenses/gpl-3.0/"
  } else if (data.license === "BSD 3-clause") {
    return licenseLink = "https://choosealicense.com/licenses/bsd-3-clause-clear/"
  } else if (data.license === "No License") {
    return licenseLink = ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(data) {
//   if (data.license === "MIT") {
//     return licenseSection = ""
//   } else if (data.license === "GPLv2") {
//     return licenseSection = ""
//   } else if (data.license === "Apache") {
//     return licenseSection = ""
//   } else if (data.license === "GPLv3") {
//     return licenseSection = ""
//   } else if (data.license === "BSD 3-clause") {
//     return licenseSection = ""
//   } else if (data.license === "No License") {
//     return licenseSection = ""
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  renderLicenseBadge(data)
  renderLicenseLink(data)
  

  return `# ${data.title}
  ![License Badge](${badgeIcon})(${licenseLink})

  ## Description
  ${data.description}

  ## Table of Contents
   - [Installation](#installation)
   - [Usage](#usage)
   - [License](#license)
   - [How to Contribute](#contribution)
   - [Test Instructions](#instructions)
   - [Questions](#questions)
   
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  [${data.license}](${licenseLink})

  ## How to Contribute
  ${data.contribution}

  ## Test Instructions
  ${data.instructions}

  ## Questions

  For any additional comments or questions, you may reach me through the following links - 
  GitHub: [${data.githubUser}](github.com/${data.githubUser})
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;

