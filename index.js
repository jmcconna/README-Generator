// TODO: Include packages needed for this application
const inquirer = require("inquirer"); //include inquierer package
const fs = require("fs"); //include the file system package

// TODO: Create an array of questions for user input
const questions = [
//enter project title
{
type: 'input',
name: 'title',
message: 'Enter the project title:',
},
//enter description
{
type: 'input',
name: 'description',
message: 'Enter the project/application description:',
},
//enter installation instructions
{
type: 'input',
name: 'installation',
message: 'Enter the installation instructions for the application:',
},
//enter usage information
{
type: 'input',
name: 'usage',
message: 'Enter usage information for the application:',    
},
//enter contribution guidelines
{
type: 'input',
name: 'contribution',
message: 'Enter any guidelines for contributors to the project:',    
},
//enter test instructions
{
type: 'input',
name: 'test',
message: 'Enter test instructions for the application:',    
},
//choose a license
{
type: 'checkbox',
name: 'license',
message: 'Enter test instructions for the application:',    
},
//enter your github username
{
type: 'input',
name: 'username',
message: 'Enter your Github username:',    
},
//enter email address
{
type: 'input',
name: 'email',
message: 'Enter your email address:',    
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            

        }
        )
}

// Function call to initialize app
init();
