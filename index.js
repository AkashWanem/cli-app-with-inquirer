const inquirer = require('inquirer');
const fs = require('fs');

/*
inquirer
   .promt([
       {
           name:'user_name',
           type: 'input',
           message: 'what is your name?',
       },
   ]);
*/
inquirer
  .prompt([
    {
        name: 'name',
        type: 'input',
        message: 'what is your name?'
    }
  ])
  .then((answers) => {
       fs.writeFile('log.txt', `Name: ${answers.name}`, (err) => {
           console.log('done')
       })
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

/*
It's done when the application asks the user, "What is your name?"


It's done when the application asks the user, "What languages do you know?"


It's done when the application asks the user, “What is your preferred method of communication?"
*/