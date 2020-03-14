#!/usr/bin/env node
const { dirname } = require('path');
const { platform } = require('yargs').argv;

const createFile = require('./src/createFile');
const formatFile = require('./src/formatFile');
const getConfigPaths = require('./src/getConfigPaths');
const installDeps = require('./src/installDeps');

const commonDeps = [
  'husky',
  'prettier',
  'pretty-quick',
  'mjinkens1/prettier-config',
  'mjinkens1/husky-config',
];

const reactDeps = ['mjinkens1/eslint-plugin-itemize-react'];

const dependencies = [
  ...commonDeps,
  ...((platform || '').includes('react') ? reactDeps : []),
];

const configPaths = getConfigPaths(platform);

const configurations = [
  {
    name: 'eslint ✅',
    filename: '.eslintrc.js',
    config: require(configPaths.eslint),
  },
  {
    name: 'husky 🐕',
    filename: '.huskyrc.js',
    config: require(configPaths.husky),
  },
  {
    name: 'prettier 📖',
    filename: '.prettierrc.js',
    config: require('@itemizecorp/prettier-config'),
  },
];

const rootPath = dirname(require.main.filename).split('/node_modules')[0];

const createConfigFiles = configs => {
  configs.forEach(({ name, filename, config }) => {
    createFile(rootPath, name, filename, config);
    formatFile(filename);
  });
};

installDeps(dependencies, rootPath, () => createConfigFiles(configurations));
