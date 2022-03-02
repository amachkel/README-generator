// TODO: Create a function that returns a license badge and URL based on which license is passed in
// If there is no license chosen, return an empty string
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
  console.log(data);
  const license = renderLicense(data);
  let markdown = "";
  let table = "";
  //need to require title and description.
  if (data.title) {
    markdown += `# ${data.title}\n\n`;
  }
  if (data.desc) {
    markdown += `${data.desc}\n\n`;
    table += " - [Description](#Description)\n";
  }

  if (data.install) {
    markdown += `## Installation Requirements\n${data.install}\n\n`;
    table += " - [Installation Requirements](#Installation-Requirements)\n";
  }
  if (data.usage) {
    markdown += `## Usage\n${data.usage}\n\n`;
    table += " - [Usage](#Usage)\n";
  }
  if (data.credits) {
    markdown += `## Credits\n${data.credits}\n\n`;
    table += " - [Credits](#Credits)\n";
  }
  if (data.license) {
    markdown += license;
    table += " - [License](#License)";
  }
  if (data.table) {
    markdown += `## Table of Contents\n${table}\n\n`;
  }
  return markdown;
  return `# ${data.title}

  ## Description
  ${data.desc}


 ${table}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}
  
  ${license}`;
}

// ## Table of Contents
// - [Description](#Description)
// - [Installation](#Installation)
// - [Usage](#Usage)
// - [Credits](#Credits)
// - [License](#License)
module.exports = generateMarkdown;
