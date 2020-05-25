function generateMarkdown(data) {
  return `
# ${data.title}

## Description \n ${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Contact](#contact)

## Installation \n ${data.installation}
## Usage \n ${data.usage}
## License  \n ![badge](https://img.shields.io/badge/license-${data.license}-green)

## Contributors \n ${data.contributors}

## Tests \n ${data.tests}

## Contact \n ${data.contact}


`;
}

module.exports = generateMarkdown;
