//import dependencies
var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./generateMarkdown.js")

//varaible that contains all the questions the user will be asked
const questions = [
    {
        type: "input",
        message: "Please enter your GitHub username:",
        name: "username"
    },
    {
        type: "input",
        message: "What is the Project Title:",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter the Project Description:",
        name: "description"
    },
    {
        type: "input",
        message: "Please describe the steps for installation:",
        name: "installation"
    },
    {
        type: "input",
        message: "Please provide an example or instructions for usage of the project:",
        name: "usage"
    },
    {
        type: "checkbox",
        message: "Please select a license:",
        choices: [
            "CC0 (Public Domain)",
            "CC BY 4.0",
            "CC BY-SA 4.0"
        ],
        name: "license"
    },
    {
        type: "input",
        message: "Please add guidelines for contributors:",
        name: "contributors"
    },
    {
        type: "input",
        message: "Please provide any tests and examples for how to run them:",
        name: "tests"
    },
    {
        type: "input",
        message: "Please enter your email addess:",
        name: "contact"
    }
    
];





//function that writes all of the user's responses to a README.md file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success!");
      
      });
    }


function init() {
    //function that asks the users questions and puts answers into an object.
    inquirer.prompt(questions)
    //promise for what to do with the user supplied answers
    .then(answers => {
        console.log(answers)
        writeToFile("READMEnew.md", answers);
        })
}

init();

