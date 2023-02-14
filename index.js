//installing fs and inquirer
const fs = require('fs');
const inquirer = require('inquirer');
//make a separate js for the file generation to make code look cleaner
const readMeGenerator = require('./readMeGenerator.js')

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
    name: 'Title',
    message: 'What is the title of you new project? ',
    validate: validate()
  },

  {
    type: 'input',
    name: 'Descpription',
    message: 'Enter a description for your new project: ',
    validate: validate()

  },

  {
    type: 'input',
    name: 'Installation Instructions',
    message: 'Please provide installation instructions: ',
    validate: validate()
  },

  {
    type: 'input',
    name: 'Usage',
    message: 'How to use application: ',
    validate: validate()
  },

  {
    type: 'inout',
    name: 'Contributing',
    message: 'Enter contributions:',
    validate: validate()
  },

  {
    type: 'input',
    name: 'Tests',
    message: "How to test application: ",
    validate: validate()
  },

  {
    type:'checkbox',
    name: 'License',
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
    name: 'GitHub',
    message: "Enter your Github: ",
    validate: validate()
  },

  {
    type: 'input',
    name: 'Email',
    message: "Enter your email: ",
    validate: validate()
  }

]).then((answers) => {
    //use the user input to plug into README generator
      console.log('Your README file being made by the Council of Wizards...');

  }).catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  }); 
