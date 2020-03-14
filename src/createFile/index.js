const { openSync, writeFileSync } = require('fs');

const createFile = (rootPath, name, filename, config) => {
  console.log(`Creating ${name} config file`);

  const filepath = `${rootPath}/${filename}`;
  const fileContent = `module.exports = ${JSON.stringify(config)}`;

  try {
    openSync(filepath, 'w');
    writeFileSync(filepath, fileContent);
  } catch (error) {
    console.log('Oops! Something went wrong while creating the config file.');
  }
};

module.exports = createFile;
