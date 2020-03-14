const { exec } = require('child_process');

const formatFile = filename => {
  return new Promise((resolve, reject) => {
    exec(`prettier --write ${filename}`, error => {
      if (error) {
        reject(error);
      }
      resolve();
    });
  });
};

module.exports = formatFile;
