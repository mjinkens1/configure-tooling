const { openSync, writeFileSync } = require('fs');

const createFile = (rootPath, name, filename, configPath) => {
  const filepath = `${rootPath}/${filename}`;
  const config = require(configPath);
  const fileContent = `module.exports = ${JSON.stringify(config)}`;

  try {
    openSync(filepath, 'w');
    writeFileSync(filepath, fileContent);
  } catch (error) {
    console.log('Oops! Something went wrong while creating the config file.');
  }
};

module.exports = createFile;
