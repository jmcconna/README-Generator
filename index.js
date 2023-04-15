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
choices: [
    'Apache','Boost','BSD', 'Eclipse', 'GNU', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons','PERL', 'PERL Artistic','SIL','Unlicense', 'WTFPL', 'Zlib'   
] 
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

    

    //License Badges
        //[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
        //[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
        //[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
        //[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
        //[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
        //[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
        //[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
        //[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
        //[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
        //[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)
        //[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)
        //[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)
        //[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)
        //[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)
        //[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)
        //[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
        //[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)
        //[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)

        //create new file and stuff all that README goodness into it
        fs.writeFile(fileName, markdownText, (err) => err ? console.log(err) : console.log('Success!'));

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
