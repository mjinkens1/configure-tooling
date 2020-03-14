const { open, writeFile } = require('fs');

const createFile = (rootPath, name, filename, configPath) => {
  return new Promise((resolve, reject) => {
    const filepath = `${rootPath}/${filename}`;
    const config = require(configPath);
    const fileContent = `module.exports = ${JSON.stringify(config)}`;

    writeFile(filepath, fileContent, error => {
      if (error) {
        reject(error);
      }
      resolve();
    });
  });
};

module.exports = createFile;
