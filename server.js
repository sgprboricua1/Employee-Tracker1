const inquirer = require('iquirer');
const fs = require('fs');
const path = require('path');

inquirer.prompt({
    message: 'Chose one of the following:',
    name: 'menu',
    type: 'list',
    choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
})
.then((data) => {
  fs.writeFile('README.md', markyMarkdown(data), (err) => err ? console.log(err) : console.log('Success!')
  );
})