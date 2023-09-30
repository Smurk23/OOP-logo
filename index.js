const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const MySVG = require('./lib/mySVG');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'Text',
            message: 'Enter text for your logo (up to three letters)',
        },
        {
            type: 'input',
            name: 'TextColor',
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
            name: 'ShapeColor',
            message: 'What color do you want your shape to be ?',
        }
    ])

    .then((answers) => {

        let shape;
        switch (answers.Shape) {
            case 'Square':
                shape = new Square();
                break;
            case 'Triangle':
                shape = new Triangle();
                break;
            default:
                shape = new Circle();
                break;
        }

        shape.setColor (answers.ShapeColor);

        let newSVG = new MySVG ();
        newSVG.setShape(shape);
        newSVG.setText(Text, TextColor);
        writeFile('logo.svg', newSVG.display());
    })