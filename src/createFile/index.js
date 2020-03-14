const { open, writeFile } = require('fs');

const createFile = (filepath, config) => {
  return new Promise((resolve, reject) => {
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
