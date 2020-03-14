const { execSync } = require("child_process");

const formatFile = filename => {
  try {
    console.log("Formatting config file...");
    execSync(`prettier --write ${filename}`);
  } catch (error) {
    console.log("Oops looks like prettier isn't installed for formatting!");
  }

  console.log("Done!");
};

module.exports = formatFile;
