// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else if (license === "MIT") {
    return "![Alt text](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)";
  } else if (license === "Apache") {
    return "![Alt text](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)";
  } else if (license === "GPL") {
    return "![Alt text](https://img.shields.io/badge/License-GPLv3-blue?style=for-the-badge)";
  } else if (license === "MPL") {
    return "![Alt text](https://img.shields.io/badge/License-MPL%202.0-brightgreen?style=for-the-badge)";
  } else if (license === "BSL") {
    return "![Alt text](https://img.shields.io/badge/License-Boost%201.0-lightblue?style=for-the-badge)";
  } else if (license === "ESL") {
    return "![Alt text](https://img.shields.io/badge/License-EPL%201.0-red?style=for-the-badge)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// Create a function to generate markdown for README

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);

  return ` 
  # ${licenseBadge}
  # ${data.project_title}

  ## 📄 Description
    ${data.description}

  ## 𝌞 Table of Contents
  ${data.content}
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Credits](#credits)
  4. [GitHub Username](#gitHub-username)
  5. [Licenses](#licenses)

  ## 🏁 Installation
  ${data.installation}

  ## 🎮 Usage
  ${data.usage}

  ## ❤️ Credits
  ${data.credits}

  ## 👩‍💻 GitHub username
  ${"https://github.com/" + data.github_username}

  ## 📜 Licenses
  ${data.license}

  ##❓ Questions?
  ${data.questions}

  ## 🧪 Test Instructions
  ${data.tests}

`;
}

module.exports = { generateMarkdown, renderLicenseBadge };
