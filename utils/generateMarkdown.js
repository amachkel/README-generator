// TODO: Create a function that returns a license badge and URL based on which license is passed in
// If there is no license chosen, return an empty string

// const license = data.license[0];
// console.log(license);
function License(name, badge, color, url) {
  this.name = name;
  this.badge = badge;
  this.color = color;
  this.url = url;
  this.licenseObj = () => {
    const generateLicense = `[![License](https://img.shields.io/badge/License-${badge}-${color}.svg)](${url})`;
    console.log(generateLicense);
    return `## License\n${generateLicense}`;
  };
}
let choices = [];

const apache = new License(
  "Apache 2.0",
  "Apache_2.0",
  "blue",
  "https://opensource.org/licenses/Apache-2.0"
);
choices.push(apache);
const gnu = new License(
  "GNU Public v3.0",
  "GPLv3",
  "blue",
  "https://www.gnu.org/licenses/gpl-3.0"
);
choices.push(gnu);
const mit = new License(
  "MIT",
  "MIT",
  "yellow",
  "https://opensource.org/licenses/MIT"
);
choices.push(mit);
const moz = new License(
  "Mozilla Public 2.0",
  "MPL_2.0",
  "brightgreen",
  "https://opensource.org/licenses/MPL-2.0"
);
choices.push(moz);
const boost = new License(
  "Boost Software License 1.0",
  "Boost_1.0",
  "lightblue",
  "https://www.boost.org/LICENSE_1_0.txt"
);
choices.push(boost);
const uni = new License(
  "The Unilicense",
  "Unlicense",
  "blue",
  "http://unlicense.org/"
);
choices.push(uni);

const renderLicense = (data) => {
  let match = choices.find((item) => item.name == data.license);
  if (match) return match.licenseObj();
};
const renderTitle = (title) => {
  return `# ${title}\n`;
};
const renderDesc = (description) => {
  return `${description}\n`;
};
const renderTable = (data) => {
  let toc = "## Table Of Contents\n";
  if (data.table) {
    Object.keys(data).forEach((key) => {
      let objName = key;
      if (objName == "desc") {
        toc += ` - [Description](#Description)\n`;
      } else if (objName != "table" && objName != "title") {
        toc += ` - [${objName}](#${objName})\n`;
      }
    });
  }
};
const renderInstall = (install) => {
return `\n## Installation Requirements\n ${install}\n`;
}
const renderUsage = (usage) => {
  return `## Usage\n${usage}\n`;
}
const renderCredits = (credits) => {
  return `## Credits\n${credits}\n`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = "";
  markdown += renderTitle(data.title);
  markdown += renderDesc(data.desc);
  markdown += renderTable(data.table);
  markdown += renderInstall(data.install);
  markdown += renderUsage(data.usage);
  markdown += renderCredits(data.credits);
  markdown += renderLicense(data);

  return markdown;
}

// ## Table of Contents
// - [Description](#Description)
// - [Installation](#Installation)
// - [Usage](#Usage)
// - [Credits](#Credits)
// - [License](#License)
module.exports = generateMarkdown;

// const choices = [
//   {
//     name: "Apache 2.0",
//     badge: "Apache_2.0",
//     color: "blue",
//     url: "https://opensource.org/licenses/Apache-2.0",
//   },
//   {
//     name: "GNU Public v3.0",
//     badge: "GPLv3",
//     color: "blue",
//     url: "https://www.gnu.org/licenses/gpl-3.0",
//   },
//   {
//     name: "MIT",
//     badge: "MIT",
//     color: "yellow",
//     url: "https://opensource.org/licenses/MIT",
//   },
//   {
//     name: "Mozilla Public 2.0",
//     badge: "MPL_2.0",
//     color: "brightgreen",
//     url: "https://opensource.org/licenses/MPL-2.0",
//   },
//   {
//     name: "Boost Software License 1.0",
//     badge: "Boost_1.0",
//     color: "lightblue",
//     url: "https://www.boost.org/LICENSE_1_0.txt",
//   },
//   {
//     name: "The Unilicense",
//     badge: "Unlicense",
//     color: "blue",
//     url: "http://unlicense.org/",
//   },
// ];
