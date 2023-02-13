//installing fs and inquirer
const fs = require('fs');
const inquirer = require('inquirer');

//
inquirer.prompt([
                        /* Pass your questions in here */
  {
    type: 'input',
    name: 'Title',
    message: 'What is the title of you new project? '
  },

  {
    type: 'input',
    name: 'Descpription',
    message: 'Enter a description for your new project: '
  },

  {
    type: 'input',
    name: 'Installation Instructions',
    message: 'Please provide installation instructions: '
  },

  {
    type: 'input',
    name: 'Usage',
    message: 'How to use application: '
  },

  {
    type: 'inout',
    name: 'Contributing',
    message: 'Enter contributions:',
  },

  {
    type: 'input',
    name: 'Tests',
    message: "How to test application: "
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
    message: "Enter your Github: "
  },

  {
    type: 'input',
    name: 'Email',
    message: "Enter your email: "
  }

]).then((answers) => {
    // Use user feedback for... whatever!!
  }).catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  }); 
