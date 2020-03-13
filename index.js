#!/usr/bin/env node
const { dirname } = require('path');
const { openSync, writeFileSync } = require('fs');
const { execSync } = require('child_process');
const { platform } = require('yargs').argv;

const rootPath = dirname(require.main.filename).split('/node_modules')[0];

execSync(`cd ${rootPath}`);
execSync(
  'npm install -D mjinkens1/prettier-config mjinkens1/eslint-plugin-itemize-react mjinkens1/husky-config'
);

const eslintConfigPath =
  platform === 'react-native'
    ? './configs/eslint-react-native'
    : './configs/eslint-web';

const configs = [
  {
    name: 'eslint',
    filename: '.eslintrc.js',
    config: require(eslintConfigPath),
  },
  {
    name: 'husky 🐕',
    filename: '.huskyrc.js',
    config: require('@mjinkens1/husky-config'),
  },
  {
    name: 'prettier',
    filename: '.prettierrc.js',
    config: require('@mjinkens1/prettier-config'),
  },
];

configs.forEach(({ name, filename, config }) => {
  console.log(`Creating ${name} config file`);

  const filepath = `${rootPath}/${filename}`;
  const fileContent = `module.exports = ${JSON.stringify(config)}`;

  try {
    openSync(filepath, 'w');
    writeFileSync(filepath, fileContent);
  } catch (error) {
    console.log('Oops! Something went wrong while creating the config file.');
  }

  try {
    console.log('Formatting config file...');
    execSync(`prettier --write ${filename}`);
  } catch (error) {
    console.log("Oops looks like prettier isn't installed for formatting!");
  }

  console.log('Done!');
});
