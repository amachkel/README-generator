// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const license = data.license[0];
  console.log(license);
  const choices = [
    {
      name: "Apache 2.0",
      badge: "Apache_2.0",
      color: "blue",
      url: "https://www.boost.org/LICENSE_1_0.txt",
    },
    {
      name: "GNU Public v3.0",
      badge: "GPLv3",
      color: "blue",
      url: "https://www.gnu.org/licenses/gpl-3.0",
    },
    {
      name: "MIT",
      badge: "MIT",
      color: "yellow",
      url: "https://opensource.org/licenses/MIT",
    },
    {
      name: "Mozilla Public 2.0",
      badge: "MPL_2.0",
      color: "brightgreen",
      url: "https://opensource.org/licenses/MPL-2.0",
    },
    {
      name: "Boost Software License 1.0",
      badge: "Boost_1.0",
      color: "lightblue",
      url: "https://www.boost.org/LICENSE_1_0.txt",
    },
    {
      name: "The Unilicense",
      badge: "Unlicense",
      color: "blue",
      url: "http://unlicense.org/",
    },
  ];
  if (license == "None") {
    return "";
  } else if (license == choices.name) {
    let generateLicense = `[![License](https://img.shields.io/badge/License-${this.choices.badge}-${this.choices.color}.svg)](${this.choices.url})`;
    console.log(generateLicense);
   return generateLicense;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  console.log(data);
  let license = renderLicenseBadge(data);
  return `# ${data.title}

  ## Description
  ${data.desc}

  ## Table of Contents
 - [Description](#Description)
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [Credits](#Credits)
 - [License](#License)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${license}`;
}

module.exports = generateMarkdown;
