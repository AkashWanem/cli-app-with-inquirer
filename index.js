const inquirer = require('inquirer');

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
    // Use user feedback for... whatever!!
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