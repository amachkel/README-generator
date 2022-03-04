// TODO: Create a function that returns a license badge and URL based on which license is passed in
// If there is no license chosen, return an empty string
function License(name, badge, color, url) {
  this.name = name;
  this.badge = badge;
  this.color = color;
  this.url = url;
  this.licenseObj = () => {
    console.log(this.licenseObj);
    const generateLicense = `[![License](https://img.shields.io/badge/License-${badge}-${color}.svg)](${url})`;
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
  console.log(data.license);
  if (data.license == "none") {
    return "";
  }
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
  console.log(data);
  let toc = "";
  if (data.table) {
    toc = "## Table Of Contents\n";
    Object.keys(data).forEach((key) => {
      let objName = key;
      console.log(objName);
      if (objName == "desc") {
        toc += ` - [Description](#Description)\n`;
      } else if (objName == "license" && data.license == "none") {
        return "";
      }
      else if (objName != "table" && objName != "title") {
        toc += ` - [${objName}](#${objName})\n`;
      }
    });
  }
  console.log(toc);
  return toc;
};
const renderInstall = (install) => {
  return `\n## Installation Requirements\n ${install}\n`;
};
const renderUsage = (usage) => {
  return `## Usage\n${usage}\n`;
};
const renderCredits = (credits) => {
  return `## Credits\n${credits}\n`;
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = "";
  markdown += renderTitle(data.title);
  markdown += renderDesc(data.desc);
  markdown += renderTable(data);
  markdown += renderInstall(data.install);
  markdown += renderUsage(data.usage);
  markdown += renderCredits(data.credits);
    markdown += renderLicense(data);

  return markdown;
}

module.exports = generateMarkdown;
