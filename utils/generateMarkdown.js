// a function that returns a license badge and URL based on which license is passed in
function License(name, badge, color, url) {
  this.name = name;
  this.badge = badge;
  this.color = color;
  this.url = url;
  this.licenseObj = () => {
    console.log(this.licenseObj);
    const generateLicense = `[![License](https://img.shields.io/badge/License-${badge}-${color}.svg)](${url})`;
    return `## License\n This application is covererd under ${name}. Click the badge to learn more. \n\n ${generateLicense}\n`;
  };
}
//each license object is created and then pushed to choices array
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
const renderTest = (tests) => `## Tests \n ${tests}\n`;
const renderLicense = (data) => {
  console.log(data.license);
  // If there is no license chosen, return an empty string
  if (data.license == "none") {
    return "";
  }
  //match user's choice with correct license object and return it
  let match = choices.find((item) => item.name == data.license);
  if (match) return match.licenseObj();
};
const renderTitle = (title) => `# ${title}\n`;
const renderDesc = (description) => `## Description \n${description}\n`;
const renderTable = (data) => {
  console.log(data);
  //table of contents is optional
  let toc = "";
  if (data.table) {
    toc = "## Table Of Contents \n";
    Object.keys(data).forEach((key) => {
      console.log(key);
      //conditionals chain to determine what's put in the table of contents and how.
      key == "license" && data.license == "none"
        ? ""
        : key != "table" &&
          key != "title" &&
          key != "username" &&
          key != "email"
        ? (toc += ` - [${key}](#${key})\n`)
        : "";
    });
    toc += ` - [questions](#questions)\n`;
    toc += ` - [connect with me](#connect-with-me)\n`;
  }
  return toc;
};
const renderInstall = (installation) =>
  `\n## Installation Requirements\n  ${installation}\n`;
const renderUsage = (usage) => `\n ## Usage\n  ${usage}\n`;
const renderCredits = (data) =>
  `\n## Contributors\n  ${data.contributors}\n If you would like to contribute, please reach out!\n`;
const renderQuestions = (data) =>
  `\n## Questions\n Questions or comments? You can reach me at ${data.email}.\n`;
const renderContactMe = () =>
  `\n## Connect With Me\n 
[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/amachkel)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/alex-harkins/)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg' alt='codepen' height='40'>](https://codepen.io/amachkel)\n`;
// Function to generate markdown for README
function generateMarkdown(data) {
  let markdown = "";
  markdown += renderTitle(data.title);
  markdown += renderDesc(data.description);
  markdown += renderTable(data);
  markdown += renderInstall(data.installation);
  markdown += renderUsage(data.usage);
  markdown += renderCredits(data);
  markdown += renderTest(data.tests);
  markdown += renderLicense(data);
  markdown += renderQuestions(data);
  markdown += renderContactMe();
  return markdown;
}

module.exports = generateMarkdown;
