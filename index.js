#!/usr/bin/env node
const { dirname } = require('path');
const { platform } = require('yargs').argv;
const { earth } = require('cli-spinners');
const ora = require('ora');

const createConfigFiles = require('./src/createConfigFiles');
const createFile = require('./src/createFile');
const formatFile = require('./src/formatFile');
const getConfigPaths = require('./src/getConfigPaths');
const installDeps = require('./src/installDeps');

const commonDeps = [
  'husky',
  'mjinkens1/eslint-config',
  'mjinkens1/husky-config',
  'mjinkens1/prettier-config',
  'prettier',
  'pretty-quick',
];

const reactDeps = ['mjinkens1/eslint-plugin-react'];

const dependencies = [
  ...commonDeps,
  ...((platform || '').includes('react') ? reactDeps : []),
];

const configPaths = getConfigPaths(platform);

const configurations = [
  {
    name: 'eslint ✅',
    filename: '.eslintrc.js',
    configPath: configPaths.eslint,
  },
  {
    name: 'husky 🐕',
    filename: '.huskyrc.js',
    configPath: configPaths.husky,
  },
  {
    name: 'prettier 📖',
    filename: '.prettierrc.js',
    configPath: '@itemizecorp/prettier-config',
  },
];

const configureTooling = async () => {
  const rootPath = dirname(require.main.filename).split('/node_modules')[0];

  try {
    await installDeps(dependencies, rootPath);
    await createConfigFiles(rootPath, configurations);
  } catch (error) {
    console.error('Configuration failed');
  }
};

configureTooling();
