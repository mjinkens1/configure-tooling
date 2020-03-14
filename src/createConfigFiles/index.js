const { earth } = require('cli-spinners');
const ora = require('ora');

const createFile = require('../createFile');
const formatFile = require('../formatFile');

const createConfigFiles = (rootPath, configs) => {
  return new Promise(async (resolve, reject) => {
    for (const { name, filename, configPath } of configs) {
      try {
        const spinner = ora({
          isEnabled: true,
          prefixText: `Creating ${name} config file`,
          spinner: earth,
        });

        spinner.start();

        await createFile(rootPath, name, filename, configPath);
        await formatFile(filename);
        spinner.succeed();
      } catch (error) {
        spinner.fail(error);
        reject(error);
      }
    }
  });
};

module.exports = createConfigFiles;
