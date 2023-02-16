function readMeGenerator(answers){
    return `
# ${answers.title} ${answers.license}

# Description
${answers.description}

# Table of Contents 
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#test)
* [Contacts](#contacts)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contributing}

## Tests
${answers.tests}

## Contacts
${answers.github}
${answers.email}

    `;
}

module.exports = readMeGenerator;