// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (!data.license) {
    return "";
  } else if (data.license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge";
  } else if (data.license === "Apache") {
    return "https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge";
  } else if (data.license === "GPL") {
    return "https://img.shields.io/badge/License-GPLv3-blue?style=for-the-badge";
  } else if (data.license === "MPL") {
    return "https://img.shields.io/badge/License-MPL%202.0-brightgreen?style=for-the-badge";
  } else if (data.license === "BSL") {
    return "https://img.shields.io/badge/License-Boost%201.0-lightblue?style=for-the-badge";
  } else if (data.license === "ESL") {
    return "https://img.shields.io/badge/License-EPL%201.0-red?style=for-the-badge";
  } else {
    return "";
  }
}
renderLicenseBadge(data.license);
// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// function renderLicenseSection(license) {}

// const licenseBadges = [
// {
//     href: "https://opensource.org/licenses/MIT",
//     src: "https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge",
//     name: "MIT License",
//   },
//   {
//     href: "https://www.apache.org/licenses/LICENSE-2.0",
//     src: "https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge",
//     name: "Apache License",
//   },
//   {
//     href: "https://www.gnu.org/licenses/gpl-3.0",
//     src: "https://img.shields.io/badge/License-GPLv3-blue?style=for-the-badge",
//     name: "GNU General Public License",
//   },
//   {
//     href: "https://opensource.org/licenses/MPL-2.0",
//     src: "https://img.shields.io/badge/License-MPL%202.0-brightgreen?style=for-the-badge",
//     name: "Mozilla Public License",
//   },
//   {
//     href: "https://www.boost.org/LICENSE_1_0.txt)",
//     src: "https://img.shields.io/badge/License-Boost%201.0-lightblue?style=for-the-badge",
//     name: "Boost Software License 1.0 License",
//   },
//   {
//     href: "https://opensource.org/licenses/EPL-1.0)",
//     src: "https://img.shields.io/badge/License-EPL%201.0-red?style=for-the-badge",
//     name: "Eclipse Public License",
//   },
// ];
// const [mit, apache, gnu, mpl, BSL, EPL] = licenseBadges;

// Create a function to generate markdown for README

function generateMarkdown(data) {
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
