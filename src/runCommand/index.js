const { exec, execSync } = require('child_process');
const { earth } = require('cli-spinners');
const ora = require('ora');

const runCommand = (cmd, message, rootPath) => {
  const spinner = ora({
    isEnabled: true,
    prefixText: message,
    spinner: earth,
  });

  return new Promise((resolve, reject) => {
    spinner.start();
    execSync(`cd ${rootPath}`);
    const command = exec(cmd, error => {
      if (error) {
        reject(error);
      }
      spinner.succeed();
      resolve();
    });

    command.stdout.on('data', data => {
      console.log(data);
    });
  });
};

module.exports = runCommand;
