const { exec, execSync } = require('child_process');

const installDeps = (deps, rootPath, callback) => {
  execSync(`cd ${rootPath}`);
  exec(`npm install -D ${deps.join(' ')}`, callback);
};

module.exports = installDeps;
