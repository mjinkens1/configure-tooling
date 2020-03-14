const { earth } = require('cli-spinners');
const ora = require('ora');

const createFile = require('../createFile');
const formatFile = require('../formatFile');

const createConfigFiles = (rootPath, configs) => {
  return new Promise(async (resolve, reject) => {
    for (const { name, filename, configPath } of configs) {
      const spinner = ora({
        isEnabled: true,
        prefixText: `Creating ${name} config file`,
        spinner: earth,
      });

      try {
        spinner.start();

        const filepath = `${rootPath}/${filename}`;
        const config = require(configPath);

        await createFile(filepath, config);
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
