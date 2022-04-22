// function returns a license badge based on which license is passed in
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

// function returns the license link
function renderLink(license) {
  if (!license) {
    return "";
  }
  switch (license) {
    case "MIT":
      return `[For More Information](https://opensource.org/licenses/MIT)`;

    case "Apache":
      return `[For More Information](https://www.apache.org/licenses/LICENSE-2.0)`;

    case "GPL":
      return `[For More Information](https://www.gnu.org/licenses/gpl-3.0.en.html)`;

    case "MPL":
      return `[For More Information](https://www.mozilla.org/en-US/MPL/)`;

    case "BSL":
      return `[For More Information](https://www.boost.org/users/license.html)`;

    case "ESL":
      return `[For More Information](https://www.eclipse.org/legal/epl-2.0/)`;

    default:
      return "";
  }
}

// function to generate markdown for README

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLink(data.license);
  return ` 
  # ${licenseBadge}
  # ${data.project_title}

  ## 📄 Description
    ${data.description}

  ## 𝌞 Table of Contents
  ${data.content}
  1. [Installation](#installation)
  2. [Usage ](#usage)
  3. [Credits ](#credits)
  4. [GitHub Username ](#gitHub-username)
  5. [Licenses ](#licenses)

  ## 🏁 Installation
  ${data.installation}

  ## 🎮 Usage
  ${data.usage}

  ## ❤️ Credits
  ${data.credits}

  ## 📜 Licenses
  
  ${data.license} 
  ${licenseLink}

  ##❓ Questions?

  ${"https://github.com/" + data.github_username},

  ${data.questions}

  ## 🧪 Test Instructions
  ${data.tests}

`;
}

module.exports = { generateMarkdown };
