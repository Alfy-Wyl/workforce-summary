# Workforce Summary
  ![Github license](https://img.shields.io/badge/license-MIT-blue.svg)


  ## Description 

  An application that generates HTML files using input from a command-line interface.This application will take in information about employees on a software engineering team, then generate an HTML webpage that displays summaries for each person's work details.

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Contact-Information](#contact-Information)
  
  ## Installation
  Run the following command to install required dependencies

  ```
  npm install inquirer
  ```

  ## Usage

  Use Node version 16 and above.
  
  node index.js

  When a user starts the application, they're prompted to enter the team manager's:

    Name
    Employee ID
    Email address
    Office number

  When a user enters those requirements, the user is presented with a menu with the option to:

    Add an engineer
    Add an intern
    No more team member to add

  When a user selects the engineer option, the user is prompted to enter the following and then taken back to the menu:

    Engineer's Name
    ID
    Email
    GitHub username

  When a user selects the intern option, the user is prompted to enter the following and then taken back to the menu:

    Intern’s name
    ID
    Email
    School

  When a user decides to finish building their team, they exit the application and the HTML is generated.
  <img width="1242" alt="user input" src="https://user-images.githubusercontent.com/118228946/223186184-384bed6b-16b1-4800-a364-46bb98ffd8e7.png">

  <img width="1236" alt="team profile" src="https://user-images.githubusercontent.com/118228946/223185311-148d23ba-e267-4636-89fe-cd378665aab2.png">


  ## License

  This project is licensed under the MIT license.

  ## Contributing

  Fork the repository to contribute

  ## Tests
  Test is done using Jest. Run the following command to run tests:
  
  ```
  npm run test
  ```

  ## Contact Information

  * Github: [Alfy-Wyl](https://github.com/Alfy-Wyl).
  * Email: alfred.wnunoo@gmail.com

  
