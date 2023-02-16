//installing fs and inquirer
const fs = require('fs');
const inquirer = require('inquirer');
//make a separate js for the file generation to make code look cleaner
const readMeGenerator = require('./readMeGenerator');

//make a validation input function incase user inputs invalid characters such as " "
function validate(input) {
  if (input != " ") {
    //this will accept any response as long as it is not a blank string
    return true;
  } else {
    console.log('Input cannot be blank! The wizards need their ingredients!')
  }
}

//starting the question prompts
inquirer.prompt([
   /* Pass your questions in here */
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of you new project? ',
    validate: validate//could make a function to make sure the user input isn't blank
  },

  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your new project: ',
    validate: validate

  },

  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions: ',
    validate: validate
  },

  {
    type: 'input',
    name: 'usage',
    message: 'How to use application: ',
    validate: validate
  },

  {
    type: 'inout',
    name: 'contributing',
    message: 'Enter contributions:',
    validate: validate
  },

  {
    type: 'input',
    name: 'tests',
    message: "How to test application: ",
    validate: validate
  },

  {
    type:'list',
    name: 'license',
    message: 'What license does your application have? ',
    choices:[
      'MIT License',
      'Apache License 2.0',
      'GNU General Public License v3.0',
      'Boost Software License 1.0',
      'Eclipse Public License'
    ]
  },

  {
    type:'input',
    name: 'github',
    message: "Enter your Github: ",
    validate: validate
  },

  {
    type: 'input',
    name: 'email',
    message: "Enter your email: ",
    validate: validate
  }

]).then((answers) => {
    //use the user input to plug into README generator
      console.log('Your README file was successfully made by the Council of Wizards...');
      console.log(JSON.stringify(answers));
      answers.license = makeLicenseBadge(answers.license);
      fs.writeFile('./assets/README.md', readMeGenerator(answers), (err) => {console.log(err)})

  }).catch((error) => {console.log(error)});

function makeLicenseBadge(license) { 
  if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
} else if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
} else if (license === "GNU General Public License v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
} else if (license === "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
} else if (license === "Eclipse Public License") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
}
}