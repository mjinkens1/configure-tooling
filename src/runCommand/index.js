const { exec } = require('child_process');
const { earth } = require('cli-spinners');
const ora = require('ora');

const runCommand = (cmd, message) => {
  const spinner = ora({
    isEnabled: true,
    prefixText: message,
    spinner: earth,
  });

  return new Promise((resolve, reject) => {
    spinner.start();
    const command = exec(cmd, (error, stdout) => {
      if (error) {
        reject(error);
      }
      spinner.succeed();
      console.log(stdout.toString());
      resolve();
    });
  });
};

module.exports = runCommand;
