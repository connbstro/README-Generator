// Function that returns a license badge based on which license is passed in //
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    badge =
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "GPL") {
    badge =
      "![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (license === "Apache") {
    badge =
      "![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else {
    badge = "";
  }
  return badge;
}

// TODO: Function that returns the license link if available //
function renderLicenseLink(license) {
  let licenseLink = "";
  if (license === "MIT") {
    licenseLink = "https://choosealicense.com/licenses/mit";
  } else if (license === "GPL") {
    licenseLink = "https://choosealicense.com/licenses/gpl-3.0/";
  } else if (license === "Apache") {
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

// Function that returns the license section of README if available //
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license === "None") {
    licenseSection = "";
  } else {
    licenseSection = "License: ";
  }
  return licenseSection;
}

// Function that generates markdown for README //
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## ${renderLicenseBadge(data.license)}

  ## **Description:**
  ${data.description}

  <br/>

  ## **Table of Contents**
  <details>
  <summary>Click to expand contents</summary>

  ### [Build](#Build)
  ### [Description](#Description)
  ### [Installation](#Installation)
  ### [Usage](#Usage)
  ### [Contributors](#Contributors)
  ### [Tests](#Tests)
  ### [Questions](#Questions)
  ### [License](#License)
  </details>

  <br/>

  ## **Build**
  ${data.languages}

  <br/>

  ## **Installation** 
  ${data.installation} 

  <br/>
  
  ## **Usage**
  ${data.usage}
  
  <br/>
  
  ## **Contributors**
  ${data.contributors}

  <br/>

  ## **Tests**
  ${data.tests}

  <br/>

  ## **Questions**
  How to reach me with questions or comments:
  
  [My GitHub Profile](https://github.com/${data.gitHub})&nbsp; 📂  &nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;${data.email}&nbsp;

  <br/>

  ## **License**
  ${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
