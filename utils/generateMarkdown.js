// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(data) {
//   console.log(data);
  
//   if (!data.license[0]) {
//     console.log("no license chosen");
//     return "";
//   } else {
//     console.log("license chosen");
//     // let renderLicense = "## License";
//     // renderLicenseBadge(data, renderLicense);
//     return renderLicenseBadge(data);
//   }
  
// }
// TODO: Create a function that returns a license badge and URL based on which license is passed in
// If there is no license, return an empty string
function renderLicense(data) {
  const license = data.license[0];
  console.log(license);
  const choices = [
    {
      name: "Apache 2.0",
      badge: "Apache_2.0",
      color: "blue",
      url: "https://opensource.org/licenses/Apache-2.0",
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

  let match = choices.find((o) => o.name == license);
  if (match != undefined && match != null) {
    const generateLicense = `[![License](https://img.shields.io/badge/License-${match.badge}-${match.color}.svg)](${match.url})`;
    return `## License\n${generateLicense}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data);
  const license = renderLicense(data);
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
  
  ${license}`;
}

module.exports = generateMarkdown;
