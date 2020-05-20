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
        ]
        name: "license"
    },
    {
        type: "confirm",
        message: "Would you like to add guidlines for contributors?",
        name: "confrimContributors"
    },
    {
        type: "input",
        message: "Please add guidelines for contributors:",
        name: "contributors"
    },
    {
        type: "confirm",
        message: "Do you have any tests for your project?",
        name: "confirmTests"
    },
    {
        type: "input",
        message: "Please provide any tests and examples for how to run them:",
        name: "tests"
    },
    {
        type: "confirm",
        message: "Would you like to provide contact information?",
        name: "confirmContact"
    },
    {
        type: "input",
        message: "Please enter your email addess:",
        name: "contact"
    }
];

//function that writes all of the user's responses to a README.md file
function writeToFile(fileName, data) {
}


function init() {

}

init();


