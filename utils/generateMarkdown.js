// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (!data.license) {
    return "";
  } else {
    return `license details for ${data.license} + 🚀 `;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge(data);
  return ` 
  # ${data.project_title}

  ## 📄 Description
    ${data.description}

  ## 𝌞 Table of Contents
  ${data.content}
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Credits] (#credits)
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

module.exports = { generateMarkdown };
