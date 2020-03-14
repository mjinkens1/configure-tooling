const { exec, execSync } = require('child_process');
const { earth } = require('cli-spinners');
const ora = require('ora');

const spinner = ora({
  isEnabled: true,
  prefixText: 'Installing dependencies',
  spinner: earth,
});

const installDeps = (deps, rootPath) => {
  return new Promise((resolve, reject) => {
    spinner.start();
    execSync(`cd ${rootPath}`);
    exec(`npm install -D ${deps.join(' ')}`, error => {
      if (error) {
        reject(error);
      }
      spinner.succeed();
      resolve();
    });
  });
};

module.exports = installDeps;
