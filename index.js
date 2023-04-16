// TODO: Include packages needed for this application
const inquirer = require("inquirer"); //include inquierer package
const fs = require("fs"); //include the file system package
const licenses = ['Apache 2.0 License','Boost Software License 1.0','BSD 3-Clause License', 'Eclipse Public License 1.0', 'GNU GPL v3', 'IBM Public License Version 1.0', 'ISC License', 'The MIT License', 'Mozilla Public License 2.0', 'Open Data Commons Attribution License (BY)','The PERL License', 'The Artistic License 2.0','SIL Open Font License 1.1','The Unlicense', 'WTFPL', 'The zlib/libpng License'];

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
message: 'Choose a license for your application:',   
choices: licenses
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
function writeToFile(fileName, data) {

    let READMEtext = ""; //create an empty string to start writing the README file

    READMEtext = READMEtext + "# " + data.title +"\n" + "\n";

    READMEtext = READMEtext + "## Description" + '\n' + data.description + "\n" +"\n";

    READMEtext = READMEtext + "## Installation" + '\n' + data.installation + "\n" +"\n";

    READMEtext = READMEtext + "## Usage Information" + '\n' + data.usage + "\n" +"\n";
    
    READMEtext = READMEtext + "## Contribution Guidelines" + '\n' + data.contribution + "\n" +"\n";
    
    READMEtext = READMEtext + "## Test Instructions" + '\n' + data.test + "\n" +"\n";
    
    READMEtext = READMEtext + "## License" + '\n' + data.license +"\n";
    console.log(data.license);

    //add license badges, based on the license chosen
        switch(data.license[0]) {
            case licenses[0]:
                console.log("Inside the first case");
                READMEtext = READMEtext + "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;
            case licenses[1]:
                READMEtext = READMEtext + "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
                break;
            case licenses[2]:
                READMEtext = READMEtext + "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
                break;
            case licenses[3]:
                READMEtext = READMEtext + "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
                break;
            case licenses[4]:
                READMEtext = READMEtext + "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
                break;
            case licenses[5]:
                READMEtext = READMEtext + "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
            case licenses[6]:
                READMEtext = READMEtext + "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
            case licenses[7]:
                READMEtext = READMEtext + "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
            case licenses[8]:
                READMEtext = READMEtext + "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
            case licenses[9]:
                READMEtext = READMEtext + "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
            case licenses[10]:
                READMEtext = READMEtext + "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
            case licenses[11]:
                READMEtext = READMEtext + "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
            case licenses[12]:
                READMEtext = READMEtext + "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
            case licenses[13]:
                READMEtext = READMEtext + "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
            case licenses[14]:
                READMEtext = READMEtext + "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
            case licenses[15]:
                READMEtext = READMEtext + "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                break;
        }
    
    READMEtext = READMEtext +  "\n\n## Questions" + '\nMessage me on Github:' + data.username  +"\nShoot me an email:" + data.email +"\n";

        //create new file and stuff all that README goodness into it
        fs.writeFile(fileName, READMEtext, (err) => err ? console.log(err) : console.log('Success!'));

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("README.md", data);
        }
        )
}

// Function call to initialize app
init();
