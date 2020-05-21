function generateMarkdown(data) {
  return `
# ${data.title}
## Description \n ${data.description}
`;
}

module.exports = generateMarkdown;
