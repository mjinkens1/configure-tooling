const { exec } = require('child_process');
const { earth } = require('cli-spinners');
const ora = require('ora');

const spinner = ora({
  isEnabled: true,
  prefixText: 'Installing peer dependencies',
  spinner: earth,
});

const installDeps = () => {
  return new Promise((resolve, reject) => {
    spinner.start();
    exec(
      'npx install-peerdeps -o -D @itemizecorp/eslint-plugin-react',
      error => {
        if (error) {
          reject(error);
        }
        spinner.succeed();
        resolve();
      }
    );
  });
};

module.exports = installDeps;
