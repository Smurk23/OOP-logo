const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt ([
    {
        type: 'input',
        name: 'Text',
        message: 'Enter text for your logo (up to three letters)',
      },
      {
        type: 'input',
        name: 'Text Color',
        message: 'What color should your text be ?',
      },
      {
        type: 'list',
        name: 'Shape',
        message: 'What shape do you want your logo to be ?',
        choices: ['Circle', 'Square', 'Triangle'] 
      },
      {
        type: 'input',
        name: 'Shape Color',
        message: 'What color do you want your shape to be ?',
      }
    ])