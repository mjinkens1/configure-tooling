const { execSync } = require('child_process');

const installDeps = (deps, rootPath) => {
  execSync(`cd ${rootPath}`);
  execSync(`npm install -D ${deps.join(' ')}`, { stdio: 'pipe' });
};

module.exports = installDeps;
