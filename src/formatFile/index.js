const { execSync } = require('child_process');

const formatFile = filename => {
  try {
    execSync(`prettier --write ${filename}`);
  } catch (error) {
    // no-op
  }
};

module.exports = formatFile;
